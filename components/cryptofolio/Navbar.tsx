"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Wallet } from "lucide-react";
import { SiteLink } from "@/components/site-link";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { WalletModal } from "./WalletModal";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <SiteLink href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#D946EF] blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            <Wallet className="w-8 h-8 text-[#06B6D4] relative z-10" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter font-mono">
                            CRYPTO<span className="text-[#D946EF]">FOLIO</span>
                        </span>
                    </SiteLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Features", "Pricing", "About", "Blog"].map((item) => (
                            <SiteLink
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm font-mono text-gray-400 hover:text-[#06B6D4] transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D946EF] group-hover:w-full transition-all duration-300" />
                            </SiteLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <SiteLink href="/login" className="text-sm font-mono text-white hover:text-[#D946EF] transition-colors">
                            Login
                        </SiteLink>
                        <WalletModal />
                    </div>

                    {/* Mobile Menu Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="md:hidden text-white hover:text-[#D946EF] transition-colors">
                                <Menu />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-black/95 border-l border-white/10 w-[300px]">
                            <div className="flex flex-col gap-8 pt-10">
                                {["Features", "Pricing", "About", "Contact"].map((item) => (
                                    <SiteLink
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        className="text-lg font-mono text-gray-300 hover:text-[#06B6D4]"
                                    >
                                        {item}
                                    </SiteLink>
                                ))}
                                <div className="flex flex-col gap-4 mt-4">
                                    <SiteLink
                                        href="/login"
                                        className="text-center py-2 text-white hover:text-[#D946EF] font-mono"
                                    >
                                        Login
                                    </SiteLink>
                                    <WalletModal />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
