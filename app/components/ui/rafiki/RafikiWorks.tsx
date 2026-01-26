

import React from 'react';

export default function RafikiWorks() {
    const steps = [
        {
            number: "01",
            title: "You take an action",
            description: "View a stock, buy an ETF, check your portfolio, or review performance.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Rafiki analyzes context",
            description: "Rafiki looks at market data, your portfolio composition, and the action you’re taking.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Rafiki explains clearly",
            description: "Understand what you’re seeing, why it matters, and what to consider next — without being told what to do.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Header Area */}
                <div className="text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                        How Rafiki works
                    </h2>
                </div>

                {/* Step Flow Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group">
                            <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-8 rounded-3xl transition-all hover:border-blue-500 dark:hover:border-blue-500 shadow-sm">

                                {/* Icon & Number Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-2xl shadow-md">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-black text-gray-100 dark:text-gray-800 tabular-nums">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>

                                {/* Sub-points for Step 3 */}
                                {index === 2 && (
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                                        {["What you’re seeing", "Why it matters", "What to consider next"].map((item, i) => (
                                            <div key={i} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reinforcement Footer */}
                <div className="mt-16 max-w-2xl mx-auto text-center">
                    <div className="bg-gray-900 dark:bg-gray-50 p-6 md:p-8 rounded-4xl shadow-xl">
                        <p className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                            The Rafiki Guarantee
                        </p>
                        <h4 className="text-xl md:text-2xl font-bold text-white dark:text-gray-900">
                            “Rafiki reacts to your actions — it never acts on your behalf.”
                        </h4>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-500 italic">
                        Every investment decision remains fully in your control.
                    </p>
                </div>

            </div>
        </section>
    );
}