import Reveal from "@/components/motion/Reveal";
import { NEWS_ITEMS } from "@/lib/data/news";

export default function NewsList() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="border-b-2 border-ink bg-paper"
    >
      <Reveal className="site-pad py-12 md:py-16">
        <p className="meta text-accent">Field Notes</p>
        <h2 id="news-heading" className="display-lg mt-3 text-ink">
          News
        </h2>
        <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted">
          Milestone notes from Dubai Municipality completion and modification
          certificates for Hatta villa, annex, and extension work.
        </p>
      </Reveal>
      <ul className="border-t-2 border-ink">
        {NEWS_ITEMS.map((item, index) => (
          <li
            key={item.slug}
            className="border-b-2 border-ink last:border-b-0"
          >
            <Reveal delay={index * 50}>
              <div className="site-pad grid grid-cols-1 gap-3 py-8 md:grid-cols-[8rem_1fr] md:gap-10">
                <div>
                  <p className="meta text-accent">{item.date}</p>
                  <p className="meta mt-2 text-ink/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-ink md:text-2xl">
                    {item.headline}
                  </h3>
                  <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted md:text-base">
                    {item.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
