import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { PRODUCTS } from "@/lib/data/products";
import { SERVICES } from "@/lib/data/services";
import { PROJECTS } from "@/lib/data/projects";
import { CONTACT, SITE_NAME } from "@/lib/constants";

const DARK_FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";
const FOOTER_LINK = `hover:text-accent ${DARK_FOCUS_RING}`;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-white/75">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
            Navigate
          </h3>
          <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-white">
            {SITE_NAME}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className={FOOTER_LINK}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={FOOTER_LINK}>
                About
              </Link>
            </li>
            <li>
              <Link href="#news" className={FOOTER_LINK}>
                News
              </Link>
            </li>
            <li>
              <Link href="#contact" className={FOOTER_LINK}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
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
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
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
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
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
            <span>© 2026 {SITE_NAME}</span>
            <span className="flex items-center gap-1">
              <Phone size={12} aria-hidden="true" /> {CONTACT.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} aria-hidden="true" /> {CONTACT.emailInfo}
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/45">
            <span>Privacy</span>
            <span>Terms</span>
            <Link href="/sitemap.xml" className={FOOTER_LINK}>
              Sitemap
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
