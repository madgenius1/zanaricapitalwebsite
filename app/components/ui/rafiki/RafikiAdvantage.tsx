

import React from 'react';

export default function RafikiAdvantage() {
    // const useCases = [
    //     {
    //         title: "First-time investors",
    //         desc: "Learn investing concepts as you take your first steps — without feeling overwhelmed.",
    //         icon: "🌱"
    //     },
    //     {
    //         title: "Long-term wealth builders",
    //         desc: "Understand portfolio growth, diversification, and compounding over time.",
    //         icon: "📈"
    //     },
    //     {
    //         title: "Busy professionals",
    //         desc: "Get clear explanations quickly without digging through articles or jargon.",
    //         icon: "💼"
    //     },
    //     {
    //         title: "Dividend-focused investors",
    //         desc: "Understand income flows, reinvestment, and long-term yield impact.",
    //         icon: "💰"
    //     }
    // ];

    return (
        <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Section 6: Kenyan Context Advantage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">NSE Context</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Specific explanations for companies like Safaricom, Equity, and KCB.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Mobile-First</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Insights that account for M-Pesa funding patterns and local behavior.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Local Realities</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding inflation and interest rates within the Kenyan economy.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Simplified Jargon</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Financial education that feels familiar, not intimidating.</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Built with Kenyan investors in mind</h3>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                Rafiki understands the realities of investing in Kenya. It explains concepts using Kenyan market examples, references NSE-listed companies, and accounts for how most Kenyans interact with money.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                By grounding explanations in local context—including mobile-first behavior and M-Pesa funding patterns—Rafiki helps make investing feel accessible to everyone.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 7: Use Cases (Who Rafiki is for) 
                <div className="pt-16 border-t border-gray-200 dark:border-gray-800">
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Who Rafiki is for</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Whether you are just starting or managing a complex portfolio, Rafiki adapts to your level of experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{useCase.icon}</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{useCase.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {useCase.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                */}
            </div>
        </section>
    );
}