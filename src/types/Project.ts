export type ProjectCategory =
  | "Engineering"
  | "Data Science"
  | "Quant Finance"
  | "Databases"
  | "NLP"
  | "Web"
  | "Research"
  | "Machine Learning"
  | "Writing"
  | "Other";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;

  categories: ProjectCategory[];
  tech: string[];
  highlights: string[];

  links?: ProjectLink[];
  featured?: boolean;
}
