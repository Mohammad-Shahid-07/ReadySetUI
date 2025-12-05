"use client"
import React from 'react';

export function GithubStats() {
    // Generate random contribution data for visual effect
    const weeks = 52;
    const days = 7;
    const [contributions, setContributions] = React.useState<number[]>([]);

    React.useEffect(() => {
        setContributions(Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 5)));
    }, []);

    const getColor = (level: number) => {
        switch (level) {
            case 0: return 'bg-zinc-900';
            case 1: return 'bg-indigo-900/40';
            case 2: return 'bg-indigo-700/60';
            case 3: return 'bg-indigo-500/80';
            case 4: return 'bg-indigo-400';
            default: return 'bg-zinc-900';
        }
    };

    return (
        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 w-full overflow-hidden">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-zinc-400">Contribution Activity</h3>
                <div className="text-xs text-zinc-500">Last Year</div>
            </div>
            <div className="flex gap-1 overflow-x-auto pb-2">
                {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-1 shrink-0">
                        {Array.from({ length: days }).map((_, d) => (
                            <div
                                key={d}
                                className={`w-2.5 h-2.5 rounded-sm ${getColor(contributions[w * 7 + d])}`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-zinc-500">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-indigo-900/40"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-indigo-700/60"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-indigo-400"></div>
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
