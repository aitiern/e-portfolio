// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Soft tech gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="fixed inset-0 -z-10 opacity-60 [background:radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />

      <Navbar />

      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
