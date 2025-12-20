import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LinkedBusShowcase() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    // ✅ CHANGE 1: min-h-[200vh]
    <section
      ref={ref}
      className="relative min-h-[200vh] bg-gradient-to-br from-black via-neutral-900 to-black text-white"
    >
      <motion.div
        style={{ scale, y, opacity }}
        // ✅ CHANGE 2: top-16
        className="sticky top-16 h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="text-sm uppercase tracking-widest text-gray-400">
              Case Study
            </span>

            <h1 className="text-6xl md:text-7xl font-bold mt-4">
              Linked<span className="text-red-500">Bus</span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 leading-relaxed">
              A scalable online bus booking platform designed for
              speed, reliability, and real-time passenger experience.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://linkedbus-frontend.vercel.app"
                target="_blank"
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
              >
                View Live Product
              </a>

              <a
                href="https://github.com/sahilinamdar-lang/LinkedBus-Backend"
                target="_blank"
                className="px-8 py-4 border border-white/30 rounded-full hover:border-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full" />
            <div className="relative border border-white/10 rounded-3xl p-10 backdrop-blur bg-white/5">
              <div className="text-sm text-gray-400 mb-4">
                System Highlights
              </div>

              <ul className="space-y-3 text-lg">
                <li>• Real-time seat availability</li>
                <li>• Secure payment integration</li>
                <li>• User-friendly booking interface</li>
                <li>• Admin dashboard for bus management</li>
              </ul>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
