
import Image from "next/image";

export default function MarketingAccess() {
    const assets = [
        {
            title: "NSE Stocks",
            description: "Buy & sell listed Kenyan companies",
            icon: "/icons/nse.svg",
        },
        {
            title: "ETFs",
            description: "Diversified investing made simple",
            icon: "/icons/etf.svg",
        },
        {
            title: "Direct Ownership",
            description: "Assets registered under your CDS account",
            icon: "/icons/cds.svg",
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        Own real assets in local and global markets.
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
                        Invest in instruments you understand — with full ownership,
                        transparency, and Kenyan market access at your fingertips.
                    </p>

                    <div className="mt-10 space-y-6">
                        {assets.map((asset) => (
                            <div
                                key={asset.title}
                                className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                            >
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 border">
                                    <Image src={asset.icon} alt={asset.title} width={20} height={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                        {asset.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {asset.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: VISUAL */}
                <div className="relative">
                    {/* Replace with asset cards / app screen */}
                    <div className="aspect-square rounded-3xl bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                        <span className="text-sm text-gray-500">Asset cards visual</span>
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-6 right-6 px-3 py-1 text-xs rounded-full bg-black text-white">
                        Owned by you
                    </div>
                </div>
            </div>
        </section>
    );
}
