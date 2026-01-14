export interface ResearchLink {
  label: string;
  href: string;
}

export type ResearchStatus = "Ongoing" | "In progress" | "Completed";

export interface ResearchOutput {
  label: string;   // e.g., "Research notes", "Slide deck", "Benchmark plan"
  detail?: string; // optional: "PDF", "GitHub repo", etc.
  href?: string;   // optional link if public
}

export interface ResearchItem {
  id: string;
  title: string;
  org: string;
  timeframe: string;
  status: ResearchStatus;
  focusAreas: string[];
  summary: string;
  contributions: string[];
  methodsTools: string[];
  questions?: string[];
  outputs?: ResearchOutput[];
  links?: ResearchLink[];
}
