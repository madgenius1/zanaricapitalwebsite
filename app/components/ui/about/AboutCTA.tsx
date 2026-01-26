import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-zinc-950 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Main CTA Container - Solid borders and flat colors instead of gradients */}
        <div className="relative overflow-hidden border-2 border-zinc-900 bg-zinc-900 px-8 py-16 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:rounded-3xl sm:px-16">
          
          {/* Subtle background decoration using solid shapes */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-zinc-800 dark:bg-zinc-800/50" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 border-4 border-zinc-800 dark:border-zinc-800/50" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to invest?
            </h2>
            
            <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              Join the <span className="text-white font-medium">Zanari beta</span> and help us shape an investment platform built specifically for the Kenyan market.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link 
                href="/beta" 
                className="w-full rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-zinc-950 transition-transform active:scale-95 sm:w-auto"
              >
                Join the Waitlist
              </Link>
              
              <Link 
                href="/contact" 
                className="w-full rounded-md border border-zinc-700 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-zinc-800 transition-colors sm:w-auto"
              >
                Get in Touch
              </Link>
            </div>

            {/* Micro-copy for trust */}
            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-zinc-500">
              No commitment required • Early access priority
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}