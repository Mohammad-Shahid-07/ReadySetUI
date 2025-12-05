
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Stats } from "./Stats";
import { HowItWorks } from "./HowItWorks";
import { Testimonials } from "./Testimonials";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";
import { Integrations } from "./Integrations";
import { Footer } from "./Footer";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function LandingPage() {
    return (
        <div className={cn("min-h-screen bg-black text-white selection:bg-[#D946EF] selection:text-white font-sans", spaceMono.variable)}>
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Features />
                <HowItWorks />
                <Integrations />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
