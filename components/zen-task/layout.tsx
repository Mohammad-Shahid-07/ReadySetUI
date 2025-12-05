import React from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export default function ZenTaskLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn(
            "min-h-screen bg-[#050505] text-white font-sans selection:bg-[#10B981] selection:text-black overflow-x-hidden",
            inter.variable,
            jakarta.variable
        )}>
            {children}
        </div>
    );
}
