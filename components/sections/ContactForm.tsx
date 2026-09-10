"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

/**
 * Controlled contact form UI (name/email/phone/message).
 *
 * v1 scope: front-end only. Submit is stubbed — it validates and shows a
 * confirmation state but does not send data anywhere. Wire this up to
 * Formspree or a Next.js Route Handler + email service (see plan.md
 * Section 2) when the gig moves to v1.5/v2 backend integration.
 */
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
    // TODO(backend): wire this up to Formspree or a Route Handler + email
    // service. No submission logic exists yet — this is a UI stub only.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-surface bg-white p-8 text-center"
      >
        <h3 className="text-lg font-medium text-heading">
          Thanks for reaching out.
        </h3>
        <p className="mt-2 text-sm text-body">
          Your message has been received. Our team will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-surface bg-white p-8">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-heading">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-surface bg-white px-4 py-2.5 text-sm text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-heading">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-surface bg-white px-4 py-2.5 text-sm text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-heading">
          Phone <span className="font-normal text-body">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-surface bg-white px-4 py-2.5 text-sm text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-heading">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="mt-2 w-full resize-none rounded-md border border-surface bg-white px-4 py-2.5 text-sm text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
