"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                    alt="City at night"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                        Go anywhere, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            anytime.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-lg">
                        Request a ride, hop in, and go. Reliable transportation for every occasion, right at your fingertips.
                    </p>

                    {/* Mock Widget */}
                    <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md space-y-4">
                        <h3 className="text-xl font-bold text-black mb-4">Request a ride</h3>

                        <div className="relative">
                            <div className="absolute left-4 top-3.5 text-black">
                                <div className="w-2 h-2 bg-black rounded-full" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter location"
                                className="w-full bg-gray-100 p-3 pl-10 rounded-lg text-black font-medium focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 top-3.5 text-black">
                                <div className="w-2 h-2 border-2 border-black rounded-sm" />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter destination"
                                className="w-full bg-gray-100 p-3 pl-10 rounded-lg text-black font-medium focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <button className="w-full bg-black text-white py-3.5 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                            See prices <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
