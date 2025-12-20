import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    image: work1,
    live: "https://your-portfolio-live-link.com",
    github: "https://github.com/sahilinamdar-lang/sahilportfolioreact",
    type: "external",
  },
  {
    title: "LinkedBus – Online Bus Booking System",
    image: work2,
    caseStudy: "/works/linkedbus",
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
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  const scrollByProject = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const projectWidth = slider.children[0].offsetWidth + 80;
    slider.scrollBy({
      left: direction === "next" ? projectWidth : -projectWidth,
      behavior: "smooth",
    });
  };

  return (
    // ✅ CHANGE 1: id="work"
    // ✅ CHANGE 2: min-h-[200vh]
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-[200vh] bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-[700px] h-[700px] bg-emerald-500/10 blur-[180px] rounded-full" />
        <div className="absolute right-1/4 bottom-1/3 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />
      </div>

      {/* STICKY CONTAINER */}
      <div className="sticky top-16 h-screen flex items-center overflow-hidden">

        {/* LEFT ARROW */}
        <button
          onClick={() => scrollByProject("prev")}
          className="absolute left-8 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
        >
          <FaArrowLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scrollByProject("next")}
          className="absolute right-8 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
        >
          <FaArrowRight />
        </button>

        {/* PROJECT SLIDER */}
        <motion.div
          ref={sliderRef}
          style={{ x }}
          className="flex h-full items-center gap-20 px-24 overflow-hidden"
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative min-w-[60vw] h-[70vh] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-3xl font-bold mb-6">{p.title}</h3>

                <div className="flex gap-4 flex-wrap">
                  {p.type === "case-study" && (
                    <a
                      href={p.caseStudy}
                      className="px-6 py-3 rounded-full bg-white text-black font-medium"
                    >
                      View Case Study
                    </a>
                  )}

                  {p.type === "external" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white text-black font-medium"
                    >
                      Live Project
                    </a>
                  )}

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-white/30"
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
