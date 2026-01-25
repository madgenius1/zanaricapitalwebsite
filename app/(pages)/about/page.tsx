import AboutCTA from "@/app/components/ui/about/AboutCTA";
import AboutHero from "@/app/components/ui/about/AboutHero";
import AboutMission from "@/app/components/ui/about/AboutMission";
import AboutPrinciples from "@/app/components/ui/about/AboutPrinciples";
import AboutSocialProof from "@/app/components/ui/about/AboutSocialProof";
import AboutTeam from "@/app/components/ui/about/AboutTeam";
import AboutVision from "@/app/components/ui/about/AboutVision";


export default function Page() {
    return(
        <>
            <AboutHero />
            <AboutMission />
            <AboutVision />
            <AboutPrinciples />
            <AboutTeam />
            <AboutSocialProof />
            <AboutCTA />
        </>
    )
}