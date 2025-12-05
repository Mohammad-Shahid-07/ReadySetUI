"use client";

import React from "react";
import Layout from "./layout";
import ReservationForm from "./reservation-form";
import { motion } from "framer-motion";

export default function ReservationsPage() {
    return (
        <Layout>
            <div className="pt-32 pb-24 bg-[#1A1A1A] min-h-screen flex flex-col items-center justify-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Reservations</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            We release tables 30 days in advance. A deposit is required to secure your booking.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ReservationForm />
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
}
