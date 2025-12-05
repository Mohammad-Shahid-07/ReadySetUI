"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
    {
        text: "An absolute triumph. Chef Thorne has redefined what it means to dine in luxury. The Wagyu tartare is a revelation.",
        author: "The New York Times",
        rating: 5
    },
    {
        text: "Impeccable service, breathtaking atmosphere, and food that touches the soul. A must-visit for any serious gourmand.",
        author: "Michelin Guide",
        rating: 5
    },
    {
        text: "Dining at Chef&apos;s Table is not just a meal; it is a theatrical performance where flavor plays the lead role.",
        author: "Bon Appétit",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[#121212] relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 font-serif">Acclaim</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Critics&apos; Choice</h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {reviews.map((review, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex flex-col items-center text-center p-6 md:p-12">
                                        <Quote className="w-12 h-12 text-[#D4AF37] mb-8 opacity-50" />
                                        <p className="text-xl md:text-3xl font-serif text-gray-200 leading-relaxed mb-8 italic">
                                            &quot;{review.text}&quot;
                                        </p>
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                                            ))}
                                        </div>
                                        <cite className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] not-italic font-bold">
                                            — {review.author}
                                        </cite>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex bg-transparent border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black" />
                        <CarouselNext className="hidden md:flex bg-transparent border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
