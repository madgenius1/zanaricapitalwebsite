

const values = [
    { title: "Transparency", text: "Clear pricing and ownership." },
    { title: "Security", text: "Built with bank-grade protection." },
    { title: "Accessibility", text: "Invest with small amounts." },
    { title: "Education", text: "Learn as you invest." },
];

export default function AboutValues() {
    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-white">
                    Our core values
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="border border-gray-800 rounded-xl p-6"
                        >
                            <h4 className="text-white font-medium">
                                {v.title}
                            </h4>
                            <p className="mt-2 text-gray-400 text-sm">
                                {v.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
