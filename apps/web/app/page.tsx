"use client";

import { useEffect, useState } from "react";

import { LoadingScreen } from "@/components/common/loading-screen";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { WhyUs } from "@/components/sections/why-us";
import { CTA } from "@/components/sections/cta";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      {!loading && (
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
            <Testimonials />
            <ContactCTA />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}