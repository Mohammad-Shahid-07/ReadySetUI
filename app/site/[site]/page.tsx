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
            <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded z-50">
                Current Site: {site}
            </div>
        </main>
    );
}
