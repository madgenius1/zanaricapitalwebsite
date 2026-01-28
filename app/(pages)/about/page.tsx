import AboutCTA from "@/app/components/ui/about/AboutCTA";
import AboutFounder from "@/app/components/ui/about/AboutFounder";
import AboutHero from "@/app/components/ui/about/AboutHero";
import AboutMission from "@/app/components/ui/about/AboutMission";
import AboutPrinciples from "@/app/components/ui/about/AboutPrinciples";
import AboutPurpose from "@/app/components/ui/about/AboutPurpose";
import AboutTeam from "@/app/components/ui/about/AboutTeam";
import AboutTraction from "@/app/components/ui/about/AboutTraction";
import AboutValues from "@/app/components/ui/about/AboutValues";
import AboutVision from "@/app/components/ui/about/AboutVision";
import AboutWhy from "@/app/components/ui/about/AboutWhy";


export default function Page() {
    return (
        <>
            <AboutHero />
            <AboutMission />
            <AboutPurpose />
            <AboutVision />
            <AboutTraction />
            <AboutFounder />
            <AboutValues />
            <AboutWhy/>
            <AboutPrinciples />
            <AboutTeam />
            <AboutCTA />
        </>
    )
}