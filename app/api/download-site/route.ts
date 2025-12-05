
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import JSZip from "jszip";

// Force Node.js runtime for file system access
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROJECT_ROOT = process.cwd();

// Helper to read file content
async function readFile(filePath: string): Promise<string | null> {
    try {
        return await fs.readFile(filePath, "utf-8");
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return null;
    }
}

// Helper to parse registry.ts and get component paths for a site
async function getSiteConfig(siteId: string): Promise<Record<string, string> | null> {
    const registryPath = path.join(PROJECT_ROOT, "lib", "registry.ts");
    const content = await readFile(registryPath);
    if (!content) return null;

    // Regex to find the site configuration block
    // Matches: "site-id": { ... }
    const siteRegex = new RegExp(`"${siteId}":\\s*{([^}]+)}`, "s");
    const match = content.match(siteRegex);

    if (!match) return null;

    const configBlock = match[1];
    const config: Record<string, string> = {};

    // Regex to parse individual entries
    // Matches: key: dynamic(() => import("path")) or import('path')
    // Handles both single and double quotes
    const entryRegex = /([a-zA-Z0-9_-]+):\s*dynamic\(\(\)\s*=>\s*import\((["'])([^"']+)\2\)\)/g;

    let entryMatch;
    while ((entryMatch = entryRegex.exec(configBlock)) !== null) {
        const key = entryMatch[1];
        // entryMatch[2] is the quote type
        const importPath = entryMatch[3];
        config[key] = importPath;
    }

    return config;
}

// Helper to transform component code
function transformComponentCode(code: string, siteId: string, sourcePath: string): string {
    let newCode = code;

    // 0. Resolve relative imports to absolute
    // Matches: import ... from "./..." or "../..."
    // Handles both single and double quotes
    newCode = newCode.replace(/from\s+(["'])(\.[^"']+)\1/g, (match, quote, importPath) => {
        const sourceDir = path.dirname(sourcePath);
        // Resolve path relative to project root
        let resolvedPath = path.join(sourceDir, importPath);

        // Normalize path separators to /
        resolvedPath = resolvedPath.split(path.sep).join("/");

        return `from ${quote}@/${resolvedPath}${quote}`;
    });

    // 1. Replace SiteLink with Link
    if (newCode.includes("SiteLink")) {
        newCode = newCode.replace(
            /import\s+{\s*SiteLink\s*}\s+from\s+["']@\/components\/site-link["']/g,
            'import Link from "next/link"'
        );
        newCode = newCode.replace(/<SiteLink/g, "<Link");
        newCode = newCode.replace(/<\/SiteLink>/g, "</Link>");
    }

    // 2. Transform imports
    // @/components/[siteId]/... -> @/components/...
    const siteComponentRegex = new RegExp(`@/components/${siteId}/`, "g");
    newCode = newCode.replace(siteComponentRegex, "@/components/");

    return newCode;
}

// Helper to find dependencies in a file
function findDependencies(code: string): string[] {
    const dependencies: string[] = [];

    // Match imports starting with @/components/
    const importRegex = /from\s+["']@\/components\/([^"']+)["']/g;
    let match;

    while ((match = importRegex.exec(code)) !== null) {
        const importPath = match[1]; // e.g., "ui/button" or "site-id/foo"
        dependencies.push(importPath);
    }

    return dependencies;
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const siteId = searchParams.get("site");

    if (!siteId) {
        return NextResponse.json({ error: "Site ID is required" }, { status: 400 });
    }

    const siteConfig = await getSiteConfig(siteId);
    if (!siteConfig) {
        return NextResponse.json({ error: "Site not found" }, { status: 404 });
    }

    const zip = new JSZip();
    const processedFiles = new Set<string>();
    const componentsToProcess: string[] = [];

    // 1. Setup basic project structure

    // Read current package.json to copy dependencies
    const currentPackageJsonPath = path.join(PROJECT_ROOT, "package.json");
    const currentPackageJsonStr = await readFile(currentPackageJsonPath);
    let currentDependencies = {};
    let currentDevDependencies = {};

    if (currentPackageJsonStr) {
        try {
            const parsed = JSON.parse(currentPackageJsonStr);
            currentDependencies = parsed.dependencies || {};
            currentDevDependencies = parsed.devDependencies || {};
        } catch (e) {
            console.error("Failed to parse package.json", e);
        }
    }

    // package.json
    const packageJson = {
        name: siteId,
        version: "0.1.0",
        private: true,
        scripts: {
            dev: "next dev",
            build: "next build",
            start: "next start",
            lint: "eslint"
        },
        dependencies: {
            ...currentDependencies,
            // Ensure next/react are present if not in current (unlikely)
            "next": "14.2.16",
            "react": "^18",
            "react-dom": "^18",
        },
        devDependencies: {
            ...currentDevDependencies,
            "typescript": "^5",
            "@types/node": "^20",
            "@types/react": "^18",
            "@types/react-dom": "^18",
            "postcss": "^8",
            "tailwindcss": "^3.4.1",
            "eslint": "^8",
            "eslint-config-next": "14.2.16"
        }
    };
    zip.file("package.json", JSON.stringify(packageJson, null, 2));

    // tsconfig.json
    const tsConfig = {
        "compilerOptions": {
            "lib": ["dom", "dom.iterable", "esnext"],
            "allowJs": true,
            "skipLibCheck": true,
            "strict": true,
            "noEmit": true,
            "esModuleInterop": true,
            "module": "esnext",
            "moduleResolution": "bundler",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "jsx": "preserve",
            "incremental": true,
            "plugins": [
                {
                    "name": "next"
                }
            ],
            "paths": {
                "@/*": ["./*"]
            }
        },
        "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
        "exclude": ["node_modules"]
    };
    zip.file("tsconfig.json", JSON.stringify(tsConfig, null, 2));

    // tailwind.config.ts
    const tailwindConfigPath = path.join(PROJECT_ROOT, "tailwind.config.ts");
    let tailwindConfig = await readFile(tailwindConfigPath);
    if (tailwindConfig) {
        zip.file("tailwind.config.ts", tailwindConfig);
    }

    // postcss.config.mjs
    const postcssPath = path.join(PROJECT_ROOT, "postcss.config.mjs");
    const postcssConfig = await readFile(postcssPath);
    if (postcssConfig) zip.file("postcss.config.mjs", postcssConfig);

    // app/globals.css
    const globalsCssPath = path.join(PROJECT_ROOT, "app", "globals.css");
    const globalsCss = await readFile(globalsCssPath);
    if (globalsCss) zip.file("app/globals.css", globalsCss);

    // lib/utils.ts
    const utilsPath = path.join(PROJECT_ROOT, "lib", "utils.ts");
    const utilsContent = await readFile(utilsPath);
    if (utilsContent) {
        zip.file("lib/utils.ts", utilsContent);
    }

    // README.md
    const readmeContent = `
# ${siteId}

This project was generated by ReadySetUI.

## Getting Started

First, install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
\`\`\`

Then, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
`;
    zip.file("README.md", readmeContent.trim());

    // app/layout.tsx
    const layoutContent = `
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "${siteId}",
  description: "Generated by ReadySetUI",
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
    zip.file("app/layout.tsx", layoutContent.trim());


    // 2. Process Pages
    for (const [pageName, importPath] of Object.entries(siteConfig)) {
        const relativePath = importPath.replace("@/", "");
        const absolutePath = path.join(PROJECT_ROOT, relativePath + ".tsx");

        let fileContent = await readFile(absolutePath);
        if (!fileContent) {
            fileContent = await readFile(path.join(PROJECT_ROOT, relativePath + ".ts"));
        }

        if (fileContent) {
            const transformedContent = transformComponentCode(fileContent, siteId, relativePath + ".tsx");

            let outputPagePath = "";
            if (pageName === "home") {
                outputPagePath = "app/page.tsx";
            } else {
                outputPagePath = `app/${pageName}/page.tsx`;
            }

            zip.file(outputPagePath, transformedContent);

            const deps = findDependencies(fileContent);
            componentsToProcess.push(...deps);
        }
    }

    // 3. Process Dependencies (Components)
    const processedComponents = new Set<string>();

    while (componentsToProcess.length > 0) {
        const depPath = componentsToProcess.pop()!;
        if (processedComponents.has(depPath)) continue;
        processedComponents.add(depPath);

        let sourcePath = "";
        let targetPath = "";

        if (depPath.startsWith("ui/")) {
            sourcePath = path.join(PROJECT_ROOT, "components", depPath);
            targetPath = `components/${depPath}`;
        } else if (depPath.startsWith(`${siteId}/`)) {
            sourcePath = path.join(PROJECT_ROOT, "components", depPath);
            const fileName = depPath.split("/").pop();
            targetPath = `components/${fileName}`;
        } else {
            sourcePath = path.join(PROJECT_ROOT, "components", depPath);
            targetPath = `components/${depPath}`;
        }

        let content = await readFile(sourcePath + ".tsx");
        let extension = ".tsx";
        if (!content) {
            content = await readFile(sourcePath + ".ts");
            extension = ".ts";
        }

        if (content) {
            const relativeSourcePath = path.relative(PROJECT_ROOT, sourcePath + extension);
            const transformed = transformComponentCode(content, siteId, relativeSourcePath);
            zip.file(targetPath + extension, transformed);

            const newDeps = findDependencies(content);
            componentsToProcess.push(...newDeps);
        }
    }

    // Generate zip
    const blob = await zip.generateAsync({ type: "blob" });
    const buffer = Buffer.from(await blob.arrayBuffer());

    return new NextResponse(buffer, {
        headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="${siteId}-source.zip"`,
        },
    });
}
