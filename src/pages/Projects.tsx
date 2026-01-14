import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import type { ProjectCategory } from "../types/Project";

const allCategories: ProjectCategory[] = [
  "Engineering",
  "Data Science",
  "Quant Finance",
  "Databases",
  "NLP",
  "Web",
  "Research",
  "Other",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const visible = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Selected work across data systems, quantitative research tooling, and applied ML.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-lg border text-sm transition ${
              activeCategory === "All" ? "bg-gray-900 text-white" : "hover:bg-gray-50"
            }`}
          >
            All
          </button>

          {allCategories.map((c: ProjectCategory) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-lg border text-sm transition ${
                activeCategory === c ? "bg-gray-900 text-white" : "hover:bg-gray-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
