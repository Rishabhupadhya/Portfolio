"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

/* ===== Skills with Icons ===== */
const skills = [
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      {/* ================= Header ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Engineering reliable systems <br className="hidden md:block" />
          across{" "}
          <span className="text-blue-600">
            Cloud, DevOps & AI
          </span>
        </h2>
      </motion.div>

      {/* ================= Main Grid ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ===== LEFT: Summary + Skills ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Professional Summary
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Associate Software Engineer II at Optum Global Solutions,
              contributing to healthcare platforms supporting over{" "}
              <span className="font-semibold text-blue-600">
                140M+ clinical decisions annually
              </span>
              . I build secure, scalable, and performance-critical systems
              used by a majority of U.S. health plans.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Strong hands-on experience in cloud infrastructure, DevOps
              automation, AI/ML systems, and full-stack development. I focus
              on building systems that are reliable, cost-efficient, and
              production-ready.
            </p>
          </div>

          {/* ===== Skills Grid ===== */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Tech Stack
            </h4>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <Icon
                      size={36}
                      className="text-gray-500 group-hover:text-blue-600 transition-colors"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT: Timeline ===== */}
        <div className="relative border-l border-gray-300 pl-8 space-y-14">

          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600" />
            <h4 className="text-xl font-semibold">
              Optum Global Solutions (UHG)
            </h4>
            <p className="text-blue-600 text-sm">
              Associate Software Engineer II · Dec 2025 – Present
            </p>
            <p className="text-gray-700 mt-3">
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
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600" />
            <h4 className="text-xl font-semibold">
              Aptiv Components Pvt. Ltd.
            </h4>
            <p className="text-blue-600 text-sm">
              Software Engineer · Jul 2025 – Dec 2025
            </p>
            <p className="text-gray-700 mt-3">
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
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600" />
            <h4 className="text-xl font-semibold">
              Education
            </h4>
            <p className="font-medium mt-1">
              SRM Institute of Science and Technology
            </p>
            <p className="text-blue-600 text-sm">
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
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-blue-600" />
            <h4 className="text-xl font-semibold">
              Certifications
            </h4>
            <ul className="text-gray-700 text-sm mt-3 space-y-1">
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
