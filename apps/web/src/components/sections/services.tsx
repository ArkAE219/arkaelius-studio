"use client";

import { motion } from "framer-motion";

import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-500">
            Our Services
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            What We Build
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            We combine design, engineering and AI to create modern digital
            products that help businesses launch faster and grow smarter.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
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
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
              >
                <div className="mb-8 inline-flex rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-5 text-violet-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}