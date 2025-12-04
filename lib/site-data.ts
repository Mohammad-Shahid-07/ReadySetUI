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
];

export const allTags = Array.from(new Set(sites.flatMap(site => site.tags)));
