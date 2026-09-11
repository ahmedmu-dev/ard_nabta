"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

type Variant = "accent" | "ink" | "ghost" | "ghost-on-ink";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

/** React DOM drag/animation handlers collide with Motion’s pan handlers. */
type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "className"
  | "children"
  | "onClick"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
>;

type ButtonProps =
  | (BaseProps & { href: string })
  | (BaseProps & NativeButtonProps & { href?: undefined });

const BASE =
  "inline-flex items-center justify-center rounded-none px-6 py-3.5 font-body text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const VARIANT: Record<Variant, string> = {
  accent:
    "bg-accent text-ink hover:bg-ink hover:text-paper focus-visible:ring-offset-paper",
  ink: "bg-ink text-paper hover:bg-accent hover:text-ink focus-visible:ring-offset-paper",
  ghost:
    "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-paper focus-visible:ring-offset-paper",
  "ghost-on-ink":
    "border-2 border-paper bg-transparent text-paper hover:bg-paper hover:text-ink focus-visible:ring-offset-ink",
};

const MotionLink = motion.create(Link);
const MotionButton = motion.create("button");

export default function Button({
  children,
  variant = "accent",
  className = "",
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const reduce = useReducedMotion();
  const classes = `${BASE} ${VARIANT[variant]} ${className}`;
  const tap = reduce ? undefined : { scale: 0.98 };
  const transition = { duration: 0.12, ease: "easeOut" as const };

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        onClick={onClick}
        whileTap={tap}
        transition={transition}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type="button"
      className={classes}
      onClick={onClick}
      whileTap={tap}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionButton>
  );
}
