import { SiteLink } from "@/components/site-link";
import { Leaf, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="bg-[#0F391E] text-[#FEFCE8] pt-20 pb-10 relative overflow-hidden">
            {/* Organic Wave Separator (SVG) - could be added as a background image or inline SVG */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-[#14532D]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#FEFCE8] p-2 rounded-full">
                                <Leaf className="w-5 h-5 text-[#14532D]" />
                            </div>
                            <span className="text-2xl font-serif font-bold tracking-wide">
                                BloomBox
                            </span>
                        </div>
                        <p className="text-[#FEFCE8]/70 leading-relaxed">
                            Bringing the serenity of nature into your home, one rare plant at a time. Join our community of plant lovers.
                        </p>
                        <div className="flex gap-4">
                            <SiteLink href="#" className="hover:text-[#B45309] transition-colors"><Instagram className="w-5 h-5" /></SiteLink>
                            <SiteLink href="#" className="hover:text-[#B45309] transition-colors"><Twitter className="w-5 h-5" /></SiteLink>
                            <SiteLink href="#" className="hover:text-[#B45309] transition-colors"><Facebook className="w-5 h-5" /></SiteLink>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-[#B45309]">Explore</h4>
                        <ul className="space-y-4">
                            <li><SiteLink href="/shop" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Shop Plants</SiteLink></li>
                            <li><SiteLink href="/subscription" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Subscriptions</SiteLink></li>
                            <li><SiteLink href="/care-guide" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Care Guide</SiteLink></li>
                            <li><SiteLink href="/about" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Our Story</SiteLink></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-[#B45309]">Support</h4>
                        <ul className="space-y-4">
                            <li><SiteLink href="/faq" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">FAQ</SiteLink></li>
                            <li><SiteLink href="/contact" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Contact Us</SiteLink></li>
                            <li><SiteLink href="/terms" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Terms of Service</SiteLink></li>
                            <li><SiteLink href="/privacy" className="text-[#FEFCE8]/70 hover:text-[#FEFCE8] transition-colors">Privacy Policy</SiteLink></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-[#B45309]">Join the Green Club</h4>
                        <p className="text-[#FEFCE8]/70 mb-4">Get plant care tips and exclusive offers delivered to your inbox.</p>
                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-[#FEFCE8]/10 border-[#FEFCE8]/20 text-[#FEFCE8] placeholder:text-[#FEFCE8]/40 focus:border-[#B45309] focus:ring-[#B45309]"
                            />
                            <Button className="w-full bg-[#B45309] hover:bg-[#B45309]/90 text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#FEFCE8]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FEFCE8]/50">
                    <p>&copy; {new Date().getFullYear()} BloomBox. All rights reserved.</p>
                    <div className="flex gap-6">
                        <SiteLink href="/privacy" className="hover:text-[#FEFCE8] transition-colors">Privacy</SiteLink>
                        <SiteLink href="/terms" className="hover:text-[#FEFCE8] transition-colors">Terms</SiteLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
