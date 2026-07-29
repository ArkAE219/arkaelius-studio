import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Services } from "@/components/sections/services";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
  <Hero />
  <LogoCloud />
  <Services />
</main>
    </>
  );
}