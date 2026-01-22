"use client";

import Image from "next/image";

export default function Onboarding() {
    const screens = [
        {
            src: "/onboarding-signup.png",
            alt: "Create and Verify Account",
            label: "Quick signup",
        },
        {
            src: "/onboarding-mpesa.png",
            alt: "Deposit Funds",
            label: "Instant M-Pesa deposit",
        },
        {
            src: "/onboarding-buy.png",
            alt: "Buy your first stock",
            label: "First investment",
        },
        {
            src: "/portfolio-growth.png",
            alt: "Continue ivesting and diversify portfolio",
            label: "Portfolio growth",
        },
    ];

    return (
        <section className="w-full py-20 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* LEFT: VISUAL */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-6 animate-onboarding-scroll">
                        {[...screens, ...screens].map((screen, index) => (
                            <div
                                key={index}
                                className="flex-none w-55 sm:w-60 rounded-2xl bg-gray-50 shadow-lg border border-gray-100"
                            >
                                <Image
                                    src={screen.src}
                                    alt={screen.alt}
                                    width={400}
                                    height={800}
                                    className="rounded-2xl object-cover"
                                />
                                <div className="py-2 text-center text-xs text-gray-500">
                                    {screen.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: TEXT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                        Start investing in minutes — <br className="hidden sm:block" />
                        not weeks.
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-md">
                        Zanari removes the friction that keeps most Kenyans out of investing.
                        No paperwork. No confusing processes. Just start.
                    </p>

                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                            <span className="text-gray-700">
                                Sign up with your phone number
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                            <span className="text-gray-700">
                                Deposit instantly via M-Pesa
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                            <span className="text-gray-700">
                                Start with small amounts
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                            <span className="text-gray-700">
                                No paperwork confusion
                            </span>
                        </li>
                    </ul>

                    <div className="mt-10">
                        <button className="px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-900 transition">
                            Join the Beta
                        </button>
                    </div>
                </div>
            </div>

            {/* Animation */}
            <style jsx>{`
                @keyframes onboarding-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-onboarding-scroll {
                    animation: onboarding-scroll 25s linear infinite;
                }
            `}</style>
        </section>
    );
}
