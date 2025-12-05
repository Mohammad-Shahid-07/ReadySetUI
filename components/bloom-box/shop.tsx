"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingBag, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const allPlants = [
    { id: 1, name: "Monstera Albo", price: 120, category: "Rare", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2000&auto=format&fit=crop" },
    { id: 2, name: "Pink Princess", price: 85, category: "Rare", image: "https://images.unsplash.com/photo-1614594805563-e45190c55d0b?q=80&w=2000&auto=format&fit=crop" },
    { id: 3, name: "Fiddle Leaf Fig", price: 65, category: "Large", image: "https://images.unsplash.com/photo-1597055181300-e30ba15f4d27?q=80&w=2000&auto=format&fit=crop" },
    { id: 4, name: "Bird of Paradise", price: 95, category: "Large", image: "https://images.unsplash.com/photo-1512428813838-659ddce533f7?q=80&w=2000&auto=format&fit=crop" },
    { id: 5, name: "Snake Plant", price: 45, category: "Beginner", image: "https://images.unsplash.com/photo-1599598425947-d351e422e700?q=80&w=2000&auto=format&fit=crop" },
    { id: 6, name: "Pothos Marble", price: 35, category: "Beginner", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=1964&auto=format&fit=crop" },
    { id: 7, name: "Calathea Orbifolia", price: 55, category: "Pet Friendly", image: "https://images.unsplash.com/photo-1600417148543-519ed1047c0a?q=80&w=1883&auto=format&fit=crop" },
    { id: 8, name: "ZZ Plant", price: 40, category: "Beginner", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1964&auto=format&fit=crop" },
];

export default function ShopPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");

    const filteredPlants = allPlants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "all" || plant.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-serif font-bold text-[#14532D] mb-4">Shop Plants</h1>
                        <p className="text-[#14532D]/70">Find the perfect addition to your urban jungle.</p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#14532D]/40 w-5 h-5" />
                            <Input
                                placeholder="Search plants..."
                                className="pl-10 bg-white border-[#14532D]/20 text-[#14532D]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="w-full md:w-[200px] bg-white border-[#14532D]/20 text-[#14532D]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="Rare">Rare Finds</SelectItem>
                                <SelectItem value="Beginner">Beginner Friendly</SelectItem>
                                <SelectItem value="Large">Large Plants</SelectItem>
                                <SelectItem value="Pet Friendly">Pet Friendly</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredPlants.map((plant) => (
                            <Card key={plant.id} className="border-none shadow-none bg-transparent group">
                                <CardContent className="p-0 relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                                    <Image
                                        src={plant.image}
                                        alt={plant.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#14532D]">
                                        ${plant.price}
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <Button className="w-full bg-[#14532D] hover:bg-[#14532D]/90 text-white shadow-lg">
                                            <ShoppingBag className="w-4 h-4 mr-2" /> Quick Add
                                        </Button>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-0 block">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-serif font-bold text-[#14532D]">{plant.name}</h3>
                                            <p className="text-sm text-[#14532D]/60">{plant.category}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {filteredPlants.length === 0 && (
                        <div className="text-center py-20 text-[#14532D]/60">
                            No plants found matching your criteria.
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
