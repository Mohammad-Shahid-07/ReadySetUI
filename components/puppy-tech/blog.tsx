"use client"
import React from 'react';
import Layout from './layout';
import { SiteLink } from '@/components/site-link';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
    return (
        <Layout>
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4 text-slate-900">The Daily Bowl</h1>
                        <p className="text-xl text-slate-600">Nutrition tips, training advice, and puppy tales.</p>
                    </div>

                    {/* Featured Post */}
                    <div className="mb-16">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
                                alt="Puppy running"
                                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 p-8 lg:p-12 z-20 text-white max-w-3xl">
                                <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-wider text-indigo-300">
                                    <span>Nutrition</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight group-hover:text-indigo-200 transition-colors">
                                    Why "All Life Stages" Food Might Be Harming Your Large Breed Puppy
                                </h2>
                                <p className="text-lg text-slate-200 mb-8 line-clamp-2">
                                    Large breed puppies have very specific calcium and phosphorus requirements. Generic puppy food can lead to rapid growth and skeletal issues later in life.
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop" alt="Author" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <div>
                                        <p className="font-bold">Dr. Sarah Chen</p>
                                        <p className="text-xs text-slate-300">Chief Veterinary Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Truth About Grain-Free Diets",
                                cat: "Health",
                                img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop",
                                desc: "Recent studies have linked grain-free diets to heart disease in dogs. Here's what the science actually says."
                            },
                            {
                                title: "5 Superfoods You Can Share With Your Dog",
                                cat: "Nutrition",
                                img: "https://images.unsplash.com/photo-1518914781460-a3daa46cebf6?q=80&w=1000&auto=format&fit=crop",
                                desc: "Blueberries, pumpkin, and more. Healthy snacks from your fridge that boost your pup's immune system."
                            },
                            {
                                title: "Puppy Teething Survival Guide",
                                cat: "Training",
                                img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1000&auto=format&fit=crop",
                                desc: "Save your shoes and your sanity. Expert tips on managing the biting phase."
                            },
                            {
                                title: "Understanding Your Dog's Gut Microbiome",
                                cat: "Science",
                                img: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1000&auto=format&fit=crop",
                                desc: "How gut health affects mood, energy, and longevity. And how fresh food helps."
                            },
                            {
                                title: "Winter Care Tips for Paws",
                                cat: "Wellness",
                                img: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1000&auto=format&fit=crop",
                                desc: "Salt, ice, and cold pavement can damage sensitive paw pads. Here's how to protect them."
                            },
                            {
                                title: "The Best Exercises for Growing Joints",
                                cat: "Fitness",
                                img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1000&auto=format&fit=crop",
                                desc: "High impact vs low impact. What's safe for a puppy's developing skeleton?"
                            }
                        ].map((post, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group cursor-pointer flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                                        {post.cat}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">{post.title}</h3>
                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">{post.desc}</p>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>Oct 24, 2023</span>
                                        </div>
                                        <span className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="rounded-full px-8 border-slate-300">
                            Load More Articles
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
