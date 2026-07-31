"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-500">
            Featured Projects
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Crafted with Passion
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Every project combines beautiful design, scalable engineering and
            AI-powered experiences built for modern businesses.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Project Preview */}

              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30 transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  🚀
                </div>
              </div>

              {/* Content */}

              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-500">
                  {project.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-400"
    >
      {tech}
    </span>
  ))}
</div>

                {/* Button */}

                <div className="mt-8">
                  <Button
                    variant="premium"
                    className="w-full"
                  >
                    View Project

                    <ArrowUpRight
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={18}
                    />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}