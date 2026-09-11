"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

const FIELD =
  "mt-2 w-full rounded-none border-2 border-ink bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="border-2 border-ink bg-paper p-8">
        <h3 className="font-display text-xl uppercase tracking-tight text-ink">
          Message received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We will follow up on your project details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border-2 border-ink bg-paper p-6 md:p-8">
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
        />
      </div>
      <Button type="submit" variant="accent" className="w-full">
        Send Project Brief
      </Button>
    </form>
  );
}
