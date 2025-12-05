import { ComponentType } from "react";
import dynamic from "next/dynamic";

// Define the type for the site registry
// Each site can have multiple pages (home, about, etc.)
// The 'home' key is required, others are optional
export type SiteComponentRegistry = {
    home: ComponentType<unknown>;
    [key: string]: ComponentType<unknown>;
};

// Centralized registry of all sites
// This maps a "site ID" (subdomain) to its components
export const siteRegistry: Record<string, SiteComponentRegistry> = {
    "puppy-tech": {
        home: dynamic(() => import("@/components/puppy-tech/page")),
        menu: dynamic(() => import("@/components/puppy-tech/Menu")),
        signup: dynamic(() => import("@/components/puppy-tech/Signup")),
        about: dynamic(() => import("@/components/puppy-tech/about")),
        services: dynamic(() => import("@/components/puppy-tech/services")),
        contact: dynamic(() => import("@/components/puppy-tech/contact")),
        faq: dynamic(() => import("@/components/puppy-tech/faq")),
        blog: dynamic(() => import("@/components/puppy-tech/blog")),
        "care-guide": dynamic(() => import("@/components/puppy-tech/care-guide")),
        gallery: dynamic(() => import("@/components/puppy-tech/gallery")),
    },
    "devflow": {
        home: dynamic(() => import("@/components/devflow/page")),
        about: dynamic(() => import("@/components/devflow/about")),
        features: dynamic(() => import("@/components/devflow/features")),
        pricing: dynamic(() => import("@/components/devflow/pricing")),
        contact: dynamic(() => import("@/components/devflow/contact")),
        blog: dynamic(() => import("@/components/devflow/blog")),
        "case-studies": dynamic(() => import("@/components/devflow/case-studies")),
        docs: dynamic(() => import("@/components/devflow/docs")),
    },
    "uber-clone": {
        home: dynamic(() => import("@/components/uber-clone/page")),
        signup: dynamic(() => import("@/components/uber-clone/Signup")),
        login: dynamic(() => import("@/components/uber-clone/Login")),
    },
    "zen-task": {
        home: dynamic(() => import("@/components/zen-task/page")),
        login: dynamic(() => import("@/components/zen-task/login")),
        signup: dynamic(() => import("@/components/zen-task/signup")),
    },
    "cryptofolio": {
        home: dynamic(() => import("@/components/cryptofolio/page")),
        about: dynamic(() => import("@/components/cryptofolio/About")),
        pricing: dynamic(() => import("@/components/cryptofolio/Pricing")),
        login: dynamic(() => import("@/components/cryptofolio/Login")),
        signup: dynamic(() => import("@/components/cryptofolio/Signup")),
        contact: dynamic(() => import("@/components/cryptofolio/Contact")),
        blog: dynamic(() => import("@/components/cryptofolio/Blog")),
        "blog-post": dynamic(() => import("@/components/cryptofolio/BlogPost")),
    },
    "chefs-table": {
        home: dynamic(() => import("@/components/chefs-table/page")),
        menu: dynamic(() => import("@/components/chefs-table/menu")),
        "private-dining": dynamic(() => import("@/components/chefs-table/private-dining")),
        reservations: dynamic(() => import("@/components/chefs-table/reservations")),
        contact: dynamic(() => import("@/components/chefs-table/contact")),
        sustainability: dynamic(() => import("@/components/chefs-table/sustainability")),
        events: dynamic(() => import("@/components/chefs-table/events")),
        careers: dynamic(() => import("@/components/chefs-table/careers")),
    },
    "fit-pulse": {
        home: dynamic(() => import("@/components/fit-pulse/page")),
        about: dynamic(() => import("@/components/fit-pulse/about")),
        classes: dynamic(() => import("@/components/fit-pulse/classes")),
        trainers: dynamic(() => import("@/components/fit-pulse/trainers")),
        pricing: dynamic(() => import("@/components/fit-pulse/pricing")),
        schedule: dynamic(() => import("@/components/fit-pulse/schedule")),
        contact: dynamic(() => import("@/components/fit-pulse/contact")),
        faq: dynamic(() => import("@/components/fit-pulse/faq")),
        join: dynamic(() => import("@/components/fit-pulse/join")),
    },
    "bloom-box": {
        home: dynamic(() => import("@/components/bloom-box/page")),
        about: dynamic(() => import("@/components/bloom-box/about")),
        shop: dynamic(() => import("@/components/bloom-box/shop")),
        subscription: dynamic(() => import("@/components/bloom-box/subscription")),
        "care-guide": dynamic(() => import("@/components/bloom-box/care-guide")),
        contact: dynamic(() => import("@/components/bloom-box/contact")),
        faq: dynamic(() => import("@/components/bloom-box/faq")),
        privacy: dynamic(() => import("@/components/bloom-box/privacy")),
        terms: dynamic(() => import("@/components/bloom-box/terms")),
    },
};

// Helper function to get a component for a specific site and page
export function getSiteComponent(site: string, page: string = "home"): ComponentType<unknown> | null {
    const siteConfig = siteRegistry[site];
    if (!siteConfig) return null;

    return siteConfig[page] || null;
}
