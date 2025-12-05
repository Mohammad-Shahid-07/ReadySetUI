"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Github,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sites, allTags } from "@/lib/site-data";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []);

  const filteredSites = useMemo(() => {
    return sites.filter(site => {
      const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? site.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);


  // Helper to get the correct URL based on environment
  // Helper to get the correct URL based on environment
  const getSiteUrl = (subdomain: string) => {
    if (!mounted) return "#";

    const hostname = window.location.hostname;
    const protocol = window.location.protocol;

    if (hostname.includes("ui.eliteweb.top")) {
      // Production (Main): Path-based routing
      return `/site/${subdomain}`;
    } else if (hostname.includes("readysetui.top")) {
      // Production (Legacy/Alt): Subdomain routing
      return `${protocol}//${subdomain}.readysetui.top`;
    } else {
      // Localhost / Fallback: Path-based routing for safety
      return `/site/${subdomain}`;
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-100 selection:bg-zinc-800 selection:text-white relative">

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            <span className="text-sm font-medium tracking-tight text-white">ReadySetUI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6">

          {/* Hero - Clean & Minimal */}
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
              Premium templates <br />
              <span className="text-zinc-500">for your next idea.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
              A curated collection of production-ready landing pages.
              Built with Next.js 16, Tailwind, and Shadcn UI.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center bg-black/80 rounded-lg border border-white/10 focus-within:border-white/20 transition-colors shadow-xl">
                <Search className="ml-3 h-4 w-4 text-zinc-500" />
                <Input
                  type="text"
                  placeholder="Search templates..."
                  className="border-0 bg-transparent h-10 text-sm placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="mr-3 hidden sm:flex items-center gap-1">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-zinc-900 px-1.5 font-mono text-[10px] font-medium text-zinc-500 opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium transition-all border",
                  selectedTag === null
                    ? "bg-white text-black border-white"
                    : "bg-zinc-900/50 text-zinc-400 border-white/5 hover:border-white/10 hover:text-white"
                )}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium transition-all border",
                    selectedTag === tag
                      ? "bg-white text-black border-white"
                      : "bg-zinc-900/50 text-zinc-400 border-white/5 hover:border-white/10 hover:text-white"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredSites.map((site) => (
              <div key={site.id} className="group relative flex flex-col bg-zinc-900/20 border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-indigo-500/5">

                {/* Image Preview Area - Links to Subdomain */}
                <a
                  href={getSiteUrl(site.subdomain)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden bg-black border-b border-white/5"
                >
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      View Template <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-medium text-white group-hover:text-zinc-200 transition-colors">
                      <a href={getSiteUrl(site.subdomain)} target="_blank" rel="noopener noreferrer">
                        {site.name}
                      </a>
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-5 line-clamp-2">
                    {site.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {site.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] text-zinc-500 border border-white/5 px-2 py-1 rounded-full bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/api/download-site?site=${site.id}`}
                      className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                      title="Download Source Code"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSites.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-zinc-500 text-sm">No templates found.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedTag(null); }}
                className="text-white text-sm mt-2 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
