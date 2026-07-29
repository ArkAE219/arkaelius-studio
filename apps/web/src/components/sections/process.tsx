"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
            Process
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            How We Work
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              className="rounded-3xl border border-zinc-200/50 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-violet-500/40 dark:border-zinc-800"
            >
              <span className="text-5xl font-bold text-violet-500/30">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}