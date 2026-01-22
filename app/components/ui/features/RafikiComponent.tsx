
//Shift this to the Rafiki AI PAGE
export default function RafikiComponent() {
    const points = [
        "Explains your investment choices in plain language",
        "Flags portfolio risks early",
        "Helps you stay disciplined during market swings",
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: TEXT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        Meet Rafiki — your AI investment guide.
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
                        Rafiki doesn&apos;t tell you what to buy. It helps you understand
                        your options, risks, and long-term direction.
                    </p>

                    <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
                        {points.map((point) => (
                            <li key={point}>• {point}</li>
                        ))}
                    </ul>

                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                        Rafiki provides insights, not financial advice.
                    </p>
                </div>

                {/* RIGHT: VISUAL */}
                <div className="relative">
                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-10 flex items-center justify-center">
                        <span className="text-sm text-gray-500">
                            Calm chat interface mockup
                        </span>
                    </div>

                    {/* Subtle tone indicator */}
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        Calm • Educational • Disciplined
                    </div>
                </div>
            </div>
        </section>
    );
}
