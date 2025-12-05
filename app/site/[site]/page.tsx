import React from 'react';
import { notFound } from 'next/navigation';
import { getSiteComponent } from '@/lib/registry';

export default async function SiteHomePage({
    params,
}: {
    params: Promise<{ site: string }>;
}) {
    const { site } = await params;

    // Use the registry to get the component
    const ContentComponent = await getSiteComponent(site, 'home');

    if (!ContentComponent) return notFound();

    return (
        <main>
            <ContentComponent />
            <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 items-end">
                <div className="bg-black/80 text-white text-xs p-2 rounded backdrop-blur-sm">
                    Current Site: {site}
                </div>
                <a href={`/api/download/${site}`} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white text-black font-medium rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        Download Source
                    </button>
                </a>
            </div>
        </main>
    );
}
