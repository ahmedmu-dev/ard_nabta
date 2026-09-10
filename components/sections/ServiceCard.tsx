import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

/**
 * Single service icon/title/description card.
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="rounded-lg border border-surface bg-white p-8 shadow-sm transition-all duration-150 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent-contrast">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-medium text-heading">{service.name}</h3>
      <p className="mt-2 text-sm text-body">{service.description}</p>
    </article>
  );
}
