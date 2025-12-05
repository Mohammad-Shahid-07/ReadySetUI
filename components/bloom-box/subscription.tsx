"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";
import { SubscriptionTiers } from "@/components/bloom-box/subscription-tiers";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Package, Calendar, Truck } from "lucide-react";

export default function SubscriptionPage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#14532D] mb-6">
                            The Green Club
                        </h1>
                        <p className="text-xl text-[#14532D]/70 max-w-2xl mx-auto">
                            Join our exclusive plant subscription service and watch your indoor jungle grow.
                        </p>
                    </div>

                    {/* How it works */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: Calendar, title: "1. Choose Your Plan", desc: "Select the tier that fits your space and experience level." },
                            { icon: Package, title: "2. We Curate", desc: "Our experts hand-pick the healthiest, most unique plants for you." },
                            { icon: Truck, title: "3. Delivered Safely", desc: "Your new green friend arrives at your door, ready to thrive." },
                        ].map((step) => (
                            <div key={step.title} className="bg-white p-8 rounded-3xl shadow-sm text-center">
                                <div className="bg-[#FEFCE8] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#B45309]">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#14532D] mb-3">{step.title}</h3>
                                <p className="text-[#14532D]/70">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tiers */}
                    <SubscriptionTiers />

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#14532D] mb-8 text-center">Subscription FAQ</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { q: "Can I skip a month?", a: "Yes! You can skip, pause, or cancel your subscription at any time from your account dashboard." },
                                { q: "What if my plant arrives damaged?", a: "We have a 14-day happy plant guarantee. If your plant arrives damaged, send us a photo and we'll replace it for free." },
                                { q: "Are the plants pet-friendly?", a: "We offer a specific 'Pet Friendly' preference in your account settings to ensure all plants sent to you are non-toxic." },
                                { q: "Do pots come with the plants?", a: "The 'Sprout' and 'Canopy' tiers include premium ceramic pots. The 'Seedling' tier comes in a nursery pot." },
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-[#14532D] font-medium text-lg">{item.q}</AccordionTrigger>
                                    <AccordionContent className="text-[#14532D]/70 text-base">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
