"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-500">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-zinc-200/50 p-8 transition-all dark:border-zinc-800"
            >
              <div className="mb-8 h-48 rounded-2xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20" />

              <p className="text-sm uppercase tracking-widest text-violet-500">
                {project.category}
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-medium text-violet-500">
                View Case Study
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
