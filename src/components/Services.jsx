import { useRef } from "react";
import { useReveal } from "../hooks/useReveal";

const services = [
  { icon: "🏢", title: "Corporate Hosting", desc: "Conferences, town halls, panel discussions, and seminars handled with precision and professional grace." },
  { icon: "💍", title: "Destination Weddings", desc: "From intimate mehendis to grand receptions — seamless, joyful hosting wherever your celebration takes you." },
  { icon: "🎪", title: "Public Events", desc: "Large-scale public gatherings and community events hosted with confidence, clarity, and crowd-winning energy." },
  { icon: "🎊", title: "Festival Celebrations", desc: "Cultural and festive occasions brought to life with warmth, tradition, and infectious enthusiasm." },
  { icon: "🏆", title: "Award Ceremonies", desc: "From intimate recognition nights to grand gala award shows — every winner's moment shines." },
  { icon: "🚀", title: "Product Launches", desc: "Dynamic hosting that keeps energy high and your audience thoroughly captivated." },
  { icon: "🎉", title: "Social Events & Galas", desc: "Weddings, anniversaries, cultural events — warmth and a personal touch every time." },
  { icon: "🎙️", title: "Panel Moderation", desc: "Focused, balanced, engaging conversations — every panelist and audience member feels heard." },
  { icon: "📸", title: "Brand Campaigns", desc: "Brand ambassadorship and spokesperson roles — your story told with authenticity and style." },
  
];

export default function Services() {
  const ref = useReveal();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section id="services" style={{ padding: "5rem 0" }}>
      {/* Header */}
      <div style={{ padding: "0 1.5rem 0 4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div className="section-tag">✦ What I Do</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700 }}>Services I Offer</h2>
        </div>
        {/* Arrow buttons — desktop */}
        <div style={{ display: "flex", gap: "0.5rem" }} className="scroll-arrows">
          {["‹", "›"].map((arrow, i) => (
            <button key={arrow} onClick={() => scroll(i === 0 ? -1 : 1)} style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
              color: "white", fontSize: "1.3rem", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#FF6B6B"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
            >{arrow}</button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        style={{
          display: "flex", gap: "1rem",
          overflowX: "auto", scrollSnapType: "x mandatory",
          scrollbarWidth: "none", msOverflowStyle: "none",
          padding: "0.5rem 4rem 1.5rem",
          cursor: "grab",
        }}
        onMouseDown={e => {
          const el = scrollRef.current;
          el.dataset.down = "true";
          el.dataset.startX = e.pageX - el.offsetLeft;
          el.dataset.scrollLeft = el.scrollLeft;
        }}
        onMouseMove={e => {
          if (scrollRef.current?.dataset.down !== "true") return;
          const x = e.pageX - scrollRef.current.offsetLeft;
          const walk = (x - scrollRef.current.dataset.startX) * 1.5;
          scrollRef.current.scrollLeft = scrollRef.current.dataset.scrollLeft - walk;
        }}
        onMouseUp={e => scrollRef.current && (scrollRef.current.dataset.down = "false")}
        onMouseLeave={e => scrollRef.current && (scrollRef.current.dataset.down = "false")}
      >
        {services.map(({ icon, title, desc }) => (
          <div key={title} className="card" style={{
            minWidth: 260, maxWidth: 280, flexShrink: 0,
            scrollSnapAlign: "start",
          }}>
            <span style={{ fontSize: "2.2rem", marginBottom: "1rem", display: "block" }}>{icon}</span>
            <h3 className="font-display" style={{ fontSize: "1.1rem", marginBottom: "0.6rem" }}>{title}</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.7 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Scroll hint on mobile */}
      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", marginTop: "0.5rem" }} className="mobile-hint">
        ← swipe to see more →
      </p>
    </section>
  );
}
