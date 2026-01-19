import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center px-6 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT: Text Content */}
        <div className="flex flex-col items-start">

          {/* Top Badge */}
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 mb-6 group cursor-pointer"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300">
              Zanari Capital • Pre-Launch Access
            </span>
            <HiArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
            Invest in Kenyan Stocks,
            <br />
            From Anywhere.
          </h1>

          {/* Sub-headline */}
          <p className="max-w-xl text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Buy and sell NSE stocks, invest in Secondary Bonds, and access ETFs —
            all from one secure, easy-to-use Zanari Mobile app.
          </p>

          {/* CTA */}
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-7 py-3 font-semibold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Join the Beta Waitlist
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* RIGHT: App Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-65 sm:w-75 lg:w-85 xl:w-95">
            <Image
              src="/screen.png"
              alt="Zanari mobile app dashboard showing NSE stocks and portfolio"
              width={380}
              height={760}
              priority
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
