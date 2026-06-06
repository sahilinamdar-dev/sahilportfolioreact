import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

export default function LinkedBusShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-black via-neutral-900 to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div {...reveal}>
          <span className="text-sm uppercase tracking-widest text-gray-400">
            Case Study
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-4">
            Linked<span className="text-red-500">Bus</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
            A scalable online bus booking platform designed for speed,
            reliability, and real-time passenger experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedbus-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
            >
              View Live Product
            </a>
            <a
              href="https://github.com/sahilinamdar-dev/LinkedBus-Backend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 rounded-full hover:border-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div {...reveal} className="relative">
          {/* lighter glow — blur-2xl instead of blur-3xl for less paint cost */}
          <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full" />
          <div className="relative border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur bg-white/5">
            <div className="text-sm text-gray-400 mb-4">System Highlights</div>
            <ul className="space-y-3 text-base sm:text-lg">
              <li>• Real-time seat availability</li>
              <li>• Secure payment integration</li>
              <li>• User-friendly booking interface</li>
              <li>• Admin dashboard for bus management</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
