// src/pages/Home.tsx
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { projects } from "../data/projects";
import ProofStrip from "../components/ProofStrip";


export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold text-gray-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Quant Systems • Financial Data Science • Investment Analytics
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Aiden{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Tierney
              </span>
            </h1>

            <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
              Quant Systems Engineer & Applied Data Scientist
            </p>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
              I build data-driven trading, screening, and research platforms for financial
              decision-making. My work focuses on backtesting, risk-aware systems, and
              scalable market analytics.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black transition"
              >
                Explore projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-white transition"
              >
                Contact
              </Link>

              <Link
                to="/about"
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 hover:underline underline-offset-4"
              >
                Read the backstory →
              </Link>
            </div>

            <div className="mt-10">
              <SocialLinks />
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4">
                <p className="text-xs font-semibold text-gray-500">Location</p>
                <p className="mt-1 font-semibold text-gray-900">Indianapolis</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4">
                <p className="text-xs font-semibold text-gray-500">Focus</p>
                <p className="mt-1 font-semibold text-gray-900">Quant Research + Systems</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4">
                <p className="text-xs font-semibold text-gray-500">Strength</p>
                <p className="mt-1 font-semibold text-gray-900">Backtesting + Evaluation</p>
              </div>
            </div>
          </div>

          {/* Right: highlights card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Highlights</h2>
                <span className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 bg-white">
                  Current focus
                </span>
              </div>

              <ul className="mt-5 space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    Building an{" "}
                    <span className="font-semibold text-gray-900">automated trading platform</span>{" "}
                    with backtesting, risk controls, and execution pipelines.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    Designed a{" "}
                    <span className="font-semibold text-gray-900">worldwide stock screener database</span>{" "}
                    for factor-style filtering, universe construction, and strategy research.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                  <span>
                    Strong focus on{" "}
                    <span className="font-semibold text-gray-900">market + fundamentals data modeling</span>{" "}
                    (SQL), reproducible research, and performance evaluation.
                  </span>
                </li>
              </ul>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-500">Primary</p>
                  <p className="mt-1 font-semibold text-gray-900">Research → Build → Evaluate</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-500">Core loop</p>
                  <p className="mt-1 font-semibold text-gray-900">Signals • Risk • Backtests</p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                >
                  See the work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-gray-600">
              A small selection of work that best represents my focus and strengths.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((p) => (
            <div
              key={p.id}
              className="group rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-gray-600">{p.subtitle}</p>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 bg-white">
                  Featured
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-5">
                <Link
                  to="/projects"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
                >
                  Details →
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-4"
                >
                  Work with me →
                </Link>
              </div>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p className="mt-5 text-sm text-gray-500">
                Built with an emphasis on repeatability, evaluation discipline, and systems reliability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-12">
        <div className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight">Backstory</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I’m building a portfolio at the intersection of data science and engineering—where
                strong analysis meets systems that run reliably. I’m most interested in problems that
                involve noisy real-world data, measurable decision-making, and productizing outcomes
                into tools people can actually use.
              </p>

              <div className="mt-6">
                <Link
                  to="/about"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
                >
                  Read more about me →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold">What I’m looking for</h3>
                <p className="mt-3 text-gray-600">
                  Internships, research collaborations, and roles where I can build quant research
                  tooling and data products end-to-end.
                </p>

                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black transition"
                  >
                    Let’s connect
                  </Link>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                  I’m especially interested in teams that care about rigor, evaluation, and clean systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section className="py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-200/70 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aiden Tierney. Built with React, TypeScript, and Tailwind.
          </p>
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
