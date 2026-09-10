"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
}

/**
 * Reusable dropdown/mega-menu item for a nav link with sub-items.
 *
 * Not used in v1 (every v1 nav item is a flat in-page anchor — see
 * lib/data/nav.ts). Reserved for v2, when Products/Services/Projects become
 * real routes with sub-pages (e.g. Products > Structural Steel, Pre-Engineered
 * Buildings, ...). Built now so wiring it in later is a drop-in swap for the
 * relevant `<li>` in Nav.tsx.
 */
export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        className="flex items-center gap-1 font-heading text-sm font-medium uppercase tracking-wide text-primary transition-colors hover:text-accent-contrast"
      >
        {label}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      {open ? (
        <ul className="absolute left-0 top-full z-20 min-w-48 rounded-md border border-surface bg-white py-2 shadow-lg">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm text-body hover:bg-surface hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
