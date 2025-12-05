import { NextRequest, NextResponse } from "next/server";
import JSZip from "jszip";
import fs from "fs/promises";
import path from "path";
import { siteRegistry } from "@/lib/registry";

// Helper to read a file safely
async function readFileSafe(filePath: string): Promise<string | null> {
    try {
        return await fs.readFile(filePath, "utf-8");
    } catch {
        return null;
    }
}

// Helper to recursively read a directory
async function readDirRecursive(dir: string, baseDir: string = dir): Promise<{ path: string; content: string }[]> {
    const results: { path: string; content: string }[] = [];
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results.push(...(await readDirRecursive(fullPath, baseDir)));
            } else {
                const content = await fs.readFile(fullPath, "utf-8");
                const relativePath = path.relative(baseDir, fullPath);
                results.push({ path: relativePath, content });
            }
        }
    } catch (e) {
        console.error(`Error reading directory ${dir}:`, e);
    }
    return results;
}

// Helper to transform code: fix imports and replace SiteLink
function transformCode(content: string, siteId: string): string {
    let code = content;

    // 1. Replace @/components/[siteId]/... with @/components/...
    const siteImportRegex = new RegExp(`@/components/${siteId}/`, "g");
    code = code.replace(siteImportRegex, "@/components/");

    // 2. Replace SiteLink with Link from next/link
    // Handle import statement
    code = code.replace(
        /import\s*{\s*SiteLink\s*}\s*from\s*["']@\/components\/site-link["'];?/g,
        'import Link from "next/link";'
    );
    // Handle JSX usage
    code = code.replace(/<SiteLink/g, "<Link");
    code = code.replace(/<\/SiteLink>/g, "</Link>");

    return code;
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ site: string }> }
) {
    const { site } = await params;

    if (!siteRegistry[site]) {
        return NextResponse.json({ error: "Site not found" }, { status: 404 });
    }

    const zip = new JSZip();
    const projectRoot = process.cwd();

    // 1. Package.json - Create a clean one for the site
    const packageJsonContent = await readFileSafe(path.join(projectRoot, "package.json"));
    if (packageJsonContent) {
        const pkg = JSON.parse(packageJsonContent);
        pkg.name = site;
        pkg.description = `${site} - Built with Next.js`;
        pkg.scripts = {
            dev: "next dev",
            build: "next build",
            start: "next start",
            lint: "eslint"
        };
        // Remove jszip and other dev-only deps
        delete pkg.dependencies["jszip"];
        delete pkg.dependencies["@types/jszip"];
        zip.file("package.json", JSON.stringify(pkg, null, 2));
    }

    // 2. Config files
    const configFiles = [
        "tsconfig.json",
        "next.config.ts",
        "postcss.config.mjs",
        "eslint.config.mjs",
        ".gitignore"
    ];

    for (const file of configFiles) {
        const content = await readFileSafe(path.join(projectRoot, file));
        if (content) {
            zip.file(file, content);
        }
    }

    // 3. Read site components
    const siteComponentsPath = path.join(projectRoot, "components", site);
    const siteFiles = await readDirRecursive(siteComponentsPath);

    // 4. Create app/layout.tsx
    // Check if site has its own layout.tsx
    const siteLayoutFile = siteFiles.find(f => f.path === "layout.tsx");

    if (siteLayoutFile) {
        // Use site's layout but wrap it in proper html/body structure
        // The site layout is usually a wrapper component, not the root layout
        // So we create a proper root layout that imports and uses the site layout
        const transformedLayout = transformCode(siteLayoutFile.content, site);

        const rootLayout = `import type { Metadata } from "next";
import "./globals.css";
import SiteLayout from "@/components/layout";

export const metadata: Metadata = {
  title: "${site}",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
`;
        zip.file("app/layout.tsx", rootLayout);

        // Save the site's layout as components/layout.tsx
        zip.file("components/layout.tsx", transformedLayout);
    } else {
        // No site layout, create a generic one
        const rootLayout = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "${site}",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
`;
        zip.file("app/layout.tsx", rootLayout);
    }

    // 5. Copy globals.css
    const globalsCss = await readFileSafe(path.join(projectRoot, "app/globals.css"));
    if (globalsCss) {
        zip.file("app/globals.css", globalsCss);
    }

    // 6. Create app/page.tsx from site's page.tsx (home page)
    const sitePageFile = siteFiles.find(f => f.path === "page.tsx");
    if (sitePageFile) {
        const transformedPage = transformCode(sitePageFile.content, site);
        zip.file("app/page.tsx", transformedPage);
    }

    // 7. Create route folders for all other pages
    // Get all registered pages for this site
    const siteConfig = siteRegistry[site];
    for (const [pageName] of Object.entries(siteConfig)) {
        if (pageName === "home") continue; // Already handled as app/page.tsx

        // Find the corresponding file
        const pageFile = siteFiles.find(f =>
            f.path.toLowerCase() === `${pageName}.tsx` ||
            f.path.toLowerCase() === `${pageName.replace("-", "")}.tsx`
        );

        if (pageFile) {
            const transformedContent = transformCode(pageFile.content, site);
            // Create the route folder: app/[pageName]/page.tsx
            zip.file(`app/${pageName}/page.tsx`, transformedContent);
        }
    }

    // 8. Copy all site components (except page.tsx and layout.tsx which we handled specially)
    for (const file of siteFiles) {
        if (file.path === "page.tsx" || file.path === "layout.tsx") continue;

        const transformedContent = transformCode(file.content, site);
        // Put in components folder (flattened from components/[site]/...)
        zip.file(path.join("components", file.path), transformedContent);
    }

    // 9. Copy components/ui directory
    const uiPath = path.join(projectRoot, "components", "ui");
    const uiFiles = await readDirRecursive(uiPath);
    for (const file of uiFiles) {
        zip.file(path.join("components/ui", file.path), file.content);
    }

    // 10. Copy lib/utils.ts
    const utilsContent = await readFileSafe(path.join(projectRoot, "lib", "utils.ts"));
    if (utilsContent) {
        zip.file("lib/utils.ts", utilsContent);
    }

    // 11. Create README.md
    const readme = `# ${site}

This project was generated from Ready Set UI.

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.
`;
    zip.file("README.md", readme);

    // 12. Create public folder
    zip.folder("public");

    // Generate ZIP
    const zipContent = await zip.generateAsync({ type: "blob" });
    const arrayBuffer = await zipContent.arrayBuffer();

    return new NextResponse(arrayBuffer, {
        headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="${site}-source.zip"`,
        },
    });
}
