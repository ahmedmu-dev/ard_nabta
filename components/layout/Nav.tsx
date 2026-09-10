import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data/nav";

/**
 * Desktop nav links, hidden below `lg` in favor of MobileMenu.
 * Reads from lib/data/nav.ts — v1 hrefs are in-page anchors ("#products"
 * etc.); flipping `isRoute` + href in that one file is the only change
 * needed to point these at real v2 routes.
 */
export default function Nav() {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-heading text-sm font-medium uppercase tracking-wide text-primary transition-colors hover:text-accent-contrast"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
