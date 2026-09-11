import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import MediaFrame from "@/components/motion/MediaFrame";
import { PROJECTS } from "@/lib/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-paper">
      <Reveal className="site-pad border-b-2 border-ink py-12 md:py-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="meta text-accent">01 - Site Record</p>
            <h2 id="projects-heading" className="display-lg mt-3 text-ink">
              Built work
            </h2>
          </div>
          <div className="flex max-w-[40ch] flex-col gap-4 md:items-end md:text-right">
            <p className="text-sm leading-relaxed text-muted">
              Hatta deliveries under Dubai Municipality permits and completion
              certificates, labelled by area to protect private owners.
            </p>
            <Button href="/projects" variant="ghost" className="w-fit">
              View sample photos
            </Button>
          </div>
        </div>
      </Reveal>

      <ul>
        {PROJECTS.map((project, index) => {
          const invert = index % 2 === 1;
          return (
            <li
              key={project.slug}
              className={`border-b-2 border-ink ${
                invert ? "bg-ink text-paper" : "bg-paper text-ink"
              }`}
            >
              <Reveal delay={index * 40}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <MediaFrame
                    className={`relative min-h-[18rem] md:min-h-[24rem] ${
                      invert ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </MediaFrame>
                  <div
                    className={`site-pad flex flex-col justify-center py-10 md:py-12 lg:px-12 ${
                      invert
                        ? "lg:order-1 lg:border-r-2 lg:border-ink"
                        : "lg:border-l-2 lg:border-ink"
                    }`}
                  >
                    <p className="meta text-accent">
                      {String(index + 1).padStart(2, "0")} / {project.sector} ·{" "}
                      {project.year}
                    </p>
                    <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="meta mt-3 opacity-70">{project.location}</p>
                    <p
                      className={`mt-4 max-w-[44ch] text-base leading-relaxed ${
                        invert ? "text-paper/75" : "text-muted"
                      }`}
                    >
                      {project.oneLiner}
                    </p>
                    <ul
                      className={`mt-6 space-y-2 border-t-2 pt-5 text-sm ${
                        invert
                          ? "border-paper/20 text-paper/80"
                          : "border-ink/15 text-muted"
                      }`}
                    >
                      {project.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="text-accent" aria-hidden="true">
                            /
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
