"use client";

import { Shield, Clock, CreditCard, User } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Safety first",
        description: "We prioritize your safety with features like GPS tracking, emergency assistance, and trusted drivers."
    },
    {
        icon: Clock,
        title: "Always available",
        description: "24/7 service means you can get a ride whenever you need one, day or night."
    },
    {
        icon: CreditCard,
        title: "Transparent pricing",
        description: "See the price upfront before you book. No hidden fees or surprises at the end of your trip."
    },
    {
        icon: User,
        title: "Top-rated drivers",
        description: "Ride with the best. Our drivers are rated by passengers like you to ensure a quality experience."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4">
                        Why ride with us?
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        We&apos;re committed to providing the best ride-sharing experience possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
