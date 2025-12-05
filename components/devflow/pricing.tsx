"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import { Check, Zap, Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPage() {
    return (
        <Layout>
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                            Simple, Transparent <span className="text-indigo-400">Pricing</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Choose the package that fits your project needs. No hidden fees, just high-quality code.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "MVP",
                                price: "$2,500",
                                desc: "Perfect for validating ideas and early-stage startups.",
                                icon: <Zap className="w-6 h-6 text-blue-400" />,
                                features: ["Single Page Application", "Basic SEO Setup", "Contact Form", "Mobile Responsive", "1 Month Support"]
                            },
                            {
                                name: "Pro",
                                price: "$5,000",
                                desc: "A complete solution for growing businesses.",
                                popular: true,
                                icon: <Star className="w-6 h-6 text-yellow-400" />,
                                features: ["Multi-page Website", "CMS Integration", "Advanced SEO & Analytics", "Authentication", "3 Months Support", "Performance Optimization"]
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                desc: "For large-scale applications with complex requirements.",
                                icon: <Crown className="w-6 h-6 text-purple-400" />,
                                features: ["Full-stack Application", "Custom Backend API", "Database Design", "CI/CD Pipeline", "Priority 24/7 Support", "SLA Guarantee"]
                            }
                        ].map((plan, i) => (
                            <div key={i} className={cn(
                                "relative p-8 rounded-3xl border flex flex-col transition-all duration-300",
                                plan.popular
                                    ? "bg-zinc-900 border-indigo-500/50 shadow-2xl shadow-indigo-500/10 scale-105 z-10"
                                    : "bg-zinc-950 border-white/5 hover:border-white/10"
                            )}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg shadow-indigo-600/20">
                                        Most Popular
                                    </div>
                                )}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-zinc-900 border border-white/5">
                                        {plan.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Package</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-zinc-500 ml-2">/ project</span>}
                                </div>

                                <p className="text-sm text-zinc-400 mb-8 pb-8 border-b border-white/5">{plan.desc}</p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                                            <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <SiteLink href="/contact" className="w-full">
                                    <Button className={cn(
                                        "w-full py-6 rounded-xl font-bold transition-all text-base",
                                        plan.popular
                                            ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20"
                                            : "bg-zinc-800 hover:bg-zinc-700 text-white"
                                    )}>
                                        Get Started
                                    </Button>
                                </SiteLink>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-zinc-500 mb-4">Need something specific?</p>
                        <SiteLink href="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4">
                            Contact me for a custom quote
                        </SiteLink>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
