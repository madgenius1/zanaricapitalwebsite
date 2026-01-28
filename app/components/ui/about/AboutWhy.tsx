
import {
    HiOutlineShieldCheck,
    HiOutlineLightBulb
} from 'react-icons/hi2';

export default function AboutWhy() {
    return (
        <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why we&apos;re building Zanari</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            Investing in Kenya remains intimidating. Current platforms assume high financial literacy and a tolerance for heavy paperwork. Zanari is a mobile-first pivot toward how Kenyans actually move money.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
                                <HiOutlineLightBulb className="text-blue-600 mb-4" size={32} />
                                <h4 className="font-bold mb-2">Accessibility</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-200">Built for the mobile-native generation.</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
                                <HiOutlineShieldCheck className="text-green-500 mb-4" size={32} />
                                <h4 className="font-bold mb-2">Education</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-200">Rafiki AI guides users through every trade.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-950 rounded-[2.5rem] p-8 md:p-12 text-white border border-gray-800">
                        <h3 className="text-2xl font-bold mb-8 text-blue-500">What Zanari is becoming</h3>
                        <ul className="space-y-6">
                            {[
                                "Direct ownership through CDS-backed accounts",
                                "Mobile native funding & withdrawals",
                                "Clean, intuitive experience for Gen Z and Millennials",
                                "A guide-first approach to local and regional assets"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start border-b border-gray-800 pb-4 last:border-0">
                                    <span className="text-blue-500 font-bold tracking-tighter">0{i + 1}</span>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}