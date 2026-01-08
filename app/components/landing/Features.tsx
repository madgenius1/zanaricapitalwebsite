import Image from "next/image";
import { HiArrowPath, HiArrowUpRight, HiChartPie, HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiChartBar, HiCash } from "react-icons/hi";

/* ---------- UI Primitives ---------- */

function IconBadge({ icon: Icon, color, className = "" }: any) {
  return (
    <div
      className={`p-3 sm:p-4 rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${color} ${className}`}
    >
      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
    </div>
  );
}

function BentoCard({ image, overlay, children, className = "" }: any) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] border border-gray-200/30 dark:border-white/10 bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 dark:opacity-50"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-90 ${overlay}`}
      />

      {/* Content */}
      <div className="relative z-20 h-full p-6 sm:p-8 md:p-10 flex flex-col">
        {children}
      </div>

      {/* Subtle inner border */}
      <div className="absolute inset-0 z-30 pointer-events-none rounded-[2.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 group-hover:ring-white/20 transition-all" />
    </div>
  );
}

/* ---------- Main Component ---------- */

export default function Features() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#fcfcfd] dark:bg-black overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6">
            One App. <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500">
              Every Kenyan Asset.
            </span>
          </h2>
          <p className="max-w-xl mx-auto md:mx-0 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            Invest in the Nairobi Securities Exchange, Government Bonds, and intelligent ETFs
            through a world-class platform.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 auto-rows-[250px] sm:auto-rows-[280px] md:auto-rows-[300px]">
          {/* Stocks - Large Card */}
          <BentoCard
            image="/stocktrade.webp"
            overlay="bg-gradient-to-br from-blue-900/90 via-blue-900/50 to-transparent"
            className="sm:col-span-2 md:col-span-8 md:row-span-2 row-span-1"
          >
            <IconBadge icon={HiChartBar} color="bg-blue-600 shadow-blue-500/40" />
            <div className="mt-6 sm:mt-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
                Nairobi Securities <br /> Exchange
              </h3>
              <p className="text-blue-50/80 max-w-sm text-sm sm:text-base md:text-lg">
                Real-time pricing for Safaricom, Equity, and all NSE stocks with instant order execution.
              </p>
            </div>

            {/* Interactive Mockup */}
            <div className="mt-auto backdrop-blur-3xl bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-4 sm:p-6 max-w-sm shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div>
                  <p className="text-white font-bold text-sm sm:text-lg">Safaricom PLC</p>
                  <p className="text-blue-200 text-[10px] sm:text-xs">SCOM • NSE</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-mono font-bold text-sm sm:text-base">KES 17.40</p>
                  <p className="text-emerald-400 text-[10px] sm:text-xs flex items-center gap-1 justify-end">
                    <HiMiniArrowTrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> +2.4%
                  </p>
                </div>
              </div>
              <button className="w-full py-2 sm:py-3 bg-white text-blue-900 rounded-2xl text-xs sm:text-sm font-bold hover:bg-blue-50 transition-colors">
                Buy Shares
              </button>
            </div>
          </BentoCard>

          {/* Fixed Income - Tall Card */}
          <BentoCard
            image="/bonds.webp"
            overlay="bg-gradient-to-b from-emerald-900/80 to-emerald-950/90"
            className="sm:col-span-2 md:col-span-4 md:row-span-2 row-span-1"
          >
            <IconBadge icon={HiCash} color="bg-emerald-500 shadow-emerald-500/40" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-6 sm:mt-8 mb-2 tracking-tight">
              Infrastructure Bonds
            </h3>
            <p className="text-emerald-50/80 text-sm sm:text-base md:text-lg">
              Secure your future with tax-free government yields.
            </p>

            <div className="mt-auto bg-emerald-400/10 border border-emerald-400/20 rounded-3xl p-6 sm:p-8 text-center backdrop-blur-md">
              <p className="text-emerald-300 text-[9px] sm:text-xs uppercase tracking-[0.15em] mb-1 sm:mb-2 font-bold">
                IFB1/2026 Yield
              </p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">18.5%</p>
              <p className="text-emerald-200/60 text-[9px] sm:text-xs mt-2 sm:mt-4">
                Interest paid semi-annually
              </p>
            </div>
          </BentoCard>

          {/* Analytics - Square Card */}
          <BentoCard
            image="/analytics.webp"
            overlay="bg-gradient-to-br from-orange-600/80 via-transparent to-transparent"
            className="sm:col-span-2 md:col-span-5 row-span-1"
          >
            <div className="flex justify-between items-start">
              <IconBadge icon={HiChartPie} color="bg-emerald-500 shadow-emerald-500/40" />
              <div className="bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-xl border border-white/20">
                <HiArrowUpRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mt-4 sm:mt-6 mb-1 sm:mb-2">
              Portfolio Insights
            </h3>
            <p className="text-orange-50/80 text-sm sm:text-base">
              Automated risk profiling and sector diversification.
            </p>

            <div className="mt-auto flex gap-1 sm:gap-2 items-end">
              <div className="h-12 w-2 sm:w-3 bg-white/20 rounded-full" />
              <div className="h-20 w-2 sm:w-3 bg-white/40 rounded-full" />
              <div className="h-16 w-2 sm:w-3 bg-white/60 rounded-full" />
              <div className="h-24 w-2 sm:w-3 bg-orange-400 rounded-full" />
            </div>
          </BentoCard>

          {/* DRIP - Horizontal Card */}
          <BentoCard
            image="/dividends.webp"
            overlay="bg-gradient-to-r from-purple-900/90 via-purple-900/60 to-transparent"
            className="sm:col-span-2 md:col-span-7 row-span-1"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between h-full gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <IconBadge
                  icon={HiArrowPath}
                  color="bg-blue-600 shadow-blue-500/40"
                  className="p-4 sm:p-5"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    Smart Reinvestment
                  </h3>
                  <p className="text-purple-100/70 max-w-xs sm:max-w-sm text-sm sm:text-base">
                    Turn your dividends into more shares automatically with our DRIP engine.
                  </p>
                </div>
              </div>
              <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl transition-all font-semibold backdrop-blur-sm whitespace-nowrap text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
