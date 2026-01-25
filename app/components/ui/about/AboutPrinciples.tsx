export default function AboutPrinciples() {
    const principles = [
        "Built for mobile-first investors",
        "Powered by M-Pesa",
        "Clear fees and transparency",
        "Security by default",
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                    How we build
                </h2>

                <ul className="mt-10 space-y-4 text-gray-700 dark:text-gray-300">
                    {principles.map((p) => (
                        <li key={p}>• {p}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
