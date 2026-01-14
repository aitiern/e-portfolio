export type ProjectCategory =
  | "Engineering"
  | "Data Science"
  | "Machine Learning"
  | "NLP"
  | "Databases";


export interface ProjectLink {
  label: "GitHub" | "Live Demo" | "Paper" | "Write-up" | "Docs";
  href: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string; // 1-line impact statement
  categories: ProjectCategory[];
  tech: string[];
  highlights: string[]; // 2–5 bullet points: what you did / results
  links?: ProjectLink[];
  featured?: boolean;
}