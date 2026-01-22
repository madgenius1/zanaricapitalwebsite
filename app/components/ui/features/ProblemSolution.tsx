
"use client";

import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

const problems = [
    {
        title: "Complex platforms",
        description:
            "Outdated interfaces and confusing workflows that overwhelm new investors.",
    },
    {
        title: "High minimums",
        description:
            "Large capital requirements that lock many Kenyans out of investing.",
    },
    {
        title: "Confusing financial jargon",
        description:
            "Technical language that makes investing feel intimidating and inaccessible.",
    },
];

export default function ProblemSolution() {
    return (
        <section className="relative w-full py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4">
                {/* Title */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        Investing in Kenya shouldn&apos;t be complicated.
                    </h2>
                </div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-red-100 dark:border-red-900/40 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <HiOutlineXCircle className="h-6 w-6 text-red-600" />
                                <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                                    {problem.title}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-16">
                    <div className="flex-1 h-px bg-linear-to-r from-red-300/40 to-green-300/40" />
                    <HiOutlineCheckCircle className="h-8 w-8 text-green-500" />
                    <div className="flex-1 h-px bg-linear-to-r from-green-300/40 to-red-300/40" />
                </div>

                {/* Solution */}
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
                        Zanari removes the friction and puts investing back in your control.
                    </h3>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                        We simplify access, lower barriers, and explain investing in a way
                        that makes sense — especially for first-time and mobile-first
                        investors.
                    </p>
                </div>
            </div>
        </section>
    );
}
