import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SOCIALS } from "../config/socials";

const sections = ["home", "about", "skills", "work", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  // smooth scroll + navbar offset; if not on home, route home first
  const handleScroll = (id) => {
    setOpen(false);
    if (!onHome) {
      navigate("/");
      setTimeout(() => scrollToId(id), 100);
      return;
    }
    scrollToId(id);
  };

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const yOffset = -64; // navbar height (h-16)
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <button onClick={() => handleScroll("home")} className="font-bold text-xl">
          Sahil
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 items-center">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleScroll(sec)}
              className={`transition ${
                onHome && active === sec
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {sec.toUpperCase()}
            </button>
          ))}

          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl text-gray-400 hover:text-white transition">
            <FaGithub />
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-xl text-gray-400 hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden text-2xl text-gray-200"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleScroll(sec)}
              className={`text-left transition ${
                onHome && active === sec ? "text-white" : "text-gray-400"
              }`}
            >
              {sec.toUpperCase()}
            </button>
          ))}
          <div className="flex gap-6 pt-2 text-xl text-gray-400">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
