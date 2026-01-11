

"use client"


import { useState } from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';


interface AccordionItem {
    title: string;
    description: string;
}

const accordionItems: AccordionItem[] = [
    {
        title: "What does joining the waitlist mean?",
        description: "Joining the waitlist gives you early access to Zanari Capital when we launch. You’ll be among the first users invited to test the platform, receive product updates, and access features before public release.",
    },
    {
        title: "Is Zanari Capital live right now?",
        description: "Not yet. Zanari Capital is currently in a pre-launch and beta phase. We are onboarding users gradually to ensure security, regulatory compliance, and a smooth experience.",
    },
    {
        title: "Does joining the waitlist cost anything?",
        description: "No. Joining the waitlist is completely free and does not require any commitment to invest or open an account when the platform goes live.",
    },
    {
        title: "Who can join the waitlist?",
        description: "Any Kenyan aged 18 and above can join the waitlist. We also support Kenyans in the diaspora, subject to regulatory requirements in their country of residence.",
    },
    {
        title: "When will I get access to the platform?",
        description: "Access will be rolled out in phases. Waitlist members will be notified by email or phone as soon as onboarding opens for their group.",
    },
]

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16 lg:py-18 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-left lg:text-5xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                    Frequently Asked Questions
                </h2>
                <div className=" py-8">
                    <div className="flex flex-col items-center gap-4 py-2">
                        {accordionItems.map((item: AccordionItem, index: number) => (
                            <div key={index} className={`flex flex-col gap-2 w-full
                                ${index === 0 ? 'border-t' : ''}
                                border rounded-lg border-gray-300 dark:border-gray-700
                                p-4 cursor-pointer`}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-md lg:text-xl md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                        {item.title}
                                    </h2>
                                    <svg
                                        className={`w-5 h-5 text-gray-950 dark:text-gray-50 transform transition-transform duration-300
                                        ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out p-2
                                    ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm w-full lg:text-md text-gray-800 dark:text-gray-200 mb-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-8 flex justify-center items-center">
                    <Link href="/faqs" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg shadow-lg">
                        More
                        <HiArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

