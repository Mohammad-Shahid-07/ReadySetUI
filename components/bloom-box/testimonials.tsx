"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Plant Mom",
        content: "I've killed every plant I've ever owned until I found BloomBox. The care guides are a lifesaver, and the plants arrive in perfect condition!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Interior Designer",
        content: "As a designer, I need high-quality plants for my clients. BloomBox consistently delivers stunning, healthy specimens that transform any space.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Urban Gardener",
        content: "The subscription box is the highlight of my month. It's like Christmas morning but greener! Highly recommend the 'Sprout' tier.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-[#14532D] text-[#FEFCE8] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-4">Growing Together</h2>
                    <p className="text-[#FEFCE8]/70">Join thousands of happy plant parents.</p>
                </div>

                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="md:basis-2/3 lg:basis-1/2">
                                <div className="p-2">
                                    <Card className="bg-[#FEFCE8]/5 border-none text-[#FEFCE8] backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col justify-between">
                                        <CardContent className="p-0">
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-[#B45309] text-[#B45309]" />
                                                ))}
                                            </div>
                                            <p className="text-lg italic mb-8 leading-relaxed opacity-90">"{testimonial.content}"</p>
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#B45309]">
                                                    <Image
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#FEFCE8]">{testimonial.name}</h4>
                                                    <p className="text-sm text-[#FEFCE8]/60">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-4 mt-8">
                        <CarouselPrevious className="static translate-y-0 bg-[#FEFCE8]/10 hover:bg-[#FEFCE8]/20 text-[#FEFCE8] border-none" />
                        <CarouselNext className="static translate-y-0 bg-[#FEFCE8]/10 hover:bg-[#FEFCE8]/20 text-[#FEFCE8] border-none" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
