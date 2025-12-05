"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Total Volume", value: "$84.2B", change: "+12.5%" },
    { label: "Active Wallets", value: "2.4M", change: "+5.2%" },
    { label: "Supported Assets", value: "12,000+", change: "+120" },
    { label: "Avg. Latency", value: "12ms", change: "-4ms" },
];

export function Stats() {
    return (
        <section className="py-20 bg-black border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold font-mono text-white mb-2 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-2">
                                {stat.label}
                            </div>
                            <div className="text-xs font-mono text-[#06B6D4]">
                                {stat.change}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
