"use client";



const integrations = [
    "Ethereum", "Solana", "Polygon", "Arbitrum", "Optimism", "Binance Smart Chain", "Avalanche", "Base", "ZkSync", "Starknet"
];

const partners = [
    "MetaMask", "Ledger", "Trezor", "WalletConnect", "Coinbase", "Trust Wallet", "Phantom", "Rainbow", "Argent", "Safe"
];

export function Integrations() {
    return (
        <section className="py-24 bg-black border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-4">
                    UNIVERSAL <span className="text-[#EAB308]">COMPATIBILITY</span>
                </h2>
                <p className="text-gray-400 font-mono">
                    Seamlessly syncing with 50+ chains and 100+ wallets.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...integrations, ...integrations].map((item, index) => (
                        <span key={index} className="text-2xl font-bold font-mono text-white/20 uppercase hover:text-[#D946EF] transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
                    {[...integrations, ...integrations].map((item, index) => (
                        <span key={index} className="text-2xl font-bold font-mono text-white/20 uppercase hover:text-[#D946EF] transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group mt-12">
                <div className="animate-marquee-reverse whitespace-nowrap flex gap-16 items-center">
                    {[...partners, ...partners].map((item, index) => (
                        <span key={index} className="text-2xl font-bold font-mono text-white/20 uppercase hover:text-[#06B6D4] transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2-reverse whitespace-nowrap flex gap-16 items-center">
                    {[...partners, ...partners].map((item, index) => (
                        <span key={index} className="text-2xl font-bold font-mono text-white/20 uppercase hover:text-[#06B6D4] transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
