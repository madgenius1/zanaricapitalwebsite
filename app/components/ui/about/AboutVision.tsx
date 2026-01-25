export default function AboutVision() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        Our vision
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        We envision a future where every Kenyan — students, professionals,
                        entrepreneurs — can grow wealth confidently through transparent access
                        to financial markets.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                        <p className="text-4xl font-semibold text-gray-900 dark:text-white">NSE</p>
                        <span className="text-sm text-gray-500">Local Markets</span>
                    </div>
                    <div>
                        <p className="text-4xl font-semibold text-gray-900 dark:text-white">ETFs</p>
                        <span className="text-sm text-gray-500">Diversification</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
