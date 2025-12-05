"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop", // Interior
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", // Food
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop", // Atmosphere
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop", // Chef
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", // Plating
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop", // Wine
];

export default function Gallery() {
    return (
        <section className="py-24 bg-[#1A1A1A]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-serif">Atmosphere</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Inside the Experience</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-square overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
