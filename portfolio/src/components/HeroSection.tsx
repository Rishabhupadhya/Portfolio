"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const images = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen px-6 pt-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            I build scalable <br />
            <span className="text-blue-600 dark:text-blue-500">
              cloud, DevOps & AI
            </span>{" "}
            systems.
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-8">
            Software Engineer building secure, scalable systems at enterprise scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Rishabh_Upadhyay_Resume.pdf"
              download
              className="px-6 py-3 border border-gray-400 dark:border-gray-600
                         rounded-lg transition-colors
                         hover:border-blue-600 hover:text-blue-600
                         dark:hover:border-blue-500 dark:hover:text-blue-500"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-gray-400 dark:border-gray-600
                         rounded-lg transition-colors
                         hover:border-blue-600 hover:text-blue-600
                         dark:hover:border-blue-500 dark:hover:text-blue-500"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-400 dark:border-gray-600
                         rounded-lg transition-colors
                         hover:border-blue-600 hover:text-blue-600
                         dark:hover:border-blue-500 dark:hover:text-blue-500"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* IMAGE + SLIDESHOW */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ rotateX: 4, rotateY: -4 }}
          style={{ perspective: 1200 }}
          className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]
                     rounded-xl overflow-hidden
                     bg-gray-100 dark:bg-gray-900
                     border border-gray-300 dark:border-gray-800
                     shadow-[0_30px_60px_-20px_rgba(0,0,0,0.4)]"
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
                className="object-contain"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* SOCIAL ICONS WITH TOOLTIPS */}
        <div className="md:col-start-2 flex justify-between px-10 mt-4">

          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/Rishabhupadhya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-600 dark:text-gray-400
                         transition-colors
                         hover:text-blue-600 dark:hover:text-blue-500
                         focus-visible:outline-none"
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
              className="text-gray-600 dark:text-gray-400
                         transition-colors
                         hover:text-blue-600 dark:hover:text-blue-500
                         focus-visible:outline-none"
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
              className="text-gray-600 dark:text-gray-400
                         transition-colors
                         hover:text-blue-600 dark:hover:text-blue-500
                         focus-visible:outline-none"
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
          className="text-3xl text-gray-500 dark:text-gray-400"
        >
          ↓
        </motion.a>
      </div>
    </section>
  );
}
