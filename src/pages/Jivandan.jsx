import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "3.2L+", label: "Lives Saved" },
  { value: "72L+", label: "Supporters" },
  { value: "₹450Cr+", label: "Raised" },
  { value: "100%", label: "Hospital Verified" },
];

const features = [
  { title: "Hospital Verified", desc: "Every case verified by registered hospitals before going live." },
  { title: "Secure Payments", desc: "Razorpay-powered encrypted transactions for every donation." },
  { title: "Platform Escrow", desc: "Funds held and released only after verified treatment milestones." },
  { title: "Real-time Updates", desc: "Email notifications via Brevo keep donors informed throughout." },
  { title: "Fraud Prevention", desc: "Multi-layer verification eliminates fake cases from the platform." },
  { title: "Transparent Tracking", desc: "Every rupee tracked end-to-end from donation to treatment." },
];

const steps = [
  { n: "1", title: "Patient Submits Case", desc: "Family uploads medical documents and hospital bills." },
  { n: "2", title: "Hospital Verifies", desc: "Registered hospital confirms diagnosis and treatment plan." },
  { n: "3", title: "Supporters Donate", desc: "Funds held in escrow, released only for verified treatment." },
];

const stack = ["React", "Node.js", "Razorpay", "Brevo", "Vercel", "REST API"];

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Jivandan() {
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
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-500/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/10 blur-[180px] rounded-full" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={reveal} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-400/30 text-red-300 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            100% Hospital Verified · Trusted by 72 Lakh+ Indians
          </motion.div>

          <motion.h1 variants={reveal} className="text-5xl sm:text-7xl font-extrabold mb-4">
            <span className="text-red-400">JIVANDAN</span>
          </motion.h1>

          <motion.p variants={reveal} className="text-xl sm:text-2xl text-gray-300 font-medium mb-4">
            Hope, Health & Help
          </motion.p>

          <motion.p variants={reveal} className="text-gray-400 max-w-2xl mx-auto mb-10">
            When medical bills threaten to break families apart, we bring hope together.
            Hospital-verified cases. Real people. Real impact.
          </motion.p>

          <motion.div variants={reveal} className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://jivandan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-500 hover:bg-red-400 text-white rounded-full font-semibold transition"
            >
              View Live
            </a>
            <a
              href={`https://github.com/sahilinamdar-dev`}
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
              <div className="text-3xl sm:text-4xl font-extrabold text-red-400">{s.value}</div>
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
          How JIVANDAN Works
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 font-bold mb-4">
                {s.n}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-neutral-950/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Built on Trust & Transparency
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bg-neutral-900/70 border border-white/10 rounded-xl p-5"
              >
                <h3 className="font-semibold mb-2 text-red-300">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 max-w-5xl mx-auto px-6">
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
      <section className="py-20 text-center bg-gradient-to-t from-red-950/30 to-transparent">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Be the Reason a Family Smiles Again</h2>
          <p className="text-gray-400 mb-8">
            Your verified donation can save a life. Join 72 lakh+ supporters making a real difference.
          </p>
          <a
            href="https://jivandan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-red-500 hover:bg-red-400 text-white rounded-full font-semibold transition"
          >
            Visit Jivandan
          </a>
        </div>
      </section>
    </div>
  );
}
