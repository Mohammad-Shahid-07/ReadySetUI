"use client";

import { SiteLink } from "@/components/site-link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <SiteLink href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Uber Next
                </SiteLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <SiteLink href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Ride
                    </SiteLink>
                    <SiteLink href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Drive
                    </SiteLink>
                    <SiteLink href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Business
                    </SiteLink>
                    <SiteLink href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        About
                    </SiteLink>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <SiteLink href="#" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                        Log in
                    </SiteLink>
                    <SiteLink
                        href="#"
                        className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Sign up
                    </SiteLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10 absolute top-20 left-0 right-0 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
                    <SiteLink href="#" className="text-lg font-medium text-gray-300 hover:text-white">
                        Ride
                    </SiteLink>
                    <SiteLink href="#" className="text-lg font-medium text-gray-300 hover:text-white">
                        Drive
                    </SiteLink>
                    <SiteLink href="#" className="text-lg font-medium text-gray-300 hover:text-white">
                        Business
                    </SiteLink>
                    <SiteLink href="#" className="text-lg font-medium text-gray-300 hover:text-white">
                        About
                    </SiteLink>
                    <div className="h-px bg-white/10 my-2" />
                    <SiteLink href="#" className="text-lg font-medium text-gray-300 hover:text-white">
                        Log in
                    </SiteLink>
                    <SiteLink
                        href="#"
                        className="px-4 py-3 bg-white text-black text-center font-bold rounded-full hover:bg-gray-200"
                    >
                        Sign up
                    </SiteLink>
                </div>
            )}
        </nav>
    );
}
