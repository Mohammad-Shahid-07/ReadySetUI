import React from 'react';

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
