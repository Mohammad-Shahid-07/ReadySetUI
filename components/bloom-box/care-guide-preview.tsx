"use client";

import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { Sun, Droplets, Thermometer, Sprout } from "lucide-react";

const tips = [
    {
        icon: Sun,
        title: "Light",
        description: "Most indoor plants prefer bright, indirect sunlight. Avoid harsh direct sun which can scorch leaves.",
    },
    {
        icon: Droplets,
        title: "Water",
        description: "Overwatering is the #1 killer. Always check if the top inch of soil is dry before watering again.",
    },
    {
        icon: Thermometer,
        title: "Temperature",
        description: "Keep plants away from drafts, vents, and radiators. They prefer stable temperatures between 65-75°F.",
    },
    {
        icon: Sprout,
        title: "Growth",
        description: "Rotate your plants occasionally to ensure even growth and dust leaves to help them photosynthesize.",
    },
];

export function CareGuidePreview() {
    return (
        <section className="py-24 bg-[#FEFCE8]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0">
                            {/* Placeholder for a high-quality care image */}
                            <img
                                src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2090&auto=format&fit=crop"
                                alt="Plant Care"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#14532D] rounded-3xl -z-0 hidden md:block" />
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-serif font-bold text-[#14532D] mb-6">Expert Care Tips</h2>
                        <p className="text-[#14532D]/70 mb-10 text-lg">
                            We don't just sell plants; we help them thrive. Every BloomBox comes with detailed care instructions, but here are the basics to get you started.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {tips.map((tip) => (
                                <div key={tip.title} className="flex flex-col gap-3">
                                    <div className="bg-[#14532D]/10 w-12 h-12 rounded-full flex items-center justify-center text-[#14532D]">
                                        <tip.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#14532D]">{tip.title}</h3>
                                    <p className="text-[#14532D]/70 text-sm leading-relaxed">
                                        {tip.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <SiteLink href="/care-guide">
                                <Button className="bg-[#B45309] hover:bg-[#B45309]/90 text-white px-8 py-6 rounded-full text-lg font-medium">
                                    Read Full Care Guide
                                </Button>
                            </SiteLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
