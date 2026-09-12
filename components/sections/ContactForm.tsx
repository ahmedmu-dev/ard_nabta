"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

const FIELD =
  "mt-2 w-full rounded-none border-2 border-ink bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hp_field: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          hp_field: values.hp_field,
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.error || "Send failed.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Could not send. Email info@ardnabta.com directly."
      );
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-2 border-ink bg-paper p-8">
        <h3 className="font-display text-xl uppercase tracking-tight text-ink">
          Message sent
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Your project brief was delivered to {CONTACT.emailInfo}. A NO REPLY
          confirmation was also sent to {values.email}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border-2 border-ink bg-paper p-6 md:p-8"
      noValidate={false}
    >
      {/* Honeypot - leave empty */}
      <input
        type="text"
        name="hp_field"
        value={values.hp_field}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
      />

      {(
        [
          ["name", "Name", "text", true],
          ["email", "Email", "email", true],
          ["phone", "Phone", "tel", false],
        ] as const
      ).map(([id, label, type, required]) => (
        <div key={id}>
          <label htmlFor={id} className="meta text-ink">
            {label}
            {!required ? " (optional)" : ""}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            required={required}
            value={values[id]}
            onChange={handleChange}
            className={FIELD}
            disabled={status === "sending"}
          />
        </div>
      ))}
      <div>
        <label htmlFor="message" className="meta text-ink">
          Project notes
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={handleChange}
          className={`${FIELD} resize-none`}
          disabled={status === "sending"}
        />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="accent"
        className="w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Project Brief"}
      </Button>
      <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
        Delivered to {CONTACT.emailInfo}
      </p>
    </form>
  );
}
