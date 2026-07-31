"use client";

import { motion, AnimatePresence } from "framer-motion";

type LoadingScreenProps = {
  loading: boolean;
};

export function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
              className="h-20 w-20 rounded-full border-4 border-violet-500 border-t-cyan-400"
            />

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-4xl font-black text-transparent"
            >
              ArkAelius Studio
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}