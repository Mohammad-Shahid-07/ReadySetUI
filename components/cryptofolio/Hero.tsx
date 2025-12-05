"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { SiteLink } from "@/components/site-link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D946EF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#06B6D4] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-1000" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
                        </span>
                        <span className="text-sm font-mono text-[#06B6D4]">V2.0 IS LIVE</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 font-mono"
                >
                    TRACK YOUR ASSETS
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#06B6D4] animate-gradient-x">
                        ACROSS THE METAVERSE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-mono"
                >
                    Real-time analytics for the decentralized economy.
                    <br />
                    Zero latency. Maximum security. Total control.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <SiteLink
                        href="/signup"
                        className="group relative px-8 py-4 bg-[#D946EF] text-black font-bold font-mono text-lg overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            START TRACKING <ArrowRight className="w-5 h-5" />
                        </span>
                    </SiteLink>

                    <SiteLink
                        href="/demo"
                        className="px-8 py-4 border border-white/20 text-white font-mono text-lg hover:bg-white/5 transition-colors backdrop-blur-sm"
                    >
                        LIVE DEMO
                    </SiteLink>
                </motion.div>

                {/* Stats Ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 border-y border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden"
                >
                    <div className="flex items-center gap-12 py-4 animate-marquee whitespace-nowrap">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="flex items-center gap-8 text-sm font-mono text-gray-500">
                                <span className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#EAB308]" /> BTC $64,231.45
                                </span>
                                <span className="flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-[#06B6D4]" /> ETH $3,452.12
                                </span>
                                <span className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-[#D946EF]" /> SOL $145.67
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
