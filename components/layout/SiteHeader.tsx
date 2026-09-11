"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/data/nav";
import { SITE_NAME } from "@/lib/constants";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-ink text-paper">
      <div className="site-pad flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="max-w-[11rem] font-display text-sm uppercase leading-tight tracking-tight text-paper transition-colors duration-150 hover:text-accent sm:max-w-none sm:text-base"
        >
          {SITE_NAME}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link meta transition-colors duration-150 hover:text-accent ${
                      active ? "is-active text-accent" : "text-paper/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/#contact"
            variant="accent"
            className="hidden px-4 py-2.5 sm:inline-flex"
          >
            Request a Quote
          </Button>
          <button
            ref={triggerRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center text-paper transition-transform duration-150 active:scale-95 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            ref={panelRef}
            className="overflow-hidden border-t-2 border-paper/20 bg-ink lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="site-pad flex flex-col py-4">
              {NAV_ITEMS.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    className="border-b border-paper/15"
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduce ? 0 : 0.04 * index,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-4 font-display text-xl uppercase tracking-tight transition-colors duration-150 hover:text-accent ${
                        active ? "text-accent" : "text-paper"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="site-pad pb-6">
              <Button
                href="/#contact"
                variant="accent"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
