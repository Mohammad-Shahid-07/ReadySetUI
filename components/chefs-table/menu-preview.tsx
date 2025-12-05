"use client";

import React, { useRef } from "react";
import { SiteLink } from "@/components/site-link";
import { motion, useScroll, useTransform } from "framer-motion";

const dishes = [
    {
        name: "Wagyu Tartare",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
        price: "$45"
    },
    {
        name: "Hokkaido Scallop",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
        price: "$38"
    },
    {
        name: "Truffle Risotto",
        image: "https://images.unsplash.com/photo-1633321769032-77d32052e7d2?q=80&w=2070&auto=format&fit=crop",
        price: "$42"
    },
    {
        name: "Lobster Bisque",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop",
        price: "$36"
    }
];

export default function MenuPreview() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#121212]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 px-16">
                    <div className="flex flex-col justify-center min-w-[40vw]">
                        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8">
                            Culinary <br />
                            <span className="text-[#D4AF37] italic">Artistry</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-md mb-12">
                            Each dish is a masterpiece, crafted with precision and passion.
                        </p>
                        <SiteLink href="/menu" className="text-[#D4AF37] uppercase tracking-widest hover:text-white transition-colors">
                            View Full Menu &rarr;
                        </SiteLink>
                    </div>

                    {dishes.map((dish, i) => (
                        <div key={i} className="relative h-[70vh] w-[40vw] shrink-0 overflow-hidden group">
                            <img
                                src={dish.image}
                                alt={dish.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-3xl font-serif text-white mb-2">{dish.name}</h3>
                                <p className="text-[#D4AF37] text-xl font-serif">{dish.price}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
