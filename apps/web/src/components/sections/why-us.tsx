"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/data/why-us";

export function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
            Why ArkAelius
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            We don't just build websites—we build digital products that are fast,
            scalable and designed for long-term success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {whyUs.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-zinc-200/50 bg-white/50 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}