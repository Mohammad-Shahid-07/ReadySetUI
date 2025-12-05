"use client";

import { Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
    {
        name: "Alex Chen",
        role: "DeFi Trader",
        content: "The latency is non-existent. I can track my positions across 5 chains instantly. Game changer.",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Sarah Jones",
        role: "NFT Collector",
        content: "Finally, a portfolio tracker that actually displays my NFTs correctly. The UI is stunning.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Mike Ross",
        role: "Crypto Analyst",
        content: "The analytics tools are professional grade. I replaced three other subscriptions with CryptoFolio.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Elena Rodriguez",
        role: "DAO Contributor",
        content: "Managing treasury funds has never been easier. The multi-sig support is flawless.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "David Kim",
        role: "Blockchain Dev",
        content: "As a developer, I appreciate the clean API and the speed of the WebSocket connections.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
                        USER TRANSMISSIONS
                    </h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((t, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col justify-between hover:border-[#06B6D4] transition-colors">
                                    <div>
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-[#EAB308] fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 font-mono mb-8 leading-relaxed">
                                            &quot;{t.content}&quot;
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Image src={t.image} alt={t.name} width={48} height={48} className="rounded-full border border-white/20" />
                                        <div>
                                            <div className="text-white font-bold font-mono">{t.name}</div>
                                            <div className="text-[#06B6D4] text-xs font-mono">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex bg-black border-white/20 text-white hover:bg-white/10 hover:text-[#D946EF]" />
                    <CarouselNext className="hidden md:flex bg-black border-white/20 text-white hover:bg-white/10 hover:text-[#D946EF]" />
                </Carousel>
            </div>
        </section>
    );
}
