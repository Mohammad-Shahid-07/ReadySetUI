"use client";

import { SiteLink } from "@/components/site-link";
import { ArrowLeft } from "lucide-react";

export default function Signup() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md space-y-8">
                <SiteLink href="/" className="inline-flex items-center text-gray-500 hover:text-black transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </SiteLink>

                <div>
                    <h1 className="text-3xl font-bold text-black mb-2">Sign up</h1>
                    <p className="text-gray-600">Create an account to start riding.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full bg-gray-100 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-gray-100 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                        Create Account
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm">
                    Already have an account? <SiteLink href="/login" className="text-black font-bold underline">Log in</SiteLink>
                </p>
            </div>
        </div>
    );
}
