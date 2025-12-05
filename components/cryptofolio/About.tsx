"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function About() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-mono mb-8"
                    >
                        WE ARE <span className="text-[#D946EF]">DECENTRALIZED</span>.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 text-lg text-gray-400 font-mono leading-relaxed"
                    >
                        <p>
                            CryptoFolio was born from a simple need: clarity in the chaos of Web3.
                            We believe that financial sovereignty shouldn&apos;t come at the cost of usability.
                        </p>
                        <p>
                            Our mission is to build the most advanced, secure, and performant portfolio tracking engine in the metaverse.
                            We are a team of engineers, designers, and traders who live and breathe crypto.
                        </p>
                        <p>
                            We don&apos;t track you. We help you track your assets.
                            Zero cookies. Zero trackers. Zero compromise.
                        </p>
                    </motion.div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border border-white/10 bg-white/5">
                            <h3 className="text-xl font-bold font-mono text-white mb-4">Our Vision</h3>
                            <p className="text-gray-400 font-mono">
                                To become the operating system for the decentralized economy.
                            </p>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/5">
                            <h3 className="text-xl font-bold font-mono text-white mb-4">Our Stack</h3>
                            <p className="text-gray-400 font-mono">
                                Built on Next.js, Rust, and pure mathematics.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
