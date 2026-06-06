import { motion } from "framer-motion";
import profilePic from "../assets/images/myprofile.webp";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    // ✅ CHANGE 1: id="about"
    // ✅ CHANGE 2: py-32 (instead of py-10)
    <section
      id="about"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* TOP GRID */}
        <motion.div {...reveal} className="grid md:grid-cols-[180px_1fr] gap-10 items-start">

          {/* PROFILE IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/30 to-cyan-400/30 blur-xl rounded-2xl" />
            <img
              src={profilePic}
              alt="Profile"
              className="relative z-10 w-44 h-44 object-cover rounded-2xl border border-white/10"
            />
          </div>

          {/* MAIN CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-emerald-400">
              Sahil
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Full Stack Developer
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
              I’m a Full Stack Developer specializing in building secure,
              scalable, and modern web applications. My work emphasizes clean
              architecture, performance, and thoughtful UX — ensuring products
              feel fast, intuitive, and production-ready.
            </p>

            {/* STATS */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <p className="text-xs text-gray-400">Experience</p>
                <p className="text-sm font-semibold text-white">1+ Years</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <p className="text-xs text-gray-400">Specialty</p>
                <p className="text-sm font-semibold text-white">Full Stack</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <p className="text-xs text-gray-400">Focus</p>
                <p className="text-sm font-semibold text-white">
                  Performance & UX
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">
              <button className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
                View Projects
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-white/20 text-sm text-white hover:bg-white/10 transition">
                Get in Touch
              </button>
            </div>
          </div>
        </motion.div>

        {/* ABOUT ME TEXT */}
        <motion.div {...reveal} className="mt-20 max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400 leading-relaxed">
            I’m a Software Developer, Content Creator, and Web Developer —
            passionate about building fast, resilient applications and sharing
            coding insights on Instagram and YouTube.
            <br /><br />
            My expertise spans Java, Spring Boot, React, Node.js, MySQL, and
            MongoDB. I focus on clean architecture, performance optimization, and
            crafting user experiences that feel premium and future-ready.
            <br /><br />
            I don’t just build websites — I build digital products designed to
            scale, evolve, and stand out.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
