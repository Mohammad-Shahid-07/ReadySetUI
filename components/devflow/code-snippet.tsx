"use client"
import React from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeSnippet({ code, language = "typescript", filename }: CodeSnippetProps) {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
            {(filename || language) && (
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        {filename && <span className="text-xs text-zinc-400 ml-2 font-mono">{filename}</span>}
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                </div>
            )}
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-zinc-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}
