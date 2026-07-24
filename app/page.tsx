import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { HairResults } from "@/components/HairResults";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustAndSafety } from "@/components/TrustAndSafety";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HairResults />
        <TrustAndSafety />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
