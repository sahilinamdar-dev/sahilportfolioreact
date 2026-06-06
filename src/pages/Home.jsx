import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import bgMusic from "../assets/audio/ambient.mp3";
import { SOCIALS } from "../config/socials";

const socialLinks = [
  { Icon: FaGithub, href: SOCIALS.github, label: "GitHub" },
  { Icon: FaLinkedinIn, href: SOCIALS.linkedin, label: "LinkedIn" },
  { Icon: FaInstagram, href: SOCIALS.instagram, label: "Instagram" },
];

/* TYPEWRITER TITLES */
const titles = ["Software Developer", "Full Stack Developer"];

export default function Home() {
  const ref = useRef(null);
  const audioRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  /* ================= MUSIC (lazy: 4.8MB mp3 fetched only on first play) ===== */
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => () => audioRef.current?.pause(), []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(bgMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }
    if (musicOn) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setMusicOn((on) => !on);
  };

  /* ================= TYPEWRITER ================= */
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[titleIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => {
        setText((p) => p + current[charIndex]);
        setCharIndex((c) => c + 1);
      }, 90);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setTitleIndex((i) => (i + 1) % titles.length);
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [charIndex, titleIndex]);

  /* ================= PARTICLES (fewer on mobile for perf) ================= */
  const particleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 25 : 70;
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 45 + Math.random() * 35,
        x: Math.random() * 600 - 300,
        y: Math.random() * 600 - 300,
      })),
    [particleCount]
  );

  /* ================= SCROLL TO WORK ================= */
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 gradient-bg z-0" />

      {/* PARTICLES */}
      <div className="particle-field absolute inset-0 z-[1] pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              "--x": `${p.x}px`,
              "--y": `${p.y}px`,
            }}
          />
        ))}
      </div>

      {/* SOFT COLOR GLOWS */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] rounded-full blur-[180px] soft-blink" />
        <div className="absolute bottom-1/4 right-1/3 w-[650px] h-[650px] rounded-full blur-[180px] soft-blink" />
      </div>

      {/* HERO */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center"
      >
        <div className="max-w-3xl mx-auto px-6 w-full text-center md:text-left">
          {/* AVAILABILITY BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </div>

          {/* TYPEWRITER */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 mb-4">
            {text}
            <span className="animate-pulse">|</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Hello, I’m <br />
            <span className="text-cyan-400">Sahil Inamdar</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0">
            I turn complex ideas into seamless, high-impact web experiences —
            building modern, scalable, and lightning-fast applications.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToWork}
                className="
                  px-6 py-3 rounded-full font-semibold text-black
                  bg-gradient-to-r from-cyan-400 to-indigo-500
                  shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.6)]
                  transition-all duration-300
                "
              >
                View My Work
              </button>

              <a
                href="/Sahil_Inamdar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6 py-3 rounded-full font-medium
                  bg-white/5 backdrop-blur-md
                  border border-white/20
                  hover:bg-white/10 hover:border-white/40
                  transition-all duration-300
                "
              >
                My Resume
              </a>
            </div>

          {/* SOCIALS */}
          <div className="mt-10 flex gap-4 justify-center md:justify-start">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4 }}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/40 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* MUSIC BUTTON */}
      <button className="music-btn" onClick={toggleMusic}>
        {musicOn ? "Pause Music" : "Play Music"}
      </button>
    </section>
  );
}
