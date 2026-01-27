import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-zinc-50 dark:bg-zinc-950 px-6 py-16 transition-colors duration-300">
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #808080 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        <div className="lg:sticky lg:top-24 flex flex-col lg:items-start items-center z-10">

          {/* Top Badge */}
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 mb-6 group cursor-pointer"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-zinc-700 dark:text-zinc-300">
              Zanari Capital • Pre-Launch Access
            </span>
            <HiArrowRight className="w-3 h-3 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6 lg:text-start text-center">
            Invest in Kenyan Stocks,
            <br />
            <span className="text-blue-600 dark:text-blue-500">From Anywhere.</span>
          </h1>

          {/* Sub-headline */}
          <p className="max-w-xl text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 lg:text-start text-center">
            Buy and sell NSE shares, derivatives, invest in Secondary Bonds, and access ETFs, with direct ownership
            from one secure, easy-to-use Zanari Mobile app.
          </p>

          {/* CTA */}
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-7 py-3 font-semibold bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Join the Beta Waitlist
            <HiArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="relative flex flex-col items-center space-y-12 py-4">
          <div className="overflow-hidden rounded-[2.5rem] border-8 border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <div className="relative w-full max-w-90">
              <Image
                src="/heroscreen.png"
                alt="Zanari mobile app dashboard"
                width={360}
                height={740}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}