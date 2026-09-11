"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealFrom = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: RevealFrom;
  once?: boolean;
}

const OFFSET: Record<RevealFrom, { x: number; y: number }> = {
  up: { x: 0, y: 20 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
};

/**
 * Scroll reveal — short fade/slide. Honors prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const offset = OFFSET[from];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.12, margin: "0px 0px -5% 0px" }}
      transition={{
        duration: 0.55,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
