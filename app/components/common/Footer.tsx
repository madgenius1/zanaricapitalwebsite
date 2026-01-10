import Link from "next/link";

const FOOTER_LINKS = [
    { name: "Features", href: "/features" },
    { name: "About Us", href: "/about" },
    { name: "Learn", href: "/learn" },
    { name: "Waitlist", href: "/waitlist" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand & Copyright */}
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                            Zanari Capital
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            © {currentYear} All Rights Reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                </div>
            </div>
        </footer>
    );
}