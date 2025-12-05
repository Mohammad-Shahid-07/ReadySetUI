"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-24 bg-[#FEFCE8] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-[#14532D] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <Leaf className="absolute top-10 left-10 w-32 h-32 rotate-45" />
                        <Leaf className="absolute bottom-10 right-10 w-40 h-40 -rotate-12" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#FEFCE8] mb-6">
                        Let&apos;s Grow Together
                    </h2>
                    <p className="text-[#FEFCE8]/80 text-lg max-w-2xl mx-auto mb-10">
                        Join our community and get 10% off your first order, plus weekly plant care tips and exclusive access to rare plant drops.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-[#FEFCE8] text-[#14532D] border-none h-14 px-6 text-lg placeholder:text-[#14532D]/40 focus-visible:ring-2 focus-visible:ring-[#B45309]"
                        />
                        <Button className="bg-[#B45309] hover:bg-[#B45309]/90 text-white h-14 px-8 text-lg font-medium">
                            Subscribe
                        </Button>
                    </div>

                    <p className="text-[#FEFCE8]/40 text-sm mt-6">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}
