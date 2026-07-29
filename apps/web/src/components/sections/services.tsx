"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What We Build
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            We help startups and businesses transform ideas into scalable
            digital products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-zinc-200/50 bg-white/60 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-violet-500/10 p-4 text-violet-500">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}