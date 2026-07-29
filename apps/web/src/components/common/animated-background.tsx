"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[140px]"
        animate={{
          x: [-40, 40, -40],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 -left-24 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[120px]"
        animate={{
          x: [0, 60, 0],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]"
        animate={{
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}