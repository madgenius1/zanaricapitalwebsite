

export default function Glossary() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900/40 border-y border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <h2 className="text-3xl font-bold">Financial Glossary (A–Z)</h2>
                <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
                    Clear, simple definitions of common investing terms — explained in
                    real-world Kenyan context.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                        <h4 className="font-semibold">Bull Market</h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            A period when stock prices are generally rising and investor
                            confidence is strong.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
                        <h4 className="font-semibold">Dividend</h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            A portion of company profits paid to shareholders, often common
                            among NSE-listed firms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}