import React from 'react';
import { Metadata } from 'next';
import { sites } from '@/lib/site-data';

type Props = {
    params: Promise<{ site: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { site: siteId } = await params;
    const site = sites.find((s) => s.id === siteId);

    if (!site) {
        return {
            title: 'Site Not Found - Ready Set UI',
            description: 'The requested site could not be found.',
        };
    }

    return {
        title: `${site.name} | Ready Set UI`,
        description: site.description,
        icons: {
            icon: site.icon ? `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${site.icon}</text></svg>` : undefined,
        },
    };
}

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="site-layout">
            {/* You could add a site-specific navbar or footer here if needed, 
          or leave it empty to let each page define its own structure. */}
            {children}
        </section>
    );
}
