"use client"
import React from 'react';
import Layout from './layout';
import { SiteLink } from '@/components/site-link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Utensils, Stethoscope, Scissors, GraduationCap, Calendar } from 'lucide-react';

export default function ServicesPage() {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">
                        More Than Just <span className="text-indigo-600">Food</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        We provide a complete ecosystem for your dog's health. From precision nutrition to expert veterinary advice.
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <Utensils className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Precision Meal Plans</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Our core service. We deliver fresh, human-grade meals perfectly portioned for your dog's unique metabolic needs.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Biometric portion calculation",
                                    "Allergies & sensitivities accommodation",
                                    "Rotational menu to prevent boredom",
                                    "Eco-friendly, insulated packaging"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <SiteLink href="/signup">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
                                    Build Your Plan
                                </Button>
                            </SiteLink>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=1000&auto=format&fit=crop"
                                alt="Fresh dog food"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">100% Fresh</p>
                                        <p className="text-sm text-slate-500">Cooked daily</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1628009368231-760335298025?q=80&w=1000&auto=format&fit=crop"
                                alt="Vet consultation"
                                className="rounded-3xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <Stethoscope className="w-7 h-7 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">24/7 Vet Chat</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Worried about that weird noise? Or a sudden rash? Chat with a licensed veterinarian anytime, directly through our app.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Unlimited text & video consultations",
                                    "Nutrition & diet advice",
                                    "Behavioral triage",
                                    "Emergency assessment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="rounded-full px-8 border-slate-300">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Partner Services</h2>
                        <p className="text-slate-600">Exclusive discounts for PuppyTech members.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Scissors className="w-8 h-8 text-pink-500" />,
                                title: "Grooming",
                                desc: "Mobile grooming vans that come to your driveway. Stress-free for you and your pup."
                            },
                            {
                                icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
                                title: "Training",
                                desc: "Access to top-rated local trainers for obedience, agility, and behavioral correction."
                            },
                            {
                                icon: <Calendar className="w-8 h-8 text-orange-500" />,
                                title: "Walking & Sitting",
                                desc: "Vetted, background-checked walkers available on-demand via our partner network."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-colors group cursor-pointer">
                                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 mb-6">{item.desc}</p>
                                <span className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    View Partners <span className="text-lg">→</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
