import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import MediaFrame from "@/components/motion/MediaFrame";
import { SAMPLE_PROJECTS } from "@/lib/data/samples";

export default function SampleProjectsBoard() {
  return (
    <div>
      {SAMPLE_PROJECTS.map((project, index) => {
        const invert = index % 2 === 1;
        const lead = project.images[0];
        const rest = project.images.slice(1);

        return (
          <section
            key={project.slug}
            id={project.slug}
            aria-labelledby={`${project.slug}-heading`}
            className={`border-b-2 border-ink ${
              invert ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            <Reveal className="site-pad border-b-2 border-ink py-10 md:py-14">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="meta text-accent">
                    {String(index + 1).padStart(2, "0")} / {project.sector} ·{" "}
                    {project.year}
                  </p>
                  <h2
                    id={`${project.slug}-heading`}
                    className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl"
                  >
                    {project.name}
                  </h2>
                  <p className="meta mt-3 opacity-70">{project.location}</p>
                </div>
                <p
                  className={`max-w-[42ch] text-sm leading-relaxed md:text-right ${
                    invert ? "text-paper/75" : "text-muted"
                  }`}
                >
                  {project.oneLiner}
                </p>
              </div>
            </Reveal>

            {lead ? (
              <Reveal>
                <MediaFrame className="relative aspect-[16/10] w-full border-b-2 border-ink md:aspect-[21/9]">
                  <Image
                    src={lead.src}
                    alt={lead.alt}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                  />
                </MediaFrame>
              </Reveal>
            ) : null}

            {rest.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((image, imageIndex) => (
                  <li
                    key={image.src}
                    className="border-b-2 border-ink sm:border-r-2"
                  >
                    <Reveal
                      delay={Math.min(imageIndex * 40, 160)}
                      className="relative block aspect-[4/3] w-full"
                    >
                      <MediaFrame className="absolute inset-0 h-full w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </MediaFrame>
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="site-pad py-4">
              <p className="meta opacity-60">
                {String(project.images.length).padStart(2, "0")} photos
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
