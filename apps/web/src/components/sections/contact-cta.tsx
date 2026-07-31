"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20 p-12 text-center backdrop-blur-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
            Let's Build Together
          </p>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Ready to build your next AI product?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            Whether you're a startup or an established business, we'll help you
            transform your ideas into world-class digital products.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="premium" size="lg">
              Start a Project
            </Button>

            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}