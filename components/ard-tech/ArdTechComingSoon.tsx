"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function ArdTechComingSoon() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="ard-tech-heading"
      className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden border-b-2 border-ink bg-[#070707] text-paper"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgb(255 106 0 / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 106 0 / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_106_0_/_0.12),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="site-pad relative z-[1] flex min-h-[calc(100dvh-4rem)] flex-col justify-between py-12 md:py-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-5"
        >
          <p className="meta text-accent">
            <span className="ard-tech-pulse inline-block h-1.5 w-1.5 bg-accent align-middle" />
            <span className="ml-3">System status / coming soon</span>
          </p>
          <p className="meta text-paper/45">Dubai origin · NL wedge</p>
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reduce ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-mono text-xs uppercase tracking-[0.28em] text-paper/50"
          >
            Ard Nabta · Digital product line
          </motion.p>

          <motion.h1
            id="ard-tech-heading"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: reduce ? 0 : 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 font-display text-[clamp(3.5rem,14vw,9rem)] uppercase leading-[0.85] tracking-[-0.05em] text-paper"
          >
            Ard
            <br />
            <span className="text-accent">Tech</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reduce ? 0 : 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-[32rem] text-base leading-relaxed text-paper/70 md:text-lg"
          >
            AI-assisted construction evidence and quality records. Site photos,
            checklists, and certificates into one traceable dossier.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: reduce ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10"
          >
            <Link
              href="/"
              className="meta text-paper/55 transition-colors duration-150 hover:text-accent"
            >
              Back to Ard Nabta
            </Link>
          </motion.div>
        </div>

        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: reduce ? 0 : 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-1 gap-0 border-t border-paper/15 sm:grid-cols-3"
        >
          {[
            ["Layer", "Evidence capture"],
            ["Assist", "AI classify / check"],
            ["Control", "Human approval"],
          ].map(([label, value]) => (
            <li
              key={label}
              className="border-b border-paper/15 py-5 sm:border-b-0 sm:border-r sm:border-paper/15 sm:px-6 sm:py-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <p className="meta text-accent">{label}</p>
              <p className="mt-2 font-mono text-sm text-paper/80">{value}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
