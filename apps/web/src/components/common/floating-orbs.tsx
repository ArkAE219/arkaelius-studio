"use client";

import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-400/15 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[100px]"
      />
    </>
  );
}
