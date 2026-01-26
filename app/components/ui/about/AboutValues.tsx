const values = [
    { title: "Transparency", text: "No hidden fees or complex jargon. We provide clear pricing and direct proof of ownership for every asset." },
    { title: "Security", text: "Your capital is protected by bank-grade encryption and rigorous legal frameworks compliant with local laws." },
    { title: "Accessibility", text: "Wealth creation shouldn&apos;t be for the few. Start building your portfolio with accessible entry points." },
    { title: "Education", text: "We don&apos;t just facilitate transactions; we provide the tools and insights to help you grow as an investor." },
];

export default function AboutValues() {
    return (
        <section className="bg-white py-20 transition-colors duration-300 dark:bg-zinc-950 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                            The principles that <br className="hidden sm:block" /> guide Zanari Capital
                        </h2>
                    </div>
                    <p className="max-w-md text-zinc-600 dark:text-zinc-400">
                        We operate with a commitment to integrity and innovation, ensuring
                        the Kenyan investment landscape is built on trust.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 gap-px bg-zinc-200 dark:bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((v, index) => (
                        <div
                            key={v.title}
                            className="group relative bg-white p-8 transition-colors hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900"
                        >
                            {/* Index Number */}
                            <span className="mb-6 flex h-8 w-8 items-center justify-center rounded-none border border-zinc-900 text-xs font-bold text-zinc-900 dark:border-zinc-700 dark:text-zinc-500">
                                0{index + 1}
                            </span>

                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                                {v.title}
                            </h4>

                            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {v.text}
                            </p>

                            {/* Decorative corner accent - visible on hover */}
                            <div className="absolute top-0 right-0 h-2 w-2 bg-zinc-900 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}