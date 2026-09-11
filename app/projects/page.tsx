import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SampleProjectsBoard from "@/components/projects/SampleProjectsBoard";
import { SITE_NAME } from "@/lib/constants";
import { SAMPLE_PROJECTS } from "@/lib/data/samples";

export const metadata: Metadata = {
  title: "Project Samples",
  description: `Site photography from ${SITE_NAME} villa builds, modifications, and annexes across Hatta and Dubai.`,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-ink text-paper">
        <div className="site-pad py-16 md:py-24">
          <p className="meta text-accent">Site Record</p>
          <h1 className="display-xl mt-4 text-paper">
            Project
            <br />
            samples
          </h1>
          <p className="mt-6 max-w-[40rem] text-base leading-relaxed text-paper/75 md:text-lg">
            Real photography from delivered and active Hatta plots, labelled by
            area to protect private owners. Four sample sets from current villa,
            modification, and annex work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`#${SAMPLE_PROJECTS[0]?.slug ?? ""}`} variant="accent">
              View galleries
            </Button>
            <Button href="/#contact" variant="ghost-on-ink">
              Request a quote
            </Button>
          </div>
        </div>
      </section>

      <nav
        aria-label="Sample sets"
        className="border-b-2 border-ink bg-paper"
      >
        <ul className="site-pad flex flex-wrap gap-x-6 gap-y-3 py-5">
          {SAMPLE_PROJECTS.map((project, index) => (
            <li key={project.slug}>
              <a
                href={`#${project.slug}`}
                className="meta text-ink transition-colors hover:text-accent"
              >
                {String(index + 1).padStart(2, "0")} - {project.sector}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SampleProjectsBoard />
    </>
  );
}
