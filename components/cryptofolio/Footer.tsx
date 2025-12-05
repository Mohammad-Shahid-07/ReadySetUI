"use client";

import { SiteLink } from "@/components/site-link";
import { Wallet, Twitter, Github, Disc } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <SiteLink href="/" className="flex items-center gap-2 mb-6">
                            <Wallet className="w-8 h-8 text-[#06B6D4]" />
                            <span className="text-xl font-bold tracking-tighter font-mono text-white">
                                CRYPTO<span className="text-[#D946EF]">FOLIO</span>
                            </span>
                        </SiteLink>
                        <p className="text-gray-400 font-mono text-sm max-w-md">
                            The advanced portfolio tracker for the decentralized web.
                            Secure, fast, and built for the future of finance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-mono mb-6">PLATFORM</h4>
                        <ul className="space-y-4">
                            {["Features", "Integrations", "Pricing", "API"].map((item) => (
                                <li key={item}>
                                    <SiteLink href="#" className="text-gray-400 hover:text-[#06B6D4] font-mono text-sm transition-colors">
                                        {item}
                                    </SiteLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-mono mb-6">COMPANY</h4>
                        <ul className="space-y-4">
                            {["About", "Blog", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <SiteLink href="#" className="text-gray-400 hover:text-[#06B6D4] font-mono text-sm transition-colors">
                                        {item}
                                    </SiteLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 font-mono text-xs">
                        © 2024 CryptoFolio Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <SiteLink href="#" className="text-gray-400 hover:text-[#D946EF] transition-colors">
                            <Twitter className="w-5 h-5" />
                        </SiteLink>
                        <SiteLink href="#" className="text-gray-400 hover:text-[#D946EF] transition-colors">
                            <Github className="w-5 h-5" />
                        </SiteLink>
                        <SiteLink href="#" className="text-gray-400 hover:text-[#D946EF] transition-colors">
                            <Disc className="w-5 h-5" />
                        </SiteLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
