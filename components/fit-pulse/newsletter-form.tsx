"use client";

import { ArrowRight, Mail } from "lucide-react";

export function NewsletterForm() {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="relative">
                <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 pl-10 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-colors font-bold uppercase tracking-wider"
                />
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow-500 hover:text-white transition-colors">
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center uppercase tracking-widest">
                No spam. Just gains. Unsubscribe anytime.
            </p>
        </div>
    );
}
