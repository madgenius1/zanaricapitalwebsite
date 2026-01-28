const values = [
    { title: "Transparency", text: "No hidden fees or complex jargon. We provide clear pricing and direct proof of ownership for every asset." },
    { title: "Security", text: "Your capital is protected by bank-grade encryption and rigorous legal frameworks compliant with local laws." },
    { title: "Accessibility", text: "Wealth creation shouldn't be for the few. Start building your portfolio with accessible entry points." },
    { title: "Education", text: "We don't just facilitate transactions; we provide the tools and insights to help you grow as an investor." },
];

export default function AboutValues() {
    return (
        <section className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-5xl flex flex-col gap-4">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            The principles that <br className="hidden sm:block" /> guide Zanari Capital
                        </h2>
                        <p className=" text-gray-600 dark:text-gray-300 max-w-4xl">
                            We operate with a commitment to integrity and innovation, ensuring
                            the Kenyan investment landscape is built on trust.
                        </p>
                    </div>

                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 gap-px bg-gray-200 dark:bg-gray-800 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((v, index) => (
                        <div
                            key={v.title}
                            className="group relative bg-white p-8 transition-colors hover:bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900"
                        >
                            {/* Index Number */}
                            <span className="mb-6 flex h-8 w-8 items-center justify-center rounded-none border border-gray-900 text-xs font-bold text-gray-900 dark:border-gray-700 dark:text-gray-500">
                                0{index + 1}
                            </span>

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {v.title}
                            </h4>

                            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                {v.text}
                            </p>

                            {/* Decorative corner accent - visible on hover */}
                            <div className="absolute top-0 right-0 h-2 w-2 bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}