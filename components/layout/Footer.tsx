import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { PRODUCTS } from "@/lib/data/products";
import { SERVICES } from "@/lib/data/services";
import { PROJECTS } from "@/lib/data/projects";
import { CONTACT, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, Icon: YoutubeIcon },
];

// Footer sits on a dark background — override the page's default dark focus
// ring with a white ring on a dark offset so it stays visible.
const DARK_FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";
const FOOTER_LINK = `hover:text-accent ${DARK_FOCUS_RING}`;

/**
 * Multi-column footer. v1 note: Products/Services/Projects sub-items all
 * anchor to their shared homepage section (no per-item routes exist yet) —
 * once v2 slug routes ship, swap each href for the real route.
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {SITE_NAME}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className={FOOTER_LINK}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={FOOTER_LINK}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#news" className={FOOTER_LINK}>
                News
              </Link>
            </li>
            <li>
              <Link href="#contact" className={FOOTER_LINK}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Products
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <Link href="#products" className={FOOTER_LINK}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href="#services" className={FOOTER_LINK}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Projects
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {PROJECTS.map((project) => (
              <li key={project.slug}>
                <Link href="#projects" className={FOOTER_LINK}>
                  {project.sector}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span>© 2026 {SITE_NAME}. All rights reserved.</span>
            <span className="flex items-center gap-1">
              <Phone size={12} aria-hidden="true" /> {CONTACT.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} aria-hidden="true" /> {CONTACT.emailInfo}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Privacy Policy</span>
            <span className="text-white/50">Terms & Conditions</span>
            <Link href="/sitemap.xml" className={FOOTER_LINK}>
              Sitemap
            </Link>
            <ul className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center ${FOOTER_LINK}`}
                  >
                    <Icon size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
