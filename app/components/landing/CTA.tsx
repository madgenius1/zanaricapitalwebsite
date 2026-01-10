import Link from "next/link";


export default function CTA() {
    return (
        <section className="py-8 md:py-12 lg:py-18 px-6 bg-white dark:bg-gray-950">
            <div className="px-4 py-8 border-gray-200/60 dark:border-white/10 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-2xl lg:px-8 mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Be the first to trade.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
                        Our private beta is opening soon. Join the waitlist to get early access to
                        instant CDS processing and exclusive investment insights.
                    </p>
                    <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg shadow-lg">
                        Join the Beta Waitlist
                    </Link>
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                        Limited availability · Early access only
                    </p>
                </div>
            </div>
        </section>
    );
}
