import Image from "next/image";

export default function AboutMission() {
  return (
    <section className="bg-white py-16 transition-colors duration-300 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Column: Content */}
          <div className="sticky top-10">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Investing shouldn&apos;t feel <br className="hidden md:block" />
              like an impossible task.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              <p>
                We started Zanari because investing in Kenya is still complex,
                intimidating, and inaccessible to many. The barriers aren&apos;t
                just financial—they are structural.
              </p>
              <p className="border-l-4 border-gray-900 pl-6 font-medium italic dark:border-white">
                "Our goal is to remove friction—from the moment you onboard to the
                pride of ownership."
              </p>
            </div>

            {/* Simple Metric Row */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-gray-100 pt-10 dark:border-gray-800">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
                <p className="text-sm text-gray-500">Kenyan Owned</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">Direct</p>
                <p className="text-sm text-gray-500">Asset Access</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Bento Grid */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
              <Image
                src="/community.webp"
                alt="Community"
                width={800}
                height={500}
                className="h-72 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-96"
              />
            </div>
            <div className="col-span-7 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
              <Image
                src="/hand.webp"
                alt="Trust"
                width={400}
                height={400}
                className="h-48 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-64"
              />
            </div>
            <div className="col-span-5 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
              <Image
                src="/together.webp"
                alt="Trust"
                width={400}
                height={400}
                className="h-48 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-64"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}