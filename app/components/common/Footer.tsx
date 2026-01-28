import Link from "next/link"
import Image from "next/image"
import {
    BsTwitterX,
    BsLinkedin,
    BsWhatsapp,
    BsTiktok,
    BsInstagram,
    BsFacebook,
    BsReddit
} from "react-icons/bs"

const FOOTER_LINKS = {
    Platform: [
        { name: "Features", href: "/features" },
        { name: "Beta", href: "/beta" },
        { name: "Rafiki AI", href: "/rafiki" },
        { name: "Learn", href: "/learn" },
        { name: "Stocks", href: "/stocks" }
    ],
    Resources: [
        { name: "Dividends", href: "/dividends" },
        { name: "Derivatives", href: "/derivatives" },
        { name: "ETFs", href: "/etfs" },
        { name: "Bonds", href: "/bonds" },
        { name: "Portfolio", href: "/portfolio" }
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Be a Partner", href: "/partnership" },
        { name: "Terms", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
    ],
}

const SOCIAL_LINKS = [
    { name: "X", icon: BsTwitterX, href: "https://x.com/zanaricapital" },
    { name: "LinkedIn", icon: BsLinkedin, href: "https://linkedin.com/company/zanari" },
    { name: "Facebook", icon: BsFacebook, href: "https://facebook.com/zanari" },
    { name: "Instagram", icon: BsInstagram, href: "https://instagram.com/zanari" },
    { name: "TikTok", icon: BsTiktok, href: "https://tiktok.com/@zanari" },
    { name: "Reddit", icon: BsReddit, href: "https://reddit.com/zanari" },
    { name: "WhatsApp", icon: BsWhatsapp, href: "https://wa.me/zanari" },
]


export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Top Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-8 mb-16">

                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-4 lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/logo.webp" alt="Zanari Logo" width={36} height={36} className="rounded-sm" />
                            <div className="flex flex-col leading-none">
                                <span className="uppercase font-bold dark:text-gray-50 text-gray-950 text-sm tracking-wider">
                                    Zanari
                                </span>
                                <span className="uppercase font-bold dark:text-gray-50 text-gray-950 text-sm tracking-wider">
                                    Capital
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-gray-800 font-medium dark:text-white max-w-sm">
                            Democratizing wealth creation for Kenyans by enabling seamless buying and selling of NSE and global market securities.
                        </p>

                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    aria-label={name}
                                    className="p-2 rounded-full border border-gray-700 dark:border-gray-700
                             text-gray-700 dark:text-gray-300
                             hover:border-blue-500 hover:text-blue-600
                             dark:hover:text-blue-400 transition"
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-2" />


                    {/* Links */}
                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <div
                            key={category}
                            className="col-span-1 sm:col-span-2 lg:col-span-2"
                        >
                            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-medium text-gray-800 dark:text-gray-300
                                 hover:text-blue-600 dark:hover:text-gray-100 transition"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row gap-4 justify-between text-xs text-gray-800 dark:text-gray-50">
                    <span>© {currentYear} Zanari Capital | Nairobi, Kenya</span>
                    <span className="text-[10px] font-medium">
                        AES-256 Encryption
                    </span>
                </div>
            </div>
        </footer>
    )
}
