import { HiCash } from "react-icons/hi";
import { HiBolt, HiKey, HiShieldCheck } from "react-icons/hi2";

const FEATURES = [
    {
        title: "Faster CDS Accounts Verification",
        description:
            "Open digital trading accounts faster through our digital onboarding flow.",
        icon: HiBolt,
        accent: "text-blue-600 bg-blue-100 dark:bg-blue-950/60",
    },
    {
        title: "All Inclusive",
        description:
            "Deposit and withdraw funds globally, trade stocks, and build wealth.",
        icon: HiCash,
        accent: "text-gray-600 bg-gray-50 dark:bg-gray-900/60",
    },
    {
        title: "Direct Asset Ownership",
        description:
            "Assets are registered in your name and in your full control.",
        icon: HiKey,
        accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60",
    },
    {
        title: "Bank-Grade Security",
        description:
            "End-to-end encryption and full compliance with Kenyan financial regulations and custodial standards.",
        icon: HiShieldCheck,
        accent: "text-purple-600 bg-purple-100 dark:bg-purple-950/60",
    },
];

export default function Solution() {
    return (
        <section className="py-16 lg:py-24 px-4 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-4xl space-y-2">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white gap-2">
                            Built for the Kenyan and Diaspora Retail Investors
                        </h2>
                        <p className="mt-4 text-gray-800 dark:text-gray-400 text-lg md:text-xl">
                            Open, manage, grow and protect your investments across stocks, ETFs, and bonds through the Zanari Mobile App.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-3xl border border-gray-200/60 dark:border-white/10 bg-gray-100 dark:bg-gray-950 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${feature.accent}`}
                            >
                                <feature.icon className="w-7 h-7" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Subtle hover line */}
                            <div className="absolute inset-x-8 bottom-6 h-px bg-linear-to-r from-transparent via-gray-600/40 to-transparent dark:via-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
