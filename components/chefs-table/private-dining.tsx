"use client";

import React from "react";
import Layout from "./layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiteLink } from "@/components/site-link";
import Image from "next/image";

export default function PrivateDiningPage() {
    return (
        <Layout>
            <div className="pt-32 pb-24 bg-[#1A1A1A] min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Private Dining</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Exclusive spaces for intimate gatherings, corporate events, and special celebrations.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-video overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                alt="The Gold Room"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h2 className="text-3xl font-serif text-[#D4AF37] mb-6">The Gold Room</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our signature private dining room, featuring gold-leaf ceilings and a dedicated service team. Perfect for up to 14 guests who desire complete privacy and luxury.
                            </p>
                            <ul className="space-y-2 text-gray-400 mb-8">
                                <li>• Seating for 8-14 guests</li>
                                <li>• Dedicated Sommelier</li>
                                <li>• Customizable Menu</li>
                                <li>• Private Entrance</li>
                            </ul>
                            <SiteLink href="/contact">
                                <Button className="bg-[#D4AF37] text-black hover:bg-[#B5952F] w-fit rounded-none px-8">Inquire Now</Button>
                            </SiteLink>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center order-2 lg:order-1"
                        >
                            <h2 className="text-3xl font-serif text-[#D4AF37] mb-6">The Cellar</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Dine surrounded by our award-winning wine collection. An atmospheric setting for wine lovers and intimate conversations.
                            </p>
                            <ul className="space-y-2 text-gray-400 mb-8">
                                <li>• Seating for 4-8 guests</li>
                                <li>• Wine Pairing Focus</li>
                                <li>• Vintage Tasting Options</li>
                                <li>• Rustic Elegance</li>
                            </ul>
                            <SiteLink href="/contact">
                                <Button className="bg-[#D4AF37] text-black hover:bg-[#B5952F] w-fit rounded-none px-8">Inquire Now</Button>
                            </SiteLink>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-video overflow-hidden order-1 lg:order-2"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                                alt="The Cellar"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
