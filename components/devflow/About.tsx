"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            About Me
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            I'm a passionate developer with over 5 years of experience in building digital products. I specialize in the JavaScript ecosystem, with a deep focus on React, Next.js, and Node.js.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            My journey started with a curiosity for how things work on the web, and it has evolved into a career where I get to solve complex problems and create beautiful user interfaces every day.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
                                <p className="text-zinc-500">Years of Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                                <p className="text-zinc-500">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
