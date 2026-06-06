import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Admin Verified" },
  { value: "MERN", label: "& More Stacks" },
  { value: "MVP", label: "Ready to Deploy" },
  { value: "2026", label: "Launched" },
];

const advantages = [
  { title: "Admin Verified", desc: "Architecture & code quality reviewed by senior engineers before listing." },
  { title: "Production Ready", desc: "Not templates — full production-grade systems with real-world use cases." },
  { title: "Instant Velocity", desc: "Save months of development with pre-built, scalable foundations." },
  { title: "Clean APIs", desc: "Scalable architecture, documented endpoints, industry-level code structure." },
  { title: "Multi-Stack", desc: "MERN, AI/ML, Java Spring Boot, backend systems, microservices & more." },
  { title: "Buyer Protection", desc: "Verified purchases with support from the original architect." },
];

const steps = [
  { n: "01", title: "Register", desc: "Create your account as a buyer or seller on the platform." },
  { n: "02", title: "Browse", desc: "Explore admin-verified projects filtered by stack or domain." },
  { n: "03", title: "Verify", desc: "Review code quality, architecture docs, and demo before purchase." },
  { n: "04", title: "Deploy", desc: "Receive full source code and ship your product in hours, not months." },
];

const stack = ["React", "Node.js", "MongoDB", "Express", "Java", "Spring Boot", "Vercel", "REST API"];

const testimonials = [
  {
    text: "I purchased a MERN stack project from ProjectBazaar. The code quality, structure, and documentation were industry-level.",
    name: "Anvesh Samrit",
    role: "Final Year Student",
  },
  {
    text: "ProjectBazaar saved us weeks of backend development. We shipped our MVP faster using verified code.",
    name: "Saurabh Asnare",
    role: "Startup Founder",
  },
  {
    text: "These are not academic projects. Clean APIs, scalable architecture, and real-world use cases.",
    name: "Gaurav Barbhai",
    role: "Full Stack Developer",
  },
];

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ProjectBazaar() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* BACK */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
          ← Back to portfolio
        </Link>
      </div>

      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={reveal} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Verified Developer Marketplace
          </motion.div>

          <motion.h1 variants={reveal} className="text-5xl sm:text-7xl font-extrabold mb-4">
            <span className="text-violet-400">Project</span>
            <span className="text-cyan-400">Bazaar</span>
          </motion.h1>

          <motion.p variants={reveal} className="text-xl sm:text-2xl text-gray-300 font-medium mb-4">
            Code That Actually Sells
          </motion.p>

          <motion.p variants={reveal} className="text-gray-400 max-w-2xl mx-auto mb-10">
            Buy & sell production-ready projects — MERN, AI, ML, backend systems & more.
            Every listing admin-verified for architecture quality.
          </motion.p>

          <motion.div variants={reveal} className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://projectbazaar-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold transition"
            >
              Explore Platform
            </a>
            <a
              href="https://github.com/sahilinamdar-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 hover:border-white rounded-full transition"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-violet-400">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          The Workflow
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6"
            >
              <div className="text-violet-400/40 text-4xl font-extrabold mb-3">{s.n}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 bg-neutral-950/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Core Advantages
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bg-neutral-900/70 border border-white/10 rounded-xl p-5"
              >
                <h3 className="font-semibold mb-2 text-violet-300">{a.title}</h3>
                <p className="text-sm text-gray-400">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Market Sentiment
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-neutral-900/70 border border-white/10 rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="text-yellow-400 text-sm">★★★★★</div>
              <p className="text-sm text-gray-300 leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Tech Stack
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((t) => (
            <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-t from-violet-950/30 to-transparent">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Monetize Your Code</h2>
          <p className="text-gray-400 mb-8">
            Start selling production-ready projects to developers and startups worldwide.
          </p>
          <a
            href="https://projectbazaar-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold transition"
          >
            Visit ProjectBazaar
          </a>
        </div>
      </section>
    </div>
  );
}
