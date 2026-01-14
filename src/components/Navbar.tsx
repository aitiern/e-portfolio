// src/components/Navbar.tsx
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold text-blue-600">
        E-Portfolio
      </Link>

      <div className="flex gap-6 text-lg">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/research" className={linkClass}>
          Research
        </NavLink>
        <NavLink to="/writing" className={linkClass}>
          Writing
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
