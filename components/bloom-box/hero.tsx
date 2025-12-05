"use client";

import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax Effect (Simulated with fixed attachment or simple CSS) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=2574&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-[#FEFCE8]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight">
                        Bring the <span className="text-[#4ADE80] italic">Jungle</span> Home
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light text-[#FEFCE8]/90"
                >
                    Discover rare, exotic plants delivered straight to your door. Curated for the modern urban jungle.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <SiteLink href="/shop">
                        <Button className="bg-[#B45309] hover:bg-[#B45309]/90 text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,83,9,0.5)] group">
                            Start Your Journey
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </SiteLink>
                    <SiteLink href="/subscription">
                        <Button variant="outline" className="bg-transparent border-[#FEFCE8] text-[#FEFCE8] hover:bg-[#FEFCE8] hover:text-[#14532D] text-lg px-8 py-6 rounded-full transition-all duration-300">
                            View Subscriptions
                        </Button>
                    </SiteLink>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-[#FEFCE8]/50 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-[#FEFCE8] rounded-full animate-scroll" />
                </div>
            </motion.div>
        </section>
    );
}
