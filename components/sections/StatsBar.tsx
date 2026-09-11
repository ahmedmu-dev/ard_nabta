const STATS = [
  { value: "3+", label: "Years in Operation" },
  { value: "3+", label: "Villas Delivered" },
  { value: "Hatta", label: "Dubai" },
  { value: "1151140", label: "DM Contractor License" },
];

/**
 * Optional stat strip beneath the hero. Figures are rough, derived from the
 * 3 Dubai Municipality completion certificates supplied (earliest permit:
 * 2023) — not precise, replace with real figures once the company confirms
 * them. See CONTENT_PERSONALIZATION_PLAN.md.
 */
export default function StatsBar() {
  return (
    <div className="border-t border-white/10 bg-primary">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 md:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-heading text-2xl font-bold text-accent sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
