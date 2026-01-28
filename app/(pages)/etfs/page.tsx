'use client'

import React from 'react';
import Link from 'next/link';
import {
    HiOutlineCollection,
    HiOutlineGlobe,
    HiOutlineScale,
    HiOutlineCursorClick,
    HiOutlineChartBar,
    HiOutlineThumbUp,
    HiOutlineExternalLink,
    HiOutlineShieldCheck,
    HiOutlineCheckCircle
} from 'react-icons/hi';

/** * Strict Interfaces for ETF Architecture 
 */
interface ETFFeature {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

interface ETFCategory {
    title: string;
    example: string;
    benefit: string;
    color: string;
}

const FEATURES: ETFFeature[] = [
    {
        icon: <HiOutlineCollection className="text-blue-600" size={32} />,
        title: "Basket of Assets",
        desc: "Own hundreds of companies through a single purchase rather than picking individual winners."
    },
    {
        icon: <HiOutlineScale className="text-green-600" size={32} />,
        title: "Risk Mitigation",
        desc: "A dip in one company’s price is offset by the performance of others in the basket."
    },
    {
        icon: <HiOutlineCheckCircle className="text-cyan-600" size={32} />,
        title: "Cost Efficient",
        desc: "Lower management fees than traditional mutual funds with higher transparency."
    }
];

const CATEGORIES: ETFCategory[] = [
    {
        title: "Index ETFs",
        example: "Stocks, Commodities, Currencies",
        benefit: "Broad market growth",
        color: "bg-blue-600"
    },
    {
        title: "Bond ETFs",
        example: "Treasury Bond Funds",
        benefit: "Fixed income stability",
        color: "bg-green-600"
    },
    {
        title: "Commodity ETFs",
        example: "Precious Metal, Hydrocarbons, Agro Products",
        benefit: "Targeted industry play",
        color: "bg-gray-700"
    },
    {
        title: "Sector ETFs",
        example: "Banking, Manufacturing, Agriculture",
        benefit: "Specific sector exposure",
        color: "bg-orange-700"
    }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

            {/* Hero Section: SEO Target - ETF Investing Kenya */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-3/5">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Diversified <br />
                            investing <span className="text-blue-600 underline decoration-4 underline-offset-8">made simple.</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
                            Access the Kenya&apos;s and Africa&apos;s most powerful markets without the complexity of picking individual stocks.
                        </p>
                        {/* <Link href="/beta">
                            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all">
                                Explore Global ETFs <HiOutlineExternalLink size={20} />
                            </button>
                        </Link> */}
                    </div>
                    <div className="md:w-2/5 grid grid-cols-2 gap-4">
                        <div className="h-40 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center p-6 text-center border border-gray-200 dark:border-gray-800">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">Diversified & Regulated</p>
                        </div>
                        <div className="h-40 bg-blue-600 rounded-2xl flex flex-col items-center justify-center p-6 text-white">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">Hassle Free Investment</p>
                        </div>
                        <div className="h-40 bg-green-500 rounded-2xl flex flex-col items-center justify-center p-6 text-white">
                            <HiOutlineThumbUp size={40} />
                            <span className="text-[10px] font-bold uppercase mt-2">Tax Exempt</span>
                        </div>
                        <div className="h-40 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center p-6 text-center border border-gray-200 dark:border-gray-800">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">Transparent & Flexible</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Breakdown: What are ETFs? */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-4">What exactly is an ETF?</h2>
                        <div className="h-2 w-24 bg-blue-600" />
                        <p className="text-base font-medium mt-4 text-gray-800 dark:text-gray-200">
                            An ETF is a listed investment product, which tracks the performance of a particular index (e.g. NSE 20, NSE 25) or basket of shares, bonds, money market instruments or a single commodity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {FEATURES.map((feature, i) => (
                            <div key={i} className="group">
                                <div className="mb-6 p-4 bg-white dark:bg-gray-800 inline-block rounded-2xl shadow-sm transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
                                    "{feature.desc}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">ETF Categories</h2>
                    <p className="text-gray-700 dark:text-gray-200">Tailor your exposure to specific market segments.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 grid-cols-1">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="border-2 border-gray-100 dark:border-gray-900 rounded-4xl p-8 hover:border-blue-600 transition-all">
                            <div className={`w-12 h-1 ${cat.color} mb-8`} />
                            <h4 className="text-2xl font-bold mb-4">{cat.title}</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Typical Examples</p>
                                    <p className="font-medium text-blue-600">{cat.example}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Primary Benefit</p>
                                    <p className="font-medium">{cat.benefit}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Zanari Section */}
            <section className="py-24 bg-gray-900 text-white px-6">
                <div className="max-w-7xl mx-auto flex flex-col justify-center md:flex-row gap-16">
                    <div className="">
                        <h2 className="text-4xl font-bold mb-8 leading-tight">Zanari makes ETFs accessible to <span className="text-blue-600">every Kenyan.</span></h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <HiOutlineCursorClick className="text-blue-400 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">One-Tap Buying</h5>
                                    <p className="text-gray-400 text-sm">Convert your Ksh. directly into global ETF shares with no complex foreign exchange paperwork.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <HiOutlineGlobe className="text-blue-400 mt-1" size={24} />
                                <div>
                                    <h5 className="font-bold">Regional & Local Access</h5>
                                    <p className="text-gray-400 text-sm">Trade the upcoming NSE derivatives alongside Africa&apos;s-leading Indices.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="md:w-1/2 w-full aspect-square bg-gray-800 rounded-3xl border border-gray-700 flex flex-col p-8 justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-green-500 rounded-xl">
                                <HiOutlineChartBar size={24} className="text-gray-900" />
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-gray-400">Portfolio Health</p>
                                <p className="text-xl font-black text-green-400">Optimized</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full w-4/5 bg-green-500" />
                            </div>
                            <div className="h-2 w-2/3 bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-blue-500" />
                            </div>
                        </div>
                        <Link href="/beta" className="w-full py-4 bg-white text-gray-950 text-center rounded-xl font-bold text-sm uppercase tracking-widest">
                            Start Investing
                        </Link>
                    </div> */}
                </div>
            </section>

            {/* SEO/Footer Disclaimer 
      <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-900 text-center">
        <p className="text-[10px] text-gray-400 max-w-2xl mx-auto uppercase tracking-tighter leading-relaxed">
          Zanari Wealth enables ETF investing in Kenya through licensed brokerage partners. 
          Diversified investing across equity and bond ETFs involves market risk. Performance tracking is based on 
          historical market data and does not guarantee future results. Regulated by the Capital Markets Authority.
        </p>
      </footer>
      */}
        </div>
    );
}