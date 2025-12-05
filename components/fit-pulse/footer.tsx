import { SiteLink } from "@/components/site-link";
import { Facebook, Instagram, Twitter, Youtube, Zap, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <SiteLink href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-yellow-500 rounded-lg group-hover:bg-yellow-400 transition-colors">
                                <Zap className="w-5 h-5 text-black fill-current" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tighter uppercase italic">
                                Fit<span className="text-yellow-500">Pulse</span>
                            </span>
                        </SiteLink>
                        <p className="text-gray-400 leading-relaxed">
                            Ignite your potential with high-intensity workouts designed to push your limits. Join the revolution today.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Instagram} />
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Youtube} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Explore</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/classes">Classes</FooterLink>
                            <FooterLink href="/trainers">Trainers</FooterLink>
                            <FooterLink href="/schedule">Schedule</FooterLink>
                            <FooterLink href="/pricing">Pricing</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Support</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/faq">FAQ</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms of Service</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                                <span>123 Energy Blvd, Fitness City, FC 90210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                                <span>hello@fitpulse.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} FitPulse. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm">
                        Designed for those who dare.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <SiteLink
                href={href}
                className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center gap-2 group"
            >
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {children}
            </SiteLink>
        </li>
    );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all"
        >
            <Icon className="w-5 h-5" />
        </a>
    );
}
