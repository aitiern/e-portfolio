export type ProjectCategory =
  | "Engineering"
  | "Data Science"
  | "Machine Learning"
  | "NLP"
  | "Databases";


export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;

  // Used for filtering / labels
  categories: string[];

  // Tech stack pills
  tech: string[];

  // Bullet highlights
  highlights: string[];

  // Optional links (GitHub, Demo, etc.)
  links?: ProjectLink[];

  // Optional: featured sorting
  featured?: boolean;
}