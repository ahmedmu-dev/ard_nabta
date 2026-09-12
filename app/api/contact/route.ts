import { NextResponse } from "next/server";
import { fieldsToText, sendToInfoInbox } from "@/lib/email";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  hp_field?: string; // honeypot
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and project notes are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const fields = {
    Form: "Request a quote",
    Name: name,
    Email: email,
    Phone: phone || "Not provided",
    Message: message,
  };

  const result = await sendToInfoInbox(
    {
      subject: `Quote request from ${name}`,
      replyTo: email,
      text: fieldsToText(fields),
    },
    {
      kind: "quote",
      to: email,
      name,
    }
  );
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
