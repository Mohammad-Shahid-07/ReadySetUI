"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
    value: number;
    label: string;
    suffix?: string;
}

export function StatsCounter({ value, label, suffix = "" }: StatsCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl md:text-6xl font-black text-white mb-2 font-mono">
                {count}
                <span className="text-yellow-500">{suffix}</span>
            </div>
            <p className="text-gray-400 uppercase tracking-widest text-sm font-bold">{label}</p>
        </div>
    );
}
