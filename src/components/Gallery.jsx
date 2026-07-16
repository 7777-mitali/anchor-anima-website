import { useState, useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";

const photos = [
  { src: "/media/photos/photo2.jpg", alt: "Anima on Stage" },
  { src: "/media/photos/photo3.jpg", alt: "Corporate Event" },
  { src: "/media/photos/photo4.jpg", alt: "Award Ceremony" },
  { src: "/media/photos/photo5.jpg", alt: "Product Launch" },
  { src: "/media/photos/photo6.jpg", alt: "Gala Night" },
  { src: "/media/photos/photo7.jpg", alt: "Panel Moderation" },
  { src: "/media/photos/photo8.jpg", alt: "Cultural Event" },
  { src: "/media/photos/photo9.jpg", alt: "Brand Campaign" },
  { src: "/media/photos/photo10.jpg", alt: "Live Event" },
  { src: "/media/photos/photo11.jpg", alt: "Special Event" },
];

export default function Gallery() {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const autoRef = useRef(null);

  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCurrent(c => (c + 1) % photos.length), 3500);
  };

  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current); }, []);

  const goTo = (i) => { setCurrent(i); startAuto(); };
  const prev = () => goTo((current - 1 + photos.length) % photos.length);
  const next = () => goTo((current + 1) % photos.length);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowRight") setLightbox(i => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setLightbox(i => (i - 1 + photos.length) % photos.length);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section id="gallery" style={{ padding: "5rem 0", background: "#0d0d1a" }}>
      <div style={{ padding: "0 4rem", marginBottom: "2rem" }}>
        <div className="section-tag">✦ Gallery</div>
        <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, marginBottom: "0.4rem" }}>
          Behind the Mic
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)" }}>Real moments, real energy — click to explore.</p>
      </div>

      <div ref={ref} className="reveal" style={{ position: "relative", width: "100%" }}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

        {/* 
          Desktop: fixed height 75vh, contain so full photo shows, dark bg on sides 
          Mobile:  auto height, contain, portrait friendly
        */}
        <div style={{
          width: "100%",
          height: "75vh",
          position: "relative",
          overflow: "hidden",
          background: "#0a0a14",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} onClick={() => setLightbox(current)}>

          {photos.map((photo, i) => (
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              style={{
                position: "absolute",
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.6s ease",
              }}
            />
          ))}

          {/* Subtle side gradients to blend edges nicely */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,20,0.4) 0%, transparent 15%, transparent 85%, rgba(10,10,20,0.4) 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,26,0.8) 0%, transparent 30%)", pointerEvents: "none" }} />

          {/* Caption */}
          <div style={{ position: "absolute", bottom: "1.2rem", left: "2rem", zIndex: 2 }}>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginBottom: "0.2rem" }}>{current + 1} / {photos.length}</div>
            <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{photos[current].alt}</div>
          </div>

          {/* Zoom hint */}
          <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(0,0,0,0.5)", borderRadius: "9999px", padding: "0.25rem 0.75rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", pointerEvents: "none", zIndex: 2 }}>
            🔍 click to zoom
          </div>
        </div>

        {/* Prev / Next */}
        {[
          { label: "‹", onClick: prev, pos: { left: "1rem" } },
          { label: "›", onClick: next, pos: { right: "1rem" } },
        ].map(({ label, onClick, pos }) => (
          <button key={label} onClick={onClick} style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)", ...pos,
            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
            color: "white", width: 44, height: 44, borderRadius: "50%",
            fontSize: "1.5rem", cursor: "pointer", zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,107,107,0.5)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >{label}</button>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div style={{
        display: "flex", gap: "0.5rem",
        overflowX: "auto", scrollbarWidth: "none",
        padding: "1rem 4rem",
      }}>
        {photos.map((photo, i) => (
          <div key={i} onClick={() => goTo(i)} style={{
            width: 72, height: 52, flexShrink: 0,
            borderRadius: 8, overflow: "hidden", cursor: "pointer",
            border: i === current ? "2px solid #FF6B6B" : "2px solid rgba(255,255,255,0.1)",
            opacity: i === current ? 1 : 0.5,
            transition: "all 0.3s",
            transform: i === current ? "scale(1.08)" : "scale(1)",
            background: "#000",
          }}>
            <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "0.25rem" }}>
        {photos.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? 22 : 7, height: 7, borderRadius: 9999,
            background: i === current ? "linear-gradient(135deg, #FF6B6B, #FFD93D)" : "rgba(255,255,255,0.2)",
            border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0,
          }} />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.96)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1rem",
        }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 44, height: 44, borderRadius: "50%", fontSize: "1.1rem", cursor: "pointer" }}>✕</button>
          <button onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + photos.length) % photos.length); }} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 44, height: 44, borderRadius: "50%", fontSize: "1.5rem", cursor: "pointer" }}>‹</button>
          <img src={photos[lightbox].src} alt={photos[lightbox].alt} onClick={e => e.stopPropagation()} style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain", borderRadius: 12 }} />
          <button onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % photos.length); }} style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: 44, height: 44, borderRadius: "50%", fontSize: "1.5rem", cursor: "pointer" }}>›</button>
          <div style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.1)", color: "white", padding: "0.3rem 1rem", borderRadius: "9999px", fontSize: "0.82rem" }}>{lightbox + 1} / {photos.length}</div>
        </div>
      )}
    </section>
  );
}
