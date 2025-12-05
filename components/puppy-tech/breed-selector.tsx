"use client"
import React, { useState } from 'react';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const breeds = [
    { value: "golden-retriever", label: "Golden Retriever" },
    { value: "french-bulldog", label: "French Bulldog" },
    { value: "german-shepherd", label: "German Shepherd" },
    { value: "poodle", label: "Poodle" },
    { value: "bulldog", label: "Bulldog" },
    { value: "beagle", label: "Beagle" },
    { value: "rottweiler", label: "Rottweiler" },
    { value: "dachshund", label: "Dachshund" },
    { value: "corgi", label: "Corgi" },
    { value: "australian-shepherd", label: "Australian Shepherd" },
    { value: "yorkshire-terrier", label: "Yorkshire Terrier" },
    { value: "boxer", label: "Boxer" },
]

export function BreedSelector() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className="w-full max-w-sm">
            <label className="text-sm font-bold text-slate-700 mb-2 block">Select Your Breed</label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between h-12 text-base"
                    >
                        {value
                            ? breeds.find((breed) => breed.value === value)?.label
                            : "Select breed..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Search breed..." />
                        <CommandList>
                            <CommandEmpty>No breed found.</CommandEmpty>
                            <CommandGroup>
                                {breeds.map((breed) => (
                                    <CommandItem
                                        key={breed.value}
                                        value={breed.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === breed.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {breed.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {value && (
                <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100 animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm text-indigo-800 font-medium">
                        Great choice! We have a specialized plan for <span className="font-bold">{breeds.find(b => b.value === value)?.label}s</span> that focuses on joint health and coat shine.
                    </p>
                </div>
            )}
        </div>
    )
}
