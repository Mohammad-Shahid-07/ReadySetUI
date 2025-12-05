"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";

interface TrainerCardProps {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export function TrainerCard({ name, role, image, bio }: TrainerCardProps) {
    return (
        <div className="group relative">
            <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 w-full p-6">
                    <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-1">{role}</p>
                    <h3 className="text-3xl font-black text-white uppercase italic mb-2">{name}</h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{bio}</p>
                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                            <SocialLink icon={Instagram} />
                            <SocialLink icon={Twitter} />
                            <SocialLink icon={Linkedin} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-2 border-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 translate-x-2 translate-y-2" />
        </div>
    );
}

function SocialLink({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="text-white hover:text-yellow-500 transition-colors">
            <Icon className="w-5 h-5" />
        </a>
    )
}
