"use client";

import React from "react";
import Layout from "./layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Contact Us</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            For press inquiries, private events, or general questions, please get in touch.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif text-[#D4AF37]">Location & Hours</h3>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                    <p>123 Culinary Avenue,<br />Metropolis, NY 10012</p>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <Clock className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                    <div>
                                        <p>Tue - Sat: 18:00 - 23:00</p>
                                        <p>Sun - Mon: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif text-[#D4AF37]">Get in Touch</h3>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                    <p>+1 (555) 123-4567</p>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Mail className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                    <p>reservations@chefstable.com</p>
                                </div>
                            </div>

                            <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden relative">
                                {/* Placeholder for map */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-[#222]">
                                    Map View
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-[#121212] p-8 md:p-12 border border-[#D4AF37]/20"
                        >
                            <h3 className="text-2xl font-serif text-[#D4AF37] mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-gray-400">Name</label>
                                    <Input className="bg-[#1A1A1A] border-[#333] text-white rounded-none h-12 focus:border-[#D4AF37]" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-gray-400">Email</label>
                                    <Input className="bg-[#1A1A1A] border-[#333] text-white rounded-none h-12 focus:border-[#D4AF37]" placeholder="Your Email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-gray-400">Message</label>
                                    <Textarea className="bg-[#1A1A1A] border-[#333] text-white rounded-none min-h-[150px] focus:border-[#D4AF37]" placeholder="How can we help you?" />
                                </div>
                                <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#B5952F] font-serif tracking-wide rounded-none h-12 text-lg">
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
