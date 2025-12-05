"use client"
import React from 'react';
import Layout from './layout';
import { SiteLink } from '@/components/site-link';
import { Button } from '@/components/ui/button';
import { Heart, ShieldCheck, Users, Award, Microscope, Leaf } from 'lucide-react';

export default function AboutPage() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        We Are <span className="text-indigo-400">PuppyTech</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Bridging the gap between veterinary science and your kitchen. We believe every dog deserves a diet as unique as their DNA.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-6">
                                <Heart className="w-4 h-4" /> Our Mission
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                                Ending the "One Size Fits All" Era of Dog Food
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                For decades, the pet food industry has relied on mass-produced kibble that treats a Great Dane the same as a Chihuahua. We knew there had to be a better way.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                PuppyTech was founded by a team of veterinarians, data scientists, and chefs with a single goal: to use technology to create the most precise, nutritious, and fresh meals for dogs everywhere.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-2xl text-indigo-600 mb-1">10M+</h4>
                                    <p className="text-sm text-slate-500">Meals Served</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-2xl text-indigo-600 mb-1">50k+</h4>
                                    <p className="text-sm text-slate-500">Happy Pups</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Happy dog with owner"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full -z-10 blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-slate-600">The principles that guide every bowl we serve.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Microscope className="w-8 h-8 text-indigo-600" />,
                                title: "Science First",
                                desc: "We don't follow fads. Every ingredient is backed by peer-reviewed veterinary research."
                            },
                            {
                                icon: <Leaf className="w-8 h-8 text-green-600" />,
                                title: "Transparency",
                                desc: "No mystery meats. We source from farms we know and list every single ingredient."
                            },
                            {
                                icon: <Award className="w-8 h-8 text-orange-600" />,
                                title: "Quality Obsessed",
                                desc: "Our kitchens meet human-grade safety standards. If it's not good enough for us, it's not good enough for them."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Meet The Experts</h2>
                        <p className="text-slate-600">The humans behind the hounds.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { name: "Dr. Sarah Chen", role: "Chief Veterinary Officer", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" },
                            { name: "Marcus Thorne", role: "Head of Nutrition", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                            { name: "Elena Rodriguez", role: "Lead Data Scientist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
                            { name: "David Kim", role: "Executive Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop" }
                        ].map((member, i) => (
                            <div key={i} className="group text-center">
                                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                                <p className="text-indigo-600 font-medium text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-indigo-600 text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to upgrade your pup's life?</h2>
                    <p className="text-indigo-100 text-lg mb-10">Join thousands of happy dogs and healthier lives today.</p>
                    <SiteLink href="/signup">
                        <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 h-14 text-lg font-bold shadow-xl">
                            Get Started Now
                        </Button>
                    </SiteLink>
                </div>
            </section>
        </Layout>
    );
}
