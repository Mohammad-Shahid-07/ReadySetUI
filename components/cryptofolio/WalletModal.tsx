"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function WalletModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative px-6 py-2 bg-transparent border border-[#06B6D4] text-[#06B6D4] font-mono text-sm font-bold overflow-hidden group hover:text-black transition-colors duration-300 cursor-pointer flex items-center justify-center">
                    <span className="absolute inset-0 w-full h-full bg-[#06B6D4] transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative z-10">Connect Wallet</span>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-black border border-white/10 text-white sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="font-mono text-xl text-white">Select Wallet</DialogTitle>
                    <DialogDescription className="font-mono text-gray-400">
                        Choose your preferred wallet to connect to CryptoFolio.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {["MetaMask", "Phantom", "Coinbase Wallet", "WalletConnect"].map((wallet) => (
                        <Button
                            key={wallet}
                            variant="outline"
                            className="justify-start gap-4 h-14 border-white/10 hover:bg-white/5 hover:text-[#D946EF] hover:border-[#D946EF] font-mono text-lg bg-black text-white"
                        >
                            <Wallet className="w-5 h-5" />
                            {wallet}
                        </Button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
