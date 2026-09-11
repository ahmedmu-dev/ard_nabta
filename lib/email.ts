import { CONTACT } from "@/lib/constants";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.emailInfo}`;

export type OutboundMail = {
  subject: string;
  replyTo: string;
  fields: Record<string, string>;
  /** Optional CV / attachment. */
  attachment?: {
    filename: string;
    bytes: Uint8Array;
    mimeType: string;
  };
};

/**
 * Deliver form mail to the site info inbox via FormSubmit (no API key).
 * First live submission sends an activation link to info@ardnabta.com.
 * Confirm that once, then messages arrive in the inbox.
 */
export async function sendToInfoInbox(
  mail: OutboundMail
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    let response: Response;

    if (mail.attachment) {
      const form = new FormData();
      form.append("_subject", mail.subject);
      form.append("_template", "table");
      form.append("_captcha", "false");
      form.append("email", mail.replyTo);
      for (const [key, value] of Object.entries(mail.fields)) {
        form.append(key, value);
      }
      const blob = new Blob([Buffer.from(mail.attachment.bytes)], {
        type: mail.attachment.mimeType,
      });
      form.append("attachment", blob, mail.attachment.filename);

      response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
    } else {
      response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...mail.fields,
          _subject: mail.subject,
          _template: "table",
          _captcha: "false",
          email: mail.replyTo,
        }),
      });
    }

    const data = (await response.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
      error?: string;
    } | null;

    if (!response.ok) {
      return {
        ok: false,
        error:
          data?.message ||
          data?.error ||
          "Could not deliver the message. Try again or email info@ardnabta.com directly.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Could not reach the mail service. Try again or email info@ardnabta.com directly.",
    };
  }
}

export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}
