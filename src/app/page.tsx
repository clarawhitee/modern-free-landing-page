import Accordion from "@/components/Accordion";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
//
export default function Home() {
  return (
    <main className="m-auto xl:px-24 pt-10 max-w-[1440px]">
      <Hero />
      <Services />
      <CaseStudies />
      <Accordion />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
