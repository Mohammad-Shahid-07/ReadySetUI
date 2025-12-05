import React from 'react';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Essential tools for solo builders.",
        features: ["Unlimited tasks", "3 Projects", "Basic analytics", "Mobile app access"],
        cta: "Start for Free",
        popular: false,
    },
    {
        name: "Pro",
        price: "$12",
        period: "/month",
        description: "Advanced workflows for power users.",
        features: ["Unlimited projects", "Advanced analytics", "Custom themes", "Priority support", "AI suggestions"],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Business",
        price: "$29",
        period: "/month",
        description: "Collaboration for growing teams.",
        features: ["Everything in Pro", "Team collaboration", "Admin controls", "Shared workspaces", "API access"],
        cta: "Contact Sales",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-jakarta">
                        Invest in your <span className="text-[#10B981]">productivity</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Transparent pricing. No hidden fees. Cancel anytime.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative rounded-3xl p-8 ${plan.popular ? 'bg-white/10 border-2 border-[#10B981] shadow-[0_0_40px_rgba(16,185,129,0.1)] scale-110 z-10' : 'bg-white/5 border border-white/10'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#10B981] text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2 font-jakarta">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                                </div>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <Check className="h-5 w-5 text-[#10B981] mr-3" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <SiteLink href="/signup" className="block">
                                <Button className={`w-full rounded-xl h-12 font-bold transition-all duration-300 ${plan.popular ? 'bg-[#10B981] hover:bg-[#059669] text-black shadow-lg hover:shadow-xl' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                    {plan.cta}
                                </Button>
                            </SiteLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
