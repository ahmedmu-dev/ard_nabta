import Image from "next/image";
import Button from "@/components/ui/Button";
import StatsBar from "@/components/sections/StatsBar";
import { SITE_NAME } from "@/lib/constants";

/**
 * Hero: eyebrow + H1 (the page's only h1) + copy + dual CTA over a full-width
 * background image, plus the optional stats strip below.
 */
export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative">
      <div className="relative flex min-h-[32rem] items-center overflow-hidden sm:min-h-[36rem] lg:min-h-[42rem]">
        <Image
          src="/images/hero/hero-villa-hatta.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              Villa Construction &amp; Building Contracting
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
              From Foundation to Handover, Villas Built Right
            </h1>
            <p className="mt-6 text-base text-white/85 sm:text-lg">
              {SITE_NAME} builds and hands over private villas, majlis
              annexes, and building extensions across Dubai, licensed by
              Dubai Municipality (Contractor License No. 1151140). Our team
              manages every stage on site — from permitting through
              structure, fit-out, and final handover.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" variant="primary">
                Get a Quote
              </Button>
              <Button href="#projects" variant="secondary-on-dark">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
      <StatsBar />
    </section>
  );
}
