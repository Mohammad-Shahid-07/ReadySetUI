"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { SiteLink } from "@/components/site-link";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function BlogPost() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main className="pt-32 pb-24">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SiteLink href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white font-mono text-sm mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> BACK TO TRANSMISSIONS
                    </SiteLink>

                    <div className="mb-8">
                        <div className="inline-block bg-[#D946EF]/10 border border-[#D946EF] text-[#D946EF] px-3 py-1 text-xs font-mono font-bold mb-6">
                            ANALYSIS
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-mono mb-6 leading-tight">
                            The Future of DeFi in 2025: A Technical Analysis
                        </h1>
                        <div className="flex items-center gap-6 text-sm font-mono text-gray-400 border-b border-white/10 pb-8">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                                    alt="Author"
                                    width={32}
                                    height={32}
                                    className="rounded-full border border-white/20"
                                />
                                <span>David Kim</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Dec 12, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none font-mono">
                        <p className="lead text-xl text-gray-300 mb-8">
                            As we approach 2025, the decentralized finance landscape is undergoing a seismic shift.
                            The convergence of Layer 2 scaling solutions, zero-knowledge proofs, and institutional adoption
                            is creating a perfect storm for the next generation of financial protocols.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Rise of Layer 3s</h2>
                        <p className="text-gray-400 mb-6">
                            While Layer 2s have successfully reduced gas fees and increased throughput, the real innovation
                            is happening at Layer 3. Application-specific chains (AppChains) are allowing developers to
                            customize the execution environment to their specific needs, whether it&apos;s high-frequency trading
                            or privacy-preserving transactions.
                        </p>

                        <div className="my-12 border-l-4 border-[#06B6D4] pl-6 py-2 bg-[#06B6D4]/5">
                            <p className="text-lg text-white italic">
                                &quot;The monolithic blockchain era is over. The future is modular, specialized, and interconnected.&quot;
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Zero-Knowledge Everything</h2>
                        <p className="text-gray-400 mb-6">
                            Privacy is no longer an option; it&apos;s a necessity. ZK-Rollups are moving beyond simple scaling
                            to enable fully private smart contracts. This will unlock use cases that were previously impossible
                            on public ledgers, such as institutional dark pools and private identity verification.
                        </p>

                        <Image
                            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop"
                            alt="DeFi Chart"
                            width={1200}
                            height={600}
                            className="w-full h-auto border border-white/10 my-8"
                        />

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                        <p className="text-gray-400 mb-6">
                            The infrastructure is ready. The protocols are maturing. 2025 will be the year DeFi finally
                            crosses the chasm from niche experiment to global financial infrastructure. Are you ready?
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                        <div className="text-sm font-mono text-gray-500">
                            Share this transmission:
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 border border-white/10 hover:border-[#D946EF] hover:text-[#D946EF] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </button>
                            <button className="p-2 border border-white/10 hover:border-[#06B6D4] hover:text-[#06B6D4] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </button>
                            <button className="p-2 border border-white/10 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
