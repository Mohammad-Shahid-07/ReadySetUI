import React from 'react';
import { getSiteComponent } from '@/lib/registry';

export default async function SiteInnerPage({
    params,
}: {
    params: Promise<{ site: string; slug: string[] }>;
}) {
    const { site, slug } = await params;
    // Dynamic routing for inner pages
    const path = slug.join('/');

    // Use the registry to get the component
    const ContentComponent = await getSiteComponent(site, path);

    if (!ContentComponent) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
                <h1 className="text-3xl font-bold mb-4">Inner Page: /{path}</h1>
                <p className="text-lg text-gray-600">Belonging to site: <span className="font-semibold">{site}</span></p>
                <p className="text-sm text-gray-400 mt-4">No specific component found for this route.</p>
            </div>
        );
    }

    return <ContentComponent />;
}
