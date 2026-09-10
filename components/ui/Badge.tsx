import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small pill used for sector tags, certifications, and "New" labels.
 */
export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-surface px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wide text-primary ${className}`}
    >
      {children}
    </span>
  );
}
