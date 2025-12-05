import React from 'react';
import { SiteLink } from '@/components/site-link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <SiteLink href="/" className="text-2xl font-bold tracking-tighter text-white font-jakarta mb-6 flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-lg">Z</span>
                            </div>
                            ZenTask
                        </SiteLink>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            The project management tool for high-performance individuals.
                            Master your workflow with absolute clarity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-[#10B981] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-[#10B981] transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-gray-500 hover:text-[#10B981] transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-jakarta">Product</h4>
                        <ul className="space-y-3">
                            <li><SiteLink href="#features" className="text-gray-500 hover:text-white transition-colors text-sm">Features</SiteLink></li>
                            <li><SiteLink href="#pricing" className="text-gray-500 hover:text-white transition-colors text-sm">Pricing</SiteLink></li>
                            <li><SiteLink href="#roadmap" className="text-gray-500 hover:text-white transition-colors text-sm">Roadmap</SiteLink></li>
                            <li><SiteLink href="#changelog" className="text-gray-500 hover:text-white transition-colors text-sm">Changelog</SiteLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-jakarta">Company</h4>
                        <ul className="space-y-3">
                            <li><SiteLink href="#about" className="text-gray-500 hover:text-white transition-colors text-sm">About</SiteLink></li>
                            <li><SiteLink href="#blog" className="text-gray-500 hover:text-white transition-colors text-sm">Blog</SiteLink></li>
                            <li><SiteLink href="#careers" className="text-gray-500 hover:text-white transition-colors text-sm">Careers</SiteLink></li>
                            <li><SiteLink href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</SiteLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-jakarta">Legal</h4>
                        <ul className="space-y-3">
                            <li><SiteLink href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</SiteLink></li>
                            <li><SiteLink href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</SiteLink></li>
                            <li><SiteLink href="/cookies" className="text-gray-500 hover:text-white transition-colors text-sm">Cookie Policy</SiteLink></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} ZenTask Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
