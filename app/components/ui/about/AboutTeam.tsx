export default function AboutTeam() {
    const team = [
        { name: "Founding Team", role: "Product & Engineering" },
        { name: "Advisors", role: "Finance & Compliance" },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                    The people behind Zanari
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="border border-gray-200 dark:border-gray-800 rounded-xl p-6"
                        >
                            <h3 className="font-medium text-gray-900 dark:text-white">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
