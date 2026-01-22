

import { BiShield, BiFingerprint, BiLock, BiBell } from "react-icons/bi";

export default function Security() {
    const items = [
        { icon: BiFingerprint, label: "Biometric login" },
        { icon: BiShield, label: "Two-factor authentication" },
        { icon: BiLock, label: "Encrypted data" },
        { icon: BiBell, label: "Activity alerts" },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 dark:text-white">
                    Security you can trust.
                </h2>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.label}
                            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-center"
                        >
                            <item.icon className="mx-auto h-6 w-6 text-gray-900 dark:text-white" />
                            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
