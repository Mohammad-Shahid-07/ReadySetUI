"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-serif font-bold text-[#14532D] mb-6">Get in Touch</h1>
                        <p className="text-xl text-[#14532D]/70 max-w-2xl mx-auto">
                            Have a question about your plant? Need help with your subscription? We&apos;re here to help you grow.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm">
                                <h3 className="text-2xl font-serif font-bold text-[#14532D] mb-6">Visit Us</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-[#B45309] mt-1" />
                                        <div>
                                            <p className="font-bold text-[#14532D]">BloomBox Greenhouse</p>
                                            <p className="text-[#14532D]/70">123 Botanical Garden Way<br />Portland, OR 97205</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-[#B45309] mt-1" />
                                        <div>
                                            <p className="font-bold text-[#14532D]">Phone</p>
                                            <p className="text-[#14532D]/70">(555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-[#B45309] mt-1" />
                                        <div>
                                            <p className="font-bold text-[#14532D]">Email</p>
                                            <p className="text-[#14532D]/70">hello@bloombox.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-6 h-6 text-[#B45309] mt-1" />
                                        <div>
                                            <p className="font-bold text-[#14532D]">Hours</p>
                                            <p className="text-[#14532D]/70">Mon-Fri: 9am - 6pm<br />Sat-Sun: 10am - 4pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-2/3">
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
                                <h3 className="text-2xl font-serif font-bold text-[#14532D] mb-8">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#14532D]">First Name</label>
                                            <Input placeholder="Jane" className="bg-[#FEFCE8] border-none h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-[#14532D]">Last Name</label>
                                            <Input placeholder="Doe" className="bg-[#FEFCE8] border-none h-12" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#14532D]">Email</label>
                                        <Input type="email" placeholder="jane@example.com" className="bg-[#FEFCE8] border-none h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#14532D]">Subject</label>
                                        <Input placeholder="I have a question about..." className="bg-[#FEFCE8] border-none h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[#14532D]">Message</label>
                                        <Textarea placeholder="Tell us how we can help..." className="bg-[#FEFCE8] border-none min-h-[150px] resize-none" />
                                    </div>
                                    <Button className="w-full bg-[#14532D] hover:bg-[#14532D]/90 text-white h-12 text-lg font-medium">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
