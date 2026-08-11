"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const date = String(data.get("date") ?? "");
    if (!name || !email || !email.includes("@") || !date) {
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
            <label htmlFor="reservation-name" className="form-label">
              Name
            </label>
            <input
              id="reservation-name"
              className="text-field"
              type="text"
              name="name"
              placeholder="Your name..."
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="reservation-email" className="form-label">
              Email
            </label>
            <input
              id="reservation-email"
              className="text-field"
              type="email"
              name="email"
              placeholder="Your email..."
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="reservation-phone" className="form-label">
              Phone
            </label>
            <input
              id="reservation-phone"
              className="text-field"
              type="tel"
              name="phone"
              placeholder="Your phone..."
            />
          </div>
          <div className="form-field">
            <label htmlFor="reservation-guests" className="form-label">
              Guests
            </label>
            <select
              id="reservation-guests"
              className="text-field select-field"
              name="guests"
              defaultValue="2"
            >
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                <option key={n} value={n}>
                  {n} {n === "1" ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="reservation-date" className="form-label">
              Date
            </label>
            <input
              id="reservation-date"
              className="text-field"
              type="date"
              name="date"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="reservation-time" className="form-label">
              Time
            </label>
            <select
              id="reservation-time"
              className="text-field select-field"
              name="time"
              defaultValue="19:00"
            >
              {[
                "12:00",
                "12:30",
                "13:00",
                "18:00",
                "18:30",
                "19:00",
                "19:30",
                "20:00",
                "20:30",
                "21:00",
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="reservation-message" className="form-label">
            Special requests
          </label>
          <textarea
            id="reservation-message"
            className="text-field text-area"
            name="message"
            placeholder="Allergies, celebrations, seating..."
            rows={4}
          />
        </div>
        <button type="submit" className="button-accent">
          Reserve a Table
        </button>
        {status === "success" && (
          <div className="success-message form-message">
            <div className="text-success">
              Thank you! Your reservation request has been received. We will
              confirm by email shortly.
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="error-message form-message">
            <div className="text-error">
              Oops! Please fill in your name, a valid email, and a date.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
