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
      <header className="fixed top-0 left-0 w-full z-50
                         bg-white/80 dark:bg-black/80
                         backdrop-blur border-b
                         border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo-ru-v2.png" alt="RU Logo" width={32} height={32} />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-500">
              Rishabh Upadhyay
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            {sections.map((sec) => (
<a
  key={sec}
  href={`#${sec}`}
  className={`transition-colors ${
    active === sec
      ? "text-blue-600 dark:text-blue-500"
      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
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
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium
                         border border-blue-600 text-blue-600 dark:text-blue-500
                         rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Resume
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
              <span className="font-semibold text-blue-600 dark:text-blue-500">
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
    ? "text-blue-600 dark:text-blue-500"
    : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
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
                           text-blue-600 dark:text-blue-500
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
