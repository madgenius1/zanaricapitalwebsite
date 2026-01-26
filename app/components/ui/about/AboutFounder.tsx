import Image from "next/image";

export default function AboutFounder() {
    return (
        <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-black sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-12 lg:gap-x-16">

                    {/* Left Column: Image with Solid Frame */}
                    <div className="relative lg:col-span-5">
                        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800">
                            <Image
                                src="/about/founder.jpg"
                                alt="Founder of Zanari Capital"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative Solid Accents (No Gradients) */}
                        <div
                            className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 bg-gray-200 dark:bg-gray-900"
                            aria-hidden="true"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7">
                        <div className="max-w-xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">
                                Leadership
                            </p>

                            <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                A message from our CEO
                            </h3>

                            <div className="mt-10 relative">
                                <span className="absolute -top-8 -left-2 text-8xl leading-none text-gray-200 dark:text-gray-800 select-none">
                                    &ldquo;
                                </span>

                                <blockquote className="relative">
                                    <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 sm:text-2xl">
                                        Financial markets shouldn&apos;t be locked behind paperwork,
                                        jargon, or privilege. Zanari exists to give Kenyans the
                                        confidence and tools to invest with <span className="text-gray-900 dark:text-white font-semibold underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700">clarity.</span>
                                    </p>
                                </blockquote>

                                <div className="mt-8 flex items-center gap-x-4 border-t border-gray-200 pt-8 dark:border-gray-800">
                                    <div className="h-10 w-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
                                        <span className="text-[10px] text-white dark:text-black font-bold uppercase">CM</span>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-gray-900 dark:text-white">
                                            Collins Murichu
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Co-Founder & CEO, Zanari Capital
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}