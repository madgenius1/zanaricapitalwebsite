const stats = [
    { value: "M-Pesa", label: "Instant deposits & withdrawals" },
    { value: "NSE", label: "Direct access to Kenyan stocks" },
    { value: "100%", label: "Asset ownership under your CDS" },
    { value: "AI", label: "Guided investing with Rafiki" },
];

export default function AboutStats() {
    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="border border-gray-800 rounded-xl p-6"
                    >
                        <p className="text-3xl font-semibold text-white">
                            {s.value}
                        </p>
                        <p className="mt-2 text-gray-400 text-sm">
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
