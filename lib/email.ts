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
  // Prefer a mailbox that is NOT the destination inbox.
  // MXroute often skips Inbox when SMTP auth user == recipient (mail may
  // only appear under Sent).
  const user =
    process.env.SMTP_USER?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    "admin@ardnabta.com";
  const pass = requireEnv("SMTP_PASS");
  return { host, port, user, pass };
}

function mailToAddress(): string {
  return process.env.MAIL_TO?.trim() || CONTACT.emailInfo;
}

function createTransport() {
  const { host, port, user, pass } = smtpIdentity();
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    // MXroute / shared hosts: avoid hanging serverless invocations.
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });
}

/** From header that shows as NO REPLY in the recipient's mail client. */
function noReplyFrom(smtpUser: string): string {
  const address = process.env.SMTP_NOREPLY?.trim() || smtpUser;
  return `"NO REPLY" <${address}>`;
}

function buildAutoReply(auto: AutoReply): { subject: string; text: string } {
  const name = auto.name.trim() || "Sir or Madam";

  if (auto.kind === "job") {
    const role = auto.roleTitle || "the advertised position";
    return {
      subject: `Acknowledgement of your application - ${SITE_NAME}`,
      text: [
        `Dear ${name},`,
        "",
        `Thank you for your application for the position of ${role} at ${SITE_NAME}.`,
        "",
        "This message confirms that your application and curriculum vitae have been received. Applications are reviewed by our team. You will be contacted should your experience meet the requirements of the role.",
        "",
        "Please note that this acknowledgement is issued from an unmonitored address. Kindly do not reply to this email.",
        "",
        "For any enquiry regarding your application, please telephone 052 507 9810.",
        "",
        "Yours faithfully,",
        SITE_NAME,
        CONTACT.building,
        CONTACT.plot,
        CONTACT.city,
      ].join("\n"),
    };
  }

  return {
    subject: `Acknowledgement of your quotation request - ${SITE_NAME}`,
    text: [
      `Dear ${name},`,
      "",
      `Thank you for contacting ${SITE_NAME}.`,
      "",
      "This message confirms that your request for a quotation has been received. Our team will review the information you have submitted and will contact you regarding the next steps.",
      "",
      "Please note that this acknowledgement is issued from an unmonitored address. Kindly do not reply to this email.",
      "",
      "Should the matter be urgent, please telephone 052 507 9810.",
      "",
      "Yours faithfully,",
      SITE_NAME,
      CONTACT.building,
      CONTACT.plot,
      CONTACT.city,
    ].join("\n"),
  };
}

/**
 * Deliver form mail to info@ via MXroute SMTP, then send a NO REPLY
 * auto-reply to the submitter (quote and job copy differ).
 *
 * Important: authenticate as a different mailbox than MAIL_TO (e.g.
 * admin@ardnabta.com -> info@ardnabta.com). Same-account SMTP sends often
 * never appear in the Inbox on MXroute.
 */
export async function sendToInfoInbox(
  mail: OutboundMail,
  autoReply?: AutoReply
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { user: smtpUser } = smtpIdentity();
    const transporter = createTransport();
    const to = mailToAddress();

    if (smtpUser.toLowerCase() === to.toLowerCase()) {
      console.warn(
        "[email] SMTP_USER and MAIL_TO are the same address. MXroute may not put this mail in Inbox. Use admin@ (or another mailbox) as SMTP_USER."
      );
    }

    const info = await transporter.sendMail({
      from: `"Ard Nabta Website" <${smtpUser}>`,
      to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      // Force envelope recipient so the message is delivered as inbound mail.
      envelope: {
        from: smtpUser,
        to,
      },
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

    console.info("[email] notify accepted", {
      messageId: info.messageId,
      to,
      from: smtpUser,
      response: info.response,
    });

    if (autoReply) {
      const reply = buildAutoReply(autoReply);
      const visitor = autoReply.to.trim();
      const inbox = to.trim();
      const sameInbox = visitor.toLowerCase() === inbox.toLowerCase();

      try {
        const autoInfo = await transporter.sendMail({
          from: noReplyFrom(smtpUser),
          to: visitor,
          subject: reply.subject,
          text: reply.text,
          envelope: {
            from: smtpUser,
            to: visitor,
          },
        });
        console.info("[email] auto-reply accepted", {
          messageId: autoInfo.messageId,
          to: visitor,
        });
      } catch (autoErr) {
        const autoMessage =
          autoErr instanceof Error ? autoErr.message : "Auto-reply failed.";
        console.error("[email] auto-reply failed:", autoMessage);
        return {
          ok: false,
          error:
            "Your enquiry was received at info@ardnabta.com, but the acknowledgement could not be sent. Please telephone 052 507 9810 if the matter is urgent.",
        };
      }

      // Copy into the watched inbox so NO REPLY is visible even when the
      // visitor uses a different address. Skip if that would duplicate.
      if (!sameInbox) {
        try {
          await transporter.sendMail({
            from: noReplyFrom(smtpUser),
            to: inbox,
            subject: `Acknowledgement issued to ${visitor}`,
            text: [
              `An acknowledgement has been issued to ${visitor} from an unmonitored address.`,
              "",
              reply.text,
            ].join("\n"),
            envelope: {
              from: smtpUser,
              to: inbox,
            },
          });
        } catch (copyErr) {
          console.error(
            "[email] NO REPLY inbox copy failed:",
            copyErr instanceof Error ? copyErr.message : copyErr
          );
        }
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
