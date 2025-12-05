"use client";

import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { PulseButton } from "./pulse-button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Page() {
    return (
        <Layout>
            <div className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                        Get In <span className="text-yellow-500">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to start? Have questions? We&apos;re here.
                    </p>
                </div>
            </div>

            <SlantedSection angle="none" background="zinc">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <ContactItem
                            icon={MapPin}
                            title="Visit Us"
                            content="123 Energy Blvd, Fitness City, FC 90210"
                        />
                        <ContactItem
                            icon={Phone}
                            title="Call Us"
                            content="+1 (555) 123-4567"
                        />
                        <ContactItem
                            icon={Mail}
                            title="Email Us"
                            content="hello@fitpulse.com"
                        />
                        <ContactItem
                            icon={Clock}
                            title="Opening Hours"
                            content="Mon-Fri: 5am - 10pm | Sat-Sun: 7am - 8pm"
                        />
                    </div>

                    {/* Form */}
                    <div className="bg-black p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white uppercase italic mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <Input placeholder="FIRST NAME" />
                                <Input placeholder="LAST NAME" />
                            </div>
                            <Input placeholder="EMAIL ADDRESS" type="email" />
                            <Input placeholder="PHONE NUMBER" type="tel" />
                            <textarea
                                placeholder="YOUR MESSAGE"
                                rows={4}
                                className="w-full bg-zinc-900 border-b-2 border-white/20 p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-colors font-bold uppercase tracking-wider resize-none"
                            />
                            <PulseButton href="#" className="w-full">Send Message</PulseButton>
                        </form>
                    </div>
                </div>
            </SlantedSection>
        </Layout>
    );
}

function ContactItem({ icon: Icon, title, content }: { icon: React.ElementType, title: string, content: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-black" />
            </div>
            <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">{title}</h4>
                <p className="text-gray-400">{content}</p>
            </div>
        </div>
    )
}

function Input({ placeholder, type = "text" }: { placeholder: string, type?: string }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-zinc-900 border-b-2 border-white/20 p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-colors font-bold uppercase tracking-wider"
        />
    )
}
