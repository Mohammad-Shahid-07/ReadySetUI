"use client";

import React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";

export default function SustainabilityPage() {
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
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Sustainability</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our commitment to the earth is as strong as our passion for flavor.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-serif text-[#D4AF37] mb-6">Farm to Table</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We work directly with local farmers who share our values of regenerative agriculture.
                                Every ingredient has a story, and we are proud to tell it.
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li>• 100% Organic Produce</li>
                                <li>• Grass-fed, Pasture-raised Meats</li>
                                <li>• Sustainable Seafood Choices</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-square bg-gray-800 relative overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
                                alt="Farm"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "Zero Waste", desc: "We compost 100% of our organic waste and aim for zero landfill contribution." },
                            { title: "Energy Efficient", desc: "Our kitchen uses state-of-the-art energy-efficient appliances." },
                            { title: "Community", desc: "We support local food banks and educational programs." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="bg-[#121212] p-8 border border-[#D4AF37]/20"
                            >
                                <h3 className="text-xl font-serif text-[#D4AF37] mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
