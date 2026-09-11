import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/data/services";

/**
 * Section wrapper for the 3 service cards (plan.md Section 4.8).
 */
export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="What We Do"
          heading="Our Services"
          align="center"
          subtext="Three service pillars covering a project from first sketch to final handover."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
