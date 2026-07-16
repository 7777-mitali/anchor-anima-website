import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Services", "Portfolio", "Gallery", "Testimonials"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.2rem 4rem",
        background: scrolled ? "rgba(13,13,26,0.95)" : "rgba(13,13,26,0.7)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.3s",
      }}>
        <div className="font-display grad-text-rg" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
          AG
        </div>

        {/* Desktop Links */}
        <ul style={{
          display: "flex", gap: "2rem", listStyle: "none", alignItems: "center",
          margin: 0, padding: 0,
        }} className="desktop-nav">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={{
                color: "rgba(255,255,255,0.6)", textDecoration: "none",
                fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.04em",
                transition: "color 0.3s",
              }}
                onMouseEnter={e => e.target.style.color = "#FFD93D"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
              >{l}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ padding: "0.5rem 1.4rem", fontSize: "0.9rem" }}>
              Hire Me ✦
            </a>
          </li>
        </ul>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger-btn"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#FAFAFA", fontSize: "1.1rem",
            cursor: "pointer", display: "none",
            width: 40, height: 40, borderRadius: 8,
            alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(13,13,26,0.98)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          padding: "1.5rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "0.2rem",
        }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.75)", textDecoration: "none",
                fontSize: "1rem", fontWeight: 500,
                padding: "0.85rem 1rem", borderRadius: 10,
                transition: "background 0.2s",
                display: "block",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ textAlign: "center", marginTop: "0.75rem" }}>
            Hire Me ✦
          </a>
        </div>
      )}
    </>
  );
}
