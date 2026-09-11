import Reveal from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b-2 border-ink bg-accent"
    >
      <Reveal className="site-pad py-12 md:py-16">
        <p className="meta text-ink/70">03 - Process</p>
        <h2 id="services-heading" className="display-lg mt-3 text-ink">
          How we deliver
        </h2>
        <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-ink/80">
          Three stages, one contractor. From drawings and permits to completion
          certificate and keys.
        </p>
      </Reveal>
      <ol className="border-t-2 border-ink">
        {SERVICES.map((service, index) => (
          <li
            key={service.slug}
            className="group border-b-2 border-ink last:border-b-0 transition-colors duration-150 hover:bg-ink hover:text-paper"
          >
            <Reveal delay={index * 60}>
              <div className="site-pad grid grid-cols-1 py-9 md:grid-cols-[7.5rem_1.2fr_1fr] md:gap-8">
                <p className="font-display text-6xl leading-none text-ink transition-colors duration-150 group-hover:text-accent md:text-7xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-ink transition-colors duration-150 group-hover:text-paper md:text-3xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-[48ch] text-base leading-relaxed text-ink/80 transition-colors duration-150 group-hover:text-paper/75">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-4 grid gap-2 border-t-2 border-ink/20 pt-4 transition-colors duration-150 group-hover:border-paper/25 md:mt-0 md:border-t-0 md:border-l-2 md:pl-8 md:pt-0">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-ink/85 transition-colors duration-150 group-hover:text-paper/85"
                    >
                      <span aria-hidden="true">/</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
