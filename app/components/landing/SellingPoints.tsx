export default function SellingPoints() {
  const points = [
    {
      title: "Convenience",
      tagline: "We’re changing the rules.",
      description:
        "We’ve removed the barriers so you can start building your portfolio from as low as Ksh. 100, right from the palm of your hand.",
      accent: "text-blue-600 dark:text-blue-400",
      // Changed: Solid background for dark mode to prevent bleed-through
      bg: "bg-blue-50 dark:bg-gray-950",
    },
    {
      title: "Inclusivity",
      tagline: "Investing isn't just for the few anymore.",
      description:
        "With fractional shares and zero account minimums, we’ve democratized the Kenyan financial market. With us, you have a seat at the table.",
      accent: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-gray-950",
    },
    {
      title: "Transparency",
      tagline: "Knowledge is your greatest asset.",
      description:
        "We offer real-time market data, no hidden fees, direct access to your money giving you clarity and the confidence to make informed decisions in the NSE market.",
      accent: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-gray-950",
    },
    {
      title: "Security",
      tagline: "Your peace of mind is non-negotiable.",
      description:
        "We employ bank-grade encryption, security, and multi-factor authentication to ensure your data and assets are protected by the most advanced safety protocols available today.",
      accent: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-gray-950",
    },
  ]

  return (
    // Ensure the main container matches the section backgrounds
    <section className="relative bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="relative">
        {points.map((point, index) => (
          <section
            key={point.title}
            className={`
              sticky top-0 h-screen flex items-center justify-center isolate
              transition-all duration-700 ease-out
              ${point.bg}
            `}
          >
            <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                {/* Left */}
                <div className="space-y-4">
                  {/* <div className="absolute top-2 left-2 text-sm tracking-widest text-gray-400 dark:text-gray-500">
                    0{index + 1}
                  </div> */}

                  <span
                    className={`block h-2 w-18 rounded-full bg-current ${point.accent}`}
                  />

                  <h2
                    className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${point.accent}`}
                  >
                    {point.title}
                  </h2>

                  <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 max-w-xl">
                    {point.tagline}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}