"use client";

import React, { useRef } from "react";
import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={containerRef} className="relative h-[150vh] w-full bg-[#1A1A1A]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Video Background */}
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://videos.pexels.com/video-files/3196296/3196296-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ y, opacity }}
                    className="relative z-20 text-center px-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] leading-none font-serif font-bold text-white mix-blend-overlay"
                    >
                        CHEF&apos;S
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] leading-none font-serif font-bold text-[#D4AF37] mb-8"
                    >
                        TABLE
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <SiteLink href="/reservations">
                            <Button className="bg-[#D4AF37] text-black hover:bg-white hover:text-black rounded-full px-12 py-8 text-lg font-serif tracking-widest transition-all duration-500 hover:scale-105">
                                RESERVE
                            </Button>
                        </SiteLink>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-xs uppercase tracking-[0.3em]"
                >
                    Scroll to Explore
                </motion.div>
            </div>
        </div>
    );
}
