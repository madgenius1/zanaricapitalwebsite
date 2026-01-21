

export default function MarketInsight() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-3xl font-bold">Market Insights & Webinars</h2>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
                Stay informed with weekly NSE recaps, global market explainers, and
                educational webinars — focused on understanding, not speculation.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    "Weekly NSE Market Recaps",
                    "Global Market Explainers",
                    "Live Webinars & AMAs",
                ].map((item) => (
                    <div
                        key={item}
                        className="rounded-xl border border-gray-200 dark:border-gray-800 p-6"
                    >
                        <p className="font-medium">{item}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}