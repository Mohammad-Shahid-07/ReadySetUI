"use client";

import React, { useState, useEffect } from "react";
import { SiteLink } from "@/components/site-link";
import { Menu, X, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Private Dining", href: "/private-dining" },
        { name: "Reservations", href: "/reservations" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-[#1A1A1A]/90 backdrop-blur-md border-[#D4AF37]/20 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <SiteLink href="/" className="flex items-center gap-2 group">
                    <ChefHat className="w-8 h-8 text-[#D4AF37] transition-transform group-hover:rotate-12" />
                    <span className="text-2xl font-serif font-bold text-white tracking-wider">
                        Chef&apos;s <span className="text-[#D4AF37]">Table</span>
                    </span>
                </SiteLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <SiteLink
                            key={link.name}
                            href={link.href}
                            className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#D4AF37] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full" />
                        </SiteLink>
                    ))}
                    <SiteLink href="/reservations">
                        <Button className="bg-[#D4AF37] text-black hover:bg-[#B5952F] font-serif tracking-wide rounded-none px-6">
                            Book a Table
                        </Button>
                    </SiteLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <SiteLink
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </SiteLink>
                ))}
                <SiteLink href="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="bg-[#D4AF37] text-black hover:bg-[#B5952F] font-serif tracking-wide rounded-none px-8 py-6 text-lg">
                        Book a Table
                    </Button>
                </SiteLink>
            </div>
        </nav>
    );
}
