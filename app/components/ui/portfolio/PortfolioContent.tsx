'use client'

import React from 'react';
import Link from 'next/link';
import {
    HiOutlineChartPie,
    HiOutlineLightningBolt,
    HiOutlineSparkles,
    HiOutlineTrendingUp,
    HiOutlineShieldCheck,
    HiOutlineGlobeAlt,
    HiArrowRight,
    HiOutlineCube
} from 'react-icons/hi';

/** * Strict Interfaces for Portfolio Architecture 
 */
interface AssetClass {
    name: string;
    role: string;
    color: string;
    percentage: number;
    value: string;
}

interface RafikiSkill {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

const ASSETS: AssetClass[] = [
    { name: 'Stocks', role: 'Growth', color: 'bg-blue-600', percentage: 60, value: 'Ksh. 744,300' },
    { name: 'ETFs', role: 'Global', color: 'bg-cyan-500', percentage: 20, value: 'Ksh. 248,100' },
    { name: 'Bonds', role: 'Stability', color: 'bg-emerald-500', percentage: 15, value: 'Ksh. 186,075' },
    { name: 'Dividends', role: 'Liquidity', color: 'bg-gray-400', percentage: 5, value: 'Ksh. 62,025' },
];

const RAFIKI_SKILLS: RafikiSkill[] = [
    {
        title: "Dynamic Rebalancing",
        desc: "Rafiki AI identifies drift in your asset weights and suggests one-tap corrections to maintain your risk profile.",
        icon: <HiOutlineLightningBolt className="text-amber-500" size={24} />
    },
    {
        title: "Sector Guard",
        desc: "AI-driven detection of over-exposure in Kenyan sectors like Banking or Telcom to prevent 'eggs-in-one-basket' risk.",
        icon: <HiOutlineShieldCheck className="text-blue-600" size={24} />
    },
    {
        title: "Yield Discovery",
        desc: "Scans the secondary market for bond yields that outperform your current cash holdings.",
        icon: <HiOutlineSparkles className="text-emerald-500" size={24} />
    }
];

export default function PortfolioContent() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

            {/* Hero Section */}
            <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto border-b border-gray-100 dark:border-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        See your entire <br />
                        <span className="text-blue-600">investment</span> picture.
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10">
                        Zanari enables you to grow and manage a diversified portfolio across Kenyan and Global markets—all guided by Rafiki AI.
                    </p>
                </div>
            </section>

            {/* Main Bento Grid */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Portfolio Overview Card */}
                    <div className="md:col-span-8 bg-gray-50 dark:bg-gray-900 rounded-4xl p-8 border border-gray-200 dark:border-gray-800">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Portfolio Tracking</p>
                                <h2 className="text-4xl font-black">Ksh. 1,618,420</h2>
                            </div>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-lg text-sm font-bold">
                                +12.4%
                            </div>
                        </div>

                        {/* Asset Allocation Visualization */}
                        <div className="space-y-6">
                            <div className="h-6 w-full flex rounded-xl overflow-hidden shadow-inner">
                                {ASSETS.map((asset) => (
                                    <div key={asset.name} style={{ width: `${asset.percentage}%` }} className={`${asset.color}`} />
                                ))}
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {ASSETS.map((asset) => (
                                    <div key={asset.name} className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className={`w-3 h-3 rounded-full ${asset.color}`} />
                                            <span className="font-bold text-sm">{asset.name}</span>
                                        </div>
                                        <p className="text-lg font-black">{asset.value}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{asset.role}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rafiki AI Insight Card */}
                    <div className="md:col-span-4 bg-gray-900 dark:bg-blue-900/20 rounded-4xl p-8 text-white flex flex-col justify-between border border-gray-800 dark:border-blue-800/50">
                        <div>
                            <div className="flex items-center gap-2 text-emerald-400 mb-6">
                                <HiOutlineSparkles size={24} />
                                <span className="font-black text-xs uppercase tracking-widest">Rafiki AI </span>
                            </div>
                            <p className="text-xl font-medium leading-relaxed mb-6 italic">
                                "Your portfolio is overweight in Financials. Consider increasing your <strong>Bond</strong> allocation to hedge against NSE volatility."
                            </p>
                        </div>

                    </div>

                    {/* Diversification Deep-Dive */}
                    <div className="md:col-span-12 lg:col-span-7 bg-white dark:bg-gray-950 rounded-4xl p-10 border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <HiOutlineChartPie className="text-blue-600" />
                            The Essence of Diversification
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                                        <HiOutlineCube size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Cross-Asset Management</h4>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">Combine high-growth Kenyan stocks with stable Treasury bonds to create a resilient wealth foundation.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                                        <HiOutlineGlobeAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">Currency Diversification</h4>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">Access US-denominated ETFs to protect your purchasing power against local currency fluctuations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Risk Exposure Assessment</p>
                                <div className="space-y-4">
                                    {['Market Risk', 'Inflation Risk', 'Liquidity'].map((risk, i) => (
                                        <div key={risk} className="flex items-center gap-3">
                                            <div className={`h-1.5 flex-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden`}>
                                                <div className={`h-full ${i === 0 ? 'w-3/4 bg-blue-600' : 'w-1/4 bg-emerald-500'} rounded-full`} />
                                            </div>
                                            <span className="text-[10px] font-bold w-20">{risk}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Goal Tracking Card */}
                    <div className="md:col-span-12 lg:col-span-5 bg-gray-50 dark:bg-gray-900 rounded-4xl p-10 border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold mb-6">Wealth Goals</h3>
                        <div className="space-y-6">
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-sm">Retirement Fund</span>
                                    <span className="text-xs font-bold text-blue-600">42%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                                    <div className="h-full w-[42%] bg-blue-600 rounded-full" />
                                </div>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-sm">Children's Education</span>
                                    <span className="text-xs font-bold text-emerald-600">18%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                                    <div className="h-full w-[18%] bg-emerald-500 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Rafiki Skills Section */}
            <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100 dark:border-gray-900">
                <h2 className="text-3xl font-bold mb-12 text-center">Intelligent Management</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {RAFIKI_SKILLS.map((skill, i) => (
                        <div key={i} className="text-center md:text-left flex flex-col items-center md:items-start">
                            <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 mb-6">
                                {skill.icon}
                            </div>
                            <h4 className="font-black text-lg mb-3">{skill.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO Footer Disclaimer 
            <footer className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 text-center">
                <p className="text-[10px] text-gray-400 max-w-3xl mx-auto uppercase tracking-tighter leading-relaxed">
                    Zanari Wealth provides investment portfolio tracking and management tools for users in Kenya.
                    Diversification across stocks, ETFs, and bonds helps manage market risk but does not guarantee profit.
                    Rafiki AI insights are for informational purposes. Track investments effectively to secure your financial future.
                </p>
            </footer>
            */}
        </div>
    );
}