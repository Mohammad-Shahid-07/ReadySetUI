"use client";

import { cn } from "@/lib/utils";

interface SlantedSectionProps {
    children: React.ReactNode;
    className?: string;
    angle?: "left" | "right" | "none";
    background?: "black" | "zinc" | "yellow";
}

export function SlantedSection({
    children,
    className,
    angle = "right",
    background = "black",
}: SlantedSectionProps) {
    const bgColors = {
        black: "bg-black text-white",
        zinc: "bg-zinc-900 text-white",
        yellow: "bg-yellow-500 text-black",
    };

    const clipPath =
        angle === "right"
            ? "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
            : angle === "left"
                ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                : "none";

    // We use negative margins and padding to create the overlap effect without gaps
    // But for simplicity in this project, we'll just use a skew transform or simple padding
    // Actually, skew is better for the "slanted" look the user asked for.

    return (
        <div className={cn("relative py-24 overflow-hidden", bgColors[background], className)}>
            {/* Background Skew */}
            {angle !== "none" && (
                <div
                    className={cn(
                        "absolute inset-0 transform origin-top-left z-0",
                        angle === "right" ? "-skew-y-3" : "skew-y-3",
                        bgColors[background]
                    )}
                    style={{ transform: angle === "right" ? "skewY(-3deg) scaleY(1.5)" : "skewY(3deg) scaleY(1.5)" }}
                />
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </div>
    );
}
