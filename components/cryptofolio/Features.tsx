"use client";

import { motion } from "framer-motion";
import { Activity, Lock, Smartphone, Zap, Globe, Layers } from "lucide-react";

const features = [
    {
        icon: Activity,
        title: "Real-Time Analytics",
        description: "Monitor your portfolio performance with millisecond precision. Live updates via WebSocket.",
        color: "text-[#D946EF]",
    },
    {
        icon: Lock,
        title: "Military-Grade Encryption",
        description: "Your data is encrypted locally before it ever leaves your device. Zero-knowledge architecture.",
        color: "text-[#06B6D4]",
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Full functionality on iOS and Android. Biometric authentication and widget support.",
        color: "text-[#EAB308]",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built on Rust and WebAssembly for unparalleled performance and low latency.",
        color: "text-[#D946EF]",
    },
    {
        icon: Globe,
        title: "Multi-Chain Support",
        description: "Track assets across Ethereum, Solana, BSC, Avalanche, and 50+ other chains.",
        color: "text-[#06B6D4]",
    },
    {
        icon: Layers,
        title: "DeFi Integration",
        description: "Direct integration with Aave, Uniswap, and Curve for yield tracking.",
        color: "text-[#EAB308]",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#06B6D4]">
                            SYSTEM CAPABILITIES
                        </span>
                    </h2>
                    <p className="text-gray-400 font-mono max-w-2xl mx-auto">
                        Advanced tools for the modern crypto investor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 bg-white/5 border border-white/10 hover:border-[#D946EF]/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D946EF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <feature.icon className={`w-12 h-12 ${feature.color} mb-6 relative z-10`} />

                            <h3 className="text-xl font-bold font-mono text-white mb-4 relative z-10">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                                {feature.description}
                            </p>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#D946EF] transition-colors" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#D946EF] transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#D946EF] transition-colors" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#D946EF] transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
