"use client";

import { useEffect, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { JOBS } from "@/lib/data/jobs";
import { openInfoMail } from "@/lib/mailto";

const FIELD =
  "mt-2 w-full rounded-none border-2 border-ink bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

interface JobApplicationFormProps {
  initialJobSlug?: string;
}

export default function JobApplicationForm({
  initialJobSlug = "",
}: JobApplicationFormProps) {
  const [values, setValues] = useState({
    role: initialJobSlug,
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialJobSlug) {
      setValues((prev) => ({ ...prev, role: initialJobSlug }));
    }
  }, [initialJobSlug]);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleCvChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setCvFile(file);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const roleTitle =
      JOBS.find((job) => job.slug === values.role)?.title ?? values.role;
    const lines = [
      "New job application",
      "",
      `Role: ${roleTitle}`,
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Experience: ${values.experience}`,
      "",
      "Address:",
      values.address,
      "",
      "Why this role:",
      values.message,
      "",
      cvFile
        ? `CV file selected: ${cvFile.name} (please attach this file before sending)`
        : "CV: not attached",
    ];
    openInfoMail(
      `Job application: ${roleTitle} - ${values.name}`,
      lines.join("\n")
    );
    setSubmitted(true);
  }

  if (submitted) {
    const roleTitle =
      JOBS.find((job) => job.slug === values.role)?.title ?? "the role";
    return (
      <div role="status" className="border-2 border-ink bg-paper p-8">
        <h3 className="font-display text-xl uppercase tracking-tight text-ink">
          Opening your email
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your application for {roleTitle} is addressed to {CONTACT.emailInfo}.
          Attach your CV in the mail app, then send to complete the application.
        </p>
      </div>
    );
  }

  return (
    <form
      id="apply"
      onSubmit={handleSubmit}
      className="space-y-5 border-2 border-ink bg-paper p-6 md:p-8"
    >
      <div>
        <label htmlFor="role" className="meta text-ink">
          Role
        </label>
        <select
          id="role"
          name="role"
          required
          value={values.role}
          onChange={handleChange}
          className={FIELD}
        >
          <option value="" disabled>
            Select a role
          </option>
          {JOBS.map((job) => (
            <option key={job.slug} value={job.slug}>
              {job.title}
            </option>
          ))}
        </select>
      </div>

      {(
        [
          ["name", "Full name", "text", true],
          ["email", "Email", "email", true],
          ["phone", "Phone", "tel", true],
          ["experience", "Years of experience", "text", true],
        ] as const
      ).map(([id, label, type, required]) => (
        <div key={id}>
          <label htmlFor={id} className="meta text-ink">
            {label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            required={required}
            value={values[id]}
            onChange={handleChange}
            className={FIELD}
          />
        </div>
      ))}

      <div>
        <label htmlFor="address" className="meta text-ink">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={3}
          value={values.address}
          onChange={handleChange}
          placeholder="Street, area, city, emirate…"
          className={`${FIELD} resize-none`}
        />
      </div>

      <div>
        <label htmlFor="cv" className="meta text-ink">
          CV / Resume
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleCvChange}
          className={`${FIELD} file:mr-4 file:border-0 file:bg-ink file:px-3 file:py-1.5 file:font-mono file:text-xs file:uppercase file:tracking-wider file:text-paper`}
        />
        <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">
          {cvFile
            ? `Selected: ${cvFile.name}`
            : "PDF or Word · max recommended 5 MB"}
        </p>
      </div>

      <div>
        <label htmlFor="message" className="meta text-ink">
          Why this role
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Brief note on relevant villa / site experience…"
          className={`${FIELD} resize-none`}
        />
      </div>

      <Button type="submit" variant="accent" className="w-full">
        Submit Application
      </Button>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
        Sends to {CONTACT.emailInfo}. Attach your CV in the mail app before
        sending.
      </p>
    </form>
  );
}
