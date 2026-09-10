const STATS = [
  { value: "[XX]+", label: "Years in Operation" },
  { value: "[XXX]+", label: "Projects Delivered" },
  { value: "[X]", label: "Countries Served" },
  { value: "ISO [XXXX]", label: "Certified" },
];

/**
 * Optional stat strip beneath the hero. Values are placeholders per
 * plan.md Section 4.3 — swap for real, verifiable figures before launch.
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
