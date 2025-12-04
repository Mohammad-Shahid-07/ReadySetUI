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

    // Define the base domain for production and development
    // You might want to move these to environment variables
    const productionDomain = "readysetui.vercel.app";
    const devDomain = "localhost:3000";

    let currentHost;

    if (process.env.NODE_ENV === "production") {
        if (hostname === productionDomain) {
            currentHost = null; // Main domain
        } else if (hostname?.endsWith(`.${productionDomain}`)) {
            currentHost = hostname.replace(`.${productionDomain}`, ""); // Subdomain
        } else {
            currentHost = null; // Fallback
        }
    } else {
        // Development handling
        // To test subdomains locally, you'd need to edit /etc/hosts to map site.localhost to 127.0.0.1
        if (hostname === devDomain) {
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
