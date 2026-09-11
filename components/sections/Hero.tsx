import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import MediaFrame from "@/components/motion/MediaFrame";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="border-b-2 border-ink bg-ink text-paper"
    >
      <div className="site-pad grid min-h-[100dvh] grid-cols-1 items-end gap-8 pb-10 pt-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-0 lg:pb-0 lg:pt-0">
        <Reveal
          from="left"
          className="flex flex-col justify-end py-6 lg:border-r-2 lg:border-paper/20 lg:py-14 lg:pr-10"
        >
          <p className="meta text-accent">Hatta · Dubai · License 1151140</p>
          <h1 className="display-xl mt-5 text-paper">
            Build it
            <br />
            <span className="text-accent">right.</span>
          </h1>
          <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-paper/80 md:text-lg">
            Ard Nabta Building Contracting is a Dubai Municipality-licensed
            contractor for private villas, majlis annexes, and extensions across
            Hatta and Dubai. Permitting, structure, fit-out, and handover stay
            with one site team from first brick to keys.
          </p>
          <Stagger
            className="mt-6 grid max-w-[36rem] grid-cols-1 gap-2 border-t-2 border-paper/20 pt-6 text-sm text-paper/75 sm:grid-cols-2"
            stagger={0.07}
            delay={0.15}
          >
            {[
              "DM Contractor License 1151140",
              "Villa new-builds & extensions",
              "Majlis / annex construction",
              "Fit-out through completion cert",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">
                    /
                  </span>
                  <span>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="accent">
              Request a Quote
            </Button>
            <Button href="/projects" variant="ghost-on-ink">
              See Built Work
            </Button>
          </div>
        </Reveal>

        <Reveal
          from="right"
          delay={120}
          className="relative min-h-[20rem] border-2 border-paper/20 lg:min-h-full lg:border-0"
        >
          <MediaFrame className="absolute inset-0 h-full w-full">
            <Image
              src="/images/hero/hero-villa-hatta.png"
              alt="Completed villa exterior in a Hatta-style mountain setting"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </MediaFrame>
          <div className="absolute bottom-0 left-0 right-0 z-[1] border-t-2 border-paper/30 bg-ink/85 p-4 meta text-paper/85">
            Private villa · Hatta corridor · Site photo
          </div>
        </Reveal>
      </div>
    </section>
  );
}
