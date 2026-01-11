'use client'

import Typewriter from 'typewriter-effect'

export default function Rafiki() {
    return (
        <section className=" min-h-screen px-4 py-12 md:py-16 lg:py-20 bg-gray-950 dark:bg-gray-50 rounded-t-4xl shadow-xl z-20 flex justify-center items-center">
            <div className="mx-auto max-w-7xl flex flex-col items-center justify-center text-center space-y-4">

                {/* Header change bg-[#66FF00] */}
                <div className="max-w-4xl mb-12 md:mb-14 space-y-4 ">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-100 dark:text-gray-950 mb-8">
                        Jambo, I&apos;m <span className="text-[#0066FF]">Rafiki</span>
                        <br />
                        <span className="font-medium text-md lg:text-3xl tracking-wide">Your AI Robo-Advisor from Zanari Capital</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-800">
                        I am built to simplify investing and guide you with confidence.
                    </p>
                </div>

                {/* Animated Value Proposition */}
                <div className="relative mb-12 min-h-14 flex items-center justify-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-100 dark:text-gray-950">
                        <Typewriter
                            options={{
                                strings: [
                                    'Understand NSE stocks and bonds.',
                                    'Guide you through the fundamentals.',
                                    'Track and analyze your portfolio.',
                                    'Diversify investment and risk.',
                                    'Invest smarter, not harder.',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 45,
                                deleteSpeed: 25,
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
