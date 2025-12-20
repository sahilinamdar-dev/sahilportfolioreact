import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sections = ["home", "about", "skills", "work", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // ✅ CHANGE 1: threshold thoda kam (animations ke liye accurate)
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ✅ CHANGE 2: smooth scroll + navbar offset
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -64; // navbar height (h-16)
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="font-bold text-xl">Sahil</span>

        <div className="hidden md:flex gap-8 items-center">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleScroll(sec)}
              className={`transition ${
                active === sec
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {sec.toUpperCase()}
            </button>
          ))}

          {/* ✅ REAL LINKS */}
          <a
            href="https://github.com/sahilinamdar-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-inamdar-06ba56355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
