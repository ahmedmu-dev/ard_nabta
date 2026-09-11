import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

// TopBar sits on a dark background — override the page's default dark
// focus ring with a white ring on a dark offset so it stays visible.
const DARK_FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

/**
 * Thin trust-signal strip above the main header. Contact info hides on
 * mobile to save vertical space.
 *
 * Social icons removed — no accounts have been supplied yet. Re-add via
 * SOCIAL_LINKS in lib/constants.ts once real profiles exist.
 */
export default function TopBar() {
  return (
    <div className="bg-primary text-white/80">
      <Container className="flex h-10 items-center gap-6 text-sm">
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
      </Container>
    </div>
  );
}
