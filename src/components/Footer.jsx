export default function Footer() {
  const links = ["About", "Services", "Portfolio", "Gallery", "Testimonials", "Contact"];

  return (
    <footer style={{
      background: "#0d0d1a", borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "3rem 4rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
        <div>
          <div className="font-display grad-text-rg" style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.4rem" }}>
            Anima Gehlot
          </div>
          <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
            Event & Corporate Host · India
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "#FFD93D"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
            >
              {l}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            { href: "https://www.instagram.com/anchor_anima?igsh=Zmg1ZzJ5Nzdzcmgy&utm_source=qr", label: "📸" },
            { href: "tel:+916376886806", label: "📞" },
            { href: "mailto:animagehlot06@gmail.com", label: "✉️" },
          ].map(({ href, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", textDecoration: "none", transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FF6B6B"; e.currentTarget.style.borderColor = "#FF6B6B"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "2rem", paddingTop: "1.5rem",
        textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "0.8rem",
      }}>
        © 2024 Anima Gehlot. All rights reserved. Made by Mitali Soni.
      </div>
    </footer>
  );
}
