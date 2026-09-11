import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Square industrial tag — sector labels, certifications.
 */
export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border border-primary/20 bg-background px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary ${className}`}
    >
      {children}
    </span>
  );
}
