

import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="bg-linear-to-b to-blue-900/40 from-black py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Ready to invest with confidence?
            </h2>
            <p className="mt-4 text-gray-300">
                Join the Zanari beta and help shape the future of investing in Kenya.
            </p>

            <Link href="/beta" className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium">
                Join the Waitlist
            </Link>
        </section>
    );
}
