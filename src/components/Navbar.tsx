import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Technologies", "Projects", "About", "Contact"];
  const base = import.meta.env.BASE_URL;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="hidden md:flex items-center gap-2">
          <img
            src={`${base}logo-text.png`}
            alt="Dev Stack"
            className="h-8"
          />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        
        <div className="md:hidden flex items-center gap-1.5">
          <img
            src={`${base}logo-text.png`}
            alt="Dev Stack"
            className="h-6"
          />
        </div>

       
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-orange-500 transition">
              {link}
            </a>
          ))}
        </div>

        
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-700 hover:text-orange-500 transition">
            Sign In
          </button>
          <button className="brand-gradient text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition">
            Sign Up
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-4 py-4 border-t border-gray-200 bg-white text-sm">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-orange-500"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}