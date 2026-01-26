"use client";

import { useState, useEffect } from "react";

export default function Onboarding() {
    const screens = [
        {
            src: "/onboarding-signup.png",
            alt: "Create and Verify Account",
            label: "Quick signup",
        },
        {
            src: "/onboarding.png",
            alt: "Deposit Funds",
            label: "Instant  deposit",
        },
        {
            src: "/onboarding-buy.png",
            alt: "Buy your first stock",
            label: "First investment",
        },
        {
            src: "/portfolio-growth.png",
            alt: "Continue investing and diversify portfolio",
            label: "Portfolio growth",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screens.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [screens.length]);

    return (
        <section className="w-full py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* LEFT: VISUAL CAROUSEL */}
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                        <div 
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {screens.map((screen, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex justify-center px-4"
                                >
                                    <div className="w-full max-w-[320px] rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                                        <div className="aspect-9/16 relative bg-white dark:bg-gray-950">
                                            <img
                                                src={screen.src}
                                                alt={screen.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {screen.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {screens.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${
                                    currentIndex === index 
                                        ? "w-4 bg-gray-900 dark:bg-gray-100" 
                                        : "w-2 bg-gray-300 dark:bg-gray-700"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {/* <button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % screens.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Next slide"
                    >
                        <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button> */}
                </div>

                {/* RIGHT: TEXT */}
                <div className="px-2">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                        Start investing in minutes — <br className="hidden sm:block" />
                        not weeks.
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
                        Zanari removes the friction that keeps most Kenyans out of investing.
                        No paperwork. No confusing processes. Just start.
                    </p>

                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                                Sign up with your phone number
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                                Deposit instantly to your wallet
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                                Start with small amounts
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                                No paperwork confusion
                            </span>
                        </li>
                    </ul>

                    <div className="mt-10">
                        <a 
                            href="/beta" 
                            className="inline-flex px-6 py-3 rounded-lg text-sm font-bold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 hover:opacity-90 transition shadow-md"
                        >
                            Join the Beta
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}