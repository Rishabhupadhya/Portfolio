"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiMongodb,
} from "react-icons/si";

/* ===== Skills with Icons ===== */
const skills = [
  { name: "Python", icon: FaPython },
  { name: "Node.js", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "AWS", icon: FaAws },
  { name: "Azure", icon: FaMicrosoft },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      {/* ================= Header ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.36em] text-sky-300/90">
          About Me
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          Building production systems{" "}
          <br className="hidden md:block" />
          with{" "}
          <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-violet-400 bg-clip-text text-transparent">
            cloud, DevOps & AI
          </span>
        </h2>
      </motion.div>

      {/* ================= Main Grid ================= */}
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

        {/* ===== LEFT: Summary + Skills ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-50">
              Professional Summary
            </h3>

            <p className="mb-4 text-lg leading-relaxed text-slate-300/90">
              Associate Software Engineer II at Optum Global Solutions,
              contributing to enterprise-scale healthcare platforms supporting{" "}
              <span className="font-semibold text-sky-300">
                140M+ clinical decisions annually
              </span>
              . I build secure, fault-tolerant, and performance-critical services.
            </p>

            <p className="text-lg leading-relaxed text-slate-300/90">
              My experience spans cloud platforms, DevOps automation,
              distributed systems, and backend-heavy full-stack development,
              with production exposure to ML pipelines.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-slate-50">Tech Stack</h4>

            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-2"
                >
                  <Icon
                    size={36}
                    className="text-slate-400 transition-colors group-hover:text-sky-300"
                  />
                  <span className="text-sm text-slate-400 transition-colors group-hover:text-sky-300">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative space-y-14 border-l border-slate-700/70 pl-8">

          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            <h4 className="text-xl font-semibold text-slate-50">
              Optum Global Solutions (UHG)
            </h4>
            <p className="text-sm text-sky-300">
              Associate Software Engineer II · Dec 2025 – Present
            </p>
            <p className="mt-3 text-slate-300/90">
              Working on large-scale healthcare platforms improving
              workflows, performance, security, and reliability across
              systems handling millions of daily interactions.
            </p>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            <h4 className="text-xl font-semibold text-slate-50">
              Aptiv Components Pvt. Ltd.
            </h4>
            <p className="text-sm text-sky-300">
              Software Engineer · Jul 2025 – Dec 2025
            </p>
            <p className="mt-3 text-slate-300/90">
              Designed CI/CD pipelines for ML models, deployed workloads
              using Docker and Kubernetes, and optimized AWS costs by
              over 30%.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            <h4 className="text-xl font-semibold text-slate-50">
              Education
            </h4>
            <p className="mt-1 font-medium text-slate-100">
              SRM Institute of Science and Technology
            </p>
            <p className="text-sm text-sky-300">
              B.Tech in Computer Science & Engineering · CGPA 9.33
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            <h4 className="text-xl font-semibold text-slate-50">
              Certifications
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-slate-300/90">
              <li>Oracle Cloud Infrastructure Foundations Associate (2024)</li>
              <li>Oracle Cloud Data Management Foundations Associate (2024)</li>
              <li>Oracle – Building MySQL Databases for Applications (2024)</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
