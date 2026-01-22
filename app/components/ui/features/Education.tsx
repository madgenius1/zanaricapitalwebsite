import Image from "next/image";

export default function Education() {
    const highlights = [
        "Tap-to-explain investment terms",
        "Short lessons built into actions",
        "Kenyan market examples you recognize",
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: VISUAL */}
                <div className="relative">
                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-10 flex items-center justify-center">
                        <span className="text-sm text-gray-500">
                            App screen with tooltip overlays
                        </span>
                    </div>

                    {/* Micro cards */}
                    <div className="absolute -bottom-6 left-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 text-xs shadow-sm">
                        What does this mean?
                    </div>
                </div>

                {/* RIGHT: TEXT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        Learn while you invest — not before.
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
                        Zanari teaches you in context — right when you&apos;re making
                        decisions — so learning feels natural, not overwhelming.
                    </p>

                    <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
                        {highlights.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
