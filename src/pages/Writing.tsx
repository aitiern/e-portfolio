import { writingItems } from "../data/writing";

export default function Writing() {
  // Sort featured first, then alphabetically
  const visible = [...writingItems].sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;
    if (bf !== af) return bf - af;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Writing</h1>
        <p className="mt-2 text-gray-600 max-w-3xl">
          A collection of personal writing and technical reflections on the problems that
          interest me — from hard computational questions to how organizations and
          incentives really work. These pieces capture how I think, learn, and challenge
          assumptions.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visible.map((w) => (
          <article
            key={w.id}
            className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">{w.title}</h2>
                <p className="mt-1 text-gray-600">
                  {w.outlet} • <span className="text-gray-500">{w.timeframe}</span>
                </p>
              </div>

              {w.featured ? (
                <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full border bg-gray-50">
                  Featured
                </span>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {w.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">{w.summary}</p>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-800">Key points</h3>
              <ul className="mt-2 space-y-2 list-disc pl-5 text-gray-700">
                {w.highlights.map((h, idx) => (
                  <li key={`${w.id}-h-${idx}`}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {w.links.map((l) => (
                <a
                  key={`${w.id}-${l.label}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-50 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
