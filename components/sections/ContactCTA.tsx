import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { CONTACT } from "@/lib/constants";

/**
 * Final CTA before the footer: contact form (UI only, see ContactForm.tsx)
 * plus direct contact info (plan.md Section 4.10).
 */
export default function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Get In Touch"
          heading="Request a Quote"
          subtext="Tell us about your project and a member of our team will follow up."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_minmax(0,360px)]">
          <ContactForm />
          <div className="rounded-lg bg-primary p-8 text-white/90">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Direct Contact
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <a href={CONTACT.phoneHref} className="hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${CONTACT.emailSales}`} className="hover:text-accent">
                  {CONTACT.emailSales}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
