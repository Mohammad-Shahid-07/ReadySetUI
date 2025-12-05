"use client";

import React, { useState, useEffect } from 'react';
import { SiteLink } from '@/components/site-link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-white/10" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <SiteLink href="/" className="text-2xl font-bold tracking-tighter text-white font-jakarta flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-lg">Z</span>
                            </div>
                            ZenTask
                        </SiteLink>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <SiteLink href="#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Features</SiteLink>
                        <SiteLink href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Pricing</SiteLink>
                        <SiteLink href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</SiteLink>
                        <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
                            <SiteLink href="/login" className="text-white font-medium text-sm hover:text-[#10B981] transition-colors">Log in</SiteLink>
                            <SiteLink href="/signup">
                                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-semibold transition-all duration-300">
                                    Get Started
                                </Button>
                            </SiteLink>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#10B981] focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0A0A0A] border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <SiteLink href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Features</SiteLink>
                        <SiteLink href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Pricing</SiteLink>
                        <SiteLink href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">About</SiteLink>
                        <SiteLink href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Log in</SiteLink>
                        <SiteLink href="/signup" className="block w-full text-left px-3 py-2">
                            <Button className="w-full bg-[#10B981] hover:bg-[#059669] text-black font-bold rounded-lg">
                                Get Started
                            </Button>
                        </SiteLink>
                    </div>
                </div>
            )}
        </nav>
    );
}
