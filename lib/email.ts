import nodemailer from "nodemailer";
import { CONTACT, SITE_NAME } from "@/lib/constants";

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

export type AutoReplyKind = "quote" | "job";

export type AutoReply = {
  kind: AutoReplyKind;
  to: string;
  name: string;
  /** Job title when kind is "job". */
  roleTitle?: string;
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

function smtpIdentity() {
  const host =
    process.env.SMTP_HOST?.trim() || "wednesday.mxrouting.net";
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER?.trim() || CONTACT.emailInfo;
  const pass = requireEnv("SMTP_PASS");
  return { host, port, user, pass };
}

function createTransport() {
  const { host, port, user, pass } = smtpIdentity();
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

/** From header that shows as NO REPLY in the recipient's mail client. */
function noReplyFrom(): string {
  const address =
    process.env.SMTP_NOREPLY?.trim() ||
    process.env.SMTP_USER?.trim() ||
    CONTACT.emailInfo;
  return `"NO REPLY" <${address}>`;
}

function buildAutoReply(auto: AutoReply): { subject: string; text: string } {
  const firstName = auto.name.split(/\s+/)[0] || auto.name;

  if (auto.kind === "job") {
    const role = auto.roleTitle || "the role";
    return {
      subject: `We received your application - ${SITE_NAME}`,
      text: [
        `Hello ${firstName},`,
        "",
        `Thank you for applying for ${role} at ${SITE_NAME}.`,
        "",
        "We have received your application and CV. Our team reviews submissions carefully and will contact you if there is a match.",
        "",
        "This is an automated message from NO REPLY. Please do not reply to this email.",
        "",
        "If you need to reach us, use the contact form on ardnabta.com or call 052 507 9810.",
        "",
        SITE_NAME,
        "Dubai Municipality License 1151140",
      ].join("\n"),
    };
  }

  return {
    subject: `We received your quote request - ${SITE_NAME}`,
    text: [
      `Hello ${firstName},`,
      "",
      `Thank you for contacting ${SITE_NAME}.`,
      "",
      "We have received your project quote request. A team member will review your notes and follow up with next steps and a site discussion.",
      "",
      "This is an automated message from NO REPLY. Please do not reply to this email.",
      "",
      "If your matter is urgent, call 052 507 9810.",
      "",
      SITE_NAME,
      "Dubai Municipality License 1151140",
    ].join("\n"),
  };
}

/**
 * Deliver form mail to info@ via MXroute SMTP, then send a NO REPLY
 * auto-reply to the submitter (quote and job copy differ).
 */
export async function sendToInfoInbox(
  mail: OutboundMail,
  autoReply?: AutoReply
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

    if (autoReply) {
      const reply = buildAutoReply(autoReply);
      try {
        await transporter.sendMail({
          from: noReplyFrom(),
          to: autoReply.to,
          // Intentionally no replyTo - discourage replies to this auto message.
          subject: reply.subject,
          text: reply.text,
        });
      } catch (autoErr) {
        // Notify mail already landed in info@; do not fail the form on auto-reply issues.
        console.error(
          "[email] auto-reply failed:",
          autoErr instanceof Error ? autoErr.message : autoErr
        );
      }
    }

    return { ok: true };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Could not send email.";

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
