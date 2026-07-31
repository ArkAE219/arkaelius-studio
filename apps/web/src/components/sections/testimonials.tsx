"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-500">
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Trusted by startups and businesses to build modern digital experiences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="mb-6 text-4xl">⭐️⭐️⭐️⭐️⭐️</div>

              <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold">{item.name}</h3>

                <p className="text-sm text-zinc-500">
                  {item.role} • {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}