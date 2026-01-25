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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col gap-10">

          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl font-bold text-[#00BFFF]-600"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Get in touch <br /> with me
          </h2>

          <p className="text-gray-700 max-w-md">
            I’m always open to discussing new opportunities, collaborations,
            or meaningful tech conversations.
          </p>

          {/* Social + Phone */}
          <div className="flex flex-col gap-6 mt-6">

            {/* Phone */}
              <a
                href="tel:+917011377819"
                className="flex items-center gap-4 text-gray-700 hover:text-[#00BFFF]-600 transition"
                aria-label="Call Phone Number"
              >
                <FaPhoneAlt size={22} className="text-[#00BFFF]-600" />
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
                className="text-gray-600 hover:text-[#00BFFF]-600 transition"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://linkedin.com/in/rishabh-upadhyay-880294220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-[#00BFFF]-600 transition"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="mailto:rishabh.292002@gmail.com"
                aria-label="Email"
                className="text-gray-600 hover:text-[#00BFFF]-600 transition"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="rounded-xl border border-gray-300 p-8 flex flex-col justify-between">

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
                className="p-3 rounded-md border border-gray-300 focus:border-blue-600 outline-none"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="p-3 rounded-md border border-gray-300 focus:border-blue-600 outline-none"
              />
            </div>

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-600 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-600 outline-none"
            />

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ================= BACK TO TOP ================= */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6
                   p-3 rounded-full
                   bg-blue-600 text-white
                   shadow-lg
                   hover:bg-blue-700
                   transition"
      >
        <FaArrowUp size={18} />
      </a>
    </section>
  );
}
