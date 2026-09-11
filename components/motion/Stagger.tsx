"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Stagger between children in seconds */
  stagger?: number;
  delay?: number;
}

/**
 * Staggers child entrance when the group enters the viewport.
 * Each direct child should be a single element (or wrap with StaggerItem).
 */
export function Stagger({
  children,
  className = "",
  stagger = 0.06,
  delay = 0,
}: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
