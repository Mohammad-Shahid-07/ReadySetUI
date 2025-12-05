"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function ReservationForm() {
    const [date, setDate] = React.useState<Date>();

    return (
        <div className="bg-[#121212] p-8 border border-[#D4AF37]/20 max-w-md mx-auto">
            <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 text-center">Secure Your Table</h3>
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-gray-400">Date</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal bg-[#1A1A1A] border-[#333] text-white hover:bg-[#222] hover:text-white rounded-none h-12",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-[#1A1A1A] border-[#333] text-white">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className="bg-[#1A1A1A] text-white"
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-gray-400">Guests</label>
                    <Select>
                        <SelectTrigger className="w-full bg-[#1A1A1A] border-[#333] text-white rounded-none h-12">
                            <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-[#333] text-white">
                            <SelectItem value="1">1 Person</SelectItem>
                            <SelectItem value="2">2 People</SelectItem>
                            <SelectItem value="3">3 People</SelectItem>
                            <SelectItem value="4">4 People</SelectItem>
                            <SelectItem value="5">5 People</SelectItem>
                            <SelectItem value="6">6 People</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-gray-400">Time</label>
                    <Select>
                        <SelectTrigger className="w-full bg-[#1A1A1A] border-[#333] text-white rounded-none h-12">
                            <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1A1A1A] border-[#333] text-white">
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                            <SelectItem value="18:30">6:30 PM</SelectItem>
                            <SelectItem value="19:00">7:00 PM</SelectItem>
                            <SelectItem value="19:30">7:30 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
                            <SelectItem value="20:30">8:30 PM</SelectItem>
                            <SelectItem value="21:00">9:00 PM</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-gray-400">Name</label>
                    <Input className="bg-[#1A1A1A] border-[#333] text-white rounded-none h-12 focus:border-[#D4AF37]" placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-gray-400">Email</label>
                    <Input className="bg-[#1A1A1A] border-[#333] text-white rounded-none h-12 focus:border-[#D4AF37]" placeholder="john@example.com" />
                </div>

                <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#B5952F] font-serif tracking-wide rounded-none h-12 text-lg">
                    Confirm Reservation
                </Button>
            </form>
        </div>
    );
}
