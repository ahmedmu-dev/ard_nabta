import type { NavItem } from "@/lib/types";

/** Primary nav — three clear destinations. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Projects", href: "/projects", isRoute: true },
  { label: "Ard Tech", href: "/ard-tech", isRoute: true },
  { label: "Career", href: "/work-with-us", isRoute: true },
];
