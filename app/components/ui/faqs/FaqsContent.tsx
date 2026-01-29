
"use client"


import { useState } from 'react';

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
    {
        title: "What will I be able to do once I get access?",
        description: "Once live, you’ll be able to buy and sell selected NSE-listed stocks, access global market securities through regulated partners, track your portfolio in real time, and learn through built-in educational tools.",
    },
    {
        title: "What markets will be available at launch?",
        description: "We plan to launch with selected Nairobi Securities Exchange (NSE) stocks, with African and global market access introduced progressively through regulated partners.",
    },
    {
        title: "Can I invest with small amounts?",
        description: "Yes. Zanari Capital is designed to lower investment barriers by supporting low minimum investments and fractional investing where applicable.",
    },
    {
        title: "Is Zanari Capital regulated?",
        description: "Zanari Capital is currently in the application and testing phase of the Capital Markets Authority (CMA) Regulatory Sandbox. This allows us to test innovative financial services in a controlled environment.",
    },
    {
        title: "Is my money safe?",
        description: "Client funds and securities will be held and processed through regulated custodial partners. Zanari Capital does not directly hold customer deposits.",
    },
    {
        title: "How is my personal data protected?",
        description: "We use bank-grade encryption, secure authentication methods, and strict access controls. Your personal data is never sold or shared with unauthorized third parties.",
    },
    {
        title: "Will I get priority access by joining early?",
        description: "Yes. Early waitlist sign-ups are prioritized for beta access and feature testing.",
    },
    {
        title: "Why do you need my email or phone number?",
        description: "We use your contact details only to notify you when onboarding opens, share important product updates, and send security or regulatory notices.",
    },
    {
        title: "Can I leave the waitlist later?",
        description: "Yes. You can opt out of the waitlist at any time using the unsubscribe option in our communications.",
    },
    {
        title: "Will there be fees when the platform launches?",
        description: "Yes. Fees will be transparent and competitive. Full pricing details will be shared before public launch.",
    },
];


export default function FaqsContent() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-18 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center lg:text-5xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="lg:px-8 md:px-6 py-8">
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
            </div>
        </section>
    )
}