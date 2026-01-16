import { Link } from "react-router-dom";

export default function ProofStrip() {
  return (
    <section className="mt-12 border border-neutral-800 rounded-xl p-6 bg-neutral-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">

        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-white">
            Building production-grade ML, data, and trading systems
          </h3>
          <p className="text-neutral-400 mt-2">
            Specialized in financial systems, applied machine learning, NLP analytics, and data platform architecture.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end md:col-span-2">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-neutral-700 text-white hover:border-white transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/aitiern"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-neutral-700 text-white hover:border-white transition"
          >
            GitHub
          </a>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition"
          >
            Contact
          </Link>
        </div>

      </div>
    </section>
  );
}
