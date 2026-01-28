
import {
    HiOutlineUserGroup,
    HiOutlineRocketLaunch,
    HiOutlineBuildingLibrary,
    HiOutlinePresentationChartLine
} from 'react-icons/hi2';

interface TractionItem {
    icon: React.ReactNode;
    label: string;
    desc: string;
}

const TRACTION_DATA: TractionItem[] = [
    { icon: <HiOutlineUserGroup size={24} />, label: "Growing Audience", desc: "100+ active newsletter subscribers with high professional engagement." },
    { icon: <HiOutlineRocketLaunch size={24} />, label: "Beta Demand", desc: "Qualified waitlist ready for controlled rollout phase." },
    { icon: <HiOutlinePresentationChartLine size={24} />, label: "Product Built", desc: "Functional mobile demo covering onboarding and funding flows." },
    { icon: <HiOutlineBuildingLibrary size={24} />, label: "Regulatory Progress", desc: "Engaging in CMA Regulatory Sandbox testing preparation." }
];

export default function AboutTraction() {
    return (
        <section className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-2">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Early traction and progress</h2>
                        <p className="text-gray-600 dark:text-gray-300">We are moving with intention through regulatory and product milestones.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TRACTION_DATA.map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 transition-colors group">
                            <div className="mb-6 text-gray-400 group-hover:text-blue-600 transition-colors">
                                {item.icon}
                            </div>
                            <h4 className="font-bold mb-3">{item.label}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}