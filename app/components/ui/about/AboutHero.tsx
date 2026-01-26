export default function AboutHero() {
    return (
        <section className="relative bg-black dark:bg-gray-950 text-white py-32 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-blue-900/40 via-black to-black" />

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-semibold">
                    About Zanari Capital
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
                    We&apos;re building a Kenyan-first investment platform that makes
                    buying and owning real assets simple, transparent, and accessible.
                </p>
            </div>
        </section>
    );
}
