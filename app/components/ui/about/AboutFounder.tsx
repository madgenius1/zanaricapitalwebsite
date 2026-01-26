

import Image from "next/image";

export default function AboutFounder() {
    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <Image
                    src="/about/founder.jpg"
                    alt="Founder"
                    width={500}
                    height={600}
                    className="rounded-xl object-cover"
                />

                <div>
                    <h3 className="text-white text-2xl font-semibold">
                        A message from our founder
                    </h3>
                    <p className="mt-4 text-gray-400">
                        “Financial markets shouldn’t be locked behind paperwork,
                        jargon, or privilege. Zanari exists to give Kenyans the
                        confidence and tools to invest with clarity.”
                    </p>
                    <p className="mt-6 text-gray-300 font-medium">
                        — Founder, Zanari Capital
                    </p>
                </div>
            </div>
        </section>
    );
}
