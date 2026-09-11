interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  onDark?: boolean;
  id?: string;
}

/**
 * Structural section title: mono eyebrow + condensed display heading.
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
        <p className={`meta-label mb-4 ${onDark ? "text-accent" : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-3xl font-semibold uppercase tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.05] ${
          onDark ? "text-white" : "text-heading"
        }`}
      >
        {heading}
      </h2>
      {subtext ? (
        <p
          className={`mt-5 max-w-[58ch] text-base leading-relaxed ${
            onDark ? "text-white/75" : "text-body"
          }`}
        >
          {subtext}
        </p>
      ) : null}
    </div>
  );
}
