"use client";

import React from "react";
import Layout from "./layout";
import Hero from "./hero";
import MenuPreview from "./menu-preview";
import ChefBio from "./chef-bio";
import Testimonials from "./testimonials";
import Gallery from "./gallery";

export default function LandingPage() {
    return (
        <Layout>
            <Hero />
            <MenuPreview />
            <ChefBio />
            <Gallery />
            <Testimonials />
        </Layout>
    );
}
