"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChefBio() {
    return (
        <section className="py-24 bg-[#1A1A1A] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                            <div className="absolute inset-0 border-2 border-[#D4AF37] translate-x-4 translate-y-4" />
                            <Image
                                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop"
                                alt="Chef Alexander Thorne"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-serif">The Visionary</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            Chef Alexander <br />
                            <span className="italic text-gray-400">Thorne</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
                            <p>
                                &quot;Cooking is not just about ingredients; it&apos;s about memory, emotion, and the relentless pursuit of perfection.&quot;
                            </p>
                            <p>
                                With over two decades of experience in Michelin-starred kitchens across Paris, Tokyo, and New York, Chef Thorne brings a unique philosophy to Chef&apos;s Table. His approach marries classical French technique with the bold, umami-rich flavors of modern Asian cuisine.
                            </p>
                            <p>
                                At Chef&apos;s Table, he curates an intimate dining experience where the boundaries between the kitchen and the dining room dissolve, inviting guests to witness the artistry behind every plate.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-8">
                            <div className="text-center">
                                <span className="block text-3xl font-serif text-[#D4AF37]">3</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">Michelin Stars</span>
                            </div>
                            <div className="w-px h-12 bg-gray-700" />
                            <div className="text-center">
                                <span className="block text-3xl font-serif text-[#D4AF37]">20+</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
                            </div>
                            <div className="w-px h-12 bg-gray-700" />
                            <div className="text-center">
                                <span className="block text-3xl font-serif text-[#D4AF37]">1</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500">Vision</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
