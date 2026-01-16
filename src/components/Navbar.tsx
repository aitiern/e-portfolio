// src/components/Navbar.tsx
import { NavLink, Link } from "react-router-dom";

const navItemBase =
  "text-sm font-semibold px-3 py-2 rounded-xl transition-colors";
const navItemInactive =
  "text-gray-600 hover:text-gray-900 hover:bg-white/60";
const navItemActive =
  "text-gray-900 bg-white/70 border border-gray-200 shadow-sm";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur-xl bg-white/70 border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 shadow-sm" />
            <div className="leading-tight">
              <p className="text-sm font-extrabold tracking-tight">Aiden Tierney</p>
              <p className="text-xs text-gray-500 -mt-0.5">
                Quant Systems • Data Science
              </p>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-2">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${navItemBase} ${isActive ? navItemActive : navItemInactive}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                `${navItemBase} ${isActive ? navItemActive : navItemInactive}`
              }
            >
              Research
            </NavLink>
            <NavLink
              to="/writing"
              className={({ isActive }) =>
                `${navItemBase} ${isActive ? navItemActive : navItemInactive}`
              }
            >
              Writing
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navItemBase} ${isActive ? navItemActive : navItemInactive}`
              }
            >
              Contact
            </NavLink>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black transition"
            >
              Let’s connect
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
