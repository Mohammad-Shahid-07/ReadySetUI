"use client";

import { Navbar } from "@/components/bloom-box/navbar";
import { Footer } from "@/components/bloom-box/footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#FEFCE8] font-sans">
            <Navbar />
            <main className="pt-24 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#14532D] mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg prose-green text-[#14532D]/80">
                        <p className="lead">
                            At BloomBox, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>
                            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or make a purchase. This may include your name, email address, shipping address, and payment information.
                        </p>

                        <h3>2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul>
                            <li>Process and fulfill your orders and subscriptions.</li>
                            <li>Communicate with you about your account and our services.</li>
                            <li>Send you newsletters and promotional offers (if you've opted in).</li>
                            <li>Improve our website and customer experience.</li>
                        </ul>

                        <h3>3. Sharing Your Information</h3>
                        <p>
                            We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                        </p>

                        <h3>4. Security</h3>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. Your payment information is encrypted and transmitted securely.
                        </p>

                        <h3>5. Your Rights</h3>
                        <p>
                            You have the right to access, correct, or delete your personal information. You can manage your subscription preferences and account details at any time through your account dashboard.
                        </p>

                        <h3>6. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at privacy@bloombox.com.
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
