"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { Instagram, Camera } from 'lucide-react';

export default function GalleryPage() {
    return (
        <Layout>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">Wall of Fame</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Real puppies, real results. Tag us @PuppyTech to be featured.
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 h-12 shadow-lg shadow-pink-500/25">
                        <Instagram className="w-5 h-5 mr-2" /> Follow on Instagram
                    </Button>
                </div>

                <div className="max-w-[1920px] mx-auto px-4">
                    <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {[
                            "https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop"
                        ].map((src, i) => (
                            <div key={i} className="relative group rounded-2xl overflow-hidden break-inside-avoid">
                                <img src={src} alt="Puppy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="text-white text-center p-4">
                                        <p className="font-bold text-lg mb-1">@puppy_love_{i}</p>
                                        <p className="text-sm text-slate-300">Eating PuppyTech since 2023</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-24">
                    <div className="inline-flex flex-col items-center bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                            <Camera className="w-10 h-10 text-indigo-600" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
                        <p className="text-slate-600 max-w-md mb-8">
                            We love seeing our food in action. Upload a photo of your pup enjoying their meal for a chance to win a free month of food.
                        </p>
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 h-14 text-lg font-bold">
                            Upload Photo
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
