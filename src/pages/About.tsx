import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-6">
      {/* Header */}
      <header className="mb-12">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          About
        </p>
        <h1 className="mt-2 text-4xl font-bold">Aiden Tierney</h1>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Applied Data Science (M.S.) student and quant systems engineer based in{" "}
          <span className="font-semibold">Indianapolis, Indiana</span>. I build
          financial research, screening, and trading platforms that turn market data
          into actionable investment signals.
        </p>

        <div className="mt-6">
          <SocialLinks />
        </div>
      </header>

      {/* Value Proposition */}
      <section className="mb-12">
        <div className="p-6 border rounded-2xl bg-white shadow-sm">
          <h2 className="text-2xl font-semibold">What I do</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            I design and build end-to-end financial analytics systems — from data ingestion
            and modeling to backtesting, evaluation, and execution. My work sits at the
            intersection of quantitative research, financial engineering, and
            software systems.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            I focus on problems where data, markets, and decision-making meet: security
            selection, risk modeling, strategy evaluation, and scalable research
            infrastructure.
          </p>
        </div>
      </section>

      {/* Story & Career Direction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold">My story and goals</h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I became interested in finance through quantitative modeling and market analytics —
          where performance is measurable, assumptions are tested, and systems must operate
          under real constraints.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Over time, I gravitated toward building full research pipelines: market databases,
          screening engines, backtesting frameworks, and trading infrastructure. I enjoy
          working on problems where clean data engineering and rigorous evaluation directly
          impact investment decisions.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          My long-term goal is to work on a quantitative investing or private equity analytics
          team, contributing to strategy research, portfolio construction, and
          decision-support platforms.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold">Timeline</h2>

        <div className="mt-6 space-y-6 border-l-2 pl-6">
          <div>
            <p className="text-sm text-gray-500">2024 – Present</p>
            <h3 className="text-xl font-semibold">M.S. in Applied Data Science</h3>
            <p className="text-gray-700">
              Indiana University Indianapolis — Focus on machine learning, databases,
              cloud computing, and applied analytics.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">2023 – 2024</p>
            <h3 className="text-xl font-semibold">Research Assistant — COMET Lab</h3>
            <p className="text-gray-700">
              Worked on metadata systems, national indicator datasets, and data
              standardization projects for large-scale research reporting.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">2021 – 2024</p>
            <h3 className="text-xl font-semibold">B.S. in Applied Data Science</h3>
            <p className="text-gray-700">
              Indiana University Indianapolis — Concentration in analytics, machine
              learning, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold">Skills & strengths</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Quant Engineering</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              <li>Trading systems, backtesting frameworks, execution pipelines</li>
              <li>Market data ingestion, normalization, and modeling</li>
              <li>Risk-aware system design and evaluation</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Investment Analytics</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              <li>Global stock screening and universe construction</li>
              <li>Fundamentals and factor-style research</li>
              <li>Performance evaluation and attribution</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Data & Modeling</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              <li>Python research pipelines</li>
              <li>SQL market databases</li>
              <li>Machine learning experimentation</li>
            </ul>
          </div>

          <div className="p-6 border rounded-2xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Strengths</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              <li>Reproducible research and evaluation discipline</li>
              <li>End-to-end system delivery</li>
              <li>Data → decision workflows</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold">What drives me</h2>
        <div className="mt-4 p-6 border rounded-2xl bg-white shadow-sm">
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Discipline:</span> I value rigorous research,
              clean data, and testable assumptions.
            </li>
            <li>
              <span className="font-semibold">Ownership:</span> I enjoy building full systems,
              not just individual components.
            </li>
            <li>
              <span className="font-semibold">Impact:</span> I focus on tools that improve
              real financial decision-making.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16">
        <div className="p-6 border rounded-2xl bg-gray-900 text-white">
          <h2 className="text-2xl font-semibold">Let’s connect</h2>
          <p className="mt-3 text-gray-200">
            I’m currently seeking quant research, trading, and investment analytics roles
            where I can contribute to data-driven decision systems.
          </p>
          <div className="mt-5">
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

