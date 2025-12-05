"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is my data stored locally?",
        answer: "Yes. We use a zero-knowledge architecture. Your private keys and portfolio data are encrypted on your device and never sent to our servers.",
    },
    {
        question: "Which chains do you support?",
        answer: "We currently support Ethereum, Solana, BSC, Avalanche, Polygon, Arbitrum, Optimism, and 40+ other EVM and non-EVM chains.",
    },
    {
        question: "Is there a mobile app?",
        answer: "Yes, CryptoFolio is available on iOS and Android with full biometric security support.",
    },
    {
        question: "How much does it cost?",
        answer: "The basic plan is free forever. Pro features start at $9/month and include unlimited alerts and historical CSV exports.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 bg-black border-t border-white/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
                        SYSTEM QUERY
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-white/5 px-6">
                            <AccordionTrigger className="text-lg font-bold font-mono text-white hover:text-[#D946EF] hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 font-mono leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
