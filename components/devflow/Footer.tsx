"use client";

export default function Footer() {
    return (
        <footer className="py-8 bg-zinc-950 border-t border-white/5">
            <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
