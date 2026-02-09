"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const images = ["/hero-1-v2.jpg", "/hero-2-v2.jpg", "/hero-3-v3.jpg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 pt-32">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Open to roles in Cloud, DevOps & Backend
          </div>

          <h1 className="space-y-3">
            <span className="block text-sm font-medium uppercase tracking-[0.36em] text-slate-400">
              Software Engineer · Cloud · DevOps · Distributed Systems
            </span>
            <span className="block bg-gradient-to-br from-sky-400 via-emerald-300 to-violet-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
              Rishabh&nbsp;Upadhyay
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-300/90 md:text-lg">
            Building secure, scalable systems that power high‑stakes healthcare and
            data‑intensive products. I work across cloud, infrastructure, and
            backend architecture to ship reliable software at enterprise scale.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/Rishabh_Upadhyay_Resume-v2.pdf"
              download
              className="primary-button"
            >
              <span>Download Resume</span>
            </a>

            <a href="#projects" className="secondary-button">
              View Projects
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-300/90 underline-offset-4 hover:text-sky-300 hover:underline"
            >
              Let&apos;s collaborate
            </a>
          </div>
        </motion.div>

        {/* IMAGE + SLIDESHOW */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }}
          style={{ perspective: 1400 }}
          className="glass-panel relative h-[260px] w-full overflow-hidden sm:h-[320px] md:h-[420px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt="Rishabh Upadhyay"
                fill
                className="object-cover object-center rounded-xl"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* SOCIAL ICONS WITH TOOLTIPS */}
        <div className="md:col-start-2 mt-4 flex justify-between px-10">

          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/Rishabhupadhya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 transition-colors hover:text-sky-300 focus-visible:outline-none"
            >
              <FaGithub size={26} />
            </a>
            <span className="pointer-events-none absolute z-20 -top-10 left-1/2 -translate-x-1/2
                             whitespace-nowrap rounded-md px-2 py-1 text-xs
                             bg-gray-900 text-white
                             opacity-0 translate-y-1
                             transition-all duration-200
                             group-hover:opacity-100 group-hover:translate-y-0
                             group-focus-within:opacity-100 group-focus-within:translate-y-0">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://linkedin.com/in/rishabh-upadhyay-880294220"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 transition-colors hover:text-sky-300 focus-visible:outline-none"
            >
              <FaLinkedin size={26} />
            </a>
            <span className="pointer-events-none absolute z-20 -top-10 left-1/2 -translate-x-1/2
                             whitespace-nowrap rounded-md px-2 py-1 text-xs
                             bg-gray-900 text-white
                             opacity-0 translate-y-1
                             transition-all duration-200
                             group-hover:opacity-100 group-hover:translate-y-0
                             group-focus-within:opacity-100 group-focus-within:translate-y-0">
              LinkedIn
            </span>
          </div>

          {/* Email */}
          <div className="relative group">
            <a
              href="mailto:rishabh.292002@gmail.com"
              aria-label="Email"
              className="text-slate-400 transition-colors hover:text-sky-300 focus-visible:outline-none"
            >
              <FaEnvelope size={26} />
            </a>
            <span className="pointer-events-none absolute z-20 -top-10 left-1/2 -translate-x-1/2
                             whitespace-nowrap rounded-md px-2 py-1 text-xs
                             bg-gray-900 text-white
                             opacity-0 translate-y-1
                             transition-all duration-200
                             group-hover:opacity-100 group-hover:translate-y-0
                             group-focus-within:opacity-100 group-focus-within:translate-y-0">
              Email
            </span>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="mt-20 flex justify-center">
        <motion.a
          href="#about"
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-3xl text-slate-500"
        >
          ↓
        </motion.a>
      </div>
    </section>
  );
}
