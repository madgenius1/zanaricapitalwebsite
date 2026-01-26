'use client'

import { useState, useEffect } from "react";
import { FiCheck, FiArrowRight, FiCreditCard, FiTrendingUp } from "react-icons/fi";

export default function Payments() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Deposit", "Zanari", "NSE", "Portfolio"];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [steps.length]);

    const features = [
        { icon: <FiCreditCard />, text: "Instant funds deposits", sub: "STK Push integration" },
        { icon: <FiCheck />, text: "Clear trade execution", sub: "Real-time settlement" },
        { icon: <FiTrendingUp />, text: "Fast withdrawals", sub: "Direct to your mobile or bank" },
    ];

    return (
        <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* LEFT: TEXT */}
                <div className="max-w-xl">

                    <div className="py-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                            Built for how Kenyans move money.
                        </h2>
                    </div>


                    <div className="space-y-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg group transition-colors hover:border-green-500"
                            >
                                <div className="w-12 h-12 rounded bg-white dark:bg-black border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xl text-green-600 shadow-sm">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{feature.text}</h4>
                                    <p className="text-sm text-slate-500">{feature.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: ANIMATED STEPPER */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.02)]">
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-start gap-6 pb-8">
                                    {/* Vertical Line */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-5.75 top-12 w-0.5 h-[calc(100%-48px)] bg-slate-200 dark:bg-slate-800">
                                            <div
                                                className="w-full bg-green-600 transition-all duration-700 ease-in-out"
                                                style={{ height: activeStep > index ? '100%' : '0%' }}
                                            />
                                        </div>
                                    )}

                                    {/* Step Marker */}
                                    <div
                                        className={`relative z-10 shrink-0 w-12 h-12 rounded border-2 flex items-center justify-center transition-all duration-500 ${activeStep === index
                                            ? "bg-green-600 border-green-600 text-white scale-110"
                                            : activeStep > index
                                                ? "bg-white dark:bg-black border-green-600 text-green-600"
                                                : "bg-white dark:bg-black border-slate-200 dark:border-slate-800 text-slate-400"
                                            }`}
                                    >
                                        {activeStep > index ? <FiCheck className="stroke-[3px]" /> : <span className="text-sm font-black">{index + 1}</span>}
                                    </div>

                                    {/* Text Content */}
                                    <div className="pt-1">
                                        <div className={`font-black uppercase tracking-wider transition-colors duration-500 ${activeStep === index ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-700"
                                            }`}>
                                            {step}
                                        </div>
                                        <div className={`text-xs mt-1 font-medium transition-opacity duration-500 ${activeStep === index ? "text-green-600 opacity-100" : "opacity-0"}`}>
                                            {index === 0 && "Secure STK Push initiated"}
                                            {index === 1 && "Verifying transaction"}
                                            {index === 2 && "Buying shares on NSE"}
                                            {index === 3 && "Portfolio value updated"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Simple Progress Bar */}
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-2">
                            <span>Transaction Progress</span>
                            <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                        </div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-none p-0.5">
                            <div
                                className="h-full bg-green-600 transition-all duration-500"
                                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}