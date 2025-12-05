"use client"
import React from 'react';
import Layout from './layout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <Layout>
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4 text-slate-900">Get in Touch</h1>
                        <p className="text-xl text-slate-600">We&apos;d love to hear about your furry friend.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                <p className="text-slate-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:+15550000000" className="text-indigo-600 font-bold hover:underline">+1 (555) 000-0000</a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                <p className="text-slate-600 mb-1">We&apos;ll get back to you within 24h.</p>
                                <a href="mailto:hello@puppytech.com" className="text-indigo-600 font-bold hover:underline">hello@puppytech.com</a>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <MapPin className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                                <p className="text-slate-600">
                                    123 Dogwood Lane<br />
                                    San Francisco, CA 94103
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-900">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-900">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all min-h-[150px]" placeholder="Tell us about your puppy..."></textarea>
                                </div>

                                <Button className="w-full py-6 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 rounded-xl">
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
