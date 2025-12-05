"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        category: "Orders & Shipping",
        items: [
            { q: "Where do you ship?", a: "We currently ship to all 48 contiguous United States. We are working on expanding to Alaska, Hawaii, and international locations." },
            { q: "How are plants packaged?", a: "We use custom-designed, plastic-free packaging that secures the pot and protects the foliage. In winter, we include heat packs at no extra cost." },
            { q: "What is your return policy?", a: "We offer a 14-day happy plant guarantee. If your plant arrives damaged or unhealthy, send us a photo within 14 days and we'll replace it or refund you." },
        ]
    },
    {
        category: "Plant Care",
        items: [
            { q: "I'm a beginner, what should I start with?", a: "We recommend our 'Beginner Friendly' collection, which includes Snake Plants, ZZ Plants, and Pothos. These are forgiving and require less frequent care." },
            { q: "Is my plant safe for pets?", a: "Some plants can be toxic if ingested. Look for the 'Pet Friendly' tag on our product pages. We also have a dedicated filter for pet-safe plants in our shop." },
            { q: "How do I know when to water?", a: "The general rule is to check the top inch of soil. If it's dry, it's time to water. We also include a specific care card with every plant." },
        ]
    },
    {
        category: "Subscriptions",
        items: [
            { q: "Can I customize my subscription box?", a: "While we curate the plants based on the season and availability, you can set preferences for light levels and pet safety in your account." },
            { q: "When will I be charged?", a: "Subscriptions renew on the 1st of every month. You will be charged then, and your box will ship within 5 business days." },
            { q: "Can I gift a subscription?", a: "Absolutely! We offer 3, 6, and 12-month gift subscriptions that do not auto-renew. It's the perfect gift for plant lovers." },
        ]
    },
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-serif font-bold text-[#14532D] mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-[#14532D]/70 max-w-2xl mx-auto">
                            Find answers to common questions about our plants, shipping, and services.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-12">
                        {faqs.map((section) => (
                            <div key={section.category}>
                                <h2 className="text-2xl font-serif font-bold text-[#B45309] mb-6 border-b border-[#B45309]/20 pb-2">
                                    {section.category}
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {section.items.map((item, i) => (
                                        <AccordionItem key={i} value={`${section.category}-${i}`}>
                                            <AccordionTrigger className="text-[#14532D] font-medium text-lg hover:text-[#B45309]">
                                                {item.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-[#14532D]/70 text-base leading-relaxed">
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
