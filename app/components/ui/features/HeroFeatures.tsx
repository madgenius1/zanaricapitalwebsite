"use client";

import { useState, useEffect } from "react";
import { FiChevronRight, FiBox, FiShield, FiUserCheck } from "react-icons/fi";
import TrustItem from "./TrustItem";
import Link from "next/link";
import Image from "next/image";


const slides = [
    {
        title: "Deposit via M-Pesa",
        description: "Instant deposits from KES 100",
        image: "/deposit.png",
        alt: "Zanari capital instant deposits image"
    },
    {
        title: "Buy NSE Stocks",
        description: "Safaricom, Equity, KCB & more",
        image: "/stocks.png",
        alt: "Zanari capital buy NSE stocks image"
    },
    {
        title: "Track Your Growth",
        description: "Real-time portfolio performance",
        image: "/track.png",
        alt: "Zanari capital track growth image"
    }
];

export default function HeroFeatures() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="lg:sticky lg:top-28 space-y-10">
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                        We made investing{" "}
                        Understandable, Accessible, and Kenyan-first.
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/beta" className="group px-6 py-3 md:inline-flex rounded-lg text-sm font-bold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 transition-all flex items-center justify-center gap-2">
                            Get Started
                            <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 pt-6">
                        <TrustItem
                            icon={<FiBox />}
                            title="CMA Sandbox"
                            subtitle="Assessment"
                            color="green"
                        />
                        <TrustItem
                            icon={<FiShield />}
                            title="Bank-level"
                            subtitle="Security"
                            color="blue"
                        />
                        <TrustItem
                            icon={<FiUserCheck />}
                            title="Intuitive UI"
                            subtitle="Simpler"
                            color="yellow"
                        />
                    </div>
                </div>

                {/* RIGHT — Auto-scrolling Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex justify-center px-4"
                                >
                                    {/* PHONE FRAME */}
                                    <div className="relative w-full max-w-70 sm:max-w-[320px] bg-gray-900 dark:bg-black rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-800">
                                        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] aspect-[9/19.5] overflow-hidden p-6 flex flex-col justify-between">
                                            <div className="space-y-3 py-2">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                    {slide.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {slide.description}
                                                </p>
                                            </div>

                                            {/* Responsive Image */}
                                            <div className="flex-1 mt-6 rounded-xl overflow-hidden flex items-center justify-center">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                    height={200}
                                                    width={100}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all ${currentSlide === index
                                        ? "w-8 bg-gray-900 dark:bg-gray-100"
                                        : "w-2 bg-gray-300 dark:bg-gray-700"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}