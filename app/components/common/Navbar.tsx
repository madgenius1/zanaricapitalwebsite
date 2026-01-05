'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";



export default function Navbar() {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const toggleDropDownOpen = () => setIsDropDownOpen(prev => !prev);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);


    return (
        <nav className=" top-0 z-50 dark:bg-gray-900 bg-gray-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex justify-start px-4">
                    <Link href="/">
                        <Image
                            src="/zanarilogo.webp"
                            alt="Zanari Header logo"
                            width={100}
                            height={60}
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:justify-center space-x-6">
                    <Link href="/features" className="text-gray-950 dark:text-gray-50 font-semibold">Features</Link>
                    <Link href="/eatures" className="text-gray-950 dark:text-gray-50 font-semibold">Booking</Link>
                    <Link href="/about" className="text-gray-950 dark:text-gray-50 font-semibold">About</Link>
                </div>
                <div className="md:hidden ">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <HiOutlineX size={30} className="dark:text-gray-100 text-gray-800" />
                        ) : (
                            <HiOutlineMenuAlt4  size={30} className="dark:text-gray-100 text-gray-800" />
                        )}
                    </button>
                </div>
                <div className="lg:flex md:flex hidden justify-end">
                    <Link href="/waitlist" className="px-6 py-3 
                text-lg font-bold 
                bg-gray-50 text-gray-900 
                rounded-xl 
                hover:bg-gray-50 transition duration-300 
                shadow-xl 
                transform hover:scale-[1.03]">Join Waitlist</Link>
                </div>
            </div>
        </nav>
    )
}