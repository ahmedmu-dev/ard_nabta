import Reveal from "@/components/motion/Reveal";
import { BUILD_TYPES, SITE_COMMITMENTS } from "@/lib/data/home";

export default function SiteCommitments() {
  return (
    <section
      id="commitments"
      aria-labelledby="commitments-heading"
      className="border-b-2 border-ink bg-paper"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
        <Reveal
          from="left"
          className="site-pad border-b-2 border-ink py-12 md:py-16 lg:border-b-0 lg:border-r-2 lg:pr-12"
        >
          <h2 id="commitments-heading" className="display-lg text-ink">
            On every
            <br />
            plot
          </h2>
          <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-muted">
            What villa owners can expect when Ard Nabta runs the site, drawn
            from the same Hatta deliveries shown in our project samples.
          </p>

          <ul className="mt-10 space-y-0 border-t-2 border-ink">
            {BUILD_TYPES.map((item) => (
              <li
                key={item.label}
                className="border-b-2 border-ink py-4 last:border-b-0"
              >
                <p className="font-display text-lg uppercase tracking-tight text-ink">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="bg-ink text-paper">
          <ol>
            {SITE_COMMITMENTS.map((item, index) => (
              <li
                key={item.title}
                className="border-b-2 border-paper/15 last:border-b-0"
              >
                <Reveal delay={index * 50} className="site-pad py-8 lg:px-12">
                  <p className="meta text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-tight text-paper md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-paper/75 md:text-base">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
