'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HiOutlineRefresh, 
  HiOutlineTrendingUp, 
  HiOutlineCursorClick,
  HiOutlineChartBar,
  HiOutlineClock
} from 'react-icons/hi';

interface CompoundingData {
  year: number;
  simple: number;
  reinvested: number;
}

const COMPOUNDING_EXAMPLE: CompoundingData[] = [
  { year: 1, simple: 100, reinvested: 100 },
  { year: 5, simple: 500, reinvested: 610 },
  { year: 10, simple: 1000, reinvested: 1590 },
  { year: 20, simple: 2000, reinvested: 6720 },
];

export default function DividendsContent() {
  const [isReinvesting, setIsReinvesting] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* Hero: SEO Target - Dividend Reinvestment Kenya */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Grow wealth while <br />
            <span className="text-blue-600">you sleep</span>.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10">
            Learn how <strong>Dividend Reinvestment</strong> turns small payouts into a massive engine for long-term compounding.
          </p>
          {/* <Link href="/beta">
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
              Start Reinvesting
            </button>
          </Link> */}
        </div>
      </section>

      {/* Visual Explanation: What are Dividends? */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold italic">"Dividends are your share of the profit."</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                  <HiOutlineTrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Profit Distributions</h4>
                  <p className="text-sm text-gray-700">When companies you bought stocks for make a profit, they pay a portion back to shareholders as cash.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <HiOutlineClock size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Paid Periodically</h4>
                  <p className="text-sm text-gray-700">Most Kenyan firms pay dividends semi-annually (Interim and Final payments).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-8 bg-white dark:bg-gray-950 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <HiOutlineRefresh className="text-green-500" />
              The DRIP Cycle
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-[10px] font-bold uppercase text-gray-600 dark:text-gray-200">Step 1</span>
                <p className="font-semibold text-sm">Earn Cash Dividend</p>
              </div>
              <div className="flex justify-center">
                <div className="h-6 w-0.5 bg-gray-200 dark:bg-gray-800" />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-[10px] font-bold uppercase text-gray-600 dark:text-gray-200">Step 2</span>
                <p className="font-semibold text-sm">Automatically Buy More Shares</p>
              </div>
              <div className="flex justify-center">
                <div className="h-6 w-0.5 bg-gray-200 dark:bg-gray-800" />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <span className="text-[10px] font-bold uppercase text-gray-600 dark:text-gray-200">Step 3</span>
                <p className="font-semibold text-sm">Next Payout is Larger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Simulation: Simple vs Compounding */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Impact of Compounding</h2>
          <p className="text-gray-700">See the difference 20 years of reinvesting makes compared to taking the cash.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end h-64">
          {COMPOUNDING_EXAMPLE.map((data) => (
            <div key={data.year} className="flex flex-col items-center gap-2 h-full justify-end">
              <div className="w-full flex gap-1 justify-center items-end h-full">
                <div 
                  className="w-4 bg-gray-300 dark:bg-gray-700 rounded-t-sm transition-all" 
                  style={{ height: `${(data.simple / 6720) * 100}%` }}
                />
                <div 
                  className="w-8 bg-green-500 rounded-t-sm transition-all shadow-[0_-10px_20px_rgba(16,185,129,0.2)]" 
                  style={{ height: `${(data.reinvested / 6720) * 100}%` }}
                />
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase">Year {data.year}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <span>Taking Payouts (Simple)</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span>Reinvesting (Compounding)</span>
          </div>
        </div>
      </section>

      

      {/* Zanari Feature Mockup */}
      <section className="py-24 px-6 border-y border-gray-100 dark:border-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 leading-tight">Hands-off <br /> financial discipline.</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <HiOutlineCursorClick className="text-green-500 shrink-0" size={24} />
                <p className="text-sm text-gray-600 dark:text-gray-600"><strong>One-Tap Setup:</strong> Toggle DRIP on or off for individual stocks or your entire portfolio.</p>
              </li>
              <li className="flex gap-4">
                <HiOutlineChartBar className="text-green-500 shrink-0" size={24} />
                <p className="text-sm text-gray-600 dark:text-gray-600"><strong>Income Tracking:</strong> Visualize exactly how many "free" shares you've earned over time.</p>
              </li>
            </ul>
          </div>

          {/* Interactive UI Toggle Mockup */}
          <div className="md:w-1/2 w-full bg-gray-50 dark:bg-gray-900 p-10 rounded-4xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="font-bold">Dividend Reinvestment</h4>
                <p className="text-[10px] text-gray-700 uppercase font-black">Portfolio Settings</p>
              </div>
              <button 
                onClick={() => setIsReinvesting(!isReinvesting)}
                title='check reinvesting'
                className={`w-14 h-8 rounded-full transition-colors relative flex items-center px-1 ${isReinvesting ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform ${isReinvesting ? 'trangray-x-6' : 'trangray-x-0'}`} />
              </button>
            </div>
            <div className="space-y-3 opacity-60 grayscale-[0.5]">
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
            <p className="mt-8 text-center text-xs font-bold text-green-600">
              {isReinvesting ? '✓ Automatic compounding active' : 'Cash payouts will be sent to wallet'}
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Ready to put your money to work?</h2>
        <Link href="/beta">
          <button className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-green-600/20">
            Join the Beta
          </button>
        </Link>
        <p className="mt-12 text-[10px] text-gray-600 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
          Zanari Wealth Facilitates Dividend Reinvestment for Stocks listed on the NSE. Reinvestment involves buying shares at market prices. Past dividends are not a guarantee of future performance.
        </p>
      </footer>
    </div>
  );
}