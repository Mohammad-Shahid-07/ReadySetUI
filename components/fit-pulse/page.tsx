import { Layout } from "./layout";
import { HeroSection } from "./hero-section";
import { SlantedSection } from "./slanted-section";
import { StatsCounter } from "./stats-counter";
import { TestimonialCarousel } from "./testimonial-carousel";
import { NewsletterForm } from "./newsletter-form";
import { PulseButton } from "./pulse-button";
import { ArrowRight, Dumbbell, Flame, Timer } from "lucide-react";

export default function Page() {
    return (
        <Layout>
            <HeroSection />

            {/* Stats Section */}
            <div className="bg-zinc-900 py-20 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <StatsCounter value={5000} label="Active Members" suffix="+" />
                    <StatsCounter value={150} label="Expert Trainers" />
                    <StatsCounter value={1000} label="Classes Monthly" suffix="+" />
                </div>
            </div>

            {/* Features Section */}
            <SlantedSection angle="right" background="black">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-4">
                        Why <span className="text-yellow-500">FitPulse?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We don&apos;t just train bodies. We forge warriors. Experience the difference of a gym built for performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Flame}
                        title="High Intensity"
                        description="Workouts designed to burn maximum calories in minimum time. Push your limits."
                    />
                    <FeatureCard
                        icon={Dumbbell}
                        title="Elite Equipment"
                        description="Train with the best. Our facility is equipped with state-of-the-art gear."
                    />
                    <FeatureCard
                        icon={Timer}
                        title="Flexible Schedule"
                        description="Classes running from 5AM to 10PM. No excuses, just results."
                    />
                </div>
            </SlantedSection>

            {/* Testimonials */}
            <SlantedSection angle="left" background="zinc">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-4">
                        Real <span className="text-yellow-500">Results</span>
                    </h2>
                </div>
                <TestimonialCarousel />
            </SlantedSection>

            {/* CTA / Newsletter */}
            <SlantedSection angle="none" background="black" className="pb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-8">
                        Join The <span className="text-yellow-500">Movement</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Don&apos;t let another day pass. Start your transformation now.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <PulseButton href="/join" className="w-full md:w-auto">
                            Start Your Free Trial <ArrowRight className="w-5 h-5" />
                        </PulseButton>

                        <div className="w-full border-t border-white/10 pt-12 mt-8">
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">
                                Get Weekly Fitness Tips
                            </p>
                            <NewsletterForm />
                        </div>
                    </div>
                </div>
            </SlantedSection>
        </Layout>
    );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
    return (
        <div className="p-8 bg-zinc-900 border border-white/10 hover:border-yellow-500 transition-colors group">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <Icon className="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase italic mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}
