export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      padding: "8rem 4rem 4rem",
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, background: `radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,107,107,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(78,205,196,0.1) 0%, transparent 50%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(255,217,61,0.08) 0%, transparent 50%)` }} />
      <div className="dots-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 620, width: "100%" }}>
        <div className="animate-fadeup" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(255,217,61,0.12)", border: "1px solid rgba(255,217,61,0.3)",
          color: "#FFD93D", padding: "0.4rem 1rem", borderRadius: "9999px",
          fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", marginBottom: "1.5rem",
        }}>
          <span>✦</span> Event & Corporate Host
        </div>

        <h1 className="font-display animate-fadeup-1" style={{
          fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 900,
          lineHeight: 1.05, marginBottom: "1rem",
        }}>
          Anima<br /><span >Gehlot</span>
        </h1>

        <p className="animate-fadeup-2" style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "rgba(255,255,255,0.6)",
          lineHeight: 1.7, marginBottom: "2.5rem", fontWeight: 300, maxWidth: 520,
        }}>
          Captivating audiences, elevating brands, and turning every stage into an
          unforgettable experience — from intimate corporate galas to grand celebrations.
        </p>

        <div className="animate-fadeup-3 btn-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#contact" className="btn-primary">✦ Book Me Now</a>
          <a href="#portfolio" className="btn-secondary">View My Work →</a>
        </div>

        {/* Stats — fixed so they never wrap on mobile */}
        <div className="animate-fadeup-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",  // always 3 equal columns
          gap: "1rem",
          marginTop: "3rem",
        }}>
          {[
            { num: "500+", label: "Events Hosted" },
            { num: "5★", label: "Client Rating" },
            { num: "3+", label: "Years Exp." },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "left" }}>
              <div className="font-display grad-text-gy" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}>{num}</div>
              <div style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.78rem)", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image — hidden on mobile */}
      <div className="hero-image-wrap" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", zIndex: 1 }}>
        <img src="/media/photos/photo2.jpg" alt="Anima Gehlot" style={{
          width: "100%", height: "100%", objectFit: "cover", opacity: 0.55,
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent 40%, #0d0d1a 100%)" }} />
      </div>
    </section>
  );
}
