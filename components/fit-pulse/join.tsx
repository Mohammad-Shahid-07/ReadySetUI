"use client";

import { Layout } from "./layout";
import { SlantedSection } from "./slanted-section";
import { PulseButton } from "./pulse-button";
import { SiteLink } from "@/components/site-link";

export default function Page() {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Left Side - Content */}
                <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                    <div className="relative z-10">
                        <h1 className="text-6xl font-black text-white uppercase italic mb-6">
                            Join The <br /><span className="text-yellow-500">Revolution</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-md">
                            Stop waiting. Start doing. Your future self is begging you to take this step.
                        </p>
                        <ul className="space-y-4 mb-12">
                            <ListItem text="Unlimited Access" />
                            <ListItem text="Expert Coaching" />
                            <ListItem text="Results Guaranteed" />
                        </ul>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 bg-zinc-900 flex flex-col justify-center p-12 md:p-24">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-3xl font-bold text-white uppercase italic mb-8">Create Account</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <Input placeholder="FIRST NAME" />
                                <Input placeholder="LAST NAME" />
                            </div>
                            <Input placeholder="EMAIL ADDRESS" type="email" />
                            <Input placeholder="PASSWORD" type="password" />
                            <Input placeholder="CONFIRM PASSWORD" type="password" />

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="terms" className="w-4 h-4 accent-yellow-500" />
                                <label htmlFor="terms" className="text-sm text-gray-400">
                                    I agree to the <SiteLink href="/terms" className="text-yellow-500 hover:underline">Terms of Service</SiteLink>
                                </label>
                            </div>

                            <PulseButton href="#" className="w-full">Create Account</PulseButton>

                            <p className="text-center text-gray-500 text-sm mt-6">
                                Already have an account? <SiteLink href="/login" className="text-yellow-500 font-bold hover:underline">Log In</SiteLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-white font-bold uppercase tracking-wide">
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            {text}
        </li>
    )
}

function Input({ placeholder, type = "text" }: { placeholder: string, type?: string }) {
    return (
        <div className="relative group">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-black border-b-2 border-white/20 p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-colors font-bold uppercase tracking-wider"
            />
        </div>
    )
}
