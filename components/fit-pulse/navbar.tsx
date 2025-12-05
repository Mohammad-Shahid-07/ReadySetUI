"use client";

import { SiteLink } from "@/components/site-link";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <SiteLink href="/" className="flex items-center gap-2 group">
                        <div className="p-2 bg-yellow-500 rounded-lg group-hover:bg-yellow-400 transition-colors">
                            <Zap className="w-6 h-6 text-black fill-current" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tighter uppercase italic">
                            Fit<span className="text-yellow-500">Pulse</span>
                        </span>
                    </SiteLink>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="/classes">Classes</NavLink>
                        <NavLink href="/trainers">Trainers</NavLink>
                        <NavLink href="/schedule">Schedule</NavLink>
                        <NavLink href="/pricing">Pricing</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <SiteLink
                            href="/join"
                            className="px-6 py-2 bg-yellow-500 text-black font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all transform hover:skew-x-[-10deg] skew-x-[-10deg]"
                        >
                            <span className="block skew-x-[10deg]">Join Now</span>
                        </SiteLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-yellow-500 transition-colors"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col">
                            <MobileNavLink href="/classes" onClick={() => setIsOpen(false)}>Classes</MobileNavLink>
                            <MobileNavLink href="/trainers" onClick={() => setIsOpen(false)}>Trainers</MobileNavLink>
                            <MobileNavLink href="/schedule" onClick={() => setIsOpen(false)}>Schedule</MobileNavLink>
                            <MobileNavLink href="/pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
                            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                            <SiteLink
                                href="/join"
                                className="mt-4 w-full py-3 bg-yellow-500 text-black font-bold text-center uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Join Now
                            </SiteLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <SiteLink
            href={href}
            className="text-sm font-bold text-gray-300 uppercase tracking-wider hover:text-yellow-500 transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full" />
        </SiteLink>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <SiteLink
            href={href}
            onClick={onClick}
            className="text-lg font-bold text-gray-300 uppercase tracking-wider hover:text-yellow-500 transition-colors"
        >
            {children}
        </SiteLink>
    );
}
