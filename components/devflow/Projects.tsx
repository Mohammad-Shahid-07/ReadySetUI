"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool with drag-and-drop kanban boards and team collaboration features.",
        tags: ["React", "Redux", "Node.js", "Socket.io"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1932&auto=format&fit=crop"
    },
    {
        title: "AI Content Generator",
        description: "An AI-powered application that helps writers generate blog posts and social media content.",
        tags: ["OpenAI API", "Next.js", "Stripe", "Postgres"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-zinc-950">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-zinc-400 max-w-xl">
                            Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
                        </p>
                    </div>
                    <a href="#" className="text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors">
                        View all projects
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/20 transition-all"
                        >
                            <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-xs text-zinc-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
