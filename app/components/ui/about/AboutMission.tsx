export default function AboutMission() {
    const beliefs = [
        {
            title: "Accessibility",
            text: "Investing should be available to every Kenyan, not just a few.",
        },
        {
            title: "Clarity",
            text: "Simple explanations beat complicated jargon.",
        },
        {
            title: "Ownership",
            text: "Your assets should always be owned by you.",
        },
        {
            title: "Trust",
            text: "Security and transparency are non-negotiable.",
        },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                    Why we exist
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {beliefs.map((b) => (
                        <div key={b.title}>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                {b.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {b.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
