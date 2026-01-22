import FooterFeatures from "@/app/components/ui/features/FooterFeatures";
import HeroFeatures from "@/app/components/ui/features/HeroFeatures";
import MarketingAccess from "@/app/components/ui/features/MarketingAccess";
import Onboarding from "@/app/components/ui/features/Onboarding";
import Payments from "@/app/components/ui/features/Payments";
import Portfolio from "@/app/components/ui/features/Portfolio";
import ProblemSolution from "@/app/components/ui/features/ProblemSolution";
import Security from "@/app/components/ui/features/Security";
import Education from "@/app/components/ui/features/Education";



export default function Page() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <HeroFeatures/>
            <ProblemSolution />
            <Onboarding />
            <MarketingAccess />
            <Payments />
            <Education />
            <Portfolio />
            <Security />
            <FooterFeatures />
        </main>
    )
}