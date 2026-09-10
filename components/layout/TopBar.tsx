import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

// TopBar sits on a dark background — override the page's default dark
// focus ring with a white ring on a dark offset so it stays visible.
const DARK_FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, Icon: YoutubeIcon },
];

/**
 * Thin trust-signal strip above the main header. Contact info hides on
 * mobile to save vertical space; social icons remain visible at all sizes.
 */
export default function TopBar() {
  return (
    <div className="bg-primary text-white/80">
      <Container className="flex h-10 items-center justify-between text-sm">
        <div className="hidden items-center gap-6 sm:flex">
          <a
            href={CONTACT.phoneHref}
            className={`flex items-center gap-2 hover:text-accent ${DARK_FOCUS_RING}`}
          >
            <Phone size={14} aria-hidden="true" />
            <span>{CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.emailInfo}`}
            className={`flex items-center gap-2 hover:text-accent ${DARK_FOCUS_RING}`}
          >
            <Mail size={14} aria-hidden="true" />
            <span>{CONTACT.emailInfo}</span>
          </a>
        </div>
        <ul className="flex items-center gap-4 sm:ml-auto">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex items-center hover:text-accent ${DARK_FOCUS_RING}`}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
