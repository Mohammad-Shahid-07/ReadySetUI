"use client";

import React from "react";
import Layout from "./layout";
import { motion } from "framer-motion";

const menuCategories = [
    {
        title: "Tasting Menu",
        price: "$250 per person",
        items: [
            { name: "Amuse-Bouche", description: "Chef's daily inspiration" },
            { name: "Scallop & Caviar", description: "Hokkaido scallop, oscietra caviar, cauliflower cream" },
            { name: "Foie Gras Terrine", description: "Fig jam, toasted brioche, balsamic reduction" },
            { name: "Lobster Ravioli", description: "Saffron bisque, basil oil" },
            { name: "A5 Wagyu Beef", description: "Truffle potato purée, red wine jus, seasonal vegetables" },
            { name: "Pre-Dessert", description: "Yuzu sorbet, champagne foam" },
            { name: "Chocolate Sphere", description: "Valrhona chocolate, gold leaf, raspberry coulis" }
        ]
    },
    {
        title: "A La Carte",
        items: [
            { name: "Oysters Rockefeller", description: "Spinach, pernod, hollandaise", price: "$28" },
            { name: "Beef Carpaccio", description: "Parmesan, arugula, truffle oil", price: "$32" },
            { name: "Roasted Duck Breast", description: "Cherry sauce, parsnip purée", price: "$48" },
            { name: "Miso Black Cod", description: "Bok choy, ginger dashi", price: "$52" }
        ]
    }
];

export default function MenuPage() {
    return (
        <Layout>
            <div className="pt-32 pb-24 bg-[#1A1A1A] min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Our Menu</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A culinary journey through seasons and flavors, meticulously crafted to delight the senses.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {menuCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="bg-[#121212] p-8 md:p-12 border border-[#D4AF37]/20"
                            >
                                <div className="flex justify-between items-baseline mb-12 border-b border-[#D4AF37]/20 pb-6">
                                    <h2 className="text-3xl font-serif text-[#D4AF37]">{category.title}</h2>
                                    {category.price && <span className="text-white font-serif text-xl">{category.price}</span>}
                                </div>

                                <div className="space-y-10">
                                    {category.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="group">
                                            <div className="flex justify-between items-baseline mb-2">
                                                <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                                                {'price' in item && <span className="text-[#D4AF37] font-serif">{(item as any).price}</span>}
                                            </div>
                                            <p className="text-gray-500 font-light italic">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
