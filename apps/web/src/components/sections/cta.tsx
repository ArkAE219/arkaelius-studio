"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-fuchsia-500/10 to-cyan-500/10 p-16 text-center backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-violet-500">
            Let's Build Together
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Ready to Build
            <br />
            Something Amazing?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From AI products to premium web experiences, we help ambitious
            startups transform ideas into reality.
          </p>

          <Button className="mt-10 rounded-2xl px-8 py-6 text-base">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}