import type { ResearchItem } from "../types/ResearchItem";

export const researchItems: ResearchItem[] = [
  {
    id: "macro-regime-research",
    title: "Macro Regime Research for Markets",
    org: "Independent research",
    timeframe: "2025 – Present",
    status: "Ongoing",
    focusAreas: [
        "Macroeconomics",
        "Market regimes",
        "Risk-on / risk-off",
        "Policy uncertainty & geopolitical risk",
        "Rates & growth context",
    ],
    summary:
        "Ongoing research that tracks Real GDP growth, the unemployment rate, the Federal Funds Rate, and policy uncertainty/geopolitical risk to build a consistent market-regime view for investment decision-making.",
    contributions: [
        "Built a repeatable workflow to track and interpret Real GDP growth, unemployment, and the Federal Funds Rate as a macro baseline for risk context.",
        "Incorporated policy uncertainty/geopolitical risk as a qualitative-to-structured signal to capture risk shocks that aren’t visible in standard growth/labor series.",
        "Defined regime labels and transition rules to keep analysis consistent across time and reduce narrative drift.",
        "Documented evaluation checks focused on stability, drawdowns, and sensitivity to regime definitions.",
    ],
    methodsTools: [
        "Python",
        "Time series analysis",
        "Economic indicators",
        "Regime definitions",
        "Research notes",
    ],
    questions: [
        "Which combination of Real GDP growth and unemployment best captures shifts in risk appetite?",
        "How do Fed Funds Rate changes interact with growth and labor conditions in regime transitions?",
        "How should policy uncertainty/geopolitical risk be represented so it is consistent and not purely narrative?",
        "Which regime definitions remain stable under small changes to thresholds and lags?",
    ],
    outputs: [
        { label: "Macro dashboard notes", detail: "Indicator definitions + interpretation rules" },
        { label: "Regime framework", detail: "Labels, transition rules, and evaluation checks" },
    ],
    },

  {
    id: "micro-market-structure",
    title: "Microeconomic Research on Market Structure",
    org: "Independent research",
    timeframe: "2025 – Present",
    status: "Ongoing",
    focusAreas: ["Microeconomics", "Market structure", "Incentives", "Price formation"],
    summary:
      "Research on how incentives, constraints, and market structure affect pricing behavior, competition, and decision outcomes in real-world markets.",
    contributions: [
      "Analyzed how frictions and constraints shape outcomes in competitive environments.",
      "Explored pricing and allocation behavior under different incentive structures.",
      "Connected micro-level mechanics to practical investing and strategy assumptions.",
    ],
    methodsTools: ["Research synthesis", "Quantitative reasoning", "Case-based analysis"],
    questions: [
      "How do constraints and frictions change equilibrium outcomes in competitive settings?",
      "Which structural assumptions break most often when moved from theory to real markets?",
    ],
    outputs: [{ label: "Topic briefs", detail: "Short synthesis notes by theme" }],
  },
  {
    id: "clinical-nlp-notes",
    title: "Clinical NLP System for Medical Notes (Concept + Build Plan)",
    org: "Independent project",
    timeframe: "2026 (in progress)",
    status: "In progress",
    focusAreas: ["Clinical NLP", "Information extraction", "Compliance-aware engineering"],
    summary:
      "Designing an NLP pipeline to extract structured signals from clinical notes, supporting coding, risk signals, and de-identification for safer downstream analytics.",
    contributions: [
      "Outlined NER scope for diseases, medications, and procedures from unstructured notes.",
      "Planned ICD-10 auto-coding workflow and evaluation benchmarks.",
      "Incorporated de-identification considerations to reduce sensitive data exposure.",
    ],
    methodsTools: ["spaCy", "BioBERT", "ICD-10 mapping (concepts)", "Benchmarking"],
    outputs: [
      { label: "Pipeline plan", detail: "Architecture + milestones" },
      { label: "Evaluation plan", detail: "Benchmarks + metrics" },
    ],
  },
];
