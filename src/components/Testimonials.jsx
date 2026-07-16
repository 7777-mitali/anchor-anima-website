import { useRef } from "react";
import { useReveal } from "../hooks/useReveal";

const testimonials = [
  { name: "Rahul Khanna", role: "Head of Marketing, TechCorp India", initials: "RK", text: "Anima was absolutely phenomenal at our annual conference. She kept the energy going all day, handled unexpected changes like a pro, and received so many compliments from our guests. Will definitely book again!" },
  { name: "Pooja Sharma", role: "Brand Manager, LaunchPad Events", initials: "PS", text: "We hired Anima for our product launch and she was a complete natural. Her bilingual skills, stage presence, and ability to engage a large crowd made our launch event truly memorable." },
  { name: "Arjun Mehta", role: "Director, Elite Events Mumbai", initials: "AM", text: "From the moment Anima stepped on stage at our awards gala, she owned the room. Professional, warm, funny at just the right moments — she's exactly what every event needs. Highly recommend!" },
  { name: "Sneha Agarwal", role: "Event Manager, Celebrations Co.", initials: "SA", text: "Anima brought so much energy and warmth to our cultural evening. The audience loved her! Her ability to switch between Hindi and English seamlessly was impressive. Truly a gem!" },
];

export default function Testimonials() {
  const ref = useReveal();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="testimonials" style={{ background: "#1a1a2e", padding: "5rem 0" }}>
      {/* Header */}
      <div style={{ padding: "0 1.5rem 0 4rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <div className="section-tag">✦ Kind Words</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700 }}>What Clients Say</h2>
        </div>
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

      {/* Horizontal scroll */}
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
        onMouseUp={() => scrollRef.current && (scrollRef.current.dataset.down = "false")}
        onMouseLeave={() => scrollRef.current && (scrollRef.current.dataset.down = "false")}
      >
        {testimonials.map(({ name, role, initials, text }) => (
          <div key={name} style={{
            minWidth: 300, maxWidth: 320, flexShrink: 0,
            scrollSnapAlign: "start",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20, padding: "2rem", position: "relative",
          }}>
            <div className="font-display" style={{ fontSize: "4rem", lineHeight: 1, color: "#FF6B6B", opacity: 0.25, position: "absolute", top: "0.5rem", left: "1.2rem" }}>"</div>
            <div style={{ color: "#FFD93D", fontSize: "0.9rem", marginBottom: "1rem" }}>★★★★★</div>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem", fontStyle: "italic" }}>{text}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B6B, #FFD93D)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", color: "#0d0d1a", flexShrink: 0 }}>{initials}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.88rem" }}>{name}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>{role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", marginTop: "0.5rem" }} className="mobile-hint">
        ← swipe to see more →
      </p>
    </section>
  );
}
