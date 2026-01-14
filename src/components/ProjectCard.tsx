import type { Project } from "../types/Project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 mt-1">{project.subtitle}</p>
        </div>

        {project.featured ? (
          <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full border bg-gray-50">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.categories.map((c: string) => (

          <span key={c} className="text-xs px-3 py-1 rounded-full bg-gray-100">
            {c}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t: string) => (

          <span key={t} className="text-xs px-3 py-1 rounded-full border">
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 list-disc pl-5 text-gray-700">
        {project.highlights.map((h: string, i: number) => (

          <li key={`${project.id}-h-${i}`}>{h}</li>
        ))}
      </ul>

      {project.links && project.links.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.map((l: { label: string; href: string }) => (

            <a
              key={`${project.id}-${l.label}`}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
