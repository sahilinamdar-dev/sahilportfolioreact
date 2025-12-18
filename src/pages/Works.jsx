import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    image: work1,
    live: "https://your-portfolio-live-link.com",
    github: "https://github.com/yourusername/portfolio",
    type: "external",
  },
  {
    title: "LinkedBus – Online Bus Booking System",
    image: work2,
    caseStudy: "#linkedbus",
    github: "https://github.com/sahilinamdar-lang/LinkedBus-Frontend-",
    type: "case-study",
  },
  {
    title: "Ticket Management System",
    image: work3,
    live: "https://your-ticket-system-live-link.com",
    github: "https://github.com/yourusername/ticket-system",
    type: "external",
  },
];

export default function Works() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={ref} className="h-[300vh] bg-white text-black">
      {/* Sticky horizontal scroll container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full items-center gap-20 px-20"
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative min-w-[60vw] h-[70vh] rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-10">
                <h3 className="text-white text-3xl font-bold mb-4">
                  {p.title}
                </h3>

                <div className="flex gap-4 flex-wrap">
                  {/* Case Study Button */}
                  {p.type === "case-study" && (
                    <a
                      href={p.caseStudy}
                      className="px-6 py-3 bg-white text-black rounded-full font-medium"
                    >
                      View Case Study
                    </a>
                  )}

                  {/* Live Project Button */}
                  {p.type === "external" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black rounded-full font-medium"
                    >
                      Live Project
                    </a>
                  )}

                  {/* GitHub Button */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white text-white rounded-full"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
