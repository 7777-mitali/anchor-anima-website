import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_260b6ui";
const TEMPLATE_ID = "template_vbnjx4q";
const PUBLIC_KEY = "frYqebPI7dXq8-WWW";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      phone: form.phone || "Not provided",
      event_type: form.eventType || "Not specified",
      event_date: form.date || "Not specified",
      location: form.location || "Not specified",
      message: form.message || "No message added",
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", eventType: "", date: "", location: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const sendWhatsApp = () => {
    const animaNumber = "916376886806";
    const message =
      `🎤 *New Enquiry from Your Website!*\n\n` +
      `👤 *Name:* ${form.name || "Not provided"}\n` +
      `📧 *Email:* ${form.email || "Not provided"}\n` +
      `📞 *Phone:* ${form.phone || "Not provided"}\n` +
      `🎉 *Event Type:* ${form.eventType || "Not specified"}\n` +
      `📅 *Event Date:* ${form.date || "Not specified"}\n` +
      `📍 *Location:* ${form.location || "Not specified"}\n\n` +
      `💬 *Message:*\n${form.message || "No message added"}\n\n` +
      `_Sent via animagehlot.com_`;
    window.open(`https://wa.me/${animaNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const contacts = [
    { icon: "📞", label: "Phone / WhatsApp", value: "+91 63768 86806", href: "tel:+916376886806", color: "rgba(255,107,107,0.15)" },
    { icon: "✉️", label: "Email", value: "animagahlot06@gmail.com", href: "mailto:animagahlot06@gmail.com", color: "rgba(78,205,196,0.15)" },
    { icon: "📸", label: "Instagram", value: "@anchor_anima", href: "https://www.instagram.com/anchor_anima?igsh=Zmg1ZzJ5Nzdzcmgy&utm_source=qr", color: "rgba(168,85,247,0.15)" },
  ];

  return (
    <section id="contact" style={{ padding: "6rem 4rem" }}>
      <div className="section-tag">✦ Get in Touch</div>
      <h2 className="font-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, marginBottom: "0.75rem" }}>
        Let's Work Together
      </h2>
      <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "3rem", maxWidth: 520 }}>
        Have an event in mind? Fill the form and your enquiry goes <strong style={{ color: "#FF6B6B" }}>directly to Anima's email</strong> — silently and instantly!
      </p>

      <div ref={ref} className="reveal"
        className="contact-grid-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>

        {/* Left — Contact Info */}
        <div>
          {contacts.map(({ icon, label, value, href, color }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>{label}</div>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  style={{ color: "#FAFAFA", textDecoration: "none", fontSize: "1rem", fontWeight: 500 }}
                  onMouseEnter={e => e.target.style.color = "#4ECDC4"}
                  onMouseLeave={e => e.target.style.color = "#FAFAFA"}>
                  {value}
                </a>
              </div>
            </div>
          ))}

          <div style={{
            padding: "1.5rem", background: "rgba(255,107,107,0.08)",
            border: "1px solid rgba(255,107,107,0.2)", borderRadius: 16, marginBottom: "1rem",
          }}>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
              ✦ Available across India. Based in Rajasthan. Open to outstation bookings for corporate events, conferences, galas, and more.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <input name="name" placeholder="Your Name *" value={form.name} onChange={handle} required />
            <input name="phone" placeholder="Your Phone Number" value={form.phone} onChange={handle} />
          </div>
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handle} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <input name="eventType" placeholder="Event Type (Conference, Gala...)" value={form.eventType} onChange={handle} />
            <input name="date" placeholder="Event Date (e.g. 15 Aug 2025)" value={form.date} onChange={handle} />
          </div>
          <input name="location" placeholder="Event Location / City" value={form.location} onChange={handle} />
          <textarea name="message"
            placeholder="Tell Anima about your event — budget, audience size, any special requirements..."
            value={form.message} onChange={handle} />

          {/* Two buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
            {/* Email button */}
            <button type="submit" disabled={status === "sending"}
              style={{
                background: status === "success"
                  ? "linear-gradient(135deg, #4ECDC4, #2ecc71)"
                  : "linear-gradient(135deg, #FF6B6B, #ff8e53)",
                color: "white", border: "none", padding: "1rem 2rem",
                borderRadius: "9999px", fontWeight: 700, fontSize: "0.95rem",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", gap: "0.5rem",
                opacity: status === "sending" ? 0.7 : 1,
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(255,107,107,0.3)",
              }}
              onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              {status === "sending" ? "⏳ Sending..." : status === "success" ? "✓ Enquiry Sent!" : "✉️ Send Enquiry to Email"}
            </button>

            {/* WhatsApp button */}
            <button type="button" onClick={sendWhatsApp}
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                color: "white", border: "none", padding: "1rem 2rem",
                borderRadius: "9999px", fontWeight: 700, fontSize: "0.95rem",
                cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              💬 Send on WhatsApp
            </button>
          </div>

          {/* Status messages */}
          {status === "success" && (
            <div style={{ background: "rgba(78,205,196,0.1)", border: "1px solid rgba(78,205,196,0.3)", borderRadius: 12, padding: "0.9rem 1.2rem", color: "#4ECDC4", fontSize: "0.9rem" }}>
              ✓ Enquiry sent successfully to Anima's email! She'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div style={{ background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.3)", borderRadius: 12, padding: "0.9rem 1.2rem", color: "#FF6B6B", fontSize: "0.9rem" }}>
              ✗ Something went wrong. Please try WhatsApp or email directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
