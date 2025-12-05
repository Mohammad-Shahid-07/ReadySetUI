"use client"
import React from 'react';
import {
    Dog,
    Heart,
    ArrowRight,
    CheckCircle2,
    Star,
    Activity,
    Brain,
    Scale,
    Clock,
    X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SiteLink } from '@/components/site-link';
import Layout from './layout';

export default function LandingPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] mix-blend-multiply"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-600">Now shipping to all 50 states</span>
                    </div>

                    <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
                        Precision Nutrition <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">
                            For Modern Dogs
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Forget generic kibble. We use biometric data to engineer a daily meal plan perfectly balanced for your puppy's unique DNA, age, and lifestyle.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <SiteLink href="/signup">
                            <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40">
                                Create Your Plan <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </SiteLink>
                        <SiteLink href="/services">
                            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-slate-200 hover:bg-slate-50">
                                View Services
                            </Button>
                        </SiteLink>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-12 w-12 rounded-full border-4 border-slate-50 overflow-hidden bg-slate-200">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <span className="font-semibold text-slate-900">4.9/5</span>
                            <span className="text-slate-500">from 12,000+ parents</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Science Section */}
            <section id="science" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">Engineered, Not Just Cooked</h2>
                        <p className="text-lg text-slate-600">
                            We treat canine nutrition as a science. Our algorithms analyze 50+ data points to create the perfect fuel for your growing puppy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:h-[600px]">
                        {/* Large Card */}
                        <div className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 relative overflow-hidden group hover:border-indigo-100 transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-200/50 transition-colors"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                                        <Brain className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Algorithmic Portion Control</h3>
                                    <p className="text-slate-600 max-w-md">
                                        Most owners overfeed or underfeed. Our app calculates the exact gram-weight your puppy needs daily based on their growth curve, ensuring optimal skeletal development without excess weight gain.
                                    </p>
                                </div>
                                <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-medium text-slate-500">Growth Curve</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12% vs Avg</span>
                                    </div>
                                    <div className="h-24 flex items-end gap-1">
                                        {[30, 45, 55, 60, 75, 85, 90, 95, 100].map((h, i) => (
                                            <div key={i} className="flex-1 bg-indigo-100 rounded-t-sm relative group/bar">
                                                <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tall Card */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between group">
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-slate-700">
                                    <Activity className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Real-time Adjustments</h3>
                                <p className="text-slate-400">
                                    Log your puppy's activity and weight in our app. We adjust the next delivery's calorie count automatically.
                                </p>
                            </div>
                            <div className="relative z-10 mt-8">
                                <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl backdrop-blur-sm border border-slate-700">
                                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Menu Updated</p>
                                        <p className="text-xs text-slate-400">Based on recent activity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Card 1 */}
                        <div className="bg-orange-50 rounded-[2.5rem] p-10 border border-orange-100 flex flex-col justify-center items-center text-center group hover:border-orange-200 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                <Scale className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900">Macro Balanced</h3>
                            <p className="text-sm text-slate-600">
                                Perfect protein-to-fat ratios for brain development.
                            </p>
                        </div>

                        {/* Bottom Card 2 */}
                        <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-200 flex items-center justify-between relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl"></div>
                            <div className="relative z-10 max-w-md">
                                <h3 className="text-2xl font-bold mb-2">Human Grade Ingredients</h3>
                                <p className="text-slate-600">
                                    If you wouldn't eat it, why should they? We use USDA-certified meats and fresh vegetables.
                                </p>
                            </div>
                            <div className="relative z-10 hidden sm:block">
                                <div className="flex -space-x-4">
                                    <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center text-2xl shadow-lg">🥩</div>
                                    <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center text-2xl shadow-lg">🥕</div>
                                    <div className="w-20 h-20 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center text-2xl shadow-lg">🥦</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple as 1, 2, 3</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

                        {[
                            {
                                step: "01",
                                title: "Create Profile",
                                desc: "Tell us about your puppy's breed, age, weight, and activity level.",
                                icon: <Dog className="w-6 h-6 text-white" />
                            },
                            {
                                step: "02",
                                title: "We Cook & Ship",
                                desc: "Our kitchens prepare fresh meals and flash-freeze them to lock in nutrients.",
                                icon: <Clock className="w-6 h-6 text-white" />
                            },
                            {
                                step: "03",
                                title: "Thaw & Serve",
                                desc: "Meals arrive in daily packs. Just thaw in the fridge and serve.",
                                icon: <Heart className="w-6 h-6 text-white" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20 mb-6 relative z-10">
                                    {item.icon}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-slate-50">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 max-w-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Switch?</h2>
                        <p className="text-lg text-slate-600">See the difference real food makes.</p>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 mb-6 border-b border-slate-200 pb-6">
                            <div className="font-bold text-slate-400">Feature</div>
                            <div className="font-bold text-center text-indigo-600 text-lg">PuppyTech</div>
                            <div className="font-bold text-center text-slate-400">Kibble</div>
                        </div>

                        {[
                            { feat: "Fresh Ingredients", us: true, them: false },
                            { feat: "Custom Portions", us: true, them: false },
                            { feat: "Human Grade", us: true, them: false },
                            { feat: "Preservative Free", us: true, them: false },
                            { feat: "Delivered to Door", us: true, them: true },
                            { feat: "Vet Nutritionist Approved", us: true, them: true },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-3 gap-4 py-4 items-center hover:bg-white rounded-lg transition-colors px-2">
                                <div className="font-medium text-slate-700">{row.feat}</div>
                                <div className="flex justify-center">
                                    {row.us ?
                                        <CheckCircle2 className="w-6 h-6 text-indigo-600 fill-indigo-100" /> :
                                        <X className="w-6 h-6 text-slate-300" />
                                    }
                                </div>
                                <div className="flex justify-center">
                                    {row.them ?
                                        <CheckCircle2 className="w-6 h-6 text-slate-400" /> :
                                        <X className="w-6 h-6 text-red-300" />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-slate-400">Plans start as low as $2/day for small breeds.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Starter",
                                price: "$2.50",
                                unit: "/day",
                                desc: "Perfect for small breeds and puppies under 15lbs.",
                                features: ["14 meals delivered weekly", "Basic health tracking", "Vet support chat"]
                            },
                            {
                                name: "Growth",
                                price: "$4.00",
                                unit: "/day",
                                popular: true,
                                desc: "Ideal for medium breeds and active growing puppies.",
                                features: ["Full meal plan", "Advanced growth tracking", "Priority vet support", "Treats included"]
                            },
                            {
                                name: "Performance",
                                price: "$6.50",
                                unit: "/day",
                                desc: "For large breeds and working dogs needing extra fuel.",
                                features: ["High protein formula", "Joint support supplements", "24/7 Vet video call", "Quarterly bloodwork kit"]
                            }
                        ].map((plan, i) => (
                            <div key={i} className={cn(
                                "relative p-8 rounded-3xl border flex flex-col",
                                plan.popular ? "bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-900/50 scale-105 z-10" : "bg-slate-800 border-slate-700"
                            )}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-sm text-slate-300">{plan.unit}</span>
                                </div>
                                <p className="text-sm text-slate-300 mb-8 pb-8 border-b border-white/10">{plan.desc}</p>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <SiteLink href="/signup" className="w-full">
                                    <Button className={cn(
                                        "w-full py-6 rounded-xl font-bold transition-all text-base",
                                        plan.popular ? "bg-white text-indigo-600 hover:bg-slate-100" : "bg-slate-700 text-white hover:bg-slate-600"
                                    )}>
                                        Choose Plan
                                    </Button>
                                </SiteLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            { q: "How do I transition my puppy to fresh food?", a: "We recommend a 7-day transition period. Start by mixing 25% PuppyTech with 75% old food, and gradually increase the ratio. Our app provides a custom schedule." },
                            { q: "Do I need to keep the food frozen?", a: "Yes! Our meals are preservative-free. Keep them in the freezer, and move 2-3 packs to the fridge 24 hours before serving." },
                            { q: "Is this suitable for all breeds?", a: "Absolutely. Our algorithm adjusts the nutrient density and portion size based on your specific breed's growth requirements." },
                            { q: "Can I cancel anytime?", a: "Yes, you can pause, skip, or cancel your subscription instantly through the app. No phone calls required." }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-lg font-bold text-slate-900">{item.q}</AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </Layout>
    );
}
