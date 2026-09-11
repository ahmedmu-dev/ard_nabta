"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import SiteImage from "@/components/ui/SiteImage";
import { SAMPLE_PROJECTS } from "@/lib/data/samples";

const PREVIEW_COUNT = 3;

export default function SampleProjectsBoard() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <div>
      {SAMPLE_PROJECTS.map((project, index) => {
        const invert = index % 2 === 1;
        const lead = project.images[0];
        const rest = project.images.slice(1);
        const isOpen = expanded[project.slug] ?? false;
        const visibleRest = isOpen ? rest : rest.slice(0, PREVIEW_COUNT);
        const hiddenCount = Math.max(0, rest.length - PREVIEW_COUNT);

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
              <div className="flex flex-col gap-4">
                <p className="meta text-accent">
                  {String(index + 1).padStart(2, "0")} / {project.sector} ·{" "}
                  {project.year}
                </p>
                <h2
                  id={`${project.slug}-heading`}
                  className="font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl"
                >
                  {project.name}
                </h2>
                <p className="meta opacity-70">{project.location}</p>
                <p
                  className={`max-w-[54ch] text-sm leading-relaxed md:text-base ${
                    invert ? "text-paper/75" : "text-muted"
                  }`}
                >
                  {project.oneLiner}
                </p>
              </div>
            </Reveal>

            {lead ? (
              <Reveal>
                <SiteImage
                  src={lead.src}
                  alt={lead.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  quality={80}
                  className="object-cover"
                  frameClassName="relative aspect-[16/10] w-full border-b-2 border-ink md:aspect-[21/9]"
                />
              </Reveal>
            ) : null}

            {visibleRest.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {visibleRest.map((image, imageIndex) => (
                  <li
                    key={image.src}
                    className="border-b-2 border-ink sm:border-r-2"
                  >
                    <Reveal
                      delay={Math.min(imageIndex * 40, 160)}
                      className="relative block aspect-[4/3] w-full"
                    >
                      <SiteImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        frameClassName="absolute inset-0 h-full w-full"
                      />
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="site-pad flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="meta opacity-60">
                {String(project.images.length).padStart(2, "0")} photos
                {!isOpen && hiddenCount > 0
                  ? ` · ${String(hiddenCount).padStart(2, "0")} more`
                  : ""}
              </p>
              {hiddenCount > 0 ? (
                <button
                  type="button"
                  className={`meta w-fit border-2 px-4 py-2 transition-colors duration-150 ${
                    invert
                      ? "border-paper text-paper hover:bg-paper hover:text-ink"
                      : "border-ink text-ink hover:bg-ink hover:text-paper"
                  }`}
                  aria-expanded={isOpen}
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [project.slug]: !isOpen,
                    }))
                  }
                >
                  {isOpen
                    ? "Show fewer photos"
                    : `Load ${String(hiddenCount).padStart(2, "0")} more`}
                </button>
              ) : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
