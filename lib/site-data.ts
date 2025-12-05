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
    {
        id: "uber-clone",
        name: "Uber Next",
        description: "A premium, high-fidelity clone of the Uber landing page.",
        subdomain: "uber-clone",
        tags: ["SaaS", "Transport", "Premium", "Clone"],
        color: "from-gray-900 to-black",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
        featured: true
    },
    {
        id: "zen-task",
        name: "ZenTask",
        description: "A minimalist project management tool for solo developers.",
        subdomain: "zen-task",
        tags: ["SaaS", "Productivity", "Minimalist", "Japanese"],
        color: "from-[#8FA893] to-[#5C7060]",
        image: "https://images.unsplash.com/photo-1499750310159-52f0f837ce1c?q=80&w=2069&auto=format&fit=crop",
        featured: true
    },
];

export const allTags = Array.from(new Set(sites.flatMap(site => site.tags)));
