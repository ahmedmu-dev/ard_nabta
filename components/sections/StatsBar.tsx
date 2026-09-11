const STATS = [
  { value: "03+", label: "Years Operating" },
  { value: "03+", label: "Villas Delivered" },
  { value: "HATTA", label: "Primary Site Area" },
  { value: "1151140", label: "DM Contractor License" },
];

/**
 * Blueprint-style stat strip under the hero.
 */
export default function StatsBar() {
  return (
    <div className="border-t border-white/10 bg-primary">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={`border-white/10 px-6 py-8 md:px-8 ${
              index % 2 === 1 ? "border-l" : ""
            } ${index >= 2 ? "border-t md:border-t-0" : ""} ${
              index > 0 ? "md:border-l" : ""
            }`}
          >
            <p className="font-heading text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/55">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
