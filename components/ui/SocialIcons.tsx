import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Minimal social-platform glyphs in lucide's stroke-icon style.
 *
 * lucide-react dropped brand/trademark icons (Facebook, Instagram, Linkedin,
 * Youtube) from its export list — these small local replacements avoid
 * pulling in a whole extra icon-font/brand-icon package for four glyphs.
 */
const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LinkedinIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.2c0-1.5 1-2.6 2.5-2.6s2.5 1.1 2.5 2.6V17" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M14 21v-7h2.2l.3-2.6H14V9.7c0-.9.3-1.5 1.6-1.5H16.6V5.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.7H8.5V15h2.2v6" />
    </svg>
  );
}

export function YoutubeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...baseProps} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
