import React from 'react';
import { Dog, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteLink } from '@/components/site-link';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <SiteLink href="/" className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-600/20">
                            <Dog className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">PuppyTech</span>
                    </SiteLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <SiteLink href="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</SiteLink>
                        <SiteLink href="/services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</SiteLink>
                        <SiteLink href="/care-guide" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Care Guide</SiteLink>
                        <SiteLink href="/blog" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Blog</SiteLink>
                        <SiteLink href="/faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</SiteLink>
                        <SiteLink href="/gallery" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Gallery</SiteLink>
                        <SiteLink href="/contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Contact</SiteLink>
                        <SiteLink href="/signup">
                            <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20">
                                Get Started
                            </Button>
                        </SiteLink>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
                            {isOpen ? <X /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
                    <SiteLink href="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600">About</SiteLink>
                    <SiteLink href="/services" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Services</SiteLink>
                    <SiteLink href="/care-guide" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Care Guide</SiteLink>
                    <SiteLink href="/blog" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Blog</SiteLink>
                    <SiteLink href="/faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600">FAQ</SiteLink>
                    <SiteLink href="/gallery" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Gallery</SiteLink>
                    <SiteLink href="/contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600">Contact</SiteLink>
                    <SiteLink href="/signup">
                        <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-full">
                            Get Started
                        </Button>
                    </SiteLink>
                </div>
            )}
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-indigo-600 p-2 rounded-lg">
                                <Dog className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">PuppyTech</span>
                        </div>
                        <p className="text-slate-500 max-w-sm">
                            The world's first data-driven nutrition platform for puppies.
                            Give them the health foundation they deserve.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li><SiteLink href="/services" className="hover:text-indigo-600">Services</SiteLink></li>
                            <li><SiteLink href="/care-guide" className="hover:text-indigo-600">Care Guide</SiteLink></li>
                            <li><SiteLink href="/gallery" className="hover:text-indigo-600">Gallery</SiteLink></li>
                            <li><SiteLink href="/signup" className="hover:text-indigo-600">Pricing</SiteLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-slate-500">
                            <li><SiteLink href="/about" className="hover:text-indigo-600">About Us</SiteLink></li>
                            <li><SiteLink href="/blog" className="hover:text-indigo-600">Blog</SiteLink></li>
                            <li><SiteLink href="/contact" className="hover:text-indigo-600">Contact</SiteLink></li>
                            <li><SiteLink href="/faq" className="hover:text-indigo-600">FAQ</SiteLink></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">© 2024 Puppy Technologies Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-slate-900">Twitter</a>
                        <a href="#" className="text-slate-400 hover:text-slate-900">Instagram</a>
                        <a href="#" className="text-slate-400 hover:text-slate-900">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}
