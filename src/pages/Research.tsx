import { useMemo, useState } from "react";
import { researchItems } from "../data/research";

type Theme = "All" | "Macro" | "Micro" | "NLP";

function getTheme(item: { focusAreas: string[]; title: string }): Theme {
  const text = (item.title + " " + item.focusAreas.join(" ")).toLowerCase();
  if (text.includes("macro")) return "Macro";
  if (text.includes("micro")) return "Micro";
  if (text.includes("nlp") || text.includes("clinical")) return "NLP";
  return "All";
}

function statusPill(status: string) {
  const base = "text-xs font-semibold px-3 py-1 rounded-full border";
  if (status === "In progress") return `${base} bg-gray-900 text-white border-gray-900`;
  if (status === "Ongoing") return `${base} bg-gray-50 text-gray-800`;
  return `${base} bg-white text-gray-800`;
}

export default function Research() {
  const [theme, setTheme] = useState<Theme>("All");

  const visible = useMemo(() => {
    if (theme === "All") return researchItems;
    return researchItems.filter((item) => getTheme(item) === theme);
  }, [theme]);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Research</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Independent research focused on macroeconomic regimes, market structure, and
            practical implications for investing and decision-making. I emphasize clear
            hypotheses, repeatable analysis, and evaluation discipline.
          </p>
        </div>

        {/* Theme filters */}
        <div className="flex flex-wrap gap-2">
          {(["All", "Macro", "Micro", "NLP"] as Theme[]).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-4 py-2 rounded-lg border text-sm transition ${
                theme === t ? "bg-gray-900 text-white" : "hover:bg-gray-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Research philosophy */}
      <section className="mt-10">
        <div className="p-6 border rounded-2xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">Research philosophy</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            I treat research like an engineering process: define a hypothesis, build a repeatable
            method, and evaluate results with the same discipline you would apply to a production system.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gray-50 border">
              <p className="text-sm text-gray-500">1) Hypothesis</p>
              <p className="font-semibold">Clear question</p>
              <p className="text-sm text-gray-600 mt-1">
                Define what should be true and what would falsify it.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border">
              <p className="text-sm text-gray-500">2) Method</p>
              <p className="font-semibold">Repeatable analysis</p>
              <p className="text-sm text-gray-600 mt-1">
                Use consistent definitions, inputs, and controls.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border">
              <p className="text-sm text-gray-500">3) Evaluation</p>
              <p className="font-semibold">Decision-grade results</p>
              <p className="text-sm text-gray-600 mt-1">
                Focus on robustness, drawdowns, and stability—not just averages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visible.map((item) => (
          <article
            key={item.id}
            className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Title + Meta */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-1 text-gray-600">
                  {item.org} • <span className="text-gray-500">{item.timeframe}</span>
                </p>
              </div>
              <span className={statusPill(item.status)}>{item.status}</span>
            </div>

            {/* Focus Areas */}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.focusAreas.map((area) => (
                <span key={area} className="text-xs px-3 py-1 rounded-full bg-gray-100">
                  {area}
                </span>
              ))}
            </div>

            {/* Summary */}
            <p className="mt-4 text-gray-700 leading-relaxed">{item.summary}</p>

            {/* Contributions */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-800">Research contributions</h3>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                {item.contributions.map((c, idx) => (
                  <li key={`${item.id}-c-${idx}`}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Methods & Tools */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-800">Methods & tools</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.methodsTools.map((tool) => (
                  <span key={tool} className="text-xs px-3 py-1 rounded-full border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional expanders */}
            <div className="mt-5 space-y-3">
              {item.questions && item.questions.length > 0 ? (
                <details className="p-4 rounded-xl border bg-gray-50">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-800">
                    Current questions
                  </summary>
                  <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-700">
                    {item.questions.map((q, idx) => (
                      <li key={`${item.id}-q-${idx}`}>{q}</li>
                    ))}
                  </ul>
                </details>
              ) : null}

              {item.outputs && item.outputs.length > 0 ? (
                <details className="p-4 rounded-xl border bg-gray-50">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-800">
                    Outputs
                  </summary>
                  <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-700">
                    {item.outputs.map((o, idx) => (
                      <li key={`${item.id}-o-${idx}`}>
                        <span className="font-semibold">{o.label}</span>
                        {o.detail ? <span className="text-gray-600"> — {o.detail}</span> : null}
                        {o.href ? (
                          <>
                            {" "}
                            <a
                              href={o.href}
                              target="_blank"
                              rel="noreferrer"
                              className="underline text-gray-800 hover:text-black"
                            >
                              (link)
                            </a>
                          </>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}
            </div>

            {/* Optional links */}
            {item.links && item.links.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={`${item.id}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
