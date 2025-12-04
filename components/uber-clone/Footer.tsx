"use client";

import { SiteLink } from "@/components/site-link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Uber Next</h3>
                        <p className="text-gray-400">
                            Moving people, moving the world forward.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><SiteLink href="#" className="hover:text-white transition-colors">About us</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Our offerings</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Newsroom</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Investors</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Blog</SiteLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Products</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Ride</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Drive</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Deliver</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Eat</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Uber for Business</SiteLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Global citizenship</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Safety</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Diversity and Inclusion</SiteLink></li>
                            <li><SiteLink href="#" className="hover:text-white transition-colors">Sustainability</SiteLink></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <SiteLink href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></SiteLink>
                        <SiteLink href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></SiteLink>
                        <SiteLink href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></SiteLink>
                        <SiteLink href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></SiteLink>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Uber Next Technologies Inc.</p>
                        <div className="flex gap-6">
                            <SiteLink href="#" className="hover:text-white transition-colors">Privacy</SiteLink>
                            <SiteLink href="#" className="hover:text-white transition-colors">Accessibility</SiteLink>
                            <SiteLink href="#" className="hover:text-white transition-colors">Terms</SiteLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
