"use client";

import { useState } from "react";
import Subtitle from "./Subtitle";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <div className="newsletter">
      <Subtitle centered light>
        Newsletter
      </Subtitle>
      <h3 className="heading-newsletter light">sign up to our newsletter</h3>
      <div className="form-block-newsletter">
        <form className="form-newsletter" onSubmit={onSubmit} noValidate>
          <input
            className="text-field"
            type="email"
            name="Email"
            placeholder="Your email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
          />
          <button type="submit" className="button-accent">
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <div className="success-message">
            <div className="text-success">
              Thank you! Your submission has been received!
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="error-message">
            <div className="text-error">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
