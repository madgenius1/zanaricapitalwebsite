export default function AboutVision() {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-24 transition-colors duration-300 dark:bg-gray-900">
            {/* Structural Accent: Top Border to separate from previous section */}
            <div className="absolute top-0 left-0 h-px w-full bg-gray-200 dark:bg-gray-800" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

                    {/* Left: Content Block */}
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500">
                            Our Vision
                        </h2>
                        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Building wealth for <br className="hidden sm:block" />
                            the next generation.
                        </p>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            We envision a future where every Kenyan — from students, professionals, entrepreneurs  — can grow wealth confidently through
                            direct, transparent access to high-yield financial markets.
                        </p>
                    </div>

                    {/* Right: Feature Cards (Stat Grid) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {/* NSE Card */}
                        <div className="group relative border-2 border-gray-900 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
                            <div className="flex flex-col justify-between">
                                <span className="mb-4 text-xs font-black uppercase text-gray-400">Market Access</span>
                                <p className="text-5xl font-bold text-gray-900 dark:text-white">NSE</p>
                                <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-500">
                                    Direct pipelines to Nairobi Securities Exchange.
                                </p>
                            </div>
                            {/* Solid Accent Decoration */}
                            <div className="absolute bottom-2 right-2 h-4 w-4 bg-gray-900 dark:bg-gray-700" />
                        </div>

                        {/* ETF Card */}
                        <div className="group relative border-2 border-gray-200 bg-gray-100 p-8 dark:border-gray-800 dark:bg-gray-950">
                            <div className="flex flex-col justify-between">
                                <span className="mb-4 text-xs font-black uppercase text-gray-400">Growth</span>
                                <p className="text-5xl font-bold text-gray-900 dark:text-white">ETFs</p>
                                <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-500">
                                    Portfolio diversification through managed funds.
                                </p>
                            </div>
                            {/* Solid Accent Decoration */}
                            <div className="absolute bottom-2 right-2 h-4 w-4 bg-blue-600" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}