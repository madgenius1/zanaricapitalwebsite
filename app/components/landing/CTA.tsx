import Link from "next/link";

export default function CTA() {

    return (
        <section className="py-12 md:py-20 px-4 bg-white dark:bg-gray-950 transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-6 py-12 border border-gray-200/60 dark:border-white/10 bg-gray-50 dark:bg-gray-900 shadow-2xl rounded-3xl lg:px-12 relative overflow-hidden">

                {/* Decorative Background Element for Dark Mode */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    {/* Social Proof Badge */}
                    <div className="flex flex-col items-center justify-center gap-3 mb-8">
                        <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                            Join 1,618 investors in Zanari
                        </p>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        The future of Kenyan <br className="hidden md:block" /> investing is here.
                    </h2>

                    <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed mb-10">
                        We are currently in the <strong>CMA Regulatory Sandbox phase</strong>,
                        perfecting a secure, world-class experience. Join the waitlist for
                        priority access to NSE stocks, ETFs, and automated portfolios.
                    </p>

                    <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg shadow-lg">
                        Join the Beta Waitlist
                    </Link>

                    {/* Trust Signals Footer */}
                    <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            CMA Sandbox Progress
                        </div>
                        <div className="hidden md:block">•</div>
                        <div>Bank-Grade Encryption</div>
                        <div className="hidden md:block">•</div>
                        <div>Ksh. 100 Minimum</div>
                    </div>
                </div>
            </div>
        </section>
    );
}