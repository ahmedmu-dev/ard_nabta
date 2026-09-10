import type { NavItem } from "@/lib/types";

/**
 * Single source of truth for primary nav items.
 * v1: every item is an in-page anchor on the homepage.
 * v2: flip `isRoute` to true and update `href` to a real route — no other
 * changes needed in Nav.tsx/MobileMenu.tsx since both read from this list.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];
