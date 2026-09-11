"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const STREAM = [
  "EVIDENCE",
  "CLASSIFY",
  "CHECKLIST",
  "PHOTO",
  "CERTIFICATE",
  "DOSSIER",
  "APPROVAL",
  "TRACE",
  "WKB",
  "SITE",
];

const LAYERS = [
  {
    code: "01",
    label: "Layer",
    value: "Evidence capture",
    detail: "Photos · checklists · certificates",
  },
  {
    code: "02",
    label: "Assist",
    value: "AI classify / check",
    detail: "Completeness · quality screen",
  },
  {
    code: "03",
    label: "Control",
    value: "Human approval",
    detail: "Qualified sign-off retained",
  },
] as const;

const BOOT_LINES = [
  "> init ard.tech kernel",
  "> mount evidence pipeline",
  "> await human approval gate",
  "> status: coming soon",
];

export default function ArdTechComingSoon() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="ard-tech-heading"
      className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden border-b-2 border-ink bg-[#050505] text-paper"
    >
      {/* Drifting tech grid */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-40 ${
          reduce ? "" : "ard-tech-grid"
        }`}
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgb(255 106 0 / 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 106 0 / 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft top wash (no purple) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgb(255_106_0_/_0.16),transparent_50%)]"
        aria-hidden="true"
      />

      {/* Horizontal scan */}
      {!reduce ? (
        <div className="ard-tech-scan pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-accent/80" aria-hidden="true" />
      ) : null}

      {/* Floating nodes */}
      {!reduce
        ? [12, 28, 55, 72, 88].map((left, i) => (
            <motion.span
              key={left}
              className="pointer-events-none absolute z-[1] h-1 w-1 bg-accent"
              style={{ left: `${left}%`, top: `${18 + i * 12}%` }}
              aria-hidden="true"
              animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }}
              transition={{
                duration: 3.2 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          ))
        : null}

      <div className="site-pad relative z-[2] flex min-h-[calc(100dvh-4rem)] flex-col justify-between py-10 md:py-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-5"
        >
          <p className="meta text-accent">
            <span className="ard-tech-pulse inline-block h-1.5 w-1.5 bg-accent align-middle" />
            <span className="ml-3">
              System status / coming soon
              {!reduce ? <span className="ard-tech-cursor">_</span> : null}
            </span>
          </p>
          <p className="meta text-paper/45">Dubai origin · NL wedge</p>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-16">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-mono text-xs uppercase tracking-[0.28em] text-paper/50"
            >
              Ard Nabta · Digital product line
            </motion.p>

            <div className="relative mt-6 inline-block max-w-full">
              {!reduce ? (
                <>
                  <span
                    className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-accent"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-accent"
                    aria-hidden="true"
                  />
                </>
              ) : null}

              <motion.h1
                id="ard-tech-heading"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-[clamp(3.25rem,12vw,8.5rem)] uppercase leading-[0.85] tracking-[-0.05em] text-paper"
              >
                Ard
                <br />
                <span className="inline-flex text-accent">
                  {"TECH".split("").map((char, i) => (
                    <motion.span
                      key={`${char}-${i}`}
                      className="inline-block"
                      initial={reduce ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: reduce ? 0 : 0.28 + i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[34rem] text-base leading-relaxed text-paper/70 md:text-lg"
            >
              AI-assisted construction evidence and quality records. Site photos,
              checklists, and certificates into one traceable dossier.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 0.5, duration: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/"
                className="meta text-paper/55 transition-colors duration-150 hover:text-accent"
              >
                Back to Ard Nabta
              </Link>
            </motion.div>
          </div>

          {/* Terminal panel */}
          <motion.aside
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.55,
              delay: reduce ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-2 border-paper/20 bg-black/60 p-5 font-mono text-xs leading-relaxed text-paper/70 md:p-6"
            aria-label="System boot log"
          >
            <div className="mb-4 flex items-center justify-between border-b border-paper/15 pb-3">
              <span className="meta text-accent">boot.log</span>
              <span className="meta text-paper/35">offline</span>
            </div>
            <ul className="space-y-2">
              {BOOT_LINES.map((line, i) => (
                <motion.li
                  key={line}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: reduce ? 0 : 0.45 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={
                    i === BOOT_LINES.length - 1 ? "text-accent" : "text-paper/65"
                  }
                >
                  {line}
                  {i === BOOT_LINES.length - 1 && !reduce ? (
                    <span className="ard-tech-cursor">_</span>
                  ) : null}
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-paper/15 pt-4">
              <div>
                <p className="meta text-paper/35">Latency</p>
                <p className="mt-1 text-sm text-paper">-- ms</p>
              </div>
              <div>
                <p className="meta text-paper/35">Uptime</p>
                <p className="mt-1 text-sm text-accent">pending</p>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Single data stream marquee */}
        {!reduce ? (
          <div
            className="ard-tech-marquee-wrap relative mb-8 overflow-hidden border-y border-paper/15 py-3"
            aria-hidden="true"
          >
            <div className="ard-tech-marquee flex w-max gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
              {[...STREAM, ...STREAM].map((token, i) => (
                <span key={`${token}-${i}`} className="flex items-center gap-8">
                  <span>{token}</span>
                  <span className="text-accent">/</span>
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="meta mb-8 border-y border-paper/15 py-3 text-paper/40">
            Evidence / Classify / Checklist / Photo / Certificate / Dossier
          </p>
        )}

        <ul className="grid grid-cols-1 gap-0 border-t border-paper/15 sm:grid-cols-3">
          {LAYERS.map((item, i) => (
            <motion.li
              key={item.code}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: reduce ? 0 : 0.55 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-b border-paper/15 py-6 transition-colors duration-150 hover:bg-accent/10 sm:border-b-0 sm:border-r sm:border-paper/15 sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="meta text-accent">{item.label}</p>
                <p className="font-mono text-[10px] text-paper/30 transition-colors group-hover:text-accent">
                  {item.code}
                </p>
              </div>
              <p className="mt-3 font-display text-xl uppercase tracking-tight text-paper md:text-2xl">
                {item.value}
              </p>
              <p className="mt-2 font-mono text-[11px] text-paper/45">
                {item.detail}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
