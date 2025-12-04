export interface SiteData {
    id: string;
    name: string;
    description: string;
    subdomain: string;
    tags: string[];
    color: string; // Gradient class for placeholder (fallback)
    image: string; // Path to thumbnail image
    featured?: boolean;
}

export const sites: SiteData[] = [
    {
        id: "puppy-tech",
        name: "Puppy Tech",
        description: "A data-driven, premium nutrition platform for modern dog owners.",
        subdomain: "puppy-tech",
        tags: ["SaaS", "E-commerce", "Bento Grid", "Startup"],
        color: "from-indigo-500 to-purple-600",
        image: "/images/puppy-tech.png",
        featured: true
    },
    {
        id: "devflow",
        name: "DevFlow",
        description: "A sleek, high-performance portfolio template for modern developers.",
        subdomain: "devflow",
        tags: ["Portfolio", "Personal", "Dark Mode", "Minimal"],
        color: "from-emerald-500 to-cyan-600",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        featured: true
    },
];

export const allTags = Array.from(new Set(sites.flatMap(site => site.tags)));
