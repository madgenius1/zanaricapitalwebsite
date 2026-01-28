'use client'

import React, { useState } from 'react';
import {
    HiOutlineRocketLaunch,
    HiOutlineChatBubbleLeftRight,
    HiOutlineStar,
    HiOutlineShieldCheck,
    HiOutlineUserGroup,
    HiCheckCircle
} from 'react-icons/hi2';

/** * Strict Interfaces for Form and Features 
 */
interface BetaBenefit {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

const BENEFITS: BetaBenefit[] = [
    {
        title: "Early Access",
        desc: "Be the first to trade Kenyan stocks, ETFs, and derivatives  before the general public release.",
        icon: <HiOutlineRocketLaunch size={24} className="text-blue-600" />
    },
    {
        title: "Product Influence",
        desc: "Directly shape our roadmap. Your feedback builds the features you actually need.",
        icon: <HiOutlineChatBubbleLeftRight size={24} className="text-green-500" />
    },
    {
        title: "Priority Support",
        desc: "Skip the queue with a dedicated support line available only to our founding members.",
        icon: <HiOutlineUserGroup size={24} className="text-cyan-500" />
    }
];

export default function Page() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

            {/* Hero Section */}
            <section className="pt-20 pb-12 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                    <HiOutlineStar className="animate-pulse" /> Early Access Fintech Kenya
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Be among the first to <br />
                    <span className="text-blue-600">invest with Zanari</span>.
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    We&apos;re building the future of Kenyan wealth management. Join the waitlist to get early access to our beta release.
                </p>
            </section>

            {/* Main Content: Form + Benefits */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Why Join - Visual Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {BENEFITS.map((benefit, i) => (
                            <div key={i} className={`p-8 rounded-4xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 ${i === 0 ? 'sm:col-span-2' : ''}`}>
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-sm mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Waitlist Form */}
                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-blue-500/30 p-8 md:p-10 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(59,130,246,0.3)]">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h2 className="text-2xl font-bold mb-6">Join the Waitlist</h2>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter full name"
                                            className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-hidden transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="Enter email address"
                                            className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-hidden transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+254 712 345 678"
                                            className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-hidden transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2">Country</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Country"
                                            className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-hidden transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2">Investment Experience (Optional)</label>
                                        <select
                                            className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-hidden transition-all text-gray-500"
                                            title='level'
                                        >
                                            <option>Beginner</option>
                                            <option>Intermediate</option>
                                            <option>Pro</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 cursor-pointer text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
                                    >
                                        Reserve My Spot
                                    </button>
                                </form>
                            ) : (
                                <div className="py-12 text-center">
                                    <HiCheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                                    <h3 className="text-2xl font-black mb-2">You're on the list!</h3>
                                    <p className="text-gray-500">Watch your inbox. We'll reach out soon with your early access invite.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Roadmap / Exclusive Flow */}
            <section className="py-20 px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">The Path to Launch</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-900 -z-10" />

                    <div className="bg-white dark:bg-gray-950 px-4">
                        <div className="w-16 h-16 rounded-full border-4 border-blue-600 flex items-center justify-center font-black bg-white dark:bg-gray-950 mb-4 mx-auto">1</div>
                        <p className="font-bold text-sm uppercase tracking-tighter">Waitlist Open</p>
                    </div>
                    <div className="bg-white dark:bg-gray-950 px-4">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center font-black bg-white dark:bg-gray-950 mb-4 mx-auto">2</div>
                        <p className="font-bold text-sm uppercase tracking-tighter text-gray-400">Beta Rollout</p>
                    </div>
                    <div className="bg-white dark:bg-gray-950 px-4">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center font-black bg-white dark:bg-gray-950 mb-4 mx-auto">3</div>
                        <p className="font-bold text-sm uppercase tracking-tighter text-gray-400">Public Launch</p>
                    </div>
                </div>
            </section>

            {/* Trust Footer */}
            <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-900/30">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-widest">
                        <HiOutlineShieldCheck size={18} /> Data Protected & Secure
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">
                        <span>No Spam Policy</span>
                        <span>Opt-out Anytime</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}