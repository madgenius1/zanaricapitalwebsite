
import Link from "next/link";

export default function FooterFeatures() {
    return (
        <section className="py-24 bg-black text-white text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Built for the Kenyan and Diaspora investor
                </h2>

                <p className="mt-4 text-gray-300">
                    Join our beta and help shape the future of investing in Kenya.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link href="/beta" className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition">
                        Join the Beta Waitlist
                    </Link>
                </div>

                <div className="mt-10 flex items-center justify-center gap-4 text-xs text-gray-400">
                    <span>Beta access limited</span>
                    <span>•</span>
                    <span>Early adopters only</span>
                </div>
            </div>
        </section>
    );
}
