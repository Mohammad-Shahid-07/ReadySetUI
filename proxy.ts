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
        if (hostname === "ui.eliteweb.top") {
            // Main Marketplace Domain -> No rewrite needed
            currentHost = null;
        } else if (hostname?.endsWith(".readysetui.top")) {
            // Tenant Domain -> Rewrite to /site/[subdomain]
            // e.g. puppy-tech.readysetui.top -> puppy-tech
            currentHost = hostname.replace(".readysetui.top", "");
        } else if (hostname === "readysetui.top") {
            // Root of tenant domain (optional, treat as main site or redirect)
            currentHost = null;
        } else {
            // Fallback for other domains (e.g. vercel.app)
            // You might want to handle this differently
            currentHost = null;
        }
    } else {
        // Development handling
        // To test subdomains locally, you'd need to edit /etc/hosts to map site.localhost to 127.0.0.1
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
        // e.g. site-a.com/about -> /site/site-a/about
        url.pathname = `/site/${currentHost}${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // If no subdomain, continue to the main site (app/page.tsx)
    return NextResponse.next();
}
