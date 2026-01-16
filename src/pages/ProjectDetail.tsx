import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = useMemo(() => {
    if (!id) return undefined;
    return projects.find((p) => p.id === id);
  }, [id]);

  if (!project) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <p className="mt-3 text-neutral-400">
          The project ID in the URL does not match any project in your data model.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-block rounded-lg border border-neutral-700 px-5 py-2 hover:border-white transition"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <Link
          to="/projects"
          className="text-sm text-neutral-400 hover:text-white transition"
        >
          ← Back to Projects
        </Link>

        <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
        <p className="mt-3 text-lg text-neutral-400">{project.subtitle}</p>

        {project.categories?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-sm text-neutral-200"
              >
                {c}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* Highlights */}
      {project.highlights?.length ? (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-200">
            {project.highlights.map((h, idx) => (
              <li key={idx}>{h}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Tech */}
      {project.tech?.length ? (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-sm text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {/* Links */}
      {project.links?.length ? (
        <section className="mb-2">
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-neutral-700 px-5 py-2 hover:border-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
