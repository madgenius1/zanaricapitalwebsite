

import { IoShieldOutline, IoPhonePortraitOutline, IoWalletOutline, IoEyeOutline    } from "react-icons/io5";


export default function AboutPrinciples() {
  const principles = [
    {
      title: "Built for mobile-first investors",
      description: "Optimized for the Kenyan digital lifestyle, ensuring your portfolio is always a tap away.",
      icon: <IoPhonePortraitOutline className="w-6 h-6" />,
    },
    {
      title: "Mobile money integration",
      description: "Seamless integration with the local ecosystem for instant deposits and withdrawals.",
      icon: <IoWalletOutline className="w-6 h-6" />,
    },
    {
      title: "Clear fees and transparency",
      description: "No hidden charges or fine print. We believe trust is built through radical honesty.",
      icon: <IoEyeOutline className="w-6 h-6" />,
    },
    {
      title: "Security by default",
      description: "Bank-grade encryption and multi-factor authentication protect every transaction.",
      icon: <IoShieldOutline className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with a solid geometric accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              How we build
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              Our engineering and product philosophy is centered around the needs of the modern Kenyan investor.
            </p>
          </div>
          {/* A solid divider that adds visual weight without using a gradient */}
          <div className="hidden md:block h-px flex-1 bg-gray-200 dark:bg-gray-800 ml-12 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 overflow-hidden rounded-2xl">
          {principles.map((p, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-8 flex flex-col h-full hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {p.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}