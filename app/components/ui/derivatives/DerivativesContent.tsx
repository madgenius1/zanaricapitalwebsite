

'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
    HiOutlineShieldExclamation,
    HiOutlineAcademicCap,
    HiOutlineLockClosed,
    HiOutlinePresentationChartLine,
    HiOutlineSwitchHorizontal,
    HiOutlineArrowNarrowRight,
    HiOutlineExclamationCircle
} from 'react-icons/hi';

/** * Strict Interfaces for Derivative Architecture 
 */
interface DerivativeType {
    title: string;
    mechanism: string;
    useCase: string;
}

const DERIVATIVE_DATA: Record<'Futures' | 'Options', DerivativeType> = {
    Futures: {
        title: "Futures Contracts",
        mechanism: "Obligation to buy/sell an asset at a predetermined price on a specific date.",
        useCase: "Primarily used by institutional investors to lock in prices for commodities or equities."
    },
    Options: {
        title: "Options Trading",
        mechanism: "The right (but not the obligation) to buy or sell an asset at a set price within a timeframe.",
        useCase: "Used for hedging portfolio downside or speculating on price volatility."
    }
};

export default function DerivativesContent() {
    const [activeToggle, setActiveToggle] = useState<'Futures' | 'Options'>('Futures');

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

            {/* Hero Section - SEO: Derivatives Trading Kenya */}
            <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Advanced tools for <br />
                    <span className="text-blue-600">experienced</span> investors.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center">
                    Leverage the power of the Nairobi Securities Exchange (NSE) derivatives market with
                    sophisticated hedging and speculation tools.
                </p>
            </section>

            {/* Critical Risk Block - High Prominence 
            <section className="px-6 mb-12">
                <div className="max-w-7xl mx-auto bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-500/20 rounded-[2.5rem] p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="bg-amber-500 p-4 rounded-3xl text-white">
                            <HiOutlineShieldExclamation size={48} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-amber-900 dark:text-amber-500 mb-2 uppercase tracking-tight">High Risk Warning</h2>
                            <p className="text-amber-800/80 dark:text-amber-500/80 leading-relaxed font-medium">
                                Derivatives involve significant leverage. Potential losses can exceed your initial investment.
                                These instruments are <span className="underline decoration-2">not suitable for beginners</span> and require a deep understanding of market mechanics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/* Visual Explanation Bento Grid */}
            <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Concept Card */}
                <div className="md:col-span-7 bg-gray-50 dark:bg-gray-900 rounded-4xl p-10 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <HiOutlinePresentationChartLine className="text-blue-600" />
                        What are Derivatives?
                    </h3>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="h-12 w-12 flex-none bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-700">
                                <HiOutlineSwitchHorizontal className="text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Asset-Based Contracts</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-100 leading-relaxed">Financial contracts that derive their value from an underlying asset, such as Safaricom shares or the NSE 25 index.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="h-12 w-12 flex-none bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-700">
                                <HiOutlineAcademicCap className="text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Two Strategic Uses</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-100 leading-relaxed"><strong>Hedging:</strong> Protecting your current portfolio from price drops. <br /><strong>Speculation:</strong> Profiting from predicted price movements with leverage.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Options/Futures Interaction Card */}
                <div className="md:col-span-5 bg-white dark:bg-gray-950 rounded-4xl p-10 border border-gray-200 dark:border-gray-800">
                    <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-8">
                        {Object.keys(DERIVATIVE_DATA).map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveToggle(type as 'Futures' | 'Options')}
                                className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeToggle === type
                                    ? 'bg-white dark:bg-gray-800 shadow-sm text-blue-600'
                                    : 'text-gray-400'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <h4 className="text-xl font-bold mb-4">{DERIVATIVE_DATA[activeToggle].title}</h4>
                    <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                        {DERIVATIVE_DATA[activeToggle].mechanism}
                    </p>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">Best For</p>
                        <p className="text-sm font-medium">{DERIVATIVE_DATA[activeToggle].useCase}</p>
                    </div>
                </div>
            </section>


            {/* Zanari's Safeguard Approach */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Responsible Access</h2>
                    <p className="text-gray-500">Zanari ensures advanced tools are used with advanced knowledge.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-gray-900 rounded-3xl flex items-center justify-center mb-6 text-blue-600">
                            <HiOutlineAcademicCap size={32} />
                        </div>
                        <h4 className="font-bold mb-2">Education-First</h4>
                        <p className="text-sm text-gray-500 px-4">Pass a competency assessment before gaining access to derivative trading permissions.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-gray-900 rounded-3xl flex items-center justify-center mb-6 text-blue-600">
                            <HiOutlineExclamationCircle size={32} />
                        </div>
                        <h4 className="font-bold mb-2">Forced Stop-Loss</h4>
                        <p className="text-sm text-gray-500 px-4">Automated risk warnings and liquidation thresholds to prevent catastrophic loss.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-gray-900 rounded-3xl flex items-center justify-center mb-6 text-blue-600">
                            <HiOutlineLockClosed size={32} />
                        </div>
                        <h4 className="font-bold mb-2">Gated Access</h4>
                        <p className="text-sm text-gray-500 px-4">Only available to accounts with verified investment experience and a specific capital minimum.</p>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <footer className="py-20 border-t border-gray-100 dark:border-gray-900 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-2xl font-bold mb-8">Ready for advanced markets?</h3>
                    <Link href="/beta">
                        <button className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-bold tracking-wide text-sm hover:gap-6 transition-all shadow-2xl">
                            Get Started <HiOutlineArrowNarrowRight size={20} />
                        </button>
                    </Link>
                    {/* <p className="mt-12 text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                        Zanari Derivatives is a service provided through regulated brokers at the Nairobi Securities Exchange.
                        All trading is subject to the rules and regulations of the CMA and NSE.
                    </p> */}
                </div>
            </footer>
        </div>
    );
}