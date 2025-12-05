"use client";

import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Seedling",
        price: "$29",
        description: "Perfect for beginners starting their green journey.",
        features: [
            "1 Easy-care plant per month",
            "Care instruction card",
            "Soil & fertilizer sample",
            "Free shipping",
        ],
        highlight: false,
    },
    {
        name: "Sprout",
        price: "$49",
        description: "For plant lovers looking to expand their collection.",
        features: [
            "1 Premium plant per month",
            "Exclusive planter included",
            "Detailed care guide",
            "Priority support",
            "Free shipping",
        ],
        highlight: true,
    },
    {
        name: "Canopy",
        price: "$89",
        description: "The ultimate experience for serious collectors.",
        features: [
            "2 Rare/Exotic plants per month",
            "Premium ceramic pots",
            "1-on-1 Virtual Consultation",
            "Early access to rare drops",
            "Free express shipping",
        ],
        highlight: false,
    },
];

export function SubscriptionTiers() {
    return (
        <section className="py-24 bg-[#14532D] text-[#FEFCE8]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Join the Green Club</h2>
                    <p className="text-[#FEFCE8]/80 max-w-2xl mx-auto text-lg">
                        Receive curated plants delivered to your door every month. Choose the plan that fits your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`relative border-none shadow-xl flex flex-col ${tier.highlight
                                    ? "bg-[#FEFCE8] text-[#14532D] scale-105 z-10"
                                    : "bg-[#FEFCE8]/10 text-[#FEFCE8] backdrop-blur-sm"
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B45309] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif font-bold">{tier.name}</CardTitle>
                                <CardDescription className={tier.highlight ? "text-[#14532D]/70" : "text-[#FEFCE8]/60"}>
                                    {tier.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    <span className={tier.highlight ? "text-[#14532D]/60" : "text-[#FEFCE8]/60"}>/month</span>
                                </div>
                                <ul className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-[#14532D]" : "text-[#4ADE80]"}`} />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <SiteLink href="/subscription" className="w-full">
                                    <Button
                                        className={`w-full py-6 text-lg font-medium transition-all duration-300 ${tier.highlight
                                                ? "bg-[#14532D] hover:bg-[#14532D]/90 text-white"
                                                : "bg-[#FEFCE8] hover:bg-[#FEFCE8]/90 text-[#14532D]"
                                            }`}
                                    >
                                        Subscribe Now
                                    </Button>
                                </SiteLink>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
