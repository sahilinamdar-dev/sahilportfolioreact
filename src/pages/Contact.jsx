import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import astronaut from "../assets/images/astronaut.webp";
import { SOCIALS } from "../config/socials";

// ⚠️ Frontend-only Brevo: VITE_ vars are PUBLIC in the built JS.
// Anyone can read VITE_BREVO_API_KEY and abuse your account. You accepted this.
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const SENDER_EMAIL = import.meta.env.VITE_BREVO_SENDER_EMAIL; // must be a verified Brevo sender
const TO_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL || SOCIALS.email;

const initialForm = { name: "", email: "", service: "Web Development", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!BREVO_API_KEY || !SENDER_EMAIL) {
      setStatus("error");
      setErrorMsg("Email not configured. Set VITE_BREVO_API_KEY and VITE_BREVO_SENDER_EMAIL.");
      return;
    }

    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Portfolio Contact", email: SENDER_EMAIL },
          to: [{ email: TO_EMAIL }],
          replyTo: { email: form.email, name: form.name },
          subject: `New enquiry: ${form.service} — from ${form.name}`,
          htmlContent: `
            <h2>New contact form message</h2>
            <p><strong>Name:</strong> ${form.name}</p>
            <p><strong>Email:</strong> ${form.email}</p>
            <p><strong>Service:</strong> ${form.service}</p>
            <p><strong>Message:</strong></p>
            <p>${form.message.replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Request failed (${res.status})`);
      }

      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-40 bg-black text-white overflow-hidden"
    >
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="dot-layer dot-layer-1" />
        <div className="dot-layer dot-layer-2" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] bg-indigo-500/10 blur-[200px] rounded-full" />
      <div className="absolute right-1/4 bottom-1/3 w-[600px] h-[600px] bg-blue-500/10 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* LEFT — ASTRONAUT */}
        <div className="hidden md:flex justify-center">
          <img
            src={astronaut}
            alt="Astronaut"
            loading="lazy"
            className="w-full max-w-[420px] object-contain"
          />
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Let’s Work Together
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={update}
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Email *</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={update}
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Service Needed *</label>
              <select
                name="service"
                value={form.service}
                onChange={update}
                className="w-full bg-neutral-900 border border-white/20 rounded-md px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-500"
              >
                <option>Web Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack Project</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Explain Your Idea *</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={update}
                placeholder="Explain your idea..."
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 resize-none focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition py-3 rounded-md font-medium"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-emerald-400 text-sm">
                ✅ Message sent! I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">⚠️ {errorMsg}</p>
            )}
          </form>

          <div className="mt-8 flex gap-6 text-gray-400 text-xl">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* DOT ANIMATION CSS */}
      <style>
        {`
          .dot-layer {
            position: absolute;
            inset: -200%;
            background-image: radial-gradient(#ffffff 1px, transparent 1px);
            background-size: 32px 32px;
            animation: dotMove 160s linear infinite;
            opacity: 0.35;
          }
          .dot-layer-2 {
            background-size: 64px 64px;
            animation-duration: 260s;
            opacity: 0.2;
          }
          @keyframes dotMove {
            from { transform: translateY(0); }
            to { transform: translateY(1000px); }
          }
        `}
      </style>
    </section>
  );
}
