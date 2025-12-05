"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function Contact() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8">
                                ESTABLISH <span className="text-[#06B6D4]">UPLINK</span>
                            </h1>
                            <p className="text-gray-400 font-mono text-lg mb-12">
                                Our team is distributed across the metaverse.
                                Reach out for enterprise solutions, partnership inquiries, or security reports.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <Mail className="w-6 h-6 text-[#D946EF]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold font-mono mb-1">Encrypted Mail</h3>
                                        <p className="text-gray-400 font-mono">secure@cryptofolio.io</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <MapPin className="w-6 h-6 text-[#06B6D4]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold font-mono mb-1">HQ Coordinates</h3>
                                        <p className="text-gray-400 font-mono">Decentraland, District X, Block 742</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 border border-white/10">
                                        <Phone className="w-6 h-6 text-[#EAB308]" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold font-mono mb-1">Signal</h3>
                                        <p className="text-gray-400 font-mono">+1 (555) 019-2834</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm"
                        >
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-mono text-gray-400 mb-2">IDENTITY</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/20 p-3 text-white font-mono focus:border-[#D946EF] focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-mono text-gray-400 mb-2">COMMUNICATION CHANNEL</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border border-white/20 p-3 text-white font-mono focus:border-[#D946EF] focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-mono text-gray-400 mb-2">TRANSMISSION</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-black/50 border border-white/20 p-3 text-white font-mono focus:border-[#D946EF] focus:outline-none transition-colors"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button className="w-full py-3 bg-[#D946EF] text-black font-bold font-mono hover:bg-[#D946EF]/90 transition-colors">
                                    SEND TRANSMISSION
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
