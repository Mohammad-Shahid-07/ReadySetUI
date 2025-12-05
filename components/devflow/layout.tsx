"use client";
import React, { useState } from 'react';
import { Menu, X, Github, Twitter, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-zinc-950/80 backdrop-blur-xl z-50 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <SiteLink href="/" className="flex items-center gap-2 group">
                        <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20 group-hover:border-indigo-500/50 transition-colors">
                            <Code2 className="h-6 w-6 text-indigo-400" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-zinc-100">DevFlow</span>
                    </SiteLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <SiteLink href="/about" className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors">About</SiteLink>
                        <SiteLink href="/features" className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors">Features</SiteLink>
                        <SiteLink href="/case-studies" className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors">Work</SiteLink>
                        <SiteLink href="/blog" className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors">Blog</SiteLink>
                        <SiteLink href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors">Pricing</SiteLink>
                        <SiteLink href="/docs" className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors">Docs</SiteLink>
                        <SiteLink href="/contact">
                            <Button variant="outline" className="border-indigo-500/20 hover:bg-indigo-500/10 hover:text-indigo-400 text-zinc-300">
                                Let's Talk
                            </Button>
                        </SiteLink>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
                    <SiteLink href="/about" className="text-sm font-medium text-zinc-400 hover:text-indigo-400">About</SiteLink>
                    <SiteLink href="/features" className="text-sm font-medium text-zinc-400 hover:text-indigo-400">Features</SiteLink>
                    <SiteLink href="/case-studies" className="text-sm font-medium text-zinc-400 hover:text-indigo-400">Work</SiteLink>
                    <SiteLink href="/blog" className="text-sm font-medium text-zinc-400 hover:text-indigo-400">Blog</SiteLink>
                    <SiteLink href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-indigo-400">Pricing</SiteLink>
                    <SiteLink href="/docs" className="text-sm font-medium text-zinc-400 hover:text-indigo-400">Docs</SiteLink>
                    <SiteLink href="/contact">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                            Let's Talk
                        </Button>
                    </SiteLink>
                </div>
            )}
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20">
                                <Code2 className="h-5 w-5 text-indigo-400" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-zinc-100">DevFlow</span>
                        </div>
                        <p className="text-zinc-500 max-w-sm">
                            Crafting digital experiences with precision and passion.
                            Specializing in React, Next.js, and modern UI design.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-zinc-100 mb-4">Navigation</h4>
                        <ul className="space-y-2 text-zinc-500">
                            <li><SiteLink href="/about" className="hover:text-indigo-400 transition-colors">About</SiteLink></li>
                            <li><SiteLink href="/case-studies" className="hover:text-indigo-400 transition-colors">Case Studies</SiteLink></li>
                            <li><SiteLink href="/blog" className="hover:text-indigo-400 transition-colors">Blog</SiteLink></li>
                            <li><SiteLink href="/contact" className="hover:text-indigo-400 transition-colors">Contact</SiteLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-zinc-100 mb-4">Resources</h4>
                        <ul className="space-y-2 text-zinc-500">
                            <li><SiteLink href="/docs" className="hover:text-indigo-400 transition-colors">Documentation</SiteLink></li>
                            <li><SiteLink href="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</SiteLink></li>
                            <li><SiteLink href="/features" className="hover:text-indigo-400 transition-colors">Tech Stack</SiteLink></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-600">© {new Date().getFullYear()} DevFlow. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-600 hover:text-indigo-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-600 hover:text-indigo-400 transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-600 hover:text-indigo-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
