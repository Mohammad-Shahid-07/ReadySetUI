"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import { Coffee, Globe, Terminal } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                        More Than Just <span className="text-indigo-400">Code</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                        I&apos;m a full-stack developer obsessed with performance, design systems, and building digital products that feel alive.
                    </p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-24 bg-zinc-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Developer Portrait"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">The Story So Far</h2>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    It started with a MySpace profile in 2008. I wanted to change the background color, and stumbled into the rabbit hole of HTML and CSS.
                                </p>
                                <p>
                                    Fast forward to today, and I&apos;ve had the privilege of building software for <span className="text-white font-bold">startups, agencies, and Fortune 500 companies</span>. My philosophy is simple: code should be clean, interfaces should be intuitive, and performance is non-negotiable.
                                </p>
                                <p>
                                    When I&apos;m not debugging, you can find me brewing third-wave coffee, exploring cyberpunk aesthetics, or contributing to open source.
                                </p>
                            </div>
                            <div className="mt-10 flex gap-4">
                                <SiteLink href="/contact">
                                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
                                        Download Resume
                                    </Button>
                                </SiteLink>
                                <div className="flex gap-4 items-center px-6">
                                    <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                                    <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Terminal className="w-5 h-5" /></a>
                                    <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Coffee className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Years Experience", value: "8+" },
                            { label: "Projects Shipped", value: "50+" },
                            { label: "Happy Clients", value: "30+" },
                            { label: "Coffee Consumed", value: "∞" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-indigo-500/30 transition-colors">
                                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Grid */}
            <section className="py-24 bg-zinc-900/30 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Arsenal</h2>
                        <p className="text-zinc-400">The tools I use to bring ideas to life.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL",
                            "GraphQL", "Docker", "AWS", "Figma", "Three.js", "Rust"
                        ].map((tech, i) => (
                            <div key={i} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-950 border border-white/5 hover:border-indigo-500/50 transition-all group">
                                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-indigo-500 transition-colors"></div>
                                <span className="font-medium text-zinc-300 group-hover:text-white">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
