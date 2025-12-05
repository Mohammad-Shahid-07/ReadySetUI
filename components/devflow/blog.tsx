"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function BlogPage() {
    return (
        <Layout>
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                            Thoughts & <span className="text-indigo-400">Insights</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Deep dives into web development, design systems, and the future of tech.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Featured Post */}
                        <div className="lg:col-span-2 group cursor-pointer">
                            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-6 border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Coding setup"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 p-8 lg:p-12 z-20 max-w-2xl">
                                    <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-wider text-indigo-400">
                                        <span className="bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Engineering</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
                                        The Future of React Server Components: A Deep Dive
                                    </h2>
                                    <p className="text-zinc-300 text-lg line-clamp-2 mb-6">
                                        Understanding how RSCs are changing the way we build web applications, from performance benefits to architectural shifts.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Author" width={40} height={40} className="rounded-full border-2 border-zinc-950" />
                                        <div>
                                            <p className="text-white font-bold text-sm">Alex Dev</p>
                                            <p className="text-zinc-500 text-xs">Oct 24, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Recent Posts */}
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Mastering Tailwind CSS Grid",
                                    cat: "CSS",
                                    date: "Oct 18, 2023",
                                    read: "5 min"
                                },
                                {
                                    title: "Why I Switched to TypeScript",
                                    cat: "TypeScript",
                                    date: "Oct 12, 2023",
                                    read: "6 min"
                                },
                                {
                                    title: "Optimizing Next.js Images",
                                    cat: "Performance",
                                    date: "Oct 05, 2023",
                                    read: "4 min"
                                }
                            ].map((post, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-indigo-500/30 transition-all group cursor-pointer">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">{post.cat}</span>
                                        <span className="text-xs text-zinc-500">{post.read} read</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <Calendar className="w-3 h-3" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            ))}

                            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
                                <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
                                <p className="text-indigo-100 text-sm mb-6">Get the latest articles delivered to your inbox.</p>
                                <div className="space-y-3">
                                    <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white" />
                                    <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-bold">Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid of Posts */}
                    <div className="mt-24">
                        <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5">
                                        <Image
                                            src={`https://images.unsplash.com/photo-${1550000000000 + i * 100000}?q=80&w=800&auto=format&fit=crop`}
                                            alt="Blog post"
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                                        <span className="text-indigo-400 font-bold">Tutorial</span>
                                        <span>•</span>
                                        <span>Nov {i}, 2023</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                        Building Scalable Systems with Microservices
                                    </h3>
                                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                                        A comprehensive guide to breaking down monoliths into manageable services.
                                    </p>
                                    <span className="text-indigo-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
