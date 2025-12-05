"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { SiteLink } from "@/components/site-link";
import { motion } from "framer-motion";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function Login() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md p-8 border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <h1 className="text-3xl font-bold font-mono mb-8 text-center">ACCESS TERMINAL</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">IDENTIFIER</label>
                            <input
                                type="email"
                                className="w-full bg-black/50 border border-white/20 p-3 text-white font-mono focus:border-[#D946EF] focus:outline-none transition-colors"
                                placeholder="user@cryptofolio.io"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-mono text-gray-400 mb-2">PASSPHRASE</label>
                            <input
                                type="password"
                                className="w-full bg-black/50 border border-white/20 p-3 text-white font-mono focus:border-[#D946EF] focus:outline-none transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button className="w-full py-3 bg-[#06B6D4] text-black font-bold font-mono hover:bg-[#06B6D4]/90 transition-colors">
                            AUTHENTICATE
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm font-mono text-gray-500">
                        <p>No access credentials?</p>
                        <SiteLink href="/signup" className="text-[#D946EF] hover:underline">
                            Initialize new account
                        </SiteLink>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
