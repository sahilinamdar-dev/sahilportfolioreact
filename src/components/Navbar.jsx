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
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="font-bold text-xl">Sahil</span>

        <div className="hidden md:flex gap-8 items-center">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`transition ${
                active === sec
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400"
              }`}
            >
              {sec.toUpperCase()}
            </a>
          ))}

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-xl text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-xl text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
