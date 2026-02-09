"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;


    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-violet-400 bg-clip-text text-transparent">
              Let&apos;s build what&apos;s next.
            </span>
          </h2>

          <p className="max-w-md text-slate-300/90">
            I’m always open to discussing new opportunities, collaborations,
            or meaningful tech conversations.
          </p>

          {/* Social + Phone */}
          <div className="mt-6 flex flex-col gap-6">
            {/* Phone */}
            <a
              href="tel:+917011377819"
              className="flex items-center gap-4 text-slate-300 transition-colors hover:text-sky-300"
              aria-label="Call Phone Number"
            >
              <FaPhoneAlt
                size={22}
                className="text-sky-300 transition-colors"
              />
              <span className="text-lg font-medium">
                +91&nbsp;7011377819
              </span>
            </a>

            {/* Icons */}
            <div className="flex gap-6">
              <a
                href="https://github.com/Rishabhupadhya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition-colors hover:text-sky-300"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/in/rishabh-upadhyay-880294220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition-colors hover:text-sky-300"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="mailto:rishabh.292002@gmail.com"
                aria-label="Email"
                className="text-slate-400 transition-colors hover:text-sky-300"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="glass-panel flex flex-col justify-between p-8">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="rounded-md border border-slate-700/70 bg-slate-900/60 p-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-400"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="rounded-md border border-slate-700/70 bg-slate-900/60 p-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-400"
              />
            </div>

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full rounded-md border border-slate-700/70 bg-slate-900/60 p-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full rounded-md border border-slate-700/70 bg-slate-900/60 p-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-400"
            />

            <div className="pt-4">
              <button
                type="submit"
                className="primary-button px-8 py-3"
              >
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= BACK TO TOP ================= */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 rounded-full border border-slate-700/80 bg-slate-900/80 p-3 text-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-colors hover:border-sky-400 hover:text-sky-300"
      >
        <FaArrowUp size={18} />
      </a>
    </section>
  );
}
