import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-surface">
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-rule">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 md:p-8">
        <Badge>{project.sector}</Badge>
        <h3 className="mt-4 font-heading text-xl font-semibold uppercase tracking-wide text-heading">
          {project.name}
        </h3>
        <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-body">
          {project.oneLiner}
        </p>
      </div>
    </article>
  );
}
