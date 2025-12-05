"use client";

import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingBag, Sun, Droplets } from "lucide-react";
import Image from "next/image";

const featuredPlants = [
    {
        id: 1,
        name: "Monstera Albo",
        price: "$120",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2000&auto=format&fit=crop",
        light: "Bright Indirect",
        water: "Weekly",
    },
    {
        id: 2,
        name: "Pink Princess Philodendron",
        price: "$85",
        image: "https://images.unsplash.com/photo-1614594805563-e45190c55d0b?q=80&w=2000&auto=format&fit=crop", // Placeholder, need better image
        light: "Medium",
        water: "Weekly",
    },
    {
        id: 3,
        name: "Fiddle Leaf Fig",
        price: "$65",
        image: "https://images.unsplash.com/photo-1597055181300-e30ba15f4d27?q=80&w=2000&auto=format&fit=crop",
        light: "Bright",
        water: "Bi-weekly",
    },
    {
        id: 4,
        name: "Bird of Paradise",
        price: "$95",
        image: "https://images.unsplash.com/photo-1512428813838-659ddce533f7?q=80&w=2000&auto=format&fit=crop",
        light: "Direct Sun",
        water: "Weekly",
    },
    {
        id: 5,
        name: "Snake Plant",
        price: "$45",
        image: "https://images.unsplash.com/photo-1599598425947-d351e422e700?q=80&w=2000&auto=format&fit=crop",
        light: "Low to Bright",
        water: "Monthly",
    },
];

export function FeaturedPlants() {
    return (
        <section className="py-20 bg-[#FEFCE8]">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-[#14532D] mb-4">Rare Finds</h2>
                        <p className="text-[#14532D]/70 max-w-md">
                            Hand-picked selections from our premium nursery. These plants are in high demand and limited supply.
                        </p>
                    </div>
                    <SiteLink href="/shop">
                        <Button variant="link" className="text-[#B45309] text-lg font-medium hover:text-[#B45309]/80">
                            View All Plants &rarr;
                        </Button>
                    </SiteLink>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {featuredPlants.map((plant) => (
                            <CarouselItem key={plant.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1">
                                    <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                                        <CardContent className="p-0 relative overflow-hidden rounded-2xl aspect-[3/4]">
                                            <Image
                                                src={plant.image}
                                                alt={plant.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Button className="bg-white text-[#14532D] hover:bg-white/90 rounded-full px-6 py-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    Quick View
                                                </Button>
                                            </div>
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#14532D]">
                                                {plant.price}
                                            </div>
                                        </CardContent>
                                        <div className="mt-4">
                                            <h3 className="text-xl font-serif font-bold text-[#14532D]">{plant.name}</h3>
                                            <div className="flex gap-4 mt-2 text-sm text-[#14532D]/60">
                                                <div className="flex items-center gap-1">
                                                    <Sun className="w-4 h-4" />
                                                    {plant.light}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Droplets className="w-4 h-4" />
                                                    {plant.water}
                                                </div>
                                            </div>
                                            <Button className="w-full mt-4 bg-[#14532D] hover:bg-[#14532D]/90 text-[#FEFCE8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="left-0 -translate-x-1/2 bg-[#14532D] text-white hover:bg-[#14532D]/90 border-none" />
                        <CarouselNext className="right-0 translate-x-1/2 bg-[#14532D] text-white hover:bg-[#14532D]/90 border-none" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
