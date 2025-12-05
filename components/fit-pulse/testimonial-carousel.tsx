"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Marathon Runner",
        content: "FitPulse completely changed my approach to training. The intensity is unmatched, and the results speak for themselves.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "CrossFit Athlete",
        content: "The trainers here are world-class. They push you to your absolute limit and then some. Best gym in the city, hands down.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Yoga Instructor",
        content: "I love the balance between high intensity and recovery. The community is supportive and the energy is infectious.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    },
];

export function TestimonialCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute top-0 left-0 text-yellow-500/10 -translate-x-4 -translate-y-8">
                <Quote className="w-32 h-32 fill-current" />
            </div>

            <div className="relative z-10 min-h-[300px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="flex justify-center gap-1 mb-6">
                            {[...Array(testimonials[current].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                            ))}
                        </div>

                        <p className="text-2xl md:text-4xl font-light text-white mb-8 italic leading-relaxed">
                            "{testimonials[current].content}"
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500">
                                <img
                                    src={testimonials[current].image}
                                    alt={testimonials[current].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wider">{testimonials[current].name}</h4>
                                <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-12">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-yellow-500 w-8" : "bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
