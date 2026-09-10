import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

/**
 * Single project thumbnail/name/sector/one-liner card.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-surface bg-white shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Badge>{project.sector}</Badge>
        <h3 className="mt-3 text-lg font-medium text-heading">{project.name}</h3>
        <p className="mt-2 text-sm text-body">{project.oneLiner}</p>
      </div>
    </article>
  );
}
