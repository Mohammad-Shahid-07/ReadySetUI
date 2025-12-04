import { ComponentType } from "react";
import dynamic from "next/dynamic";

// Define the type for the site registry
// Each site can have multiple pages (home, about, etc.)
// The 'home' key is required, others are optional
export type SiteComponentRegistry = {
    home: ComponentType<any>;
    [key: string]: ComponentType<any>;
};

// Centralized registry of all sites
// This maps a "site ID" (subdomain) to its components
export const siteRegistry: Record<string, SiteComponentRegistry> = {
    "puppy-tech": {
        home: dynamic(() => import("@/components/puppy-tech/LandingPage")),
        menu: dynamic(() => import("@/components/puppy-tech/Menu")),
        signup: dynamic(() => import("@/components/puppy-tech/Signup")),
    },
    "devflow": {
        home: dynamic(() => import("@/components/devflow/LandingPage")),
    },
};

// Helper function to get a component for a specific site and page
export function getSiteComponent(site: string, page: string = "home"): ComponentType<any> | null {
    const siteConfig = siteRegistry[site];
    if (!siteConfig) return null;

    return siteConfig[page] || null;
}
