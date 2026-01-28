'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const navItems = [
    { slug: 'features', label: 'Features' },
    { slug: 'rafiki', label: 'Rafiki' },
    { slug: 'beta', label: 'Beta' },
    { slug: 'learn', label: 'Learn' },
    { slug: 'about', label: 'About' },
    { slug: 'contact', label: 'Contact' },
    { slug: 'privacy', label: 'Privacy Policy' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        // Added 'sticky' and 'relative'
        <nav className="top-0 sticky z-50 w-full  dark:bg-gray-950 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">

                {/* Logo Section */}
                <div className="flex justify-start">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/logo.webp"
                            alt="Zanari Logo"
                            width={36}
                            height={36}
                            className="rounded-sm"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="uppercase font-bold dark:text-gray-50 text-gray-950 text-sm tracking-wider">
                                Zanari
                            </span>
                            <span className="uppercase font-bold dark:text-gray-50 text-gray-950 text-sm tracking-wider">
                                Capital
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation - Synced to lg breakpoint */}
                <div className="hidden lg:flex lg:justify-center space-x-8">
                    <Link href="/features" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors">Features</Link>
                    <Link href="/rafiki" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors">Rafiki AI</Link>
                    <Link href="/beta" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors">Beta</Link>
                    <Link href="/learn" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors">Learn</Link>
                    <Link href="/about" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
                </div>

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center space-x-4">
                    <Link href="/beta" className="hidden md:inline-flex px-5 py-2.5 text-sm font-bold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 rounded-lg hover:opacity-90 transition shadow-md">
                        Join Beta
                    </Link>

                    {/* Mobile Menu Button - Synced to lg:hidden */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <HiOutlineX size={28} className="dark:text-gray-100 text-gray-800" />
                            ) : (
                                <HiOutlineMenuAlt4 size={28} className="dark:text-gray-100 text-gray-800" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`absolute left-0 top-full w-full transition-all duration-300 ease-in-out lg:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden ${isMobileMenuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <ul className="flex flex-col p-6 space-y-2">
                        {navItems.map(({ slug, label }) => (
                            <li key={slug}>
                                <Link
                                    href={`/${slug}`}
                                    className="block px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}