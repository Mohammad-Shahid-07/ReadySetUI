"use client";

import { SiteLink } from "@/components/site-link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="High Intensity Workout"
                    fill
                    className="object-cover object-center opacity-60"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest rounded-sm">
                                New Classes Added
                            </span>
                            <span className="text-yellow-500 flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
                                <Zap className="w-3 h-3 fill-current" /> High Voltage
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-none mb-6 tracking-tighter">
                            Unleash <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                                Your Power
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
                            Experience the next evolution of fitness. High-intensity interval training designed to push your limits and transform your body.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <SiteLink
                                href="/join"
                                className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </SiteLink>

                            <SiteLink
                                href="/classes"
                                className="px-8 py-4 border border-white/30 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center"
                            >
                                View Classes
                            </SiteLink>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20" />
            <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px] z-10" />
        </section>
    );
}
