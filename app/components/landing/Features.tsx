import Image from "next/image";
import Link from "next/link";

import { HiShieldCheck, HiArrowUpRight, HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiChartBar, HiCash, HiBadgeCheck } from "react-icons/hi";

interface Product {
    id: string;
    category: string;
    title: string;
    description: string;
    metric: string;
    image: string;
    cta: string;
    gridClasses: string;
    accent: string;
    icon: any;
}

const PRODUCTS: Product[] = [
    {
        id: "stocks",
        category: "Equities",
        title: "Nairobi Securities Exchange",
        description: "Trade Safaricom, Equity, and top NSE stocks with real-time pricing and fast settlement.",
        metric: "Avg. daily volume: KES 2.1B",
        image: "/stocktrade.webp",
        cta: "Trade Stocks",
        gridClasses: "col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-2",
        accent: "group-hover:bg-blue-600/20",
        icon: HiChartBar,
    },
    {
        id: "bonds",
        category: "Fixed Income",
        title: "Infrastructure Bonds",
        description: "Low-risk, tax-free government-backed bonds.",
        metric: "Yield up to 18.5%",
        image: "/bonds.webp",
        cta: "View Bonds",
        gridClasses: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1",
        accent: "group-hover:bg-emerald-600/20",
        icon: HiCash,
    },
    {
        id: "etfs",
        category: "Smart Investing",
        title: "ETFs",
        description: "Globally diversified ETFs auto-balanced for you.",
        metric: "From KES 5,000",
        image: "/etfs.webp",
        cta: "Diversify Investments",
        gridClasses: "col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1",
        accent: "group-hover:bg-purple-600/20",
        icon: HiMiniArrowTrendingUp,
    },
    {
        id: "analytics",
        category: "Insights",
        title: "Portfolio Analytics",
        description: "Track performance and risk exposure in real time.",
        metric: "Live updates",
        image: "/analytics.webp",
        cta: "View Insights",
        gridClasses: "col-span-1 md:col-span-2 lg:col-span-6 lg:row-span-1",
        accent: "group-hover:bg-orange-600/20",
        icon: HiShieldCheck,
    },
    {
        id: "learn",
        category: "Learning",
        title: "Learn Investment",
        description: "Learn the skills to invest successfully.",
        metric: "Dynamic Learning",
        image: "/learn.webp",
        cta: "Learn More",
        gridClasses: "col-span-1 md:col-span-2 lg:col-span-6 lg:row-span-1",
        accent: "group-hover:bg-green-600/20",
        icon: HiBadgeCheck,
    },
];

export default function InvestmentBento() {
    return (
        <section className="py-8 lg:py-24 px-2 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-4xl space-y-2">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white gap-2">
                            One App <br /> Every Kenyan Asset
                        </h2>
                        <p className="mt-4 text-gray-800 dark:text-gray-400 text-lg md:text-xl">
                            Buy and sell shares in the Nairobi Securities Exchange, Government Bonds, and intelligent ETFs
                            through a world-class mobile app.
                        </p>
                    </div>
                </div>
                {/* <div className="mb-12 sm:mb-16 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6">
                        One App. <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500">
                            Every Kenyan Asset.
                        </span>
                    </h2>
                    <p className="max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                        Invest in the Nairobi Securities Exchange, Government Bonds, and intelligent ETFs
                        through a world-class platform.
                    </p>
                </div> */}

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[250px]">
                    {PRODUCTS.map((product) => (
                        <Link
                            key={product.id}
                            href={`/${product.id}`}
                            className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-neutral-800 transition-all duration-500 hover:shadow-2xl flex flex-col ${product.gridClasses}`}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Multi-stage gradient for better text legibility */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />
                                <div className={`absolute inset-0 transition-colors duration-500 z-10 ${product.accent}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">
                                        <product.icon className="w-6 h-6" />
                                    </div>
                                    <div className="px-3 py-2 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border shadow-md border-white/10">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/90">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {product.title}
                                        </h3>
                                        <p className="mt-2 text-sm md:text-base text-gray-100 line-clamp-2 max-w-sm">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                        <div className="">
                                            <span className="text-sm font-bold text-green-400">{product.metric}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:underline">
                                            {product.cta}
                                            <HiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}