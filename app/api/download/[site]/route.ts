import { NextRequest, NextResponse } from "next/server";
import JSZip from "jszip";
import fs from "fs/promises";
import path from "path";
import { siteRegistry } from "@/lib/registry";
import { sites } from "@/lib/site-data";

// Force Node.js runtime
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Helper to read a file safely
async function readFileSafe(filePath: string): Promise<string | null> {
    try {
        return await fs.readFile(filePath, "utf-8");
    } catch {
        return null;
    }
}

// Helper to check if file exists
async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
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

// Extract all imports from a file
function extractImports(content: string): string[] {
    const imports: string[] = [];
    const importRegex = /from\s+["']([^"']+)["']/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        imports.push(match[1]);
    }
    return imports;
}

// Detect which npm packages are used
function detectUsedPackages(allImports: string[], availablePackages: Record<string, string>): Record<string, string> {
    const usedPackages: Record<string, string> = {};

    // Always include these core packages
    const corePackages = ["react", "react-dom", "next"];
    for (const pkg of corePackages) {
        if (availablePackages[pkg]) {
            usedPackages[pkg] = availablePackages[pkg];
        }
    }

    for (const importPath of allImports) {
        // Skip relative imports and aliases
        if (importPath.startsWith(".") || importPath.startsWith("@/")) continue;

        // Get the package name (e.g., "@radix-ui/react-dialog" -> "@radix-ui/react-dialog")
        let packageName = importPath;
        if (importPath.startsWith("@")) {
            // Scoped package
            const parts = importPath.split("/");
            packageName = parts.slice(0, 2).join("/");
        } else {
            // Regular package
            packageName = importPath.split("/")[0];
        }

        if (availablePackages[packageName]) {
            usedPackages[packageName] = availablePackages[packageName];
        }
    }

    return usedPackages;
}

// Transform code: fix imports and replace SiteLink
function transformCode(content: string, siteId: string): string {
    let code = content;

    // 1. Replace @/components/[siteId]/... with @/components/...
    const siteImportRegex = new RegExp(`@/components/${siteId}/`, "g");
    code = code.replace(siteImportRegex, "@/components/");

    // 2. Replace SiteLink with Link from next/link
    code = code.replace(
        /import\s*{\s*SiteLink\s*}\s*from\s*["']@\/components\/site-link["'];?/g,
        'import Link from "next/link";'
    );
    code = code.replace(/<SiteLink/g, "<Link");
    code = code.replace(/<\/SiteLink>/g, "</Link>");

    return code;
}

// Convert site name to title case
function toTitleCase(str: string): string {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ site: string }> }
) {
    const { site } = await params;

    if (!siteRegistry[site]) {
        return NextResponse.json({ error: "Site not found" }, { status: 404 });
    }

    // Get site metadata
    const siteMetadata = sites.find(s => s.id === site);
    const siteName = siteMetadata?.name || toTitleCase(site);
    const siteDescription = siteMetadata?.description || `${siteName} - Built with Next.js`;

    const zip = new JSZip();
    const projectRoot = process.cwd();
    const allImports: string[] = [];

    // Read original package.json for dependencies
    const packageJsonContent = await readFileSafe(path.join(projectRoot, "package.json"));
    const originalPkg = packageJsonContent ? JSON.parse(packageJsonContent) : { dependencies: {}, devDependencies: {} };

    // 1. Read site components first to analyze imports
    const siteComponentsPath = path.join(projectRoot, "components", site);
    const siteFiles = await readDirRecursive(siteComponentsPath);

    // Collect all imports from site files
    for (const file of siteFiles) {
        allImports.push(...extractImports(file.content));
    }

    // 2. Read UI components
    const uiPath = path.join(projectRoot, "components", "ui");
    const uiFiles = await readDirRecursive(uiPath);
    for (const file of uiFiles) {
        allImports.push(...extractImports(file.content));
    }

    // 3. Read hooks if used
    const hooksPath = path.join(projectRoot, "hooks");
    let hookFiles: { path: string; content: string }[] = [];
    if (await fileExists(hooksPath)) {
        hookFiles = await readDirRecursive(hooksPath);
        for (const file of hookFiles) {
            allImports.push(...extractImports(file.content));
        }
    }

    // Detect used packages
    const usedDependencies = detectUsedPackages(allImports, originalPkg.dependencies || {});
    const usedDevDependencies = detectUsedPackages(allImports, originalPkg.devDependencies || {});

    // Always include these essential dependencies (they're used by Tailwind/UI)
    const requiredDeps = [
        "tailwind-merge",
        "clsx",
        "class-variance-authority",
        "lucide-react"
    ];
    for (const dep of requiredDeps) {
        if (originalPkg.dependencies?.[dep]) {
            usedDependencies[dep] = originalPkg.dependencies[dep];
        }
    }

    // Always include these dev dependencies for Tailwind/TypeScript/Next.js
    const requiredDevDeps = [
        "typescript",
        "@types/node",
        "@types/react",
        "@types/react-dom",
        "tailwindcss",
        "@tailwindcss/postcss",
        "postcss",
        "eslint",
        "eslint-config-next"
    ];
    for (const dep of requiredDevDeps) {
        if (originalPkg.devDependencies?.[dep]) {
            usedDevDependencies[dep] = originalPkg.devDependencies[dep];
        }
    }

    // 4. Create package.json
    const pkg = {
        name: site,
        version: "1.0.0",
        private: true,
        description: siteDescription,
        scripts: {
            dev: "next dev",
            build: "next build",
            start: "next start",
            lint: "next lint"
        },
        dependencies: usedDependencies,
        devDependencies: usedDevDependencies
    };
    zip.file("package.json", JSON.stringify(pkg, null, 2));

    // 5. Config files
    const configFiles = [
        { name: "tsconfig.json", required: true },
        { name: "next.config.ts", required: true },
        { name: "postcss.config.mjs", required: true },
        { name: "eslint.config.mjs", required: false },
        { name: "tailwind.config.ts", required: true },
        { name: ".gitignore", required: true }
    ];

    for (const { name } of configFiles) {
        const content = await readFileSafe(path.join(projectRoot, name));
        if (content) {
            zip.file(name, content);
        }
    }

    // 6. Create next-env.d.ts for TypeScript
    const nextEnvDts = `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.
`;
    zip.file("next-env.d.ts", nextEnvDts);

    // 7. Create app/layout.tsx
    const siteLayoutFile = siteFiles.find(f => f.path === "layout.tsx");

    if (siteLayoutFile) {
        // Transform the site's layout and use it directly as app/layout.tsx
        let layoutContent = transformCode(siteLayoutFile.content, site);

        // Check if the layout already has html/body tags (it's a root layout)
        const hasHtmlTag = layoutContent.includes("<html");

        if (hasHtmlTag) {
            // Already a proper root layout, just add metadata import if needed
            if (!layoutContent.includes("import type { Metadata }")) {
                layoutContent = `import type { Metadata } from "next";\n${layoutContent}`;
            }
            if (!layoutContent.includes("export const metadata")) {
                // Add metadata before the export default
                layoutContent = layoutContent.replace(
                    /export default function/,
                    `export const metadata: Metadata = {
  title: "${siteName}",
  description: "${siteDescription}",
};

export default function`
                );
            }
            // Add globals.css import if not present
            if (!layoutContent.includes('./globals.css')) {
                layoutContent = layoutContent.replace(
                    /import type { Metadata }/,
                    `import type { Metadata } from "next";\nimport "./globals.css"`
                );
            }
            zip.file("app/layout.tsx", layoutContent);
        } else {
            // It's a wrapper component (like chefs-table layout), wrap it properly
            // Extract font imports and other imports from the layout
            const fontImportMatch = layoutContent.match(/import\s*{[^}]+}\s*from\s*["']next\/font\/google["'];?/g);
            const fontImports = fontImportMatch ? fontImportMatch.join("\n") : "";

            // Create a proper root layout that uses this as the main wrapper
            const rootLayout = `import type { Metadata } from "next";
import "./globals.css";
${fontImports}

export const metadata: Metadata = {
  title: "${siteName}",
  description: "${siteDescription}",
};

// Re-export the site layout as the root layout wrapper
${layoutContent}
`;
            zip.file("app/layout.tsx", rootLayout);
        }
    } else {
        // No site layout, create a generic one
        const rootLayout = `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "${siteName}",
  description: "${siteDescription}",
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

    // 8. Copy globals.css
    const globalsCss = await readFileSafe(path.join(projectRoot, "app/globals.css"));
    if (globalsCss) {
        zip.file("app/globals.css", globalsCss);
    }

    // 9. Create app/page.tsx from site's page.tsx
    const sitePageFile = siteFiles.find(f => f.path === "page.tsx");
    if (sitePageFile) {
        const transformedPage = transformCode(sitePageFile.content, site);
        zip.file("app/page.tsx", transformedPage);
    }

    // 10. Create route folders for all other pages
    const siteConfig = siteRegistry[site];
    const pagesList: string[] = ["Home (/)"];

    for (const [pageName] of Object.entries(siteConfig)) {
        if (pageName === "home") continue;

        const pageFile = siteFiles.find(f =>
            f.path.toLowerCase() === `${pageName}.tsx` ||
            f.path.toLowerCase() === `${pageName.replace("-", "")}.tsx`
        );

        if (pageFile) {
            const transformedContent = transformCode(pageFile.content, site);
            zip.file(`app/${pageName}/page.tsx`, transformedContent);
            pagesList.push(`${toTitleCase(pageName)} (/${pageName})`);
        }
    }

    // 11. Copy all site components (except page.tsx and layout.tsx)
    for (const file of siteFiles) {
        if (file.path === "page.tsx" || file.path === "layout.tsx") continue;

        // Skip files that are pages (already handled in route folders)
        const baseName = file.path.replace(".tsx", "").toLowerCase();
        const isPage = Object.keys(siteConfig).some(p =>
            p.toLowerCase() === baseName ||
            p.replace("-", "").toLowerCase() === baseName
        );
        if (isPage && baseName !== "home") continue;

        const transformedContent = transformCode(file.content, site);
        zip.file(path.join("components", file.path), transformedContent);
    }

    // 12. Copy components/ui directory
    for (const file of uiFiles) {
        zip.file(path.join("components/ui", file.path), file.content);
    }

    // 13. Copy hooks
    for (const file of hookFiles) {
        zip.file(path.join("hooks", file.path), file.content);
    }

    // 14. Copy lib/utils.ts
    const utilsContent = await readFileSafe(path.join(projectRoot, "lib", "utils.ts"));
    if (utilsContent) {
        zip.file("lib/utils.ts", utilsContent);
    }

    // 15. Create comprehensive README.md
    const readme = `# ${siteName}

${siteDescription}

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

\`\`\`bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 📄 Pages

${pagesList.map(p => `- ${p}`).join("\n")}

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Language**: TypeScript

## 📁 Project Structure

\`\`\`
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── [route]/         # Other pages
├── components/          # React components
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── public/              # Static assets
\`\`\`

## 📝 License

MIT License - feel free to use this template for your projects!

---

Generated with ❤️ by [Ready Set UI](https://ui.eliteweb.top)
`;
    zip.file("README.md", readme);

    // 16. Create public folder with placeholder
    zip.file("public/.gitkeep", "");

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
