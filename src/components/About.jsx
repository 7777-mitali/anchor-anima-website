import { useReveal } from "../hooks/useReveal";
const skills = ["Corporate Events","Award Ceremonies","Product Launches","Conferences","Hindi & English","Live Events","Panel Moderation","Weddings & Galas"];
export default function About() {
  const ref = useReveal();
  return (
    <section id="about" style={{ background: "#1a1a2e", padding: "6rem 4rem" }}>
      <div className="section-tag">✦ About Me</div>
      <div ref={ref} className="reveal about-grid-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", marginTop: "2rem" }}>
        <div style={{ position: "relative" }}>
          <img src="/media/photos/photo10.jpg" alt="Anima Gehlot" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 20, display: "block" }} />
          <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", background: "linear-gradient(135deg, #FFD93D, #FF6B6B)", color: "#0d0d1a", padding: "1.2rem 1.5rem", borderRadius: 16, fontWeight: 700, fontSize: "0.9rem", textAlign: "center", boxShadow: "0 10px 40px rgba(255,107,107,0.3)" }}>
            <div style={{ fontSize: "1.5rem" }}>🎤</div>
            <div>Event Host</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>Since 2021</div>
          </div>
        </div>
        <div>
          <div className="section-tag">✦ My Story</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem" }}>The Voice Behind<br />Every Great Event</h2>
          {["Hi, I'm Anima — a passionate event and corporate host with a flair for connecting people and creating memorable moments. With a natural command of the stage and infectious energy, I bring warmth, professionalism, and spontaneous charm to every event I host.",
            "Whether it's a high-stakes corporate conference, a vibrant product launch, an elegant awards night, or a lively celebration — I adapt seamlessly to every setting, ensuring your audience stays engaged, your brand shines, and your event runs like clockwork.",
            "Fluent in both Hindi and English, I pride myself on making every attendee feel seen, every speaker feel confident, and every client absolutely thrilled with their event."
          ].map((p, i) => <p key={i} style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "1.2rem" }}>{p}</p>)}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
            {skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
