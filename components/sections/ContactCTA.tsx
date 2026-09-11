import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { CONTACT } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ink text-paper"
    >
      <div className="site-pad grid grid-cols-1 lg:grid-cols-2">
        <Reveal
          from="left"
          className="border-b-2 border-paper/20 py-12 md:py-16 lg:border-b-0 lg:border-r-2 lg:pr-12"
        >
          <p className="meta text-accent">Start</p>
          <h2 id="contact-heading" className="display-lg mt-3 text-paper">
            Request a quote
          </h2>
          <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-paper/75">
            Send the plot location, build type (new villa, majlis annex,
            extension, or fit-out), target programme, and any drawings you
            already have. We reply with next steps and a site discussion.
          </p>
          <ul className="mt-8 space-y-3 border-t-2 border-paper/20 pt-8 text-sm">
            <li className="flex flex-col gap-1">
              <span className="meta text-paper/45">Phone</span>
              <a
                href={CONTACT.phoneHref}
                className="font-display text-xl uppercase tracking-tight text-paper hover:text-accent"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="meta text-paper/45">Email</span>
              <a
                href={`mailto:${CONTACT.emailSales}`}
                className="text-paper hover:text-accent"
              >
                {CONTACT.emailSales}
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="meta text-paper/45">Base</span>
              <span>{CONTACT.address}</span>
            </li>
            <li className="meta pt-2 text-accent">
              Dubai Municipality · License 1151140
            </li>
          </ul>
        </Reveal>
        <Reveal from="right" delay={100} className="py-12 md:py-16 lg:pl-12">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
