"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Message sent successfully!");
        form.reset();
      } else {
        setSuccess("❌ Failed to send message.");
      }
    } catch {
      setSuccess("❌ Something went wrong.");
    }

    setLoading(false);
  }

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

          <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
            />

            <Button
              type="submit"
              variant="premium"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && (
              <p className="text-center text-sm font-medium">
                {success}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}