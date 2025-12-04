import React from 'react';

// Define the type for a site's component registry
// It maps a route (e.g., 'home', 'about', 'pricing') to a dynamic import function
export type SiteComponentRegistry = {
    [key: string]: () => Promise<{ default: React.ComponentType<any> }>;
};

// The main registry object mapping site IDs to their component registry
export const siteRegistry: Record<string, SiteComponentRegistry> = {
    "puppy-tech": {
        home: () => import("@/components/puppy-tech/LandingPage"),
        menu: () => import("@/components/puppy-tech/Menu"),
        signup: () => import("@/components/puppy-tech/Signup"),
    },
};

export async function getSiteComponent(site: string, page: string) {
    const siteConfig = siteRegistry[site];
    if (!siteConfig) return null;

    const loader = siteConfig[page];
    if (!loader) return null;

    try {
        const module = await loader();
        return module.default;
    } catch (error) {
        console.error(`Failed to load component for site: ${site}, page: ${page}`, error);
        return null;
    }
}
