"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Hero } from "@/components/bloom-box/hero";
import { FeaturedPlants } from "@/components/bloom-box/featured-plants";
import { SubscriptionTiers } from "@/components/bloom-box/subscription-tiers";
import { CareGuidePreview } from "@/components/bloom-box/care-guide-preview";
import { Testimonials } from "@/components/bloom-box/testimonials";
import { Newsletter } from "@/components/bloom-box/newsletter";
import { Footer } from "@/components/bloom-box/footer";

export default function BloomBoxHome() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans selection:bg-[#B45309] selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <FeaturedPlants />
                <SubscriptionTiers />
                <CareGuidePreview />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
