"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["about", "projects", "contact"];

export default function Header() {
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Global theme toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* HEADER BAR */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80
                   bg-slate-950/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo-ru-v2.png"
              alt="RU Logo"
              width={32}
              height={32}
              className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.8)]"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Software Engineer
              </span>
              <span className="text-sm font-semibold text-sky-300">
                Rishabh Upadhyay
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-3 rounded-full border border-slate-700/70 bg-slate-900/60 px-2 py-1 backdrop-blur-xl md:flex">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`pill-nav-link ${
                  active === sec ? "pill-nav-link-active" : ""
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Resume */}
            <a
              href="/Rishabh_Upadhyay_Resume-v2.pdf"
              download
              className="hidden md:inline-flex primary-button"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60]
                       bg-white dark:bg-black
                       flex flex-col"
          >
            {/* Top */}
            <div className="h-16 px-6 flex items-center justify-between
                            border-b border-gray-200 dark:border-gray-800">
              <span className="font-semibold text-[#00BFFF] dark:text-[#00BFFF]">
                Navigation
              </span>
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-10 text-xl">
              {sections.map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors ${
                    active === sec
                      ? "text-[#00BFFF] dark:text-[#00BFFF]"
                      : "text-gray-400 hover:text-[#00BFFF] dark:hover:text-[#00BFFF]"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              ))}

              {/* Resume */}
              <a
                href="/Rishabh_Upadhyay_Resume-v2.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 border border-blue-600
                           text-[#00BFFF] dark:text-[#00BFFF]
                           rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
