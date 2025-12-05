"use client";

import React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";

const events = [
    {
        date: "Oct 15",
        title: "Autumn Harvest Feast",
        desc: "A 7-course tasting menu celebrating the flavors of fall.",
        price: "$250"
    },
    {
        date: "Nov 05",
        title: "Winemaker Dinner: Bordeaux",
        desc: "Exclusive pairing dinner with vintage wines from Bordeaux.",
        price: "$350"
    },
    {
        date: "Dec 31",
        title: "New Year's Eve Gala",
        desc: "Ring in the new year with champagne, caviar, and live jazz.",
        price: "$500"
    }
];

export default function EventsPage() {
    return (
        <Layout>
            <div className="pt-32 pb-24 bg-[#1A1A1A] min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Special Events</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Join us for exclusive culinary experiences and seasonal celebrations.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col md:flex-row items-center bg-[#121212] border border-[#D4AF37]/20 p-8 gap-8"
                            >
                                <div className="text-center md:text-left md:w-32 shrink-0">
                                    <span className="block text-3xl font-serif text-[#D4AF37] font-bold">{event.date.split(' ')[1]}</span>
                                    <span className="text-sm uppercase tracking-wider text-gray-500">{event.date.split(' ')[0]}</span>
                                </div>
                                <div className="flex-grow text-center md:text-left">
                                    <h3 className="text-2xl font-serif text-white mb-2">{event.title}</h3>
                                    <p className="text-gray-400">{event.desc}</p>
                                </div>
                                <div className="text-center md:text-right shrink-0">
                                    <span className="block text-xl font-serif text-[#D4AF37] mb-4">{event.price}</span>
                                    <SiteLink href="/reservations">
                                        <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-none">
                                            Book Now
                                        </Button>
                                    </SiteLink>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
