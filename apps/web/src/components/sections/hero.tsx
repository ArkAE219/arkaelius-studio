"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundGlow } from "@/components/common/background-glow";
import { AnimatedBackground } from "@/components/common/animated-background";
export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
       <>
  <AnimatedBackground />
  <BackgroundGlow />
</>
        <motion.div
  className="mx-auto max-w-3xl text-center"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>  <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-600 backdrop-blur dark:text-violet-300"
>
  ✨ AI-Powered Digital Agency
</motion.div>

        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
  <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
  ArkAelius
</span>

  <br />

  <span>Studio</span>
</h1>
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
>
  We craft{" "}
  <span className="font-semibold text-violet-500">
    AI-powered digital experiences
  </span>{" "}
  that help ambitious startups and businesses launch faster, grow smarter,
  and stand out with world-class design and engineering.
</motion.p>

        <div className="mt-8 flex justify-center gap-4">
          
          <Button
  size="lg"
  className="rounded-full px-8 shadow-lg transition-transform hover:scale-105"
>

    Get Started

  </Button>



  <Button
  size="lg"
  variant="outline"
  className="rounded-full px-8 transition-transform hover:scale-105"
>

    View Projects

  </Button>
        </div>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="mt-16 flex flex-wrap justify-center gap-10"
>
  <div>
    <h3 className="text-3xl font-bold">50+</h3>
    <p className="text-sm text-zinc-500">Projects Planned</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">100%</h3>
    <p className="text-sm text-zinc-500">Commitment</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">AI</h3>
    <p className="text-sm text-zinc-500">First Approach</p>
  </div>
</motion.div>
      </motion.div>
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2"
>
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
      Scroll
    </span>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="h-10 w-6 rounded-full border border-zinc-400 p-1"
    >
      <div className="h-2 w-2 rounded-full bg-violet-500" />
    </motion.div>
  </div>
</motion.div>
    </section>
  );
}