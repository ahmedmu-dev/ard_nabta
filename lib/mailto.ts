import { CONTACT } from "@/lib/constants";

/** Build a mailto URL that always targets the site info inbox. */
export function buildMailto({
  subject,
  body,
  to = CONTACT.emailInfo,
}: {
  subject: string;
  body: string;
  to?: string;
}): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Open the user's mail client to the info inbox with a prefilled message. */
export function openInfoMail(subject: string, body: string): void {
  window.location.href = buildMailto({ subject, body });
}
