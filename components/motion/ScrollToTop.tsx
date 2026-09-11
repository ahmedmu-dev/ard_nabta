"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reset window scroll when the route changes so each page opens at the top.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
