import { NextResponse } from "next/server";
import { JOBS } from "@/lib/data/jobs";
import { fieldsToText, sendToInfoInbox } from "@/lib/email";

export const runtime = "nodejs";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const roleSlug = String(form.get("role") ?? "").trim();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const address = String(form.get("address") ?? "").trim();
  const experience = String(form.get("experience") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const cv = form.get("cv");

  if (!roleSlug || !name || !email || !phone || !address || !experience || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const roleTitle =
    JOBS.find((job) => job.slug === roleSlug)?.title ?? roleSlug;

  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: "Please attach a CV." }, { status: 400 });
  }

  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json(
      { error: "CV must be 5 MB or smaller." },
      { status: 400 }
    );
  }

  const mimeType = cv.type || "application/octet-stream";
  if (
    !ALLOWED_CV_TYPES.has(mimeType) &&
    !/\.(pdf|doc|docx)$/i.test(cv.name)
  ) {
    return NextResponse.json(
      { error: "CV must be a PDF or Word document." },
      { status: 400 }
    );
  }

  const bytes = new Uint8Array(await cv.arrayBuffer());

  const fields = {
    Form: "Job application",
    Role: roleTitle,
    Name: name,
    Email: email,
    Phone: phone,
    Experience: experience,
    Address: address,
    Message: message,
    "CV filename": cv.name,
  };

  const result = await sendToInfoInbox(
    {
      subject: `Job application: ${roleTitle} - ${name}`,
      replyTo: email,
      text: fieldsToText(fields),
      attachment: {
        filename: cv.name,
        bytes,
        mimeType,
      },
    },
    {
      kind: "job",
      to: email,
      name,
      roleTitle,
    }
  );
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
