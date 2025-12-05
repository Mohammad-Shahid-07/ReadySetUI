"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import {
    Zap,
    Shield,
    Smartphone,
    Globe,
    Database,
    Layout as LayoutIcon,
    Code2,
    GitBranch,
    Terminal
} from 'lucide-react';

export default function FeaturesPage() {
    return (
        <Layout>
            {/* Hero */}
            <section className="py-24 lg:py-32 border-b border-white/5 bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                        Built for <span className="text-indigo-400">Scale</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                        My development process combines cutting-edge technology with timeless design principles.
                    </p>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                                title: "Blazing Fast",
                                desc: "99+ Lighthouse scores. Optimized images, code splitting, and edge caching come standard."
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-green-400" />,
                                title: "Secure by Default",
                                desc: "OWASP top 10 protection, sanitized inputs, and secure authentication flows."
                            },
                            {
                                icon: <Smartphone className="w-8 h-8 text-blue-400" />,
                                title: "Mobile First",
                                desc: "Responsive layouts that look and feel native on every device, from iPhone SE to 4K monitors."
                            },
                            {
                                icon: <Globe className="w-8 h-8 text-purple-400" />,
                                title: "SEO Optimized",
                                desc: "Semantic HTML, meta tags, and sitemaps generated automatically for maximum visibility."
                            },
                            {
                                icon: <Database className="w-8 h-8 text-red-400" />,
                                title: "Scalable Backend",
                                desc: "Serverless architecture that scales to zero when idle and handles millions of requests when needed."
                            },
                            {
                                icon: <LayoutIcon className="w-8 h-8 text-orange-400" />,
                                title: "Pixel Perfect",
                                desc: "Implementation that matches the design file down to the last pixel."
                            }
                        ].map((feat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-zinc-950 border border-white/5 hover:border-indigo-500/50 hover:bg-zinc-900/50 transition-all group">
                                <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                                    {feat.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feat.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">My Workflow</h2>
                        <p className="text-zinc-400">How I go from idea to deployment.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 hidden md:block"></div>
                        <div className="grid md:grid-cols-3 gap-12 relative z-10">
                            {[
                                {
                                    step: "01",
                                    title: "Plan & Design",
                                    icon: <LayoutIcon className="w-6 h-6 text-white" />,
                                    desc: "Wireframing, prototyping, and system architecture."
                                },
                                {
                                    step: "02",
                                    title: "Develop & Test",
                                    icon: <Code2 className="w-6 h-6 text-white" />,
                                    desc: "Clean code, unit tests, and continuous integration."
                                },
                                {
                                    step: "03",
                                    title: "Deploy & Monitor",
                                    icon: <GitBranch className="w-6 h-6 text-white" />,
                                    desc: "Automated deployments, error tracking, and analytics."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-zinc-900 rounded-full border-4 border-zinc-950 flex items-center justify-center shadow-xl shadow-indigo-500/10 mb-6 relative group">
                                        <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/40 transition-colors"></div>
                                        {item.icon}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-zinc-950">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-zinc-400 max-w-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to build something amazing?</h2>
                    <p className="text-zinc-400 text-lg mb-10">Let's turn your vision into a high-performance reality.</p>
                    <SiteLink href="/contact">
                        <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-lg font-bold shadow-xl shadow-white/5">
                            Start a Project <Terminal className="ml-2 w-5 h-5" />
                        </Button>
                    </SiteLink>
                </div>
            </section>
        </Layout>
    );
}
