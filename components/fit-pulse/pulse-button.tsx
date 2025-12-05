"use client";

import { SiteLink } from "@/components/site-link";
import { cn } from "@/lib/utils";

interface PulseButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "outline";
}

export function PulseButton({ href, children, className, variant = "primary" }: PulseButtonProps) {
    return (
        <SiteLink
            href={href}
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider transition-all group",
                variant === "primary"
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
                className
            )}
        >
            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-sm animate-ping bg-yellow-500 opacity-20 group-hover:opacity-40" />

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </SiteLink>
    );
}
