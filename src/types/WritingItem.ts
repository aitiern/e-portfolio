export type WritingTag =
  | "Quant Finance"
  | "Private Equity"
  | "Algorithms"
  | "Machine Learning"
  | "Data Engineering"
  | "Healthcare"
  | "Career";

export interface WritingLink {
  label: "Medium" | "PDF" | "GitHub" | "External";
  href: string;
}

export interface WritingItem {
  id: string;
  title: string;
  outlet: string;
  timeframe: string;
  tags: WritingTag[];
  summary: string;
  highlights: string[];
  links: WritingLink[];
  featured?: boolean;
}
