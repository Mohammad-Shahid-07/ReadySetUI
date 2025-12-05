"use client";

import { SiteLink } from "@/components/site-link";
import { Check, X } from "lucide-react";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    notIncluded: string[];
    popular?: boolean;
}

const tiers: PricingTier[] = [
    {
        name: "Starter",
        price: "$29",
        description: "Perfect for beginners looking to get fit.",
        features: ["Access to gym floor", "2 Group Classes/mo", "Locker access", "Free WiFi"],
        notIncluded: ["Personal Training", "Sauna Access", "Nutrition Plan"],
    },
    {
        name: "Pro",
        price: "$59",
        description: "For serious athletes who want results.",
        features: ["Unlimited Gym Access", "Unlimited Group Classes", "1 Personal Training Session", "Sauna Access", "Nutrition Plan"],
        notIncluded: [],
        popular: true,
    },
    {
        name: "Elite",
        price: "$99",
        description: "The ultimate VIP experience.",
        features: ["All Pro features", "4 Personal Training Sessions", "Private Locker", "Towel Service", "Guest Passes"],
        notIncluded: [],
    },
];

export function PricingTable() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
                <div
                    key={tier.name}
                    className={`relative p-8 border ${tier.popular
                            ? "bg-zinc-900 border-yellow-500 transform md:-translate-y-4"
                            : "bg-black border-white/10"
                        } flex flex-col`}
                >
                    {tier.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black font-bold px-4 py-1 text-sm uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white uppercase italic mb-2">{tier.name}</h3>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">{tier.price}</span>
                            <span className="text-gray-400">/month</span>
                        </div>
                        <p className="text-gray-400 mt-4 text-sm">{tier.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                                <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                        {tier.notIncluded.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                                <X className="w-5 h-5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <SiteLink
                        href="/join"
                        className={`w-full py-4 font-bold uppercase tracking-wider text-center transition-colors ${tier.popular
                                ? "bg-yellow-500 text-black hover:bg-yellow-400"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                    >
                        Choose {tier.name}
                    </SiteLink>
                </div>
            ))}
        </div>
    );
}
