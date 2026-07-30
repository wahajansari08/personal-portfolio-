"use client";
import { Reveal } from "@/components/motion";
import { useState } from "react";
import type { ContactFormData } from "@/types";

type FormStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (status.type !== "idle") setStatus({ type: "idle" });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        success?: boolean;
        code?: string;
        message?: string;
        error?: string;
      };

      if (result.code === "NO_ACCESS_KEY") {
        setStatus({
          type: "error",
          message:
            result.message ??
            "Add WEB3FORMS_ACCESS_KEY to your environment (see https://web3forms.com).",
        });
        return;
      }

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message:
            result.message ??
            "Thank you — your message was sent. We will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      setStatus({
        type: "error",
        message:
          result.error ??
          result.message ??
          "Something went wrong. Please try again.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Reveal className="col-12 col-lg-7 contact-form-column" delay={0.1}>
      <form className="contactform contact-form-panel" onSubmit={handleSubmit}>
        <div className="row contact-form-panel__grid">
          <div className="col-12 col-md-6">
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              name="subject"
              placeholder="YOUR SUBJECT"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {status.type !== "idle" ? (
              <div className="form-message w-100">
                <span
                  className={`output_message open-sans-font d-block mb-3 contact-output-message ${
                    status.type === "success" ? "success" : "error"
                  }`}
                >
                  {status.message}
                </span>
              </div>
            ) : null}
            <button
              type="submit"
              className="button contact-submit-btn"
              disabled={isSubmitting}
            >
              <span className="button-text">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <span className="button-icon fa fa-send" aria-hidden></span>
            </button>
          </div>
        </div>
      </form>
    </Reveal>
  );
}
