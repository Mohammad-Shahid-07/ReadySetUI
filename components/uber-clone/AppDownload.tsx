"use client";

import { SiteLink } from "@/components/site-link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AppDownload() {
    return (
        <section className="py-24 bg-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                            There&apos;s more to love in the app.
                        </h2>
                        <p className="text-xl text-gray-600">
                            Get the app to access exclusive features, track your rides in real-time, and manage your account on the go.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <SiteLink
                                href="#"
                                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3.5 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                            >
                                <span>Download for iOS</span>
                                <ArrowRight size={18} />
                            </SiteLink>
                            <SiteLink
                                href="#"
                                className="flex items-center justify-center gap-3 bg-white text-black border border-gray-300 px-6 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                            >
                                <span>Download for Android</span>
                                <ArrowRight size={18} />
                            </SiteLink>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
                        {/* Abstract Phone Mockup */}
                        <div className="relative w-[280px] h-[550px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" />

                            {/* Screen Content */}
                            <div className="relative w-full h-full bg-gray-200">
                                {/* Map Background */}
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop"
                                    alt="Map"
                                    fill
                                    className="object-cover"
                                />

                                {/* Route Line (SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 550">
                                    <path d="M 140 275 L 180 200 L 100 100" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4" />
                                    <circle cx="140" cy="275" r="8" fill="black" />
                                    <circle cx="100" cy="100" r="8" fill="black" />
                                </svg>

                                {/* Car Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                                    <div className="w-4 h-4 bg-black rounded-full" />
                                </div>

                                {/* Bottom Card */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]">
                                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <div className="text-black font-bold text-xl">Driver arriving</div>
                                            <div className="text-gray-500 text-sm">2 min away</div>
                                        </div>
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs">
                                            4.9★
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Driver" width={100} height={100} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Michael</div>
                                            <div className="text-gray-500 text-xs">Toyota Camry • HS78 2KL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
