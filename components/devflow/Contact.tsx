"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {
    return (
        <Layout>
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-white">
                                Let's Build Something <span className="text-indigo-400">Extraordinary</span>
                            </h1>
                            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                                Whether you have a groundbreaking startup idea or need to scale your existing platform, I'm here to help.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Email Me</h3>
                                        <a href="mailto:hello@devflow.com" className="text-zinc-400 hover:text-white transition-colors">hello@devflow.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                        <p className="text-zinc-400">San Francisco, CA (Remote Friendly)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/5 pt-12">
                                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">Connect on Social</h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Github className="w-5 h-5" />, href: "#" },
                                        { icon: <Twitter className="w-5 h-5" />, href: "#" },
                                        { icon: <Linkedin className="w-5 h-5" />, href: "#" }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900/50 p-8 lg:p-10 rounded-3xl border border-white/5 backdrop-blur-sm">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-300">Name</label>
                                        <Input className="bg-zinc-950 border-white/10 text-white focus:border-indigo-500 h-12" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-300">Email</label>
                                        <Input className="bg-zinc-950 border-white/10 text-white focus:border-indigo-500 h-12" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-300">Project Type</label>
                                    <select className="w-full h-12 rounded-md border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
                                        <option>Web Application</option>
                                        <option>Mobile App</option>
                                        <option>E-commerce</option>
                                        <option>Consulting</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-300">Message</label>
                                    <Textarea className="bg-zinc-950 border-white/10 text-white focus:border-indigo-500 min-h-[150px]" placeholder="Tell me about your project..." />
                                </div>

                                <Button className="w-full h-14 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/20">
                                    Send Message <Send className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
