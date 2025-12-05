import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Coffee, Focus, Layers, Sparkles, Zap } from 'lucide-react';

const features = [
    {
        title: "Deep Focus Mode",
        description: "Eliminate all distractions with a single click. Just you and your task.",
        icon: Focus,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "AI Prioritization",
        description: "Our engine analyzes your deadlines and habits to suggest what's next.",
        icon: BrainCircuit,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Kanban Redefined",
        description: "Fluid, gesture-based boards that feel like moving physical cards.",
        icon: Layers,
        color: "text-[#10B981]",
        bg: "bg-[#10B981]/10"
    },
    {
        title: "Daily Rituals",
        description: "Start and end your day with guided planning sessions.",
        icon: Coffee,
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
    {
        title: "Instant Sync",
        description: "Real-time updates across all devices with <10ms latency.",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        title: "Insightful Analytics",
        description: "Understand your peak productivity hours and burnout risks.",
        icon: Sparkles,
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#0A0A0A] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-jakarta">
                        Engineered for <span className="text-[#10B981]">peak performance</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Every feature is designed to reduce cognitive load and increase output.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CardHeader>
                                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl font-bold text-white font-jakarta">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
