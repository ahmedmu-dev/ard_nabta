import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Max-width/padding wrapper for consistent horizontal rhythm across sections.
 * plan.md 6.3: max-w-7xl (1280px), px-6 mobile / px-8 desktop.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
