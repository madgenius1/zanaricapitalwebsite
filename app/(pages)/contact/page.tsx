'use client'

import React from 'react';
import Link from 'next/link';
import {
    HiOutlineEnvelope,
    HiOutlineChatBubbleLeftRight,
    HiOutlineMapPin,
    HiOutlineChevronLeft,
    HiOutlineArrowUpRight
} from 'react-icons/hi2';

export default function ContactPage() {
    const contactMethods = [
        {
            label: "General Inquiries",
            value: "hello@zanaricapital.com",
            href: "mailto:hello@zanaricapital.com",
            icon: <HiOutlineEnvelope size={24} />,
            desc: "For general questions and support."
        },
        {
            label: "Investor Relations",
            value: "invest@zanaricapital.com",
            href: "mailto:invest@zanaricapital.com",
            icon: <HiOutlineChatBubbleLeftRight size={24} />,
            desc: "Funding and Financial collaboration."
        },
        {
            label: "Partnerships",
            value: "partners@zanaricapital.com",
            href: "mailto:partners@zanaricapital.com",
            icon: <HiOutlineChatBubbleLeftRight size={24} />,
            desc: "Ecosystem and institutional collaboration."
        },
        {
            label: "Office",
            value: "Nairobi, Kenya",
            href: "https://maps.google.com",
            icon: <HiOutlineMapPin size={24} />,
            desc: "Building the Future."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-blue-100 flex flex-col py-24">
            {/* Hero Section */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 pb-24">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Let&apos;s talk
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-16">
                        We&apos;re building the future of investing in Kenya. Whether you&apos;re an investor, partner, or just curious, we&apos;re a message away.
                    </p>
                </div>

                {/* Contact Grid - Simplistic Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {contactMethods.map((method, i) => (
                        <a
                            key={i}
                            href={method.href}
                            className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-4xl border border-gray-200 dark:border-gray-800 hover:border-blue-600 transition-all block relative overflow-hidden"
                        >
                            <div className="text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors mb-6">
                                {method.icon}
                            </div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-2">
                                {method.label}
                            </h3>
                            <p className="text-lg font-bold mb-4 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                                {method.value} <HiOutlineArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {method.desc}
                            </p>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}