"use client"
import React from 'react';
import { cn } from '@/lib/utils';

interface TechStackProps {
    technologies: string[];
    className?: string;
}

export function TechStack({ technologies, className }: TechStackProps) {
    return (
        <div className={cn("flex flex-wrap gap-3", className)}>
            {technologies.map((tech, i) => (
                <div
                    key={i}
                    className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/5 text-sm font-medium text-zinc-400 hover:text-white hover:border-indigo-500/30 hover:bg-zinc-800 transition-all cursor-default"
                >
                    {tech}
                </div>
            ))}
        </div>
    );
}
