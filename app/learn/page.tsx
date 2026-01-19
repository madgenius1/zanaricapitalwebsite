import Link from "next/link";



export default function Page() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Master the Markets — From{" "}
              <span className="text-blue-600 dark:text-blue-600">
                KES 100
              </span>{" "}
              to{" "}
              <span className="text-blue-600 dark:text-blue-600">
                KES 100 Million
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              Zanari Academy is your free learning hub for understanding the
              Nairobi Securities Exchange, ETFs, and investments — explained
              simply, responsibly, and without hype.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/beta" className="rounded-lg bg-blue-600 dark:text-gray-900 dark:bg-gray-100 text-white px-6 py-3 font-medium hover:bg-blue-800 dark:hover:bg-gray-200 cursor-pointer transition">
                Start Learning
              </Link>
              <Link href="/beta" className="rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer transition">
                Join the Waitlist
              </Link>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative h-64 md:h-80 rounded-2xl bg-linear-to-br from-emerald-500/20 to-blue-500/20 dark:from-emerald-400/10 dark:to-blue-400/10 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">
              Dashboard Preview
            </span>
          </div>
        </div>
      </section>

      {/*  Learning Paths */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <header className="mb-12">
          <h2 className="text-3xl font-bold">Structured Learning Paths</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
            Start where you are and progress at your own pace. Each path is
            designed to build confidence step by step.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Investing for Beginners",
              desc: "Understand the basics of investing, risk, and how to start with small amounts.",
              points: [
                "What is investing?",
                "Risk vs reward",
                "Common beginner mistakes",
              ],
            },
            {
              title: "Understanding the NSE",
              desc: "Learn how the Nairobi Securities Exchange works and how local stocks are traded.",
              points: [
                "How the NSE operates",
                "Dividends & corporate actions",
                "CDSC & settlement cycles",
              ],
            },
            {
              title: "Global Markets 101",
              desc: "Explore ETFs and international markets and how Kenyans can diversify globally.",
              points: [
                "What are ETFs?",
                "Currency risk",
                "Local vs global diversification",
              ],
            },
          ].map((path) => (
            <div
              key={path.title}
              className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{path.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {path.desc}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {path.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Glossary  */}
      <section className="bg-gray-50 dark:bg-gray-900/40 border-y border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Financial Glossary (A–Z)</h2>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            Clear, simple definitions of common investing terms — explained in
            real-world Kenyan context.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h4 className="font-semibold">Bull Market</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                A period when stock prices are generally rising and investor
                confidence is strong.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h4 className="font-semibold">Dividend</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                A portion of company profits paid to shareholders, often common
                among NSE-listed firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insight */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold">Market Insights & Webinars</h2>
        <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
          Stay informed with weekly NSE recaps, global market explainers, and
          educational webinars — focused on understanding, not speculation.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Weekly NSE Market Recaps",
            "Global Market Explainers",
            "Live Webinars & AMAs",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rafiki AI */}
      <section className="bg-linear-to-br from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Learn with Rafiki AI</h2>
            <p className="mt-4 text-emerald-50">
              Ask questions, simplify concepts, and explore examples tailored to
              your goals — all powered by Zanari&apos;s AI financial assistant.
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-6 border border-white/20">
            <p className="text-sm">
              “Explain ETFs using KES 5,000” <br />
              “What does a bear market mean for NSE stocks?”
            </p>
          </div>
        </div>
      </section>

      {/*  Disclaimer  */}
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500 dark:text-gray-400">
        Zanari Academy provides educational content only and does not constitute
        financial advice. Always assess your financial situation and risk
        tolerance before investing.
      </footer>
    </main>
  );
}
