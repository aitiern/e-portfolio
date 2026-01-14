// src/pages/Home.tsx
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold tracking-wide text-gray-500">
              Quant Systems Engineering • Financial Data Science • Investment Analytics
            </p>

            <h1 className="mt-3 text-5xl font-bold leading-tight">
              Aiden Tierney
            </h1>

            <p className="mt-5 text-xl font-semibold text-gray-800">
              Quant Systems Engineer & Applied Data Scientist
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I build data-driven trading, screening, and research platforms for financial
              decision-making. My work focuses on backtesting, risk-aware systems, and
              scalable market analytics.
            </p>

            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>

          {/* Highlights panel */}
          <div className="lg:col-span-5">
            <div className="p-6 border rounded-2xl shadow-sm bg-white">
              <h2 className="text-lg font-semibold">Highlights</h2>

              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                  <span>
                    Building an{" "}
                    <span className="font-semibold">automated trading platform</span>{" "}
                    with backtesting, risk controls, and execution pipelines.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                  <span>
                    Designed a{" "}
                    <span className="font-semibold">worldwide stock screener database</span>{" "}
                    for factor-style filtering, universe construction, and strategy research.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900 shrink-0" />
                  <span>
                    Strong focus on{" "}
                    <span className="font-semibold">market + fundamentals data modeling</span>{" "}
                    (SQL), reproducible research, and performance evaluation.
                  </span>
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-gray-50 border">
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="font-semibold">Quant Research + Systems</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border">
                  <p className="text-sm text-gray-500">Strength</p>
                  <p className="font-semibold">Backtesting + Evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 border-t">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="mt-2 text-gray-600">
              A small selection of work that best represents my focus and strengths.
            </p>
          </div>

          <Link to="/projects" className="text-sm font-semibold hover:underline">
            View all projects →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((p) => (
            <div
              key={p.id}
              className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-gray-600">{p.subtitle}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-gray-50">
                  Featured
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t: string) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4">
                <Link to="/projects" className="text-sm font-semibold hover:underline">
                  Details →
                </Link>
                <Link to="/contact" className="text-sm font-semibold hover:underline">
                  Work with me →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-12 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold">Backstory</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I’m building a portfolio at the intersection of data science and engineering—where
              strong analysis meets systems that run reliably. I’m most interested in problems that
              involve noisy real-world data, measurable decision-making, and productizing outcomes
              into tools people can actually use.
            </p>

            <div className="mt-6">
              <Link to="/about" className="text-sm font-semibold hover:underline">
                Read more about me →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="text-lg font-semibold">What I’m looking for</h3>
              <p className="mt-3 text-gray-600">
                Internships, research collaborations, and roles where I can build data products and
                analytical systems end-to-end.
              </p>

              <div className="mt-5">
                <Link
                  to="/contact"
                  className="inline-block px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition"
                >
                  Let’s connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section className="py-10 border-t">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aiden Tierney. Built with React, TypeScript, and Tailwind.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
