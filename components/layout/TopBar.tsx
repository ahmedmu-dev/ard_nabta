import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

const DARK_FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

/**
 * Thin trust strip: phone / email + location meta.
 */
export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-primary text-white/75">
      <Container className="flex h-10 items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-6">
          <a
            href={CONTACT.phoneHref}
            className={`flex items-center gap-2 hover:text-accent ${DARK_FOCUS_RING}`}
          >
            <Phone size={14} aria-hidden="true" />
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.emailInfo}`}
            className={`hidden items-center gap-2 hover:text-accent sm:flex ${DARK_FOCUS_RING}`}
          >
            <Mail size={14} aria-hidden="true" />
            <span>{CONTACT.emailInfo}</span>
          </a>
        </div>
        <p className="hidden font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/45 md:block">
          Hatta · Dubai
        </p>
      </Container>
    </div>
  );
}
