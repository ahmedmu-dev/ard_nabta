"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string, behavior: ScrollBehavior = "auto") {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

/**
 * On route change: jump to #hash when present, otherwise reset to top.
 * Also handles hash-only navigation that Next soft-routing often skips.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Allow the destination page to paint before scrolling to the anchor.
      const timer = window.setTimeout(() => {
        if (!scrollToHash(hash, "auto")) {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      }, 40);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    function onHashChange() {
      scrollToHash(window.location.hash, "smooth");
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
