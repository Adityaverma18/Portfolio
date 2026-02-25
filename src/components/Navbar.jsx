import { NavLink } from "react-router-dom";
import { navLinks, resume } from "../assets/assets.js";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <h1 className="text-3xl font-bold bg-linear-to-r from-white via-orange-300 to-pink-400 bg-clip-text text-transparent">
          Aditya Verma
        </h1>

        {/* Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Resume Button */}
          <a
            href={resume}
            download
            className="px-4 py-2 border border-orange-500 text-sm rounded-full text-white hover:bg-orange-500 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
