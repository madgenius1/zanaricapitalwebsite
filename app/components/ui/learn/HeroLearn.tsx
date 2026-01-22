import Link from "next/link";


export default function HeroLearn() {
    return (
        <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Master the Markets — From{" "}
                        <span className="text-blue-600 dark:text-blue-600">
                            Ksh. 100
                        </span>{" "}
                        to{" "}
                        <span className="text-blue-600 dark:text-blue-600">
                            Ksh. 100 Million
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                        Zanari Academy is your free learning hub for understanding the
                        Nairobi Securities Exchange, ETFs, and investments — explained
                        simply, responsibly, and without hype.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link href="/beta" className="rounded-lg bg-blue-600 dark:text-gray-900 dark:bg-gray-100 text-white px-6 py-3 font-medium hover:bg-blue-800 dark:hover:bg-gray-200 cursor-pointer transition">
                            Start Learning
                        </Link>
                        <Link href="/beta" className="rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer transition">
                            Join the Waitlist
                        </Link>
                    </div>
                </div>

                {/* Visual Placeholder */}
                <div className="relative h-64 md:h-80 rounded-2xl bg-linear-to-br from-emerald-500/20 to-blue-500/20 dark:from-emerald-400/10 dark:to-blue-400/10 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                        Dashboard Preview
                    </span>
                </div>
            </div>
        </section>
    )
}