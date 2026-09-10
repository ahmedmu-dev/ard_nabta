import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "secondary-on-dark";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface NativeButtonProps
  extends BaseProps,
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "className" | "children" | "onClick"
    > {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading text-sm font-medium uppercase tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

// Ring color intentionally varies by variant rather than living in
// BASE_CLASSES: an amber ring on a white offset only hits ~2:1 contrast
// (fails the 3:1 minimum for visible focus indicators), so light-background
// variants use a dark ring instead, and the on-dark variant uses a white
// ring against a dark offset.
const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-accent text-primary hover:bg-accent-dark focus-visible:ring-primary focus-visible:ring-offset-white",
  secondary:
    "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:ring-primary focus-visible:ring-offset-white",
  "secondary-on-dark":
    "border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary focus-visible:ring-white focus-visible:ring-offset-primary",
};

/**
 * Shared primary/secondary button. Renders a Next.js Link when `href` is
 * provided (anchors in v1, real routes in v2), otherwise a native <button>.
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
