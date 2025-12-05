"use client"
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
    title: string;
    desc: string;
    tags: string[];
    image: string;
    link?: string;
    github?: string;
}

export function ProjectCard({ title, desc, tags, image, link, github }: ProjectCardProps) {
    return (
        <div className="group relative rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="p-6 lg:p-8">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{title}</h3>
                    <div className="flex gap-2">
                        {github && (
                            <a href={github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {link && (
                            <a href={link} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-zinc-400 mb-6 line-clamp-2">{desc}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-zinc-950 border border-white/10 text-xs font-medium text-zinc-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
