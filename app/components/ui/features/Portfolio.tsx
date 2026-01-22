'use client'

import { useState, useEffect, useRef } from "react";
import { FiTrendingUp, FiTarget, FiDollarSign, FiPieChart, FiActivity } from "react-icons/fi";

export default function Portfolio() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!cardRef.current) return;

            const rect = cardRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate when portfolio card enters viewport
            const cardTop = rect.top;
            const cardHeight = rect.height;

            // Start animation when card enters bottom of viewport
            // Complete when card is centered in viewport
            const start = windowHeight;
            const end = windowHeight / 3 - cardHeight / 3;

            if (cardTop <= start && cardTop >= end) {
                const progress = (start - cardTop) / (start - end);
                setScrollProgress(Math.min(Math.max(progress, 0), 1));
            } else if (cardTop < end) {
                setScrollProgress(1);
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animated values based on scroll progress
    const portfolioValue = Math.floor(40000 + (scrollProgress * 180000));
    const percentGain = (scrollProgress * 300).toFixed(1); // 0% to 300%
    const goalProgress = Math.floor(scrollProgress * 100); // 0% to 100%

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 lg:px-12 z-10 flex flex-col gap-8">
                {/* HEADER */}
                <div className="space-y-8 text-center py-4 mb-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                        See your diversified portfolio grow.
                    </h2>
                </div>

                <div className="min-h-screen rounded-3xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 md:p-8 lg:p-10 shadow-xl">
                    {/* Portfolio Value Card */}
                    <div ref={cardRef} className="mb-8 p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Portfolio Value</div>
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                            Ksh. {portfolioValue.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                            <FiTrendingUp className="w-5 h-5" />
                            <span className="text-lg font-semibold">+{percentGain}%</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">all time</span>
                        </div>
                    </div>

                    {/* Mini Chart */}
                    <div className="mb-8">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Growth Over Time</div>
                        <div className="h-32 flex items-end gap-1">
                            {Array.from({ length: 12 }).map((_, i) => {
                                const barHeight = Math.min((i + 1) * scrollProgress * 8.33, 100);
                                return (
                                    <div
                                        key={i}
                                        className="flex-1 bg-green-500 rounded-t transition-all duration-300"
                                        style={{
                                            height: `${barHeight}%`,
                                            opacity: scrollProgress > i * 0.08 ? 1 : 0.3
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>2026</span>
                            <span>2028</span>
                        </div>
                    </div>

                    {/* Goal Progress Section */}
                    <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">Investment Goal Progress</div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Progress Ring */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-32 h-32 transform -rotate-90">
                                        {/* Background circle */}
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="currentColor"
                                            strokeWidth="10"
                                            fill="none"
                                            className="text-gray-200 dark:text-gray-800"
                                        />
                                        {/* Progress circle */}
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="currentColor"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 56}`}
                                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - goalProgress / 100)}`}
                                            className="text-green-500 transition-all duration-500"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {goalProgress}%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Goal Details */}
                            <div className="flex flex-col justify-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Ksh 220,000
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    Target by Dec 2028
                                </div>
                                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">
                                    {goalProgress < 100 ? `Ksh. ${(220000 - portfolioValue).toLocaleString()} to go` : 'Goal achieved!'}
                                </div>
                            </div>

                            {/* Goal Breakdown */}
                            <div className="grid grid-cols-2 gap-3 lg:col-span-1">
                                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                    <FiPieChart className="text-blue-500 mb-2 w-5 h-5" />
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold mb-1">Diversification</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">82% High</p>
                                </div>
                                <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                    <FiActivity className="text-yellow-500 mb-2 w-5 h-5" />
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold mb-1">Risk Level</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white">Moderate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}