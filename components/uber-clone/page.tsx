"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import AppDownload from "./AppDownload";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <AppDownload />
            </main>
            <Footer />
        </div>
    );
}
