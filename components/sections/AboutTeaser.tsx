import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import MediaFrame from "@/components/motion/MediaFrame";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SITE_NAME } from "@/lib/constants";

const FACTS = [
  {
    label: "License",
    value: "1151140",
    note: "Dubai Municipality contractor",
  },
  {
    label: "Focus",
    value: "Villas",
    note: "New builds, annexes, extensions",
  },
  {
    label: "Area",
    value: "Hatta",
    note: "Dubai mountain corridor sites",
  },
  {
    label: "Model",
    value: "One team",
    note: "Permit → structure → keys",
  },
];

export default function AboutTeaser() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b-2 border-ink bg-paper"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal
          from="left"
          className="relative min-h-[22rem] border-b-2 border-ink lg:min-h-[34rem] lg:border-b-0 lg:border-r-2"
        >
          <MediaFrame className="absolute inset-0 h-full w-full">
            <Image
              src="/images/about/about-villa-hatta.png"
              alt="Completed villa exterior with stone cladding"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </MediaFrame>
        </Reveal>
        <Reveal
          from="right"
          delay={100}
          className="site-pad flex flex-col justify-center py-12 lg:px-12 lg:py-16"
        >
          <p className="meta text-accent">04 - Contractor</p>
          <h2 id="about-heading" className="display-lg mt-3 text-ink">
            One license.
            <br />
            One site team.
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted">
            {SITE_NAME} L.L.C. is a Dubai Municipality-licensed building
            contractor. We deliver private villas, majlis annexes, and
            extensions with a single accountable team on site: drawings and
            permits, structure, fit-out, external works, completion
            certification, then keys.
          </p>
          <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted">
            Work to date is concentrated in Hatta, including projects tied to
            Dubai Municipality completion and modification permits. Owner names
            stay private; the build record does not.
          </p>
          <Stagger
            className="mt-8 grid grid-cols-2 gap-px border-2 border-ink bg-ink"
            stagger={0.08}
          >
            {FACTS.map((fact) => (
              <StaggerItem key={fact.label} className="bg-paper p-4">
                <p className="meta text-accent">{fact.label}</p>
                <p className="mt-2 font-display text-xl uppercase tracking-tight text-ink">
                  {fact.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{fact.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8">
            <Button href="#contact" variant="ink">
              Talk to the Site Office
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
