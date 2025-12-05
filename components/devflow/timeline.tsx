"use client"
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface TimelineItem {
    year: string;
    title: string;
    company: string;
    desc: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative border-l border-white/10 ml-3 space-y-12">
            {items.map((item, i) => (
                <div key={i} className="relative pl-8 group">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors shadow-[0_0_0_4px_rgba(24,24,27,1)]"></div>
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 mb-1 uppercase tracking-wider">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                        <Briefcase className="w-3 h-3" />
                        {item.company}
                    </div>
                    <p className="text-zinc-400 leading-relaxed max-w-lg">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    );
}
