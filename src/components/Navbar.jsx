import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">S</span>
          <span>
            <strong>SPICE GARDEN</strong>
            <small>A TASTE OF TRADITION</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}