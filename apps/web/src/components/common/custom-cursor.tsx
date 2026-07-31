"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 450,
    damping: 28,
  });

  const y = useSpring(mouseY, {
    stiffness: 450,
    damping: 28,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "button,a,[role='button']"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* Outer Ring */}

      <motion.div
        style={{
          left: x,
          top: y,
        }}
        animate={{
          width: hovering ? 64 : 36,
          height: hovering ? 64 : 36,
          opacity: hovering ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/70"
      />

      {/* Glow */}

      <motion.div
        style={{
          left: x,
          top: y,
        }}
        animate={{
          scale: hovering ? 2.5 : 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-xl"
      />

      {/* Inner Dot */}

      <motion.div
        style={{
          left: x,
          top: y,
        }}
        animate={{
          scale: hovering ? 1.4 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
      />
    </div>
  );
}