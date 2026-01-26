

import Image from "next/image";

export default function AboutMission() {
    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Investing shouldn&apos;t feel impossible.
                    </h2>
                    <p className="mt-4 text-gray-400">
                        We started Zanari because investing in Kenya is still
                        complex, intimidating, and inaccessible to many.
                        Our goal is to remove friction — from onboarding to ownership.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <Image
                        src="/community.webp"
                        alt="Community"
                        width={400}
                        height={300}
                        className="rounded-xl object-cover"
                    />
                    <Image
                        src="/hands.webp"
                        alt="Trust"
                        width={400}
                        height={300}
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
