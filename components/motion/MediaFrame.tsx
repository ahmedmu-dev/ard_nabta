"use client";

import type { ReactNode } from "react";

interface MediaFrameProps {
  children: ReactNode;
  className?: string;
  /** Extra classes applied to the zooming inner layer via CSS variable pattern */
}

/**
 * Overflow-clipped media frame. Child `img` / next/image gets a sharp zoom on hover.
 * Hierarchy cue only — not card lift or parallax.
 */
export default function MediaFrame({
  children,
  className = "",
}: MediaFrameProps) {
  return (
    <div className={`media-frame ${className}`.trim()}>{children}</div>
  );
}
