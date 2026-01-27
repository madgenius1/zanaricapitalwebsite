'use client'

import React from 'react';
import Link from 'next/link';
import {
    HiOutlineLibrary,
    HiOutlineCash,
    HiOutlineShieldCheck,
    HiOutlineChartBar,
    HiOutlineDocumentText,
    HiChevronRight
} from 'react-icons/hi';

/** * Strict Interfaces for Fixed Income content
 */
interface BondType {
    title: string;
    description: string;
    tag: string;
}

interface ValueProp {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const BOND_TYPES: BondType[] = [
    {
        title: "Treasury Bonds",
        description: "Direct loans to the Government of Kenya. The gold standard for safety.",
        tag: "Lowest Risk"
    },
    {
        title: "Secondary Market",
        description: "Buy existing bonds from other investors to lock in higher yields instantly.",
        tag: "High Liquidity"
    },
    {
        title: "Corporate Bonds",
        description: "Lend to top-tier Kenyan companies for potentially higher interest rates.",
        tag: "Higher Yield"
    }
];

const VALUE_PROPS: ValueProp[] = [
    {
        icon: <HiOutlineCash className="text-emerald-500" size={28} />,
        title: "Fixed Income",
        desc: "Receive predictable interest payments every 6 months."
    },
    {
        icon: <HiOutlineShieldCheck className="text-blue-500" size={28} />,
        title: "Capital Preservation",
        desc: "Protect your original investment while outperforming inflation."
    },
    {
        icon: <HiOutlineChartBar className="text-purple-500" size={28} />,
        title: "Diversification",
        desc: "Balance your stock portfolio with the stability of debt assets."
    }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100">

            {/* Hero: SEO Target - Secondary bond market in Kenya */}
            <section className="py-24 px-6 relative overflow-hidden justify-start">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="max-w-4xl mx-auto ">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Invest for <span className="text-blue-600">stability</span> <br />
                        with bonds.
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10">
                        Lend to the government or institutions and earn a predictable, fixed return on your capital.
                    </p>
                    
                </div>
            </section>

            {/* Logic Flow: What are Bonds? */}
            <section className="py-16 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">How it Works</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-none w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 font-bold">1</div>
                                <p className="text-slate-600 dark:text-slate-400">You <strong>lend</strong> money to the Government or a company for a set period.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 font-bold">2</div>
                                <p className="text-slate-600 dark:text-slate-400">They pay you <strong>fixed interest</strong> (coupons) semi-annually.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 font-bold">3</div>
                                <p className="text-slate-600 dark:text-slate-400">At maturity, you receive your <strong>full principal</strong> back.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3 mb-4 text-emerald-600 dark:text-emerald-400">
                            <HiOutlineLibrary size={32} />
                            <span className="font-bold text-xl tracking-tight">Bond Stability</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-6 italic">Bonds generally offer lower risk compared to stocks, making them the anchor for Kenyan wealth preservation.</p>
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-emerald-500" />
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                            <span>Volatility</span>
                            <span>Security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards: Types of Bonds */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Kenyan Bond Markets</h2>
                        <p className="text-slate-500">Choose the instrument that fits your timeframe.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {BOND_TYPES.map((bond, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-colors group">
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4 block">{bond.tag}</span>
                                <h3 className="text-xl font-bold mb-3">{bond.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {bond.description}
                                </p>
                                <Link href="/beta" className="text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Explore Market <HiChevronRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-16">Why Bonds Matter</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {VALUE_PROPS.map((prop, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 shadow-sm">
                                {prop.icon}
                            </div>
                            <h4 className="font-bold text-lg mb-2">{prop.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-50">
                                {prop.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA: How Zanari Makes it Simple */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 opacity-50" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Zanari makes bonds simple.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
                        <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <HiOutlineDocumentText className="mx-auto mb-2" size={24} />
                            <p className="text-xs font-bold">Zero Paperwork</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <HiOutlineChartBar className="mx-auto mb-2" size={24} />
                            <p className="text-xs font-bold">Live Yield Display</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <HiOutlineShieldCheck className="mx-auto mb-2" size={24} />
                            <p className="text-xs font-bold">Instant Access</p>
                        </div>
                    </div>
                    <Link href="/beta">
                        <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all relative z-10">
                            Get Started
                        </button>
                    </Link>
                </div>
            </section>

            {/* Disclaimer
            <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-900 text-center">
                <p className="text-[10px] text-slate-400 max-w-2xl mx-auto uppercase tracking-tighter leading-relaxed">
                    Zanari Wealth is a registered agent. Investing in bonds involves risks, including interest rate and credit risk.
                    Secondary market prices can fluctuate based on market conditions. Best times to trade secondary bonds in Kenya
                    typically align with high liquidity periods following new primary issues.
                </p>
            </footer>
             */}
        </div>
    );
}