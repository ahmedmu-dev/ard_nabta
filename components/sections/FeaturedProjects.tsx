import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import { PROJECTS } from "@/lib/data/projects";

/**
 * Section wrapper for the featured project preview grid.
 * Fictional placeholder projects — see lib/data/projects.ts.
 */
export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-surface py-16 md:py-24"
    >
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow="Proof of Work"
          heading="Featured Projects"
          subtext="A sample of the infrastructure, industrial, and commercial work our teams have delivered."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
