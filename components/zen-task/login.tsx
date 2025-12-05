"use client";

import React from 'react';
import ZenTaskLayout from '@/components/zen-task/layout';
import { SiteLink } from '@/components/site-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';

export default function ZenTaskLogin() {
    return (
        <ZenTaskLayout>
            <div className="min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#10B981]/10 blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>

                <div className="absolute top-8 left-8 z-20">
                    <SiteLink href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </SiteLink>
                </div>

                <div className="w-full max-w-md bg-[#0A0A0A] rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10 relative z-10 backdrop-blur-xl">
                    <div className="text-center mb-8">
                        <SiteLink href="/" className="text-3xl font-bold tracking-tighter text-white font-jakarta mb-4 flex items-center justify-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-lg">Z</span>
                            </div>
                            ZenTask
                        </SiteLink>
                        <h2 className="text-xl font-semibold text-white">Welcome back</h2>
                        <p className="text-gray-400 text-sm mt-2">Enter your details to access your workspace.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#10B981] focus:ring-[#10B981] rounded-xl h-11"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-gray-300">Password</Label>
                                <SiteLink href="#" className="text-xs text-[#10B981] hover:text-[#059669] hover:underline">Forgot password?</SiteLink>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#10B981] focus:ring-[#10B981] rounded-xl h-11"
                            />
                        </div>

                        <Button type="submit" className="w-full bg-[#10B981] hover:bg-[#059669] text-black font-bold rounded-xl h-12 shadow-lg hover:shadow-[#10B981]/20 transition-all">
                            Sign in
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Don&apos;t have an account?{' '}
                        <SiteLink href="/signup" className="text-[#10B981] font-medium hover:underline">
                            Sign up
                        </SiteLink>
                    </div>
                </div>
            </div>
        </ZenTaskLayout>
    );
}
