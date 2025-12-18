import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import hackerBg from "../assets/images/hacker-bg.png";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Tailwind",
];

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[220vh] bg-black text-white overflow-hidden"
    >
      {/* HACKER BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${hackerBg})` }}
      />

      {/* COLOR WASH */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black" />

      {/* CYBER LIGHT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-cyan-500/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-purple-600/15 blur-[180px] rounded-full" />
      </div>

      {/* SUBTLE SCANLINE OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* STICKY HERO */}
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-28 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-xs tracking-widest text-gray-400 uppercase">
              Full Stack Developer
            </span>

            <h1 className="mt-6 text-6xl md:text-7xl font-bold leading-tight">
              Build.
              <br />
              Scale.
              <br />
              <span className="text-red-500">Future.</span>
            </h1>

            <p className="mt-6 text-base text-gray-400 max-w-md leading-relaxed">
              I design and build scalable, production-ready web applications
              with robust backend systems and modern frontend architecture.
            </p>

            {/* SOCIALS */}
            <div className="mt-10 flex items-center gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/YOUR_GITHUB" },
                { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/YOUR_LINKEDIN" },
                { icon: <FaInstagram />, link: "https://instagram.com/YOUR_INSTAGRAM" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition"
                >
                  <span className="text-lg">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 blur-3xl" />
            <h2 className="text-[8.5rem] font-extrabold tracking-tight text-white">
              SAHIL
            </h2>

            {/* SKILL RAIL */}
            <div className="mt-12 relative h-28 overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-0 flex gap-6"
              >
                {[...skills, ...skills].map((skill, i) => (
                  <div
                    key={i}
                    className="px-5 py-2 rounded-lg text-sm bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 whitespace-nowrap"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
