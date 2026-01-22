


export default function Portfolio() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: TEXT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        See your money grow — clearly.
                    </h2>

                    <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
                        <li>• Real-time portfolio tracking</li>
                        <li>• Goal-based investing</li>
                        <li>• Dividend and performance insights</li>
                    </ul>
                </div>

                {/* RIGHT: VISUAL */}
                <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10 flex items-center justify-center">
                    <span className="text-sm text-gray-500">
                        Portfolio growth chart + goal progress ring
                    </span>
                </div>
            </div>
        </section>
    );
}
