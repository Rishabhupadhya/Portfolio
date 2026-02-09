"use client";

// src/components/ProjectsSection.tsx

import projects from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
            Selected Work
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-sky-400 via-emerald-300 to-violet-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Projects that reflect how I build
          </h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            onClick={() => window.open(p.liveLink, "_blank")}
            className="glass-panel group flex h-full cursor-pointer flex-col p-7 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
              {p.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
              {p.description}
            </p>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-sky-300/90">
              {p.tech}
            </p>

            {p.githubLink && (
              <a
                href={p.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-block text-xs font-medium text-slate-400 hover:text-sky-400"
              >
                View Source →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
