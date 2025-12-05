import React from 'react';
import { SiteLink } from '@/components/site-link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[#10B981]/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#10B981] mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-[#10B981] mr-2 animate-pulse"></span>
                        v2.0 is now live
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 font-jakarta leading-tight">
                        Master your workflow <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-blue-500">
                            with absolute clarity.
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                        The project management tool for high-performance individuals.
                        Strip away the noise and focus on what actually moves the needle.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <SiteLink href="/signup">
                            <Button className="h-14 px-8 rounded-full bg-[#10B981] hover:bg-[#059669] text-black font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 group">
                                Start Building
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </SiteLink>
                        <SiteLink href="#demo">
                            <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 text-lg backdrop-blur-sm">
                                <Play className="mr-2 h-4 w-4 fill-current" />
                                Watch Demo
                            </Button>
                        </SiteLink>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2" />
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
