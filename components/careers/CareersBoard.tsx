"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import Reveal from "@/components/motion/Reveal";
import { JOBS } from "@/lib/data/jobs";
import type { Job } from "@/lib/types";

function JobCard({
  job,
  index,
  selected,
  onApply,
}: {
  job: Job;
  index: number;
  selected: boolean;
  onApply: () => void;
}) {
  return (
    <Reveal delay={index * 45}>
      <article
        id={job.slug}
        className={`border-b-2 border-ink last:border-b-0 ${
          selected ? "bg-ink text-paper" : "bg-paper text-ink"
        }`}
      >
        <div className="site-pad grid grid-cols-1 gap-6 py-10 lg:grid-cols-[6rem_1fr_auto] lg:gap-10">
          <p className="font-display text-4xl text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div>
            <p className="meta text-accent">
              {job.department} · {job.type} · {job.location}
            </p>
            <h2 className="mt-3 font-display text-2xl uppercase tracking-tight md:text-3xl">
              {job.title}
            </h2>
            <p
              className={`mt-4 max-w-[54ch] text-base leading-relaxed ${
                selected ? "text-paper/75" : "text-muted"
              }`}
            >
              {job.summary}
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className={`meta ${selected ? "text-paper/50" : "text-ink"}`}>
                  Responsibilities
                </p>
                <ul
                  className={`mt-3 space-y-2 text-sm ${
                    selected ? "text-paper/80" : "text-muted"
                  }`}
                >
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent" aria-hidden="true">
                        /
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`meta ${selected ? "text-paper/50" : "text-ink"}`}>
                  Requirements
                </p>
                <ul
                  className={`mt-3 space-y-2 text-sm ${
                    selected ? "text-paper/80" : "text-muted"
                  }`}
                >
                  {job.requirements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent" aria-hidden="true">
                        /
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex lg:items-start">
            <Button
              type="button"
              variant={selected ? "accent" : "ink"}
              onClick={onApply}
              className="w-full lg:w-auto"
            >
              Apply for role
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function CareersBoard() {
  const [selectedSlug, setSelectedSlug] = useState(JOBS[0]?.slug ?? "");

  function applyFor(slug: string) {
    setSelectedSlug(slug);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section
        aria-labelledby="open-roles-heading"
        className="border-b-2 border-ink"
      >
        <div className="site-pad border-b-2 border-ink py-12 md:py-16">
          <Reveal>
            <p className="meta text-accent">Open roles · {JOBS.length}</p>
            <h2 id="open-roles-heading" className="display-lg mt-3 text-ink">
              Positions
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted">
              Site and office roles supporting villa construction across Hatta
              and Dubai. Choose a role, then submit the application form.
            </p>
          </Reveal>
        </div>

        {JOBS.map((job, index) => (
          <JobCard
            key={job.slug}
            job={job}
            index={index}
            selected={selectedSlug === job.slug}
            onApply={() => applyFor(job.slug)}
          />
        ))}
      </section>

      <section
        aria-labelledby="apply-heading"
        className="border-b-2 border-ink bg-paper"
      >
        <div className="site-pad grid grid-cols-1 gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14">
          <Reveal from="left">
            <p className="meta text-accent">Application</p>
            <h2 id="apply-heading" className="display-lg mt-3 text-ink">
              Apply now
            </h2>
            <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted">
              Tell us which role fits, your experience, and a short note on
              relevant villa or site work. We only follow up when there is a
              match.
            </p>
            <ul className="mt-8 space-y-2 border-t-2 border-ink pt-6 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden="true">
                  /
                </span>
                <span>UAE experience preferred for site roles</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden="true">
                  /
                </span>
                <span>Include a reachable UAE phone number</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden="true">
                  /
                </span>
                <span>No CV upload in v1 — paste highlights in the note</span>
              </li>
            </ul>
          </Reveal>
          <Reveal from="right" delay={80}>
            <JobApplicationForm initialJobSlug={selectedSlug} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
