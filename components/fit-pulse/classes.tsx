import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { ClassCard } from "./class-card";

const classes = [
    {
        title: "HIIT Blast",
        description: "45 minutes of pure intensity. Mix of cardio and strength intervals designed to torch fat.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        duration: "45 min",
        intensity: "High" as const,
        calories: "600-800",
    },
    {
        title: "Power Yoga",
        description: "Build strength and flexibility with this dynamic vinyasa flow class.",
        image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop",
        duration: "60 min",
        intensity: "Medium" as const,
        calories: "300-400",
    },
    {
        title: "CrossFit",
        description: "Functional fitness at high intensity. constantly varied movements.",
        image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop",
        duration: "60 min",
        intensity: "High" as const,
        calories: "500-700",
    },
    {
        title: "Spinning",
        description: "High-energy indoor cycling class set to pumping beats.",
        image: "https://images.unsplash.com/photo-1534258936925-c48947387e3b?q=80&w=2070&auto=format&fit=crop",
        duration: "45 min",
        intensity: "High" as const,
        calories: "500-700",
    },
    {
        title: "Bootcamp",
        description: "Military-style training using bodyweight and props.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
        duration: "60 min",
        intensity: "High" as const,
        calories: "600-800",
    },
    {
        title: "Strength",
        description: "Focus on heavy lifting and building muscle mass.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
        duration: "50 min",
        intensity: "Medium" as const,
        calories: "300-500",
    },
];

export default function Page() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        Our <span className="text-yellow-500">Classes</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From high-intensity interval training to restorative yoga, we have a class for every goal.
                    </p>
                </div>
            </div>

            <SlantedSection angle="none" background="zinc">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map((cls) => (
                        <ClassCard key={cls.title} {...cls} />
                    ))}
                </div>
            </SlantedSection>
        </Layout>
    );
}
