import Image from "next/image";

const team = [
    { name: "Collins Murichu", role: "CEO & Co-Founder" },
    { name: "Nick Juma", role: "CTO & C-Founder" },
    { name: "Kevin Omwangi", role: "CPO" },
];

export default function AboutTeam() {
    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold text-white">
                    Meet the team
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((m) => (
                        <div key={m.name}>
                            <div className="h-72 bg-gray-800 rounded-xl mb-4" />
                            <h4 className="text-white font-medium">
                                {m.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                                {m.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
