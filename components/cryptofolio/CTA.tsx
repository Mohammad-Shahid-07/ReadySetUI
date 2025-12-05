"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site-link";

export function CTA() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D946EF]/10" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-mono mb-8 text-white"
                >
                    READY TO ENTER THE <br />
                    <span className="text-[#D946EF]">MATRIX?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 font-mono mb-12"
                >
                    Join 2.4 million users tracking their financial future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <SiteLink
                        href="/signup"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#06B6D4] text-black font-bold font-mono text-lg hover:bg-[#06B6D4]/90 transition-colors"
                    >
                        INITIALIZE PROTOCOL <ArrowRight className="w-5 h-5" />
                    </SiteLink>
                </motion.div>
            </div>
        </section>
    );
}
