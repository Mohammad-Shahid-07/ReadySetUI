"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sun, Droplets, Thermometer, Bug, Scissors, Sprout } from "lucide-react";
import Image from "next/image";

const categories = [
    { name: "Watering", icon: Droplets, count: 12 },
    { name: "Light", icon: Sun, count: 8 },
    { name: "Temperature", icon: Thermometer, count: 5 },
    { name: "Pests", icon: Bug, count: 15 },
    { name: "Pruning", icon: Scissors, count: 7 },
    { name: "Repotting", icon: Sprout, count: 9 },
];

const articles = [
    { title: "How to Water Your Monstera", category: "Watering", readTime: "5 min read", image: "https://images.unsplash.com/photo-1598887142487-3c854d53d2c9?q=80&w=2000&auto=format&fit=crop" },
    { title: "Understanding Indirect Light", category: "Light", readTime: "4 min read", image: "https://images.unsplash.com/photo-1509423355108-b371ca2e02e9?q=80&w=2000&auto=format&fit=crop" },
    { title: "Dealing with Spider Mites", category: "Pests", readTime: "8 min read", image: "https://images.unsplash.com/photo-1611558013380-4889c6807469?q=80&w=2000&auto=format&fit=crop" },
    { title: "When to Repot Your Plants", category: "Repotting", readTime: "6 min read", image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=2000&auto=format&fit=crop" },
    { title: "Pruning for Growth", category: "Pruning", readTime: "5 min read", image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=2000&auto=format&fit=crop" },
    { title: "Winter Care Guide", category: "Temperature", readTime: "7 min read", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=2000&auto=format&fit=crop" },
];

export default function CareGuidePage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-serif font-bold text-[#14532D] mb-6">Plant Care Guide</h1>
                        <p className="text-xl text-[#14532D]/70 max-w-2xl mx-auto mb-10">
                            Everything you need to know to keep your green friends happy and healthy.
                        </p>

                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14532D]/40 w-6 h-6" />
                            <Input
                                placeholder="Search for a plant or care tip..."
                                className="pl-14 h-14 rounded-full bg-white border-[#14532D]/20 text-lg shadow-sm focus-visible:ring-[#B45309]"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
                        {categories.map((cat) => (
                            <Button
                                key={cat.name}
                                variant="outline"
                                className="h-auto py-6 flex flex-col gap-2 border-[#14532D]/20 hover:border-[#B45309] hover:bg-[#FEFCE8] hover:text-[#B45309] transition-all group"
                            >
                                <cat.icon className="w-8 h-8 text-[#14532D] group-hover:text-[#B45309]" />
                                <span className="font-medium text-[#14532D] group-hover:text-[#B45309]">{cat.name}</span>
                                <span className="text-xs text-[#14532D]/40">{cat.count} articles</span>
                            </Button>
                        ))}
                    </div>

                    {/* Latest Articles */}
                    <h2 className="text-3xl font-serif font-bold text-[#14532D] mb-8">Latest Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <div key={article.title} className="group cursor-pointer">
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#14532D]">
                                        {article.category}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#14532D] mb-2 group-hover:text-[#B45309] transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-[#14532D]/60 text-sm">{article.readTime}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
