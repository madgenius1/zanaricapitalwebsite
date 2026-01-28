export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-white py-20 dark:bg-gray-950 sm:py-32">
            {/* Structural Pattern: A subtle grid that works in both modes */}
            <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]">
                <div className="absolute inset-0 h-full w-full bg-inherit bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                        About <span className="text-blue-700">Zanari Capital</span>
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        We&apos;re building a Kenyan-first investment platform that makes
                        buying and owning real assets <span className="text-zinc-900 dark:text-zinc-200 font-medium">simple, transparent, and accessible</span> for everyone.
                    </p>
                </div>
            </div>

            {/* Visual Accent: Simple solid line divider */}
            <div className="absolute bottom-0 left-0 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
        </section>
    );
}