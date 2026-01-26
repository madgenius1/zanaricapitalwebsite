


export default function RafikiPurpose() {
    return (
        <section className="w-full px-6 py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">
                        What is Rafiki AI?
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Main Body Copy */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                            Rafiki is an AI-powered financial assistant designed to help you make sense of investing as you go.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            It is built to support investors by explaining market concepts, portfolio changes, and investment risks in simple, human language — directly inside the Zanari app.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-semibold">
                            Rafiki focuses on education, clarity, and confidence, helping you understand why something is happening, not telling you what to do.
                        </p>
                    </div>

                    {/* LLM-Friendly Definition Box */}
                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-sm relative">
                            <div className="flex flex-col space-y-4">
                                <p className="text-gray-900 dark:text-gray-50 font-mono text-sm leading-relaxed italic">
                                    "Rafiki AI is an artificial data–powered investment assistant that helps users understand market concepts, portfolio performance, and investment risks in real time."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Localized Confidence Bar */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { label: "Engineered for", value: "Clarity" },
                        { label: "Focused on", value: "Education" },
                        { label: "Driven by", value: "Data" }
                    ].map((item, idx) => (
                        <div key={idx} className="border border-gray-600 dark:border-gray-400 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                            <span className="text-[10px] uppercase text-gray-400 dark:text-gray-600 font-bold">{item.label}</span>
                            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}