'use client'

import { useState, useEffect } from "react";
import MobileScroll from "./MobileScroll";

interface Asset {
    title: string;
    description: string;
    image: string;
}

export default function MarketingAccess() {
    const assets: Asset[] = [
        {
            title: "NSE Stocks",
            description: "Buy & sell listed Kenyan companies",
            image: "/stocks.webp",
        },
        {
            title: "ETFs",
            description: "Diversified investing made simple",
            image: "/diversify.webp",
        },
        {
            title: "Secondary Bonds",
            description: "Access NSE secondary bonds",
            image: "/secondarybonds.webp",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % assets.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [assets.length]);

    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        Own real assets in local and global markets.
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
                        Invest in instruments you understand — with full ownership,
                        transparency, and Kenyan market access at your fingertips.
                    </p>

                    <div className="mt-10 space-y-6 hidden lg:block md:block">
                        {assets.map((asset, index) => (
                            <div
                                key={asset.title}
                                onClick={() => setActiveIndex(index)}
                                className={`flex gap-4 items-start p-4 rounded-xl transition-all duration-500 cursor-pointer ${activeIndex === index
                                    ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white shadow-lg scale-105"
                                    : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                                    } border`}
                            >
                                <div>
                                    <h4 className={`font-medium transition-colors duration-300 ${activeIndex === index
                                        ? "text-white dark:text-gray-900"
                                        : "text-gray-900 dark:text-white"
                                        }`}>
                                        {asset.title}
                                    </h4>
                                    <p className={`text-sm transition-colors duration-300 ${activeIndex === index
                                        ? "text-gray-200 dark:text-gray-800"
                                        : "text-gray-500 dark:text-gray-700"
                                        }`}>
                                        {asset.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative hidden lg:block md:block">
                    <div className="aspect-square rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl relative">
                        {assets.map((asset, index) => (
                            <div
                                key={asset.title}
                                className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${asset.image})`,
                                    }}
                                >
                                </div>

                                {/* Content Overlay */}
                                <div className="relative h-full flex flex-col justify-between p-8">
                                    {/* Top Badge */}
                                    <div className="flex justify-end">
                                        <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm font-semibold text-gray-900 dark:text-white shadow-lg">
                                            {asset.title}
                                        </span>
                                    </div>

                                    {/* Bottom Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white drop-shadow-lg">
                                            {asset.title}
                                        </h3>
                                        <p className="text-gray-800 dark:text-white drop-shadow-md">
                                            {asset.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="block lg:hidden md:hidden">
                    <MobileScroll />
                </div>
            </div>
        </section>
    );
}