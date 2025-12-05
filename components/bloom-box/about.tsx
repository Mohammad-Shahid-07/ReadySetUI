"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-[#14532D] mb-6"
                        >
                            Our Roots
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-[#14532D]/70 max-w-3xl mx-auto"
                        >
                            We started BloomBox with a simple mission: to reconnect people with nature, one rare plant at a time.
                        </motion.p>
                    </div>

                    {/* Story Section */}
                    <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                        <div className="md:w-1/2">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"
                                    alt="Greenhouse"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 space-y-6 text-[#14532D]">
                            <h2 className="text-3xl font-serif font-bold">From Seed to Sanctuary</h2>
                            <p className="text-lg leading-relaxed opacity-80">
                                It began in a small apartment filled with over 100 plants. Our founder, Elena, realized that finding healthy, rare plants was a challenge for urban dwellers. Most nurseries didn't ship, and big-box stores only carried the basics.
                            </p>
                            <p className="text-lg leading-relaxed opacity-80">
                                BloomBox was born out of a desire to bridge that gap. We partner with sustainable growers to curate a collection of unique, hard-to-find specimens and deliver them safely to your doorstep.
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-[#14532D] text-[#FEFCE8] rounded-3xl p-12 md:p-20 mb-24">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Sustainability First</h2>
                            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-12">
                                We believe that loving nature means protecting it. That's why we use 100% plastic-free packaging, offset carbon emissions for every shipment, and source our plants from growers who prioritize eco-friendly practices.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="p-6 bg-[#FEFCE8]/10 rounded-2xl backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-2">100%</h3>
                                    <p className="opacity-80">Plastic-Free Packaging</p>
                                </div>
                                <div className="p-6 bg-[#FEFCE8]/10 rounded-2xl backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-2">Carbon</h3>
                                    <p className="opacity-80">Neutral Shipping</p>
                                </div>
                                <div className="p-6 bg-[#FEFCE8]/10 rounded-2xl backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-2">Ethical</h3>
                                    <p className="opacity-80">Sourcing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="text-center">
                        <h2 className="text-4xl font-serif font-bold text-[#14532D] mb-12">Meet the Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                            {[
                                { name: "Elena Ross", role: "Founder & Curator", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
                                { name: "David Kim", role: "Head Horticulturalist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" },
                                { name: "Sarah Jones", role: "Customer Success", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" },
                            ].map((member) => (
                                <div key={member.name} className="group">
                                    <div className="relative aspect-square rounded-full overflow-hidden mb-6 mx-auto w-48 border-4 border-[#B45309] shadow-lg">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#14532D]">{member.name}</h3>
                                    <p className="text-[#14532D]/60">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
