"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface SiteLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    href: string;
}

export function SiteLink({ href, ...props }: SiteLinkProps) {
    const pathname = usePathname();

    const finalHref = useMemo(() => {
        // If href is external or anchor, return as is
        if (href.startsWith("http") || href.startsWith("#")) {
            return href;
        }

        // Check if we are in a path-based route (/site/[site-id])
        const match = pathname?.match(/^\/site\/([^\/]+)/);

        if (match) {
            const siteId = match[1];
            // Ensure we don't double-prefix if href already starts with /site/
            if (href.startsWith("/site/")) {
                return href;
            }
            // Clean up leading slash to avoid double slashes
            const cleanHref = href.startsWith("/") ? href : `/${href}`;
            return `/site/${siteId}${cleanHref}`;
        }

        return href;
    }, [href, pathname]);

    return (
        <Link href={finalHref} {...props}>
            {props.children}
        </Link>
    );
}
