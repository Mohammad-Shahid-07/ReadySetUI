"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Open to work
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                        >
                            Crafting <span className="text-emerald-400">digital</span> <br />
                            masterpieces.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-zinc-400 mb-10 leading-relaxed"
                        >
                            I transform complex problems into elegant, high-performance web applications.
                            Specializing in React, Node.js, and cloud architecture.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                            >
                                View Projects <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto justify-center text-center"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex items-center gap-8 text-zinc-500"
                        >
                            <div className="flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-emerald-500" />
                                <span>Clean Code</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-emerald-500" />
                                <span>Modern Stack</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
                            <Image
                                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding Setup"
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-white font-bold">50+ Projects</p>
                                <p className="text-zinc-500 text-xs">Delivered Successfully</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
