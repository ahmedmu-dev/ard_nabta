import nodemailer from "nodemailer";
import { CONTACT } from "@/lib/constants";

export type OutboundMail = {
  subject: string;
  replyTo: string;
  /** Plain-text body shown in the inbox. */
  text: string;
  /** Optional HTML body. */
  html?: string;
  /** Optional CV / attachment. */
  attachment?: {
    filename: string;
    bytes: Uint8Array;
    mimeType: string;
  };
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(
      `Email is not configured (${name} missing). Add MXroute SMTP settings in Vercel.`
    );
  }
  return value;
}

function createTransport() {
  const host =
    process.env.SMTP_HOST?.trim() || "wednesday.mxrouting.net";
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER?.trim() || CONTACT.emailInfo;
  const pass = requireEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/**
 * Deliver form mail to info@ via the site's MXroute mailbox (SMTP).
 * Requires SMTP_PASS (and optionally SMTP_HOST / SMTP_USER / SMTP_PORT)
 * in the deployment environment.
 */
export async function sendToInfoInbox(
  mail: OutboundMail
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const transporter = createTransport();
    const fromUser = process.env.SMTP_USER?.trim() || CONTACT.emailInfo;

    await transporter.sendMail({
      from: `"Ard Nabta Website" <${fromUser}>`,
      to: CONTACT.emailInfo,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: mail.attachment
        ? [
            {
              filename: mail.attachment.filename,
              content: Buffer.from(mail.attachment.bytes),
              contentType: mail.attachment.mimeType,
            },
          ]
        : undefined,
    });

    return { ok: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Could not send email.";

    // Avoid leaking SMTP internals to the browser.
    if (message.includes("SMTP_PASS") || message.includes("not configured")) {
      return {
        ok: false,
        error:
          "Email delivery is not configured yet. Please email info@ardnabta.com directly.",
      };
    }

    console.error("[email] send failed:", message);
    return {
      ok: false,
      error:
        "Could not deliver the message. Try again or email info@ardnabta.com directly.",
    };
  }
}

export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function fieldsToText(fields: Record<string, string>): string {
  return Object.entries(fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}
