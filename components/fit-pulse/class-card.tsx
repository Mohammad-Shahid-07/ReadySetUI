"use client";

import { SiteLink } from "@/components/site-link";
import { ArrowRight, Clock, Flame } from "lucide-react";
import Image from "next/image";

interface ClassCardProps {
    title: string;
    description: string;
    image: string;
    duration: string;
    intensity: "High" | "Medium" | "Low";
    calories: string;
}

export function ClassCard({ title, description, image, duration, calories }: ClassCardProps) {
    return (
        <div className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-yellow-500 transition-colors">
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-black uppercase italic mb-2 text-white group-hover:text-yellow-500 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between text-sm text-gray-300 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-yellow-500" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{calories} kcal</span>
                    </div>
                </div>
            </div>

            {/* Hover Overlay CTA */}
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SiteLink
                    href="/schedule"
                    className="px-6 py-3 bg-yellow-500 text-black font-bold uppercase tracking-wider hover:bg-yellow-400 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                >
                    Book Now <ArrowRight className="w-4 h-4" />
                </SiteLink>
            </div>
        </div>
    );
}
