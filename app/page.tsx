import CTA from "./components/landing/CTA";
import Features from "./components/landing/Features";
import Hero from "./components/landing/Hero";
import Rafiki from "./components/landing/Rafiki";
import Solution from "./components/landing/Solution";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Solution />
      <CTA />
      <Rafiki />
    </>
  );
}
