"use client";

import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Do I need to be fit to join?",
        answer: "Absolutely not. FitPulse is designed for all fitness levels. Our trainers scale every workout to match your current ability while pushing you to improve.",
    },
    {
        question: "What should I bring to class?",
        answer: "Bring a water bottle, a towel, and a winning attitude. We provide everything else, including mats and equipment.",
    },
    {
        question: "Can I freeze my membership?",
        answer: "Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.",
    },
    {
        question: "Are there showers?",
        answer: "Yes, our luxury locker rooms are equipped with private showers, towel service, and premium toiletries.",
    },
    {
        question: "Do you offer personal training?",
        answer: "Yes, we have a team of elite personal trainers available for 1-on-1 sessions to help you reach specific goals.",
    },
];

export default function Page() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        FAQ
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Got questions? We&apos;ve got answers.
                    </p>
                </div>
            </div>

            <SlantedSection angle="none" background="zinc">
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </SlantedSection>
        </Layout>
    );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 bg-black">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
                <span className="text-lg font-bold text-white uppercase italic">{question}</span>
                {isOpen ? <Minus className="w-5 h-5 text-yellow-500" /> : <Plus className="w-5 h-5 text-yellow-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
