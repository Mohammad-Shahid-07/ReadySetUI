"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { SiteLink } from "@/components/site-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

const monthlyPlans = [
    {
        name: "INITIATE",
        price: "$0",
        period: "/mo",
        description: "For the casual observer.",
        features: ["Track up to 3 wallets", "Real-time prices", "Basic alerts", "Mobile app access"],
        cta: "START FREE",
        popular: false,
    },
    {
        name: "OPERATOR",
        price: "$9",
        period: "/mo",
        description: "For the active trader.",
        features: ["Unlimited wallets", "Multi-chain support", "Advanced analytics", "CSV exports", "Priority support"],
        cta: "UPGRADE",
        popular: true,
    },
    {
        name: "ARCHITECT",
        price: "$29",
        period: "/mo",
        description: "For the whale.",
        features: ["API access", "White-label reports", "Dedicated account manager", "Early access to beta features"],
        cta: "CONTACT SALES",
        popular: false,
    },
];

const yearlyPlans = [
    {
        name: "INITIATE",
        price: "$0",
        period: "/yr",
        description: "For the casual observer.",
        features: ["Track up to 3 wallets", "Real-time prices", "Basic alerts", "Mobile app access"],
        cta: "START FREE",
        popular: false,
    },
    {
        name: "OPERATOR",
        price: "$90",
        period: "/yr",
        description: "For the active trader. (Save 17%)",
        features: ["Unlimited wallets", "Multi-chain support", "Advanced analytics", "CSV exports", "Priority support"],
        cta: "UPGRADE",
        popular: true,
    },
    {
        name: "ARCHITECT",
        price: "$290",
        period: "/yr",
        description: "For the whale. (Save 17%)",
        features: ["API access", "White-label reports", "Dedicated account manager", "Early access to beta features"],
        cta: "CONTACT SALES",
        popular: false,
    },
];

function PricingCard({ plan }: { plan: typeof monthlyPlans[0] }) {
    return (
        <div
            className={cn(
                "p-8 border backdrop-blur-sm relative flex flex-col h-full",
                plan.popular ? "border-[#D946EF] bg-[#D946EF]/5" : "border-white/10 bg-white/5"
            )}
        >
            {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#D946EF] text-black text-xs font-bold px-3 py-1 font-mono">
                    RECOMMENDED
                </div>
            )}
            <h3 className="text-xl font-bold font-mono text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold font-mono text-white mb-4">
                {plan.price}<span className="text-sm text-gray-400 font-normal">{plan.period}</span>
            </div>
            <p className="text-gray-400 font-mono text-sm mb-8">{plan.description}</p>

            <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-mono text-gray-300">
                        <Check className="w-5 h-5 text-[#06B6D4] shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            <SiteLink
                href="/signup"
                className={cn(
                    "block w-full py-3 text-center font-bold font-mono transition-colors",
                    plan.popular
                        ? "bg-[#D946EF] text-black hover:bg-[#D946EF]/90"
                        : "border border-white/20 text-white hover:bg-white/10"
                )}
            >
                {plan.cta}
            </SiteLink>
        </div>
    );
}

export default function Pricing() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4">
                            CHOOSE YOUR <span className="text-[#06B6D4]">LEVEL</span>
                        </h1>
                        <p className="text-gray-400 font-mono max-w-2xl mx-auto mb-12">
                            Transparent pricing. No hidden fees. Cancel anytime.
                        </p>

                        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
                            <div className="flex justify-center mb-12">
                                <TabsList className="bg-white/5 border border-white/10">
                                    <TabsTrigger
                                        value="monthly"
                                        className="data-[state=active]:bg-[#D946EF] data-[state=active]:text-black font-mono"
                                    >
                                        MONTHLY
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="yearly"
                                        className="data-[state=active]:bg-[#D946EF] data-[state=active]:text-black font-mono"
                                    >
                                        YEARLY
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="monthly">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {monthlyPlans.map((plan, index) => (
                                        <PricingCard key={index} plan={plan} />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="yearly">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {yearlyPlans.map((plan, index) => (
                                        <PricingCard key={index} plan={plan} />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
