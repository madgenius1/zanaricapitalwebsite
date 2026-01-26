import RafikiDoes from "@/app/components/ui/rafiki/RafikiDoes";
import RafikiHero from "@/app/components/ui/rafiki/RafikiHero";
import RafikiPurpose from "@/app/components/ui/rafiki/RafikiPurpose";
// import RafikiWorks from "@/app/components/ui/rafiki/RafikiWorks";
import RafikiAdvantage from "@/app/components/ui/rafiki/RafikiAdvantage";
// import RafikiDisclaimer from "@/app/components/ui/rafiki/RafikiDisclaimer";




export default function Page() {
    return (
        <>
            <RafikiHero />
            <RafikiAdvantage />
            <RafikiPurpose />
            <RafikiDoes />
            {/* <RafikiWorks /> */}
            {/* <RafikiDisclaimer /> */}
        </>
    )
}