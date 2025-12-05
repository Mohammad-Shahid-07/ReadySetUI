"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { SiteLink } from "@/components/site-link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

const posts = [
    {
        slug: "future-of-defi-2025",
        title: "The Future of DeFi in 2025: A Technical Analysis",
        excerpt: "Exploring the convergence of Layer 2 scaling solutions, zero-knowledge proofs, and institutional adoption.",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        category: "Analysis",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    },
    {
        slug: "security-best-practices",
        title: "Cold Storage vs. MPC: Securing Your Digital Legacy",
        excerpt: "A deep dive into Multi-Party Computation wallets and how they compare to traditional hardware wallets.",
        date: "Dec 10, 2024",
        readTime: "8 min read",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    },
    {
        slug: "nft-market-cycles",
        title: "Understanding NFT Market Cycles Through On-Chain Data",
        excerpt: "How to use volume, floor price, and holder distribution metrics to predict the next NFT summer.",
        date: "Dec 05, 2024",
        readTime: "6 min read",
        category: "Market",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    },
    {
        slug: "layer-3-explained",
        title: "Layer 3s Explained: The Application Specific Chain",
        excerpt: "Why app-chains are the inevitable future of high-performance decentralized applications.",
        date: "Nov 28, 2024",
        readTime: "4 min read",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
    },
];

export default function Blog() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6">
                            SIGNAL <span className="text-[#D946EF]">TRANSMISSIONS</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-lg max-w-2xl mx-auto">
                            Insights, analysis, and technical deep dives from the CryptoFolio research team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden border border-white/10 aspect-video mb-6">
                                    <div className="absolute inset-0 bg-[#D946EF]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 border border-[#06B6D4] text-[#06B6D4] px-3 py-1 text-xs font-mono font-bold z-20">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold font-mono text-white mb-3 group-hover:text-[#D946EF] transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 font-mono mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <SiteLink
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-[#06B6D4] font-mono font-bold text-sm hover:gap-3 transition-all"
                                >
                                    READ TRANSMISSION <ArrowRight className="w-4 h-4" />
                                </SiteLink>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
