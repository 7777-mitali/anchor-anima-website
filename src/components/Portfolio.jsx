import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const videos = [
  { id: "Z9P94Inzukg", title: "Event Hosting Reel" },
  { id: "yx1X0W2oCco", title: "Corporate Conference" },
  { id: "CnLv54Y2--g", title: "Award Ceremony" },
  { id: "JWjFGBeFr3Y", title: "Product Launch" },
  { id: "bpS-jCoM9rI", title: "Gala Night" },
  { id: "1FIZ7auoNwE", title: "Cultural Event" },
  { id: "HU_HbAdp4dc", title: "Special Event" },
];

const brands = ["Corporate Conferences", "Product Launches", "Award Nights", "College Events", "Cultural Festivals", "Brand Activations"];

const clientBase = [
  "Central Government (Khelo India)",
  "State Government",
  "Corporate Giants (The Times of India, Tanishq, TATA Motors, Philips, L.G.)",
  "Retail Sector (Kirana King)",
  "Real Estate Sector (Mansukh, Dream Plus, Ganesham Realty)",
  "NGOs (We the Women of Rajasthan, Sarvabhoot Kalyanam)",
  "Education Sector (Classes 24)",
];

const recognisedBy = ["CAPSI", "Sarvabhoot Kalyanam", "Dream Plus", "Lakshmi Green Energy"];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const ref = useReveal();

  return (
    <section id="portfolio" style={{ background: "#1a1a2e", padding: "6rem 4rem" }}>
      <div className="section-tag">✦ My Work</div>
      <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, marginBottom: "0.75rem" }}>
        Portfolio & Showreel
      </h2>
      <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem" }}>
        Watch Anima in action — real events, real energy.
      </p>

      <div ref={ref} className="reveal">
        {/* Main Video Player */}
        <div style={{
          width: "100%", aspectRatio: "9/16",
          maxHeight: "70vh", maxWidth: 400,
          margin: "0 auto",
          borderRadius: 20, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          background: "#000",
        }}>
          <iframe
            key={active}
            src={`https://www.youtube.com/embed/${videos[active].id}?autoplay=1&rel=0&modestbranding=1`}
            title={videos[active].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
        </div>

        {/* Currently playing label */}
        <p style={{ textAlign: "center", marginTop: "1rem", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
          ▶ Now Playing: <span style={{ color: "#FFD93D", fontWeight: 600 }}>{videos[active].title}</span>
        </p>

        {/* Thumbnail strip */}
        <div
          className="thumb-strip"
          style={{
            display: "flex", gap: "0.75rem", marginTop: "1.5rem",
            overflowX: "auto", paddingBottom: "0.5rem",
            scrollSnapType: "x proximity",
            scrollbarWidth: "none",
            justifyContent: "center",
          }}
        >
          {videos.map((video, i) => (
            <div
              key={video.id}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0, cursor: "pointer",
                scrollSnapAlign: "center",
                borderRadius: 12, overflow: "hidden",
                border: i === active
                  ? "2px solid #FF6B6B"
                  : "2px solid rgba(255,255,255,0.1)",
                opacity: i === active ? 1 : 0.55,
                transition: "all 0.3s",
                transform: i === active ? "scale(1.05)" : "scale(1)",
                background: "#000",
                width: 100, height: 160,
                position: "relative",
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Play icon overlay */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: i === active ? "rgba(255,107,107,0.3)" : "rgba(0,0,0,0.3)",
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: i === active ? "#FF6B6B" : "rgba(255,255,255,0.8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", color: i === active ? "white" : "#000",
                  paddingLeft: 2,
                }}>▶</div>
              </div>
              {/* Title */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                padding: "1rem 0.4rem 0.4rem",
                fontSize: "0.65rem", color: "white", textAlign: "center", lineHeight: 1.3,
              }}>
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div style={{ marginTop: "3.5rem" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>
          Brands & Events I've Worked With
        </p>
        <div className="chip-row" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {brands.map(b => <div key={b} className="logo-chip">{b}</div>)}
        </div>
      </div>

      {/* Client Base */}
      <div style={{ marginTop: "3.5rem" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>
          Client Base
        </p>
        <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.2rem", maxWidth: 720 }}>
          Anchored high-profile national and state government events (e.g., Khelo India) and corporate shows for premium brands like The Times of India, Philips, Tanishq, Tata Motors, and L.G. — alongside multiple retail and real estate sector engagements.
        </p>
        <div className="chip-row" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {clientBase.map(c => <div key={c} className="logo-chip">{c}</div>)}
        </div>
      </div>

      {/* Recognised By */}
      <div style={{ marginTop: "3.5rem" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>
          Recognised By
        </p>
        <div className="chip-row" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {recognisedBy.map(r => <div key={r} className="logo-chip">{r}</div>)}
        </div>
      </div>
    </section>
  );
}
