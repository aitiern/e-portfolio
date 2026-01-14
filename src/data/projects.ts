import type { Project } from "../types/Project";


export const projects: Project[] = [
  {
    id: "trading-bot-platform",
    title: "Automated Trading Bot Platform",
    subtitle:
      "End-to-end trading system with strategy execution, risk management, backtesting, and a Flask UI.",
    categories: ["Engineering", "Machine Learning", "Data Science"],
    tech: ["Python", "Flask", "Alpaca API", "MySQL", "AWS", "TensorFlow (LSTM)", "Optuna"],
    highlights: [
      "Built a full trading workflow: preferences → strategy selection → paper trading execution.",
      "Designed a normalized SQL schema for users, trades, and positions with risk-management support.",
      "Implemented backtesting to evaluate strategies and compare performance across market regimes.",
      "Integrated model experimentation (LSTM + tuning) to support predictive components where appropriate.",
    ],
    links: [
      // Add your real links later
      // { label: "GitHub", href: "https://github.com/YOUR_USERNAME/YOUR_REPO" },
    ],
    featured: true,
  },
  {
    id: "capstone-community-trading",
    title: "Community Trading Algorithm (Capstone)",
    subtitle:
      "Risk-managed, strategy-driven trading approach designed to be accessible to non-technical users.",
    categories: ["Data Science", "Engineering"],
    tech: ["Python", "R", "SQL", "Alpaca API"],
    highlights: [
      "Defined a portfolio approach focused on risk constraints and measurable outcomes.",
      "Designed multiple strategies to test and compare against baseline/index performance.",
      "Implemented data workflows for analysis, visualization, and performance reporting.",
    ],
    featured: true,
  },
  {
    id: "netflix-sentiment-workbench",
    title: "Netflix Sentiment Workbench (NLP Dashboard)",
    subtitle:
      "Streamlit analytics suite for sentiment, clustering, and title exploration with a recommender engine.",
    categories: ["NLP", "Data Science", "Machine Learning"],
    tech: ["Python", "Streamlit", "VADER", "spaCy", "scikit-learn", "Pandas"],
    highlights: [
      "Built a multi-tab Streamlit app with sentiment scoring, title explorer, and genre insights.",
      "Implemented NLP pipelines for cleaning, scoring, and comparing sentiment models.",
      "Added clustering and interactive visualizations for exploration and analysis.",
      "Developed a recommender engine using content similarity and NLP-derived features.",
    ],
    featured: false,
  },
  {
    id: "healthcare-db-architecture",
    title: "Healthcare Database Architecture (HDMS)",
    subtitle:
      "Normalized relational design for clinical data workflows with security-aware modeling.",
    categories: ["Databases", "Engineering", "Research"],
    tech: ["SQL", "ER Modeling", "Normalization", "Constraints", "ICD-10 (concepts)"],
    highlights: [
      "Designed an ER model and normalized schema supporting users, preferences, trades/positions (domain-specific variants).",
      "Applied constraints and relationship modeling to enforce data integrity and reduce redundancy.",
      "Considered healthcare interoperability/security principles in schema decisions (where applicable).",
    ],
    featured: true,
  },
  {
    id: "tweet-party-classifier",
    title: "Political Party Prediction from Tweets",
    subtitle:
      "Neural models predicting party affiliation from tweet text and handle features with regularization experiments.",
    categories: ["Machine Learning", "NLP"],
    tech: ["PyTorch", "TensorFlow", "NLP", "Regularization", "Optimization"],
    highlights: [
      "Built feedforward models using text-only vs text+handle feature sets.",
      "Evaluated dropout/L2 and compared optimizers (SGD, RMSProp, Adam).",
      "Created a fixed vocabulary pipeline and standardized text normalization.",
    ],
  },
  {
    id: "sp500-analytics",
    title: "S&P 500 Market Analytics Platform",
    subtitle:
      "Large-scale analytics across multi-year S&P 500 data with sector comparisons and statistical testing.",
    categories: ["Data Science"],
    tech: ["Python", "R", "Time Series", "Monte Carlo", "Regression"],
    highlights: [
      "Analyzed multi-year S&P 500 data for sector/industry trends and performance comparisons.",
      "Explored sentiment-style features and relationships to price movement (where applicable).",
      "Used Monte Carlo subsampling to evaluate stability and anomalies in results.",
    ],
  },
  {
    id: "cnn-face-recognition",
    title: "CNN Face Recognition System",
    subtitle:
      "Multiple CNN architectures built to surpass classical Eigenfaces with evaluation and error analysis.",
    categories: ["Machine Learning"],
    tech: ["TensorFlow/Keras", "CNNs", "Model Evaluation"],
    highlights: [
      "Designed multiple CNN architectures and compared training configurations/optimizers.",
      "Performed error analysis with visual inspection of correct vs incorrect classifications.",
      "Targeted accuracy improvements beyond a traditional Eigenfaces baseline.",
    ],
  },
  {
    id: "wine-quality-ml",
    title: "Wine Quality Prediction (Model Benchmarking)",
    subtitle:
      "Comparative ML study across multiple model families with performance metrics and visual diagnostics.",
    categories: ["Data Science", "Machine Learning"],
    tech: ["R", "caret", "Random Forest", "KNN", "Regression", "Naive Bayes"],
    highlights: [
      "Benchmarked models across RMSE and classification metrics (precision/recall/F1).",
      "Built an RMarkdown report with clean visuals and evaluation artifacts.",
      "Compared patterns between red vs white wine datasets.",
    ],
  },
  {
    id: "np-completeness-writing",
    title: "NP-Completeness Writing Series (Medium)",
    subtitle:
      "Technical writing explaining computational complexity with real-world examples and accessible framing.",
    categories: ["Writing"],
    tech: ["Technical Writing", "Algorithms", "Complexity Theory"],
    highlights: [
      "Produced content clarifying NP-Complete concepts for general audiences.",
      "Connected theory to practical optimization problems and computational limits.",
    ],
    links: [
      // Add your Medium link(s) later
      // { label: "Write-up", href: "https://medium.com/@YOUR_HANDLE/..." },
    ],
  },
  {
  id: "clinical-nlp-medical-notes",
  title: "Clinical NLP System for Medical Notes",
  subtitle:
    "NLP engine that extracts structured clinical information from physician notes, supporting coding, risk signals, and compliance needs.",
  categories: ["Machine Learning", "NLP", "Databases"],
  tech: [
    "Python",
    "spaCy",
    "BioBERT",
    "MIMIC-IV",
    "i2b2",
    "ICD-10",
    "Evaluation Benchmarks",
    "De-identification",
  ],
  highlights: [
    "Designed a clinical NLP pipeline to extract diseases, medications, and procedures from unstructured notes (NER).",
    "Planned ICD-10 auto-coding workflow to map extracted entities to standardized diagnosis/procedure codes.",
    "Implemented sentiment/risk signal extraction to support downstream triage and analytics use-cases.",
    "Included a de-identification module to reduce PHI exposure and support compliance-oriented engineering.",
    "Defined evaluation benchmarks and an annotation workflow to measure performance and guide iteration.",
  ],
  links: [
    // Add later if you publish code/docs
    // { label: "GitHub", href: "https://github.com/YOUR_USERNAME/YOUR_REPO" },
    // { label: "Write-up", href: "https://..." },
  ],
  featured: true,
  },
  {
  id: "comet-metadata-warehouse",
  title: "Metadata Engineering for Data Warehouse",
  subtitle:
    "Designing a metadata framework to support analytics and machine learning over a small research data warehouse.",
  categories: ["Engineering", "Data Science", "Databases"],
  tech: [
    "Python",
    "SQL",
    "Metadata Modeling",
    "Data Warehousing",
    "Machine Learning Pipelines",
  ],
  highlights: [
    "Designing a metadata schema to describe datasets, attributes, and relationships in a research data warehouse.",
    "Developing a structured approach to make heterogeneous data sources machine-learning ready.",
    "Exploring how metadata can drive automated analysis, validation, and feature discovery workflows.",
    "Building an extensible foundation for analytics and modeling over small, research-oriented data systems.",
  ],
  links: [
    // Intentionally omitted — internal research work
  ],
  },
  {
  id: "worldwide-stock-screener-db",
  title: "Worldwide Stock Screener Database",
  subtitle:
    "Global equities screening database designed for quantitative research, filtering, and strategy discovery.",
  categories: ["Engineering", "Data Science", "Databases"],
  tech: ["SQL", "Python", "Data Modeling", "Financial Analytics", "API Integration"],
  highlights: [
    "Designed a normalized database to support screening across international equities and exchanges.",
    "Built flexible filtering by region/country, exchange, sector/industry, and company fundamentals.",
    "Enabled universe construction for research workflows and downstream backtesting/strategy evaluation.",
    "Structured the system to integrate with API-driven ingestion pipelines for scalable updates.",
  ],
  links: [
    // Add your real links later
    // { label: "GitHub", href: "https://github.com/YOUR_USERNAME/YOUR_REPO" },
    // { label: "Docs", href: "https://..." },
  ],
},
];
