import Link from "next/link";
import {
  FaHandshake ,
} from 'react-icons/fa';

interface RoadmapStep {
    status: 'done' | 'active' | 'future';
    title: string;
    desc: string;
}
const ROADMAP: RoadmapStep[] = [
    { status: 'active', title: "CMA Validation", desc: "Sandbox testing and compliance verification." },
    { status: 'future', title: "Closed Beta", desc: "Iterative rollout to waitlist users." },
    { status: 'future', title: "Public Scale", desc: "Mass adoption and ecosystem expansion." }
];

export default function AboutCTA() {
  return (
    <>
      <section className="py-24 px-6 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 trangray-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Zanari is at the inflection point between concept and scale.</h2>
            <p className="text-gray-300 text-lg">We are intentionally building compliantly to establish long-term trust.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 border-l border-gray-800 pl-8">
            <div>
              <h4 className="text-blue-400 font-bold mb-6">Who we want to work with</h4>
              <ul className="space-y-4">
                {["Strategic Investors", "Financial Institutions", "Market Infrastructure Partners", "Regulatory & Compliance Experts"].map((who, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {who}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-bold mb-6">What's Next</h4>
              <div className="space-y-6">
                {ROADMAP.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded h-fit ${step.status === 'active' ? 'bg-blue-600' : 'bg-gray-800'}`}>
                      {step.status}
                    </span>
                    <div>
                      <h5 className="font-bold text-sm">{step.title}</h5>
                      <p className="text-xs text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FaHandshake className="mx-auto text-blue-600 mb-8" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join us in building <span className="text-blue-600">The Future</span>.</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12">Whether you&apos;re an investor, partner, or collaborator — we&apos;d love to start the conversation.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/partnership" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
              Partner with Us
            </Link>
            <Link href="/invest" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
              Invest in Zanari
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}