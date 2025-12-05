"use client"
import React from 'react';
import Layout from './layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search } from 'lucide-react';

export default function FAQPage() {
    return (
        <Layout>
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h1>
                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-indigo-600">Getting Started</h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
                                {[
                                    { q: "How do I transition my puppy to fresh food?", a: "We recommend a 7-day transition period. Start by mixing 25% PuppyTech with 75% old food, and gradually increase the ratio. Our app provides a custom schedule." },
                                    { q: "Is PuppyTech suitable for all breeds?", a: "Yes! Our algorithm adjusts the nutrient density and portion size based on your specific breed's growth requirements, from Chihuahuas to Great Danes." },
                                    { q: "How much freezer space do I need?", a: "A 2-week supply for a medium dog takes up about as much space as 2-3 pints of ice cream. Our packs are flat and stackable." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`start-${i}`} className="border-b-slate-100 last:border-0">
                                        <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base pb-6">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-indigo-600">Subscription & Billing</h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
                                {[
                                    { q: "Can I pause or skip a delivery?", a: "Absolutely. You can manage your delivery schedule directly in the app. Skip a week if you're traveling or pause indefinitely." },
                                    { q: "What is your refund policy?", a: "If your pup doesn't love the food, we'll refund your first box in full. No questions asked." },
                                    { q: "Do you offer samples?", a: "We offer a discounted trial box (50% off) for your first week so you can see the difference for yourself." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`bill-${i}`} className="border-b-slate-100 last:border-0">
                                        <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base pb-6">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-indigo-600">Ingredients & Sourcing</h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
                                {[
                                    { q: "Where do you source your meat?", a: "All our proteins are sourced from USDA-certified farms in the USA. We never use 4D meats (dying, diseased, disabled, or dead)." },
                                    { q: "Do you use preservatives?", a: "Never. We use flash-freezing to lock in freshness. That's why our food must be kept in the freezer or fridge." },
                                    { q: "Is your food cooked or raw?", a: "We gently cook our food at low temperatures to kill pathogens while preserving nutrients. It's the safest option for puppies." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`food-${i}`} className="border-b-slate-100 last:border-0">
                                        <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 hover:no-underline py-6">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-base pb-6">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
