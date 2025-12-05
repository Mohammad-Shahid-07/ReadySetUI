"use client"
import Hero from "./Hero";
import About from "./AboutSection";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./ContactSection";
import Layout from "./layout";

export default function LandingPage() {
    return (
        <Layout>
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Contact />
        </Layout>
    );
}
