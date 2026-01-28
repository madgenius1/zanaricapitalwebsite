import Link from "next/link"

export default function LandingFooter() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-8">
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join us in building <span className="text-blue-600">Zanari Capital</span>.</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/partnership" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                            Partner with Us
                        </Link>
                        <Link href="/invest" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                            Invest in Zanari
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}