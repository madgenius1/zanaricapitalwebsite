import FooterFeatures from "@/app/components/ui/features/FooterFeatures";
import HeroFeatures from "@/app/components/ui/features/HeroFeatures";
import MarketingAccess from "@/app/components/ui/features/MarketingAccess";
import Onboarding from "@/app/components/ui/features/Onboarding";
import Payments from "@/app/components/ui/features/Payments";
import Portfolio from "@/app/components/ui/features/Portfolio";
import Security from "@/app/components/ui/features/Security";
import Education from "@/app/components/ui/features/Education";
// import RafikiComponent from "@/app/components/ui/features/RafikiComponent";


//Shift Rafiki AI to the Rafiki AI PAGE

export default function Page() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <HeroFeatures/>
            <Onboarding />
            <MarketingAccess />
            <Payments />
            {/* <RafikiComponent /> */}
            <Education />
            <Portfolio />
            <Security />
            <FooterFeatures />
        </main>
    )
}