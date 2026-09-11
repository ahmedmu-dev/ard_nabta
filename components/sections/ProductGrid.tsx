import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import MediaFrame from "@/components/motion/MediaFrame";
import { PRODUCTS } from "@/lib/data/products";

export default function ProductGrid() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="border-b-2 border-ink bg-paper"
    >
      <Reveal className="site-pad py-12 md:py-16">
        <p className="meta text-accent">02 - Scope</p>
        <h2 id="products-heading" className="display-lg mt-3 text-ink">
          What we construct
        </h2>
        <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted">
          Four build packages covering new villas, annexes, finishing, and
          external works, delivered under one Dubai Municipality license.
        </p>
      </Reveal>

      <div className="border-t-2 border-ink">
        {PRODUCTS.map((product, index) => (
          <Reveal key={product.slug} delay={index * 50}>
            <article className="grid grid-cols-1 border-b-2 border-ink last:border-b-0 md:grid-cols-[5.5rem_1fr_minmax(0,20rem)] lg:grid-cols-[6rem_1fr_minmax(0,24rem)]">
              <div className="site-pad flex items-start py-8 md:border-r-2 md:border-ink md:px-6 lg:px-8">
                <span className="font-display text-4xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="site-pad py-8 md:px-8">
                <h3 className="font-display text-2xl uppercase tracking-tight text-ink md:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-muted">
                  {product.description}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {product.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 border-t border-ink/10 pt-2 text-sm text-muted"
                    >
                      <span className="text-accent" aria-hidden="true">
                        /
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <MediaFrame className="relative min-h-[14rem] border-t-2 border-ink md:border-l-2 md:border-t-0">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 24rem, 100vw"
                />
              </MediaFrame>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
