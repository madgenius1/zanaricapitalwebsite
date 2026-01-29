'use client'

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
    HiOutlineLockClosed,
    HiOutlineChevronLeft,
    HiOutlineChartBarSquare,
    HiOutlineShieldCheck,
    HiOutlinePaperAirplane,
    HiOutlineCheckCircle
} from 'react-icons/hi2';

/** * Strict Interfaces for Investor Inquiry 
 */
interface InvestorFormData {
    name: string;
    email: string;
    investorType: 'Angel' | 'VC' | 'Institutional' | 'Family Office' | '';
    ticketSize: string; // Storing the selected checkbox value
    linkedin: string;
}

export default function InvestContent() {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState<InvestorFormData>({
        name: '',
        email: '',
        investorType: '',
        ticketSize: '',
        linkedin: ''
    });

    const ticketOptions = ['$100K', '$250K', '$500K', '$1M+'];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
                <div className="max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8">
                        <HiOutlineCheckCircle size={40} />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Request Sent</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-10">
                        Thank you for your interest in Zanari Capital. We manually vet all investor access requests to the data room. We will be in touch shortly via email.
                    </p>
                    <Link href="/" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                        <HiOutlineChevronLeft /> Return to Site
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-screen">

                {/* Left Side: Investor Value Prop */}
                <div className="p-8 md:p-16 lg:p-24 bg-gray-50 dark:bg-gray-900 flex flex-col justify-between border-r border-gray-200 dark:border-gray-800">
                    <div>
                        <Link href="/partnership" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors mb-16 font-bold text-sm">
                            <HiOutlineChevronLeft /> Partner with Zanari Capital
                        </Link>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            Backing the <br />
                            Digital Wealth <br />
                            <span className="text-blue-600">Infrastructure.</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mb-12">
                            Zanari is modernizing financial access in East Africa. We are currently engaging in exploratory conversations with early-stage partners and investors.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 h-fit">
                                    <HiOutlineShieldCheck className="text-emerald-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Compliant by Design</h4>
                                    <p className="text-sm text-gray-500">Engaging with the CMA Regulatory Sandbox to ensure a robust, regulated foundation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 h-fit">
                                    <HiOutlineChartBarSquare className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Scalable Infrastructure</h4>
                                    <p className="text-sm text-gray-500">Mobile-native tech stack integrated with mobile money and the NSE | CDSC ecosystem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Gated Access Form */}
                <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white dark:bg-gray-950">
                    <div className="max-w-md w-full mx-auto">
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                            <HiOutlineLockClosed size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest">Gated Investor Access</span>
                        </div>

                        <h2 className="text-2xl font-bold mb-8">Request Deck & Data Room</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                                <input
                                    required
                                    title='name'
                                    type="text"
                                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all text-sm"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                                <input
                                    required
                                    title='email'
                                    type="email"
                                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all text-sm"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1">Investor Type</label>
                                <select
                                    required
                                    title='type'
                                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden appearance-none cursor-pointer text-sm font-medium"
                                    value={formData.investorType}
                                    onChange={(e) => setFormData({ ...formData, investorType: e.target.value as InvestorFormData['investorType'] })}
                                >
                                    <option value="" disabled>Select...</option>
                                    <option value="Angel">Angel</option>
                                    <option value="VC">VC</option>
                                    <option value="Institutional">Institutional</option>
                                    <option value="Family Office">Family Office</option>
                                </select>
                            </div>

                            {/* Ticket Size Checkbox Selector */}
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1">Typical Ticket Size</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {ticketOptions.map((size) => (
                                        <button
                                            key={size}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, ticketSize: size })}
                                            className={`p-3 rounded-xl border text-xs font-bold transition-all ${formData.ticketSize === size
                                                ? 'bg-blue-600 border-blue-600 text-white'
                                                : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-blue-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 ml-1">LinkedIn Profile</label>
                                <input
                                    type="url"
                                    placeholder="https://linkedin.com/in/..."
                                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden text-sm"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={!formData.ticketSize}
                                    className="w-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    Request Access <HiOutlinePaperAirplane size={18} />
                                </button>
                            </div>

                            <p className="text-[10px] text-center text-gray-500 italic mt-4">
                                By submitting, you agree to treat shared materials as confidential.
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}