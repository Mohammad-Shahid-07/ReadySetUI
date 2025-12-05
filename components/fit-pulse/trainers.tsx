import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { TrainerCard } from "./trainer-card";

const trainers = [
    {
        name: "Alex Sterling",
        role: "Head Coach",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
        bio: "Former Olympian with 15 years of experience in elite performance training.",
    },
    {
        name: "Sarah Jenkins",
        role: "Yoga & Mobility",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
        bio: "Specializes in injury prevention and functional movement patterns.",
    },
    {
        name: "Mike Tyson",
        role: "Strength Coach",
        image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop",
        bio: "Certified strength and conditioning specialist focused on powerlifting.",
    },
    {
        name: "Jenna Fox",
        role: "HIIT Specialist",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
        bio: "High energy coach known for her grueling but rewarding circuit training.",
    },
];

export default function TrainersPage() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        Meet The <span className="text-yellow-500">Team</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        World-class experts dedicated to pushing you beyond your limits.
                    </p>
                </div>
            </div>

            <SlantedSection angle="none" background="zinc">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer) => (
                        <TrainerCard key={trainer.name} {...trainer} />
                    ))}
                </div>
            </SlantedSection>
        </Layout>
    );
}
