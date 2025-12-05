import React from 'react';
import ZenTaskLayout from '@/components/zen-task/layout';
import { Navbar } from '@/components/zen-task/navbar';
import { Hero } from '@/components/zen-task/hero';
import { Features } from '@/components/zen-task/features';
import { Pricing } from '@/components/zen-task/pricing';
import { Footer } from '@/components/zen-task/footer';

export default function ZenTaskPage() {
    return (
        <ZenTaskLayout>
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Pricing />
            </main>
            <Footer />
        </ZenTaskLayout>
    );
}
