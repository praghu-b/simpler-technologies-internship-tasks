"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Tasks", href: "/tasks" },
        { name: "Sign Up", href: "/signup" },
    ];

    const handleRoute = (href) => {
        router.push(href)
    }

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="text-2xl font-bold tracking-wide">Navbar Component</div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                onClick={() => handleRoute(link.href)}
                                className="hover:text-gray-200 hover:cursor-pointer transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="focus:outline-none px-2 py-1 border rounded border-white"
                    >
                        {open ? "Close" : "Menu"}
                    </button>
                </div>
            </div>

            {/* Mobile Links */}
            {open && (
                <ul className="md:hidden bg-blue-500 px-4 py-2 space-y-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="block text-white hover:bg-blue-600 px-3 py-2 rounded"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
