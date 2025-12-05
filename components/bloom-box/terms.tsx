"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#14532D] mb-8">Terms of Service</h1>
                    <div className="prose prose-lg prose-green text-[#14532D]/80">
                        <p className="lead">
                            Welcome to BloomBox. By accessing or using our website and services, you agree to be bound by these Terms of Service.
                        </p>

                        <h3>1. Subscription Services</h3>
                        <p>
                            By subscribing to BloomBox, you agree to pay the recurring monthly subscription fee associated with your chosen tier. You may cancel or pause your subscription at any time before the renewal date.
                        </p>

                        <h3>2. Shipping and Delivery</h3>
                        <p>
                            We ship plants to the contiguous United States. While we take every precaution to ensure safe delivery, we are not responsible for delays caused by shipping carriers or weather conditions.
                        </p>

                        <h3>3. Returns and Refunds</h3>
                        <p>
                            Our &quot;Happy Plant Guarantee&quot; covers plants that arrive damaged or unhealthy. You must notify us within 14 days of delivery with photographic evidence to be eligible for a replacement or refund.
                        </p>

                        <h3>4. User Accounts</h3>
                        <p>
                            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                        </p>

                        <h3>5. Intellectual Property</h3>
                        <p>
                            All content on this website, including text, graphics, logos, and images, is the property of BloomBox and protected by copyright laws.
                        </p>

                        <h3>6. Limitation of Liability</h3>
                        <p>
                            BloomBox shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                        </p>

                        <h3>7. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Your continued use of our services constitutes acceptance of any changes.
                        </p>

                        <p className="text-sm mt-12 opacity-60">
                            Last Updated: December 5, 2025
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
