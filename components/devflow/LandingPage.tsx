"use client";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
