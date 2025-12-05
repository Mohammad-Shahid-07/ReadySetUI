"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule = {
    Monday: [
        { time: "06:00 AM", class: "HIIT Blast", trainer: "Alex", duration: "45 min" },
        { time: "09:00 AM", class: "Power Yoga", trainer: "Sarah", duration: "60 min" },
        { time: "05:30 PM", class: "CrossFit", trainer: "Mike", duration: "60 min" },
    ],
    Tuesday: [
        { time: "07:00 AM", class: "Cardio Kick", trainer: "Jen", duration: "45 min" },
        { time: "12:00 PM", class: "Strength", trainer: "Alex", duration: "50 min" },
        { time: "06:00 PM", class: "Spinning", trainer: "Sarah", duration: "45 min" },
    ],
    Wednesday: [
        { time: "06:00 AM", class: "HIIT Blast", trainer: "Alex", duration: "45 min" },
        { time: "05:30 PM", class: "CrossFit", trainer: "Mike", duration: "60 min" },
    ],
    Thursday: [
        { time: "07:00 AM", class: "Cardio Kick", trainer: "Jen", duration: "45 min" },
        { time: "06:00 PM", class: "Spinning", trainer: "Sarah", duration: "45 min" },
    ],
    Friday: [
        { time: "06:00 AM", class: "HIIT Blast", trainer: "Alex", duration: "45 min" },
        { time: "12:00 PM", class: "Strength", trainer: "Alex", duration: "50 min" },
    ],
    Saturday: [
        { time: "09:00 AM", class: "Bootcamp", trainer: "Mike", duration: "90 min" },
        { time: "11:00 AM", class: "Yoga Flow", trainer: "Sarah", duration: "60 min" },
    ],
    Sunday: [
        { time: "10:00 AM", class: "Open Gym", trainer: "Staff", duration: "120 min" },
    ],
};

export function ScheduleTable() {
    const [activeDay, setActiveDay] = useState("Monday");

    return (
        <div className="w-full">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setActiveDay(day)}
                        className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${activeDay === day
                                ? "bg-yellow-500 text-black skew-x-[-10deg]"
                                : "bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800 skew-x-[-10deg]"
                            }`}
                    >
                        <span className="block skew-x-[10deg]">{day}</span>
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-zinc-900 border border-white/10 p-6 md:p-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeDay}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                    >
                        {/* @ts-ignore */}
                        {schedule[activeDay]?.map((session, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center justify-between p-4 bg-black border border-white/5 hover:border-yellow-500/50 transition-colors group"
                            >
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <span className="text-yellow-500 font-bold text-xl w-24">{session.time}</span>
                                    <div>
                                        <h4 className="text-white font-bold uppercase italic text-lg group-hover:text-yellow-500 transition-colors">
                                            {session.class}
                                        </h4>
                                        <p className="text-gray-500 text-sm">with {session.trainer}</p>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 w-full md:w-auto flex items-center justify-between md:justify-end gap-4">
                                    <span className="text-gray-400 text-sm font-mono bg-white/5 px-3 py-1 rounded">
                                        {session.duration}
                                    </span>
                                    <button className="px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-black transition-colors">
                                        Join
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
