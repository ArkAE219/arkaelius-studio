"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Let's Build Something Amazing
            </h2>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <form className="mt-10 grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Tell us about your project..."
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
            />

            <Button variant="premium" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}