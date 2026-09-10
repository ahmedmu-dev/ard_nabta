"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data/nav";
import Button from "@/components/ui/Button";

/**
 * Slide-in mobile nav (<1024px). Keyboard accessible: Escape closes, focus is
 * trapped inside the panel while open, and focus returns to the trigger
 * button on close.
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-md text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-primary/60"
          onClick={close}
          aria-hidden="true"
        />
      ) : null}

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs transform bg-white p-6 shadow-xl transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
            Menu
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <ul className="mt-8 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="block rounded-md px-2 py-3 font-heading text-base font-medium uppercase tracking-wide text-primary hover:bg-surface"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="#contact" onClick={close} className="w-full">
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
