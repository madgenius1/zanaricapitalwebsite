'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { HiTrendingUp, HiOutlineShieldCheck, HiOutlineInformationCircle, HiArrowRight } from 'react-icons/hi';
import { MdOutlinePieChart } from 'react-icons/md';

interface StockInfoDetail {
  icon: React.ReactNode;
  desc: string;
  detail: string;
}

type StockTabCategory = 'Ownership' | 'Rewards' | 'Assets';

interface InvestingStep {
  title: string;
  desc: string;
}

const STOCK_METADATA: Record<StockTabCategory, StockInfoDetail> = {
  Ownership: {
    icon: <HiOutlineShieldCheck className="text-blue-500" size={40} />,
    desc: "A stock represents a 'share' or a piece of a company.",
    detail: "When you buy a stock, you become a legal shareholder of that business."
  },
  Rewards: {
    icon: <HiTrendingUp className="text-green-500" size={40} />,
    desc: "Earn through dividends or capital appreciation.",
    detail: "Profit sharing (dividends) is paid directly to your wallet by companies like Safaricom."
  },
  Assets: {
    icon: <MdOutlinePieChart className="text-purple-500" size={40} />,
    desc: "Build a portfolio of real Kenyan corporate giants.",
    detail: "Diversify your wealth across sectors like banking, telecommunications, and manufacturing."
  }
};

const INVESTING_STEPS: InvestingStep[] = [
  { title: "Fund via M-Pesa", desc: "Instant deposits from your phone to your digital wallet." },
  { title: "Choose a Stock", desc: "Select from Safaricom, Equity, KCB, and more on the NSE." },
  { title: "Place Order", desc: "Execute buy/sell trades with real-time pricing and transparency." },
  { title: "CDSC Recording", desc: "Assets are safely held in your unique CDS account." }
];

export default function Page() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<StockTabCategory>('Ownership');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 -z-10" />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Invest in <span className="text-blue-600 dark:text-blue-400">NSE Stocks</span> <br />
            with Zero Friction.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            Securely trade shares on the Nairobi Securities Exchange using your mobile phone.
          </p>
          <Link href="/beta">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">What is a Stock?</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(STOCK_METADATA) as StockTabCategory[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">
              {STOCK_METADATA[activeTab].icon}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{activeTab}</h3>
              <p className="text-slate-600 dark:text-slate-400">{STOCK_METADATA[activeTab].desc}</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 font-semibold">
                {STOCK_METADATA[activeTab].detail}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">The Investing Flow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />
            
            {INVESTING_STEPS.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center text-center group cursor-default"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-6 transition-all duration-300 border-4 ${
                  activeStep === idx 
                  ? 'bg-blue-600 text-white border-blue-100 dark:border-blue-900' 
                  : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
                }`}>
                  {idx + 1}
                </div>
                <h3 className={`font-bold mb-2 ${activeStep === idx ? 'text-blue-600' : ''}`}>{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-3xl mx-auto px-6 border-l-4 border-amber-500 py-4 bg-amber-50/50 dark:bg-amber-950/10 mb-12">
           <div className="flex items-center justify-center gap-2 text-amber-700 dark:text-amber-500 mb-2">
              <HiOutlineInformationCircle size={20} />
              <span className="font-bold uppercase tracking-wider text-xs">Risk Warning</span>
           </div>
           <p className="text-xs text-slate-600 dark:text-slate-400 italic">
             Stock investments carry risk. The value of your portfolio can go down as well as up. 
             Past performance is not a guarantee of future NSE returns.
           </p>
        </div>
        
        <Link href="/beta" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:gap-4 transition-all shadow-xl">
          Start Your Portfolio <HiArrowRight size={20} />
        </Link>
      </footer>
    </div>
  );
}