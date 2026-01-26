

export default function LearningPaths() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <header className="mb-12">
                <h2 className="text-3xl font-bold">Structured Learning Paths</h2>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                    Start where you are and progress at your own pace. Each path is
                    designed to build confidence step by step.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {[
                    {
                        title: "Investing for Beginners",
                        desc: "Understand the basics of investing, risk, and how to start with small amounts.",
                        points: [
                            "What is investing?",
                            "Understand investor profiles",
                            "Equities, Fixed Income, and Alternatives",
                        ],
                    },
                    {
                        title: "Understanding the NSE",
                        desc: "Learn how the Nairobi Securities Exchange works and how local stocks are traded.",
                        points: [
                            "How the NSE operates",
                            "Dividends & corporate actions",
                            "CDSC & settlement cycles",
                        ],
                    },
                    {
                        title: "Understanding the Economy",
                        desc: "Learn which investment is right for each Economic Cycle.",
                        points: [
                            "Monetary and Fiscal Policies",
                            "Business Cycles",
                            "Kenyan Capital Markets",
                        ],
                    },
                    {
                        title: "Learn about Investment  Strategies",
                        desc: "Explore local and global investment strategies.",
                        points: [
                            "Growth and Value Investing",
                            "Dollar Cost Averaging",
                            "Dividend Reinvestment Plan (DRIP)",
                        ],
                    },
                ].map((path) => (
                    <div
                        key={path.title}
                        className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold">{path.title}</h3>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            {path.desc}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {path.points.map((p) => (
                                <li key={p}>• {p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}