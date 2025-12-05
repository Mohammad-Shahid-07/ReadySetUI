"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Let&apos;s work together
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                            Have a project in mind? I&apos;m always interested in hearing about new opportunities and interesting projects.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Email</p>
                                    <p className="font-medium">hello@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Phone</p>
                                    <p className="font-medium">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-zinc-300">
                                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-white">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Location</p>
                                    <p className="font-medium">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">First Name</label>
                                    <Input placeholder="John" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400">Last Name</label>
                                    <Input placeholder="Doe" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Email</label>
                                <Input type="email" placeholder="john@example.com" className="bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Message</label>
                                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-zinc-950 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500" />
                            </div>

                            <button className="w-full py-4 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
