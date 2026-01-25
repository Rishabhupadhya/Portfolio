import projects from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(p => (
          <div
            key={p.title}
            className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {p.description}
            </p>
            <p className="text-sm mt-3 text-blue-500">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
