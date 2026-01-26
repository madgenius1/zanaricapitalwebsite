


export default function RafikiHero() {
    return (
        <section className="relative w-full px-6 py-12 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col space-y-6 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-50 tracking-wide">
                        Rafiki AI — your <br />
                        <span className="text-blue-600 dark:text-blue-500">intelligent investment guide</span>.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        Rafiki helps you understand your investments, manage risk, and stay disciplined — without making decisions for you.
                    </p>

                    <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 py-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Built for investors navigating the Kenyan capital market.
                        </p>
                    </div>

                    {/* <div className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <button className="px-8 py-4 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 font-bold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all shadow-lg">
                            Meet Rafiki on Zanari
                        </button>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 font-bold">Trust Line</span>
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                                Insights, not financial advice.
                            </span>
                        </div>
                    </div> */}
                </div>

                <div className="relative flex justify-center">
                    <div className="relative w-[320px] h-160 rounded-[2.75rem] bg-gray-900 shadow-[0_40px_120px_rgba(0,0,0,0.35)] overflow-hidden
                  border border-gray-800 dark:border-gray-700
                  before:absolute before:inset-0 before:rounded-[2.75rem]
                  before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">

                        {/* App Header */}
                        <div className="pt-6 pb-4 px-4 backdrop-blur-xl bg-white/80 dark:bg-gray-800/70
                    border-b border-gray-200/60 dark:border-gray-700/60
                    flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-extrabold shadow">
                                R
                            </div>
                            <div className="leading-tight">
                                <p className="text-xs font-bold text-gray-900 dark:text-white">
                                    Rafiki
                                </p>
                                <p className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 bg-gray-50 dark:bg-gray-900 px-4 py-5 space-y-5 overflow-y-auto">

                            {/* User */}
                            <div className="flex justify-end">
                                <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md">
                                    <p className="text-[10px] text-gray-100 uppercase tracking-wider opacity-70 mb-1">
                                        Carl
                                    </p>
                                    <p className="text-xs leading-snug">
                                        I&apos;m thinking of adding more banking company stocks to my portfolio. What three things should I consider?
                                    </p>
                                </div>
                            </div>

                            {/* AI */}
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-gray-800 px-4 py-4 rounded-2xl rounded-tl-sm
                        max-w-[90%] border border-gray-200/60 dark:border-gray-700/60
                        shadow-md">
                                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-tight uppercase">
                                        Rafiki AI
                                    </p>

                                    <p className="text-xs leading-relaxed mb-3 text-gray-700 dark:text-gray-200">
                                        Adding more banking stocks to your portfolio requires careful analysis of the sector. Consider:
                                    </p>

                                    <ul className="space-y-2">
                                        <li className="text-xs flex gap-2">
                                            <span className="text-gray-500">•</span>
                                            <span>Current recovery phase.</span>
                                        </li>
                                        <li className="text-xs flex gap-2">
                                            <span className="text-gray-500">•</span>
                                            <span>Current regulatory changes.</span>
                                        </li>
                                        <li className="text-xs flex gap-2">
                                            <span className="text-gray-500">•</span>
                                            <span>Key performance megraytrics.</span>
                                        </li>
                                    </ul>

                                    <p className="text-xs leading-relaxed mb-3 text-gray-700 pt-4 dark:text-gray-200">
                                        Want a quick breakdown of bank stock performance in Kenya?
                                    </p>
                                </div>
                            </div>

                            {/* Typing */}
                            <div className="flex gap-1 pl-2">
                                <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:-.2s]" />
                                <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce [animation-delay:-.4s]" />
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 backdrop-blur-xl bg-white/80 dark:bg-gray-800/70 border-t border-gray-200/60 dark:border-gray-700/60">
                            <div className="h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-300/60 dark:border-gray-600/60
                      flex items-center px-4 justify-between shadow-inner">
                                <span className="text-xs text-gray-400">Ask Rafiki…</span>
                                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shadow">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Rings */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="w-120 h-120 rounded-full border border-gray-200/40 dark:border-gray-800 blur-sm" />
                        <div className="absolute w-150 h-150 rounded-full border border-gray-100 dark:border-gray-900 blur-md" />
                    </div>
                </div>
            </div>
        </section>
    );
}