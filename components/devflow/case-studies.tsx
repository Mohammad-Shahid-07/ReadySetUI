"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import { ArrowRight, ExternalLink, Github, Layers, Cpu, Globe } from 'lucide-react';

export default function CaseStudiesPage() {
    return (
        <Layout>
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                            Selected <span className="text-indigo-400">Works</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            A showcase of technical challenges solved and products shipped.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                title: "FinTech Dashboard Redesign",
                                client: "NeoBank Inc.",
                                desc: "Rebuilding a legacy financial dashboard with Next.js and Tailwind to improve performance by 300% and user retention by 45%.",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                                tags: ["Next.js", "TypeScript", "Recharts", "Radix UI"],
                                stats: [
                                    { label: "Load Time", value: "< 0.8s" },
                                    { label: "User Retention", value: "+45%" },
                                    { label: "Code Reduction", value: "40%" }
                                ]
                            },
                            {
                                title: "AI-Powered Content Platform",
                                client: "ContentFlow",
                                desc: "Architecting a scalable content generation platform using OpenAI's API, serverless functions, and a custom rich-text editor.",
                                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
                                tags: ["OpenAI API", "Node.js", "PostgreSQL", "Redis"],
                                stats: [
                                    { label: "Daily Users", value: "10k+" },
                                    { label: "Uptime", value: "99.99%" },
                                    { label: "Latency", value: "120ms" }
                                ]
                            },
                            {
                                title: "E-commerce Design System",
                                client: "Shopify Plus Brand",
                                desc: "Creating a comprehensive design system and component library for a high-volume fashion retailer, ensuring brand consistency across all touchpoints.",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                                tags: ["Storybook", "React", "Figma", "Tokens"],
                                stats: [
                                    { label: "Components", value: "150+" },
                                    { label: "Dev Velocity", value: "2x" },
                                    { label: "Accessibility", value: "100%" }
                                ]
                            }
                        ].map((study, i) => (
                            <div key={i} className="group">
                                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                                    <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-indigo-400 font-bold tracking-wider text-sm uppercase">{study.client}</span>
                                            <span className="w-12 h-[1px] bg-indigo-500/50"></span>
                                        </div>
                                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-indigo-300 transition-colors">
                                            {study.title}
                                        </h2>
                                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                            {study.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {study.tags.map((tag, j) => (
                                                <span key={j} className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-3 gap-6 mb-10 border-t border-white/5 pt-8">
                                            {study.stats.map((stat, k) => (
                                                <div key={k}>
                                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <Button className="bg-white text-zinc-950 hover:bg-zinc-200">
                                                View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                                                <Github className="mr-2 w-4 h-4" /> Source Code
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-indigo-500/10 group-hover:shadow-indigo-500/20 transition-all duration-500">
                                            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                                            <img
                                                src={study.image}
                                                alt={study.title}
                                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 p-12 rounded-3xl bg-zinc-900/30 border border-white/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                        <h2 className="text-3xl font-bold text-white mb-6">Have a project in mind?</h2>
                        <p className="text-zinc-400 max-w-xl mx-auto mb-10">
                            I'm currently available for new opportunities. Let's discuss how I can help your team ship better software, faster.
                        </p>
                        <SiteLink href="/contact">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-indigo-600/20">
                                Start a Conversation
                            </Button>
                        </SiteLink>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
