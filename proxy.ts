import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. /favicon.ico)
         */
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};

export default async function proxy(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get("host");

    let currentHost;

    if (process.env.NODE_ENV === "production") {
        // Production Domain Logic

        // 1. ui.eliteweb.top (Main Domain)
        if (hostname === "ui.eliteweb.top") {
            currentHost = null; // No rewrite, serve app/page.tsx
        }
        // 2. *.ui.eliteweb.top (Tenant Subdomains)
        else if (hostname?.endsWith(".ui.eliteweb.top")) {
            currentHost = hostname.replace(".ui.eliteweb.top", "");
        }
        // 3. *.readysetui.top (Legacy/Alternative Tenant Subdomains)
        else if (hostname?.endsWith(".readysetui.top")) {
            currentHost = hostname.replace(".readysetui.top", "");
        }
        // 4. readysetui.top (Legacy Root)
        else if (hostname === "readysetui.top") {
            currentHost = null;
        }
        else {
            // Fallback
            currentHost = null;
        }
    } else {
        // Development handling
        if (hostname === "localhost:3000") {
            currentHost = null;
        } else if (hostname?.endsWith(".localhost:3000")) {
            currentHost = hostname.replace(".localhost:3000", "");
        } else {
            currentHost = null;
        }
    }

    // If we have a subdomain, rewrite the URL to our dynamic route
    if (currentHost) {
        // Rewrite to /site/[site]/[path]
        // e.g. puppy-tech.ui.eliteweb.top/about -> /site/puppy-tech/about
        url.pathname = `/site/${currentHost}${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // If no subdomain, continue to the main site (app/page.tsx)
    return NextResponse.next();
}
