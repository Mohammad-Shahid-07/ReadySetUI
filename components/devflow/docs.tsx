"use client"
import React from 'react';
import Layout from './layout';
import { Search, Book, Settings, Terminal, ChevronRight, ArrowRight } from 'lucide-react';

export default function DocsPage() {
    return (
        <Layout>
            <div className="flex min-h-screen">
                {/* Sidebar Navigation - Desktop */}
                <aside className="hidden lg:block w-64 border-r border-white/5 bg-zinc-950 fixed top-20 bottom-0 overflow-y-auto">
                    <div className="p-6">
                        <div className="relative mb-8">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search docs..."
                                className="w-full bg-zinc-900 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Getting Started</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-indigo-400 font-medium"><div className="w-1 h-1 rounded-full bg-indigo-400"></div> Introduction</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Installation</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Project Structure</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Core Concepts</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Routing</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Data Fetching</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Rendering</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Styling</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">API Reference</h4>
                                <ul className="space-y-2">
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Components</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Hooks</a></li>
                                    <li><a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">Utilities</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-64 bg-zinc-950">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                        <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
                            <span>Docs</span>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white">Introduction</span>
                        </div>

                        <h1 className="text-4xl font-bold text-white mb-6">Introduction</h1>
                        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                            Welcome to the DevFlow documentation. This comprehensive guide will help you understand the architecture, components, and best practices used in my projects.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                                    <Book className="w-5 h-5 text-indigo-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Quick Start</h3>
                                <p className="text-zinc-400 text-sm">Get up and running with the boilerplate in less than 5 minutes.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                                    <Settings className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Configuration</h3>
                                <p className="text-zinc-400 text-sm">Learn how to customize the theme, layout, and functionality.</p>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-2xl font-bold text-white mb-4 mt-12">Why DevFlow?</h2>
                            <p className="text-zinc-400 mb-6">
                                DevFlow is built on the philosophy that developer portfolios should be both beautiful and performant. It leverages the power of Next.js 14, Tailwind CSS, and Framer Motion to deliver a top-tier user experience.
                            </p>

                            <div className="bg-zinc-900 rounded-xl p-6 border border-white/5 mb-8">
                                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                                    <Terminal className="w-4 h-4 text-zinc-500" />
                                    <span className="text-sm text-zinc-500">Terminal</span>
                                </div>
                                <code className="text-sm font-mono text-indigo-300">
                                    npx create-devflow-app my-portfolio
                                </code>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                            <ul className="space-y-3 text-zinc-400 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                                    <span><strong>Server Components:</strong> Optimized for speed and SEO out of the box.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                                    <span><strong>Type Safe:</strong> Built with TypeScript for robust and maintainable code.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                                    <span><strong>Dark Mode:</strong> First-class support for dark mode with smooth transitions.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-16 flex justify-between items-center pt-8 border-t border-white/5">
                            <div></div> {/* Spacer */}
                            <a href="#" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
                                Installation <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
