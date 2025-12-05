"use client";

import React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const jobs = [
    { title: "Sous Chef", type: "Full-time", dept: "Kitchen" },
    { title: "Sommelier", type: "Full-time", dept: "Front of House" },
    { title: "Pastry Chef", type: "Full-time", dept: "Kitchen" },
    { title: "Host/Hostess", type: "Part-time", dept: "Front of House" }
];

export default function CareersPage() {
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
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Join Our Team</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We are always looking for passionate individuals to join our culinary family.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-4">
                            {jobs.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="group flex items-center justify-between p-6 bg-[#121212] border border-[#333] hover:border-[#D4AF37] transition-colors cursor-pointer"
                                >
                                    <div>
                                        <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">{job.title}</h3>
                                        <p className="text-sm text-gray-500">{job.dept} • {job.type}</p>
                                    </div>
                                    <Button variant="ghost" className="text-gray-400 group-hover:text-[#D4AF37]">Apply &rarr;</Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
