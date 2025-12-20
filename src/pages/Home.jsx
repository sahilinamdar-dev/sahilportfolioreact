import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import robotImg from "../assets/images/robot.png";
import bgMusic from "../assets/audio/ambient.mp3";

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

  /* ================= MUSIC ================= */
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.25;

    const startOnScroll = () => {
      if (!musicOn) {
        audioRef.current.play().catch(() => {});
        setMusicOn(true);
      }
      window.removeEventListener("scroll", startOnScroll);
    };

    window.addEventListener("scroll", startOnScroll);
    return () => audioRef.current.pause();
  }, []);

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

  /* ================= PARTICLES (SEPARATE LOGIC) ================= */
  const particles = useMemo(
    () =>
      Array.from({ length: 80 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 45 + Math.random() * 35,
        x: Math.random() * 600 - 300,
        y: Math.random() * 600 - 300,
      })),
    []
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          {/* LEFT */}
          <div>
            {/* TYPEWRITER */}
            <div className="text-3xl md:text-4xl font-semibold text-gray-200 mb-4">
              {text}
              <span className="animate-pulse">|</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Hello, I’m <br />
              <span className="text-cyan-400">Sahil Inamdar</span>
            </h1>

            <p className="mt-6 text-gray-400 max-w-md">
              I turn complex ideas into seamless, high-impact web experiences —
              building modern, scalable, and lightning-fast applications.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
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
            <div className="mt-10 flex gap-4">
              {[FaGithub, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <motion.img
              src={robotImg}
              alt="Developer Avatar"
              className="w-[420px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>

      {/* MUSIC BUTTON */}
      <button
        className="music-btn"
        onClick={() => {
          if (musicOn) audioRef.current.pause();
          else audioRef.current.play().catch(() => {});
          setMusicOn(!musicOn);
        }}
      >
        {musicOn ? "Pause Music" : "Play Music"}
      </button>
    </section>
  );
}
