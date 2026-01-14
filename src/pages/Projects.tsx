import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/Project";

const allCategories: ProjectCategory[] = [
  "Engineering",
  "Data Science",
  "Machine Learning",
  "NLP",
  "Databases",
];


export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const visibleProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => {
      const af = a.featured ? 1 : 0;
      const bf = b.featured ? 1 : 0;
      if (bf !== af) return bf - af;
      return a.title.localeCompare(b.title);
    });

    if (activeCategory === "All") return sorted;
    return sorted.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-gray-600 mt-2">
            A curated set of engineering, data science, ML, research, and writing work.
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

          {allCategories.map((c) => (
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
        {visibleProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">
        Tip: Add GitHub/demo/write-up links in <span className="font-mono">src/data/projects.ts</span> whenever you’re ready.
      </div>
    </div>
  );
}