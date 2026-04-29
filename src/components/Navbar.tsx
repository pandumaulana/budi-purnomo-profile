import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { label: "Beranda", to: "/" },
    { label: "Blog", to: "/blog" },
  ];

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Budi Purnomo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="text-white font-bold text-lg leading-tight hidden sm:block">
              Budi Purnomo
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-brand-mid text-white"
                    : "text-blue-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6285315557788"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 bg-brand-mid text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Konsultasi
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-blue-200 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "bg-brand-mid text-white"
                  : "text-blue-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6285315557788"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 px-4 py-3 bg-brand-mid text-white rounded-lg text-sm font-semibold text-center"
          >
            Konsultasi Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
