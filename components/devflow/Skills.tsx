"use client";

import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Tailwind CSS", "PostgreSQL", "GraphQL", "Docker",
    "AWS", "Framer Motion", "Figma", "Git"
];

export default function Skills() {
    return (
        <section className="py-20 bg-zinc-900/50 border-y border-white/5">
            <div className="container px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-zinc-400">
                        A curated list of technologies I use to build performant and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="p-4 rounded-xl bg-zinc-950 border border-white/5 text-center hover:border-white/20 transition-colors"
                        >
                            <span className="text-zinc-300 font-medium">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
