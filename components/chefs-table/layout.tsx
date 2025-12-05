"use client";

import React from "react";
import { Playfair_Display, Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";
import Footer from "./footer";
import Cursor from "./cursor";
import ScrollContainer from "./scroll-container";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-lato",
    display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn(
            "min-h-screen bg-[#1A1A1A] text-white font-sans selection:bg-[#D4AF37] selection:text-black",
            playfair.variable,
            lato.variable
        )}>
            <Cursor />
            <ScrollContainer>
                <Navbar />
                <main className="relative z-10">
                    {children}
                </main>
                <Footer />
            </ScrollContainer>
        </div>
    );
}
