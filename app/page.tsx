import CTA from "./components/landing/CTA";
import Features from "./components/landing/Features";
import Hero from "./components/landing/Hero";
import Rafiki from "./components/landing/Rafiki";
// import SlideShow from "./components/landing/SlideShow";
import Solution from "./components/landing/Solution";
import SellingPoints from "./components/landing/SellingPoints";
import FAQs from "./components/landing/FAQs";

export default function Page() {
  return (
    <>
      <Hero />
      {/* <SlideShow /> */}
      <SellingPoints />
      <Features />
      <Solution />
      <CTA />
      <Rafiki />
      <FAQs />
    </>
  );
}
