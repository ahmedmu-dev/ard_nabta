import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/constants";

/**
 * v1 substitute for the full /about route (plan.md Section 4.7): short
 * positioning statement + supporting image, with a "Learn More" CTA that
 * currently re-anchors to Contact until a real /about route ships in v2.
 */
export default function AboutTeaser() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-surface py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-lg lg:order-1">
            <Image
              src="/images/about/about-villa-hatta.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              id="about-heading"
              eyebrow="About Us"
              heading={`Who ${SITE_NAME} Is`}
            />
            <p className="mt-6 text-base text-body">
              {SITE_NAME} is a Dubai Municipality-licensed building contractor
              (License No. 1151140) delivering private villas, majlis
              annexes, and building extensions across Dubai. We manage every
              stage on site — from permitting through structure, fit-out, and
              final handover — so clients deal with one team from first
              brick to keys in hand.
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
