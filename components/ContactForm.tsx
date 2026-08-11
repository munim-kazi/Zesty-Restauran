"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !email.includes("@") || !message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  };

  return (
    <div className="form-wrapper">
      <form className="form-reservation" onSubmit={onSubmit} noValidate>
        <div className="grid-form">
          <div className="form-field">
            <label htmlFor="contact-name" className="form-label">
              Name
            </label>
            <input
              id="contact-name"
              className="text-field"
              type="text"
              name="name"
              placeholder="Your name..."
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email" className="form-label">
              Email
            </label>
            <input
              id="contact-email"
              className="text-field"
              type="email"
              name="email"
              placeholder="Your email..."
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="contact-subject" className="form-label">
            Subject
          </label>
          <input
            id="contact-subject"
            className="text-field"
            type="text"
            name="subject"
            placeholder="How can we help?"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-message" className="form-label">
            Message
          </label>
          <textarea
            id="contact-message"
            className="text-field text-area"
            name="message"
            placeholder="Tell us more..."
            rows={5}
            required
          />
        </div>
        <button type="submit" className="button-accent">
          Send Message
        </button>
        {status === "success" && (
          <div className="success-message form-message">
            <div className="text-success">
              Thank you! Your message has been received. We will get back to you
              shortly.
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="error-message form-message">
            <div className="text-error">
              Oops! Please fill in your name, a valid email, and a message.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
