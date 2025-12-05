"use client"
import React from 'react';

interface SkillBarProps {
    name: string;
    level: number;
    color?: string;
}

export function SkillBar({ name, level, color = "bg-indigo-500" }: SkillBarProps) {
    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-zinc-300">{name}</span>
                <span className="text-sm font-medium text-zinc-500">{level}%</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                <div
                    className={`h-full rounded-full ${color} shadow-[0_0_10px_rgba(99,102,241,0.5)]`}
                    style={{ width: `${level}%`, transition: 'width 1s ease-out' }}
                ></div>
            </div>
        </div>
    );
}
