interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  onDark?: boolean;
  id?: string;
}

/**
 * Consistent eyebrow + heading + optional subtext pattern used across
 * homepage sections (plan.md Section 5).
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = "left",
  onDark = false,
  id,
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow ? (
        <p
          className={`mb-3 font-heading text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${
            onDark ? "text-accent" : "text-accent-contrast"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-2xl font-semibold sm:text-3xl md:text-4xl ${
          onDark ? "text-white" : "text-heading"
        }`}
      >
        {heading}
      </h2>
      {subtext ? (
        <p
          className={`mt-4 text-base ${onDark ? "text-white/80" : "text-body"}`}
        >
          {subtext}
        </p>
      ) : null}
    </div>
  );
}
