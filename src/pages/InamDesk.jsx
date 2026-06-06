import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Businesses" },
  { value: "50K+", label: "Submissions" },
  { value: "99.9%", label: "Uptime" },
  { value: "< 2s", label: "Load time" },
];

const steps = [
  {
    icon: "📝",
    title: "Create your form",
    desc: "Pick a ready template (admission, fees, booking…) or build your own. ~2 minutes.",
  },
  {
    icon: "🔗",
    title: "Share the link",
    desc: "One link on WhatsApp, Instagram bio, or a printed QR. Opens on any phone — no app.",
  },
  {
    icon: "📥",
    title: "Collect everything",
    desc: "Responses, photos & documents land instantly. Auto confirmation emails. Export anytime.",
  },
];

const features = [
  { title: "Custom Forms", desc: "Build professional forms in minutes — no coding. Drag, drop, publish." },
  { title: "Photo & Doc Uploads", desc: "Collect documents securely. Compressed, stored on cloud, accessible anywhere." },
  { title: "Instant Emails", desc: "Auto-send a confirmation email the moment someone submits." },
  { title: "Member Management", desc: "Auto-create members from submissions — turn forms into a managed roster." },
  { title: "Fee Ledger", desc: "Total, paid, and remaining per member. See pending fees at a glance." },
  { title: "Payment Tracking", desc: "Know exactly who paid and who still owes — nudge them on WhatsApp." },
];

const audience = [
  { who: "CA Firms", line: "Clients upload PAN, Aadhaar, salary slips — ITR season sorted in days." },
  { who: "Coaching Classes", line: "Online admission + fee proof upload, instant confirmation. Save 3 hrs per admission." },
  { who: "Clinics & Doctors", line: "Digital intake before the appointment. Cut waiting-room time ~40%." },
  { who: "Housing Societies", line: "Maintenance requests with photos, tracked. Zero lost complaints." },
];

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    perks: ["1 form", "50 submissions/mo", "Basic analytics", "Email support"],
  },
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    popular: true,
    perks: ["5 forms", "500 submissions/mo", "Photo uploads", "Email confirmations", "CSV export"],
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    perks: ["Unlimited forms", "Unlimited submissions", "All features", "Priority support", "Custom branding"],
  },
];

export default function InamDesk() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute right-1/4 bottom-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to portfolio
        </Link>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <span className="text-sm uppercase tracking-widest text-gray-400">
            SaaS Product · Built for Pune businesses
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-3">
            Inam<span className="text-cyan-400">Desk</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            One link to collect forms, photos & fees.
          </p>
          <p className="mt-3 text-gray-400 max-w-2xl leading-relaxed">
            A professional online form for small businesses. Share one WhatsApp
            link — clients fill details, upload documents, even pay. Everything
            lands in one neat dashboard. No more lost messages, no more paper
            registers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://inamdesk.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
            >
              View Live Product
            </a>
            <a
              href="https://www.instagram.com/satarkar.live"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 rounded-full hover:border-white transition"
            >
              @satarkar.live
            </a>
          </div>
        </motion.div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/5 border border-white/10 px-4 py-6 text-center"
            >
              <p className="text-2xl font-bold text-cyan-400">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CAPABILITY TAGS */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">What it does</h3>
          <div className="flex flex-wrap gap-3">
            {["Custom Forms", "Cloud File Storage", "Online Payments", "Auto Emails", "Member & Fee Management", "QR / Link Sharing"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Up and running in 3 steps</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <div className="text-3xl">{s.icon}</div>
                <p className="mt-3 text-xs text-cyan-400">STEP {i + 1}</p>
                <h4 className="text-lg font-semibold mt-1">{s.title}</h4>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Everything you need</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/30 transition"
              >
                <h4 className="text-lg font-semibold text-cyan-400">{f.title}</h4>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIENCE */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-2">Made for local professionals</h3>
          <p className="text-gray-400 text-sm mb-6">
            CA firms, coaching classes, clinics, societies, gyms, salons, NGOs — and more.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {audience.map((a) => (
              <div
                key={a.who}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <h4 className="text-lg font-semibold">{a.who}</h4>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{a.line}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-2">Simple, honest pricing</h3>
          <p className="text-gray-400 text-sm mb-6">No hidden fees. Cancel anytime.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 border ${
                  p.popular
                    ? "bg-cyan-500/10 border-cyan-400/50"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {p.popular && (
                  <span className="text-xs text-cyan-400 font-semibold">⭐ Most Popular</span>
                )}
                <h4 className="text-xl font-bold mt-2">{p.name}</h4>
                <p className="mt-2">
                  <span className="text-3xl font-extrabold">{p.price}</span>
                  <span className="text-gray-400 text-sm"> {p.period}</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {p.perks.map((perk) => (
                    <li key={perk}>✓ {perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-cyan-500/15 to-indigo-600/15 border border-white/10 p-10 text-center">
          <h3 className="text-2xl font-bold">Ready to go paperless?</h3>
          <p className="text-gray-400 mt-2">
            Join hundreds of Pune businesses already using InamDesk.
          </p>
          <a
            href="https://inamdesk.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            Get Started Free
          </a>
          <p className="text-xs text-gray-500 mt-6">
            Built by Sahil Inamdar · Pune, Maharashtra · inamdar@inamdesk.com
          </p>
        </div>
      </div>
    </div>
  );
}
