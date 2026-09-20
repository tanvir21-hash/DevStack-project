import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo-text.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleNavClick = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-1.5 text-ink transition hover:bg-surface md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
            <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
        </div>

        
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`text-sm font-medium transition hover:text-accent ${
                  active === link.label ? "text-accent" : "text-body"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="px-2 text-sm font-medium text-ink transition hover:text-accent">
            Sign In
          </button>
          <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition hover:opacity-90 sm:px-5">
            Sign Up
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-line bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-surface ${
                  active === link.label ? "text-accent" : "text-body"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
