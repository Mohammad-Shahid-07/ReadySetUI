"use client";

import { useState, useEffect } from "react";
import { SiteLink } from "@/components/site-link";
import { cn } from "@/lib/utils";
import { Leaf, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Subscription", href: "/subscription" },
        { name: "Care Guide", href: "/care-guide" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#14532D]/90 backdrop-blur-md shadow-md py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <SiteLink href="/" className="flex items-center gap-2 group">
                    <div className="bg-[#FEFCE8] p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Leaf className="w-6 h-6 text-[#14532D]" />
                    </div>
                    <span className="text-2xl font-serif font-bold text-[#FEFCE8] tracking-wide">
                        BloomBox
                    </span>
                </SiteLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <SiteLink
                            key={link.name}
                            href={link.href}
                            className="text-[#FEFCE8]/80 hover:text-[#FEFCE8] font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B45309] transition-all duration-300 group-hover:w-full" />
                        </SiteLink>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#FEFCE8] hover:bg-[#FEFCE8]/10 hover:text-[#FEFCE8]"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </Button>
                    <Button
                        className="bg-[#B45309] hover:bg-[#B45309]/90 text-white rounded-full px-6 font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#FEFCE8]">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#14532D] border-none text-[#FEFCE8]">
                            <div className="flex flex-col gap-8 mt-10">
                                {navLinks.map((link) => (
                                    <SiteLink
                                        key={link.name}
                                        href={link.href}
                                        className="text-2xl font-serif font-bold hover:text-[#B45309] transition-colors"
                                    >
                                        {link.name}
                                    </SiteLink>
                                ))}
                                <div className="flex flex-col gap-4 mt-4">
                                    <Button className="w-full bg-[#B45309] hover:bg-[#B45309]/90 text-white">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
