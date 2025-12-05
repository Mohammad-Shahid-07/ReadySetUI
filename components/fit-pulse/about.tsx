import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { StatsCounter } from "./stats-counter";

export default function Page() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        About <span className="text-yellow-500">FitPulse</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We are more than a gym. We are a community of relentless individuals.
                    </p>
                </div>
            </div>

            <SlantedSection angle="right" background="zinc">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-black text-white uppercase italic mb-6">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            FitPulse was founded on a simple belief: that everyone has an inner athlete waiting to be unleashed. We provide the environment, the coaching, and the community to help you find that power.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            We reject mediocrity. We embrace the grind. Whether you're a seasoned pro or just starting, we demand your best effort, and in return, we give you the best training experience possible.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500 transform translate-x-4 translate-y-4" />
                        <img
                            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
                            alt="Gym Interior"
                            className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </SlantedSection>

            <SlantedSection angle="none" background="black">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <StatsCounter value={2018} label="Founded" />
                    <StatsCounter value={5} label="Locations" />
                    <StatsCounter value={50} label="Awards Won" />
                    <StatsCounter value={100} label="Satisfaction" suffix="%" />
                </div>
            </SlantedSection>
        </Layout>
    );
}
