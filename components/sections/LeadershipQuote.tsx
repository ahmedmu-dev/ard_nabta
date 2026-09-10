import Image from "next/image";
import Container from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";

/**
 * Portrait + quote + name/title block. Fictional placeholder name/quote per
 * plan.md Section 4.6 — replace with a real leadership photo/bio before launch.
 */
export default function LeadershipQuote() {
  return (
    <section aria-labelledby="leadership-heading" className="bg-white py-16 md:py-24">
      <Container>
        <h2 id="leadership-heading" className="sr-only">
          Leadership Message
        </h2>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg lg:mx-0">
            <Image
              src="/images/leadership/ceo-portrait.svg"
              alt="Portrait of Amir Farouk, Chief Executive Officer of Ferrum Steel"
              fill
              sizes="(min-width: 1024px) 320px, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <blockquote className="text-xl italic leading-relaxed text-heading sm:text-2xl">
              &ldquo;Every project that carries the {SITE_NAME} name reflects
              the same standard we set on day one: engineering integrity,
              on-time delivery, and steel you can trust for decades. That
              commitment is what&apos;s taken us from a single fabrication
              yard to a regional name in structural steel.&rdquo;
            </blockquote>
            <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-primary">
              Amir Farouk, Chief Executive Officer
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
