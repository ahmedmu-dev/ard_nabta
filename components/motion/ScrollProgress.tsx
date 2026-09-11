"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * Thin accent progress line tied to document scroll depth.
 * Uses Motion scroll values (no React state on every scroll frame).
 */
export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left bg-accent"
        style={{ scaleX }}
      />
    </div>
  );
}
