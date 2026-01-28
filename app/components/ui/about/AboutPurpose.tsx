export default function AboutPurpose() {
    return (
        <section className="relative overflow-hidden bg-zinc-50 py-24 dark:bg-gray-950 sm:py-32">
            {/* Decorative solid element for visual weight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-zinc-200 dark:bg-zinc-800" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">

                    {/* Label with solid borders */}
                    <div className="mb-12 flex items-center gap-4">
                        <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-800 dark:text-gray-400">
                            Our Purpose
                        </span>
                        <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                    </div>

                    {/* Statement with High-Contrast Typography */}
                    <div className="max-w-4xl text-center">
                        <h2 className="text-3xl font-medium leading-tight tracking-tight text-zinc-900 dark:text-white md:text-5xl lg:leading-snug">
                            To <span className="text-blue-600 dark:text-blue-500">democratize wealth creation</span> for Kenyans by giving them direct access to local and global markets — with clarity, trust, and technology.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Subtle border to separate from next section */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-900" />
        </section>
    );
}