import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="h-[200vh] relative">
      <motion.div
        style={{ scale, opacity, y }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-[12vw] font-bold tracking-tight leading-none">
          SAHIL
        </h1>
        <p className="mt-6 text-xl text-gray-400">
          Full Stack Engineer · Next-Gen Web
        </p>
      </motion.div>
    </section>
  );
}
