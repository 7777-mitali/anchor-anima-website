export default function SocialFloat() {
  const socials = [
    { href: "https://www.instagram.com/anchor_anima?igsh=Zmg1ZzJ5Nzdzcmgy&utm_source=qr", icon: "📸", label: "Instagram" },
    { href: "tel:+916376886896", icon: "📞", label: "Call" },
    { href: "mailto:animagahlot96@gmail.com", icon: "✉️", label: "Email" },
  ];

  return (
    <div className="social-float-wrap" style={{
      position: "fixed", right: "1.5rem", top: "50%",
      transform: "translateY(-50%)", display: "flex",
      flexDirection: "column", gap: "0.75rem", zIndex: 50,
    }}>
      {socials.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          title={label}
          style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1rem", textDecoration: "none",
            transition: "all 0.3s", cursor: "pointer",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#FF6B6B";
            e.currentTarget.style.borderColor = "#FF6B6B";
            e.currentTarget.style.transform = "scale(1.15)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
