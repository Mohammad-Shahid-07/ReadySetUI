"use client"
import React from 'react';
import Layout from './layout';
import { SiteLink } from '@/components/site-link';
import { Button } from '@/components/ui/button';
import { Search, Info, Bone, Activity, Moon } from 'lucide-react';

export default function CareGuidePage() {
    return (
        <Layout>
            <section className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Breed Care Guides</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Every breed is different. Find specific nutritional and care advice for your new best friend.
                    </p>
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search breed (e.g. Golden Retriever)"
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-indigo-500 outline-none backdrop-blur-sm transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                breed: "Golden Retriever",
                                group: "Sporting",
                                img: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=1000&auto=format&fit=crop",
                                traits: ["High Energy", "Friendly", "Intelligent"]
                            },
                            {
                                breed: "French Bulldog",
                                group: "Non-Sporting",
                                img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop",
                                traits: ["Low Energy", "Adaptable", "Playful"]
                            },
                            {
                                breed: "German Shepherd",
                                group: "Herding",
                                img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=1000&auto=format&fit=crop",
                                traits: ["High Energy", "Loyal", "Protective"]
                            },
                            {
                                breed: "Poodle (Standard)",
                                group: "Non-Sporting",
                                img: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?q=80&w=1000&auto=format&fit=crop",
                                traits: ["High Energy", "Hypoallergenic", "Smart"]
                            },
                            {
                                breed: "Dachshund",
                                group: "Hound",
                                img: "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?q=80&w=1000&auto=format&fit=crop",
                                traits: ["Moderate Energy", "Stubborn", "Clever"]
                            },
                            {
                                breed: "Siberian Husky",
                                group: "Working",
                                img: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?q=80&w=1000&auto=format&fit=crop",
                                traits: ["Very High Energy", "Vocal", "Independent"]
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                                <div className="aspect-[4/5]">
                                    <img src={item.img} alt={item.breed} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">{item.group} Group</span>
                                    <h3 className="text-3xl font-bold mb-4">{item.breed}</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {item.traits.map((trait, j) => (
                                            <span key={j} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium border border-white/10">
                                                {trait}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                        <div className="text-center">
                                            <Activity className="w-5 h-5 mx-auto mb-1 text-green-400" />
                                            <span className="text-xs text-slate-300">Activity</span>
                                        </div>
                                        <div className="text-center">
                                            <Bone className="w-5 h-5 mx-auto mb-1 text-orange-400" />
                                            <span className="text-xs text-slate-300">Diet</span>
                                        </div>
                                        <div className="text-center">
                                            <Moon className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                                            <span className="text-xs text-slate-300">Sleep</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
