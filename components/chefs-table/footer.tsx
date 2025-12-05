"use client";

import React from "react";
import { SiteLink } from "@/components/site-link";
import { ChefHat, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="bg-[#121212] border-t border-[#D4AF37]/20 pt-20 pb-10 text-gray-400">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <ChefHat className="w-8 h-8 text-[#D4AF37]" />
                            <span className="text-2xl font-serif font-bold text-white tracking-wider">
                                Chef&apos;s <span className="text-[#D4AF37]">Table</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            An exclusive culinary journey where art meets flavor. Experience the pinnacle of fine dining in an intimate setting.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[#D4AF37] transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-[#D4AF37] transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif text-lg tracking-wide">Explore</h4>
                        <ul className="space-y-4">
                            <li><SiteLink href="/menu" className="hover:text-[#D4AF37] transition-colors">Our Menu</SiteLink></li>
                            <li><SiteLink href="/private-dining" className="hover:text-[#D4AF37] transition-colors">Private Dining</SiteLink></li>
                            <li><SiteLink href="/reservations" className="hover:text-[#D4AF37] transition-colors">Reservations</SiteLink></li>
                            <li><SiteLink href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</SiteLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif text-lg tracking-wide">Visit Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                <span>123 Culinary Avenue,<br />Metropolis, NY 10012</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                <span>reservations@chefstable.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif text-lg tracking-wide">Newsletter</h4>
                        <p className="text-sm">Subscribe for seasonal menu updates and exclusive event invitations.</p>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Your email"
                                className="bg-[#1A1A1A] border-[#333] focus:border-[#D4AF37] rounded-none"
                            />
                            <Button className="bg-[#D4AF37] text-black hover:bg-[#B5952F] rounded-none">
                                Join
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase">
                    <p>&copy; {new Date().getFullYear()} Chef&apos;s Table. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
