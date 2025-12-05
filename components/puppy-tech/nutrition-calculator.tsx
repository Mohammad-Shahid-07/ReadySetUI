"use client"
import React, { useState } from 'react';

import { Slider } from '@/components/ui/slider';
import { Dog, Activity, Scale, Calculator } from 'lucide-react';

export function NutritionCalculator() {
    const [weight, setWeight] = useState([20]);
    const [age, setAge] = useState([6]);
    const [activity, setActivity] = useState('moderate');

    const calculateCalories = () => {
        // Simple RER calculation for demo purposes
        const weightInKg = weight[0] / 2.20462;
        const rer = 70 * Math.pow(weightInKg, 0.75);
        let multiplier = 1.6; // moderate

        if (activity === 'low') multiplier = 1.4;
        if (activity === 'high') multiplier = 1.8;
        if (age[0] < 12) multiplier += 0.5; // puppy growth factor

        return Math.round(rer * multiplier);
    };

    return (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Daily Calorie Calculator</h3>
            </div>

            <div className="space-y-8">
                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Scale className="w-4 h-4" /> Weight (lbs)
                        </label>
                        <span className="text-indigo-600 font-bold">{weight[0]} lbs</span>
                    </div>
                    <Slider
                        value={weight}
                        onValueChange={setWeight}
                        max={150}
                        step={1}
                        className="py-4"
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-4">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Dog className="w-4 h-4" /> Age (months)
                        </label>
                        <span className="text-indigo-600 font-bold">{age[0]} mo</span>
                    </div>
                    <Slider
                        value={age}
                        onValueChange={setAge}
                        max={24}
                        step={1}
                        className="py-4"
                    />
                </div>

                <div>
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-4">
                        <Activity className="w-4 h-4" /> Activity Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {['low', 'moderate', 'high'].map((level) => (
                            <button
                                key={level}
                                onClick={() => setActivity(level)}
                                className={`py-2 px-4 rounded-lg text-sm font-bold capitalize transition-all ${activity === level
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 text-center text-white">
                    <p className="text-sm text-slate-400 mb-1">Recommended Daily Intake</p>
                    <div className="text-4xl font-extrabold mb-2 text-green-400">
                        {calculateCalories()} <span className="text-lg text-white">kcal</span>
                    </div>
                    <p className="text-xs text-slate-500">
                        *Estimate only. Consult your vet.
                    </p>
                </div>
            </div>
        </div>
    );
}
