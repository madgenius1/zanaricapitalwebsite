'use client'

import { useState, useEffect, useRef } from "react";

interface Card {
    image: string;
    topText: string;
    bottomText: string;
}

export default function MobileScroll() {
    const cards: Card[] = [
        {
            image: "/stocks.webp",
            topText: "NSE Stock",
            bottomText: "Buy and sell listed Kenyan companies",
        },
        {
            image: "/diversify.webp",
            topText: "ETFs and Derivatives",
            bottomText: "Access top NSE companies with ease",
        },
        {
            image: "/secondarybonds.webp",
            topText: "Secondary Bonds",
            bottomText: "Access NSE secondary bonds",
        },
    ];

    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const indexAttr = entry.target.getAttribute('data-index');
                    if (indexAttr) {
                        const index = parseInt(indexAttr, 10);
                        if (entry.isIntersecting) {
                            setVisibleCards((prev) => [...new Set([...prev, index])]);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className=" py-4 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto ">
                <div className="space-y-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            data-index={index}
                            className={`transition-all duration-1000 ${visibleCards.includes(index)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-20"
                                }`}
                        >
                            <div className="relative group">
                                {/* Card Container */}
                                <div className="aspect-square rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl relative">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${card.image})`,
                                        }}
                                    >
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/70" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col items-center justify-between p-8 md:p-12 text-center">
                                        {/* Top Text */}
                                        <div className="space-y-2">
                                            <h3 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                                                {card.topText}
                                            </h3>
                                        </div>

                                        {/* Center Icon/Placeholder */}
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
                                                <svg
                                                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Bottom Text */}
                                        <div className="space-y-4">
                                            <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
                                                {card.bottomText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}