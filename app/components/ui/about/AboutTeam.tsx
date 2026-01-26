const team = [
    { name: "Collins Murichu", role: "CEO & Co-Founder", initials: "CM" },
    { name: "Nick Juma", role: "CTO & Co-Founder", initials: "NJ" },
    { name: "Kevin Omwangi", role: "CPO", initials: "KO" },
];

export default function AboutTeam() {
    return (
        <section className="bg-white py-24 transition-colors duration-300 dark:bg-gray-950 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header with solid accent */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="mb-4 h-1 w-12 bg-gray-900 dark:bg-white" />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        The minds behind Zanari
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        A team committed to democratizing asset ownership across the Kenyan landscape.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    {team.map((member) => (
                        <div key={member.name} className="group relative">
                            {/* Image Container with Solid Border Offset */}
                            <div className="relative mb-6">
                                <div className="aspect-4/5 overflow-hidden rounded-none border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
                                    {/* Placeholder for actual Image component */}
                                    <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-gray-300 dark:text-gray-800">
                                        {member.initials}
                                    </div>
                                </div>
                                {/* Decorative Solid Offset - Visible on Hover/Focus */}
                                <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full border border-gray-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 dark:border-white" />
                            </div>

                            {/* Name & Role */}
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500">
                                    {member.role}
                                </p>
                            </div>

                            {/* Minimalist Social Link placeholder */}
                            <div className="mt-4 flex gap-4">
                                <div className="h-4 w-4 bg-gray-200 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-white transition-colors cursor-pointer" />
                                <div className="h-4 w-4 bg-gray-200 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-white transition-colors cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}