import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { WhyUs } from "@/components/sections/why-us";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
  <Hero />
  <LogoCloud />
  <Services />
  <Process />
  <Projects />
  <WhyUs />
<CTA />
<Footer />
</main>
    </>
  );
}
