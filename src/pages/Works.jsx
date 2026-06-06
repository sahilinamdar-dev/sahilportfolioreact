import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SOCIALS } from "../config/socials";

import work1 from "../assets/images/work1.webp";
import work2 from "../assets/images/work2.webp";
import work3 from "../assets/images/work3.webp";

const projects = [
  {
    title: "Portfolio Website",
    image: work1,
    live: "https://sahilportfolioreact.vercel.app/",
    github: `${SOCIALS.github}/sahilportfolioreact`,
    type: "external",
  },
  {
    title: "InamDesk – Forms, Photos & Fees in One Link",
    // no screenshot asset -> branded mock preview renders
    preview: "inamdesk",
    tagline: "One link to collect forms, photos & fees",
    domain: "inamdesk.vercel.app",
    live: "https://inamdesk.vercel.app",
    caseStudy: "/projects/inamdesk",
    github: SOCIALS.github,
    type: "case-study",
  },
  {
    title: "Jivandan – Medical Crowdfunding Platform",
    preview: "jivandan",
    tagline: "Hope, Health & Help",
    domain: "jivandan.vercel.app",
    live: "https://jivandan.vercel.app",
    caseStudy: "/projects/jivandan",
    github: SOCIALS.github,
    type: "case-study",
  },
  {
    title: "LinkedBus – Online Bus Booking System",
    image: work2,
    caseStudy: "/works/linkedbus",
    github: `${SOCIALS.github}/LinkedBus-Frontend-`,
    type: "case-study",
  },
  {
    title: "Ticket Management System",
    image: work3,
    live: "https://sahilportfolioreact.vercel.app/",
    github: SOCIALS.github,
    type: "external",
  },
];

/* Branded faux-browser preview for InamDesk (until a real screenshot is added) */
function InamDeskPreview({ tagline, domain }) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-3 flex flex-col">
      {/* faux browser bar */}
      <div className="flex items-center gap-1.5 rounded-lg bg-black/20 px-2.5 py-1.5">
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="ml-2 text-[10px] text-white/80 truncate">{domain}</span>
      </div>

      {/* body */}
      <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-2">
        <h4 className="text-2xl sm:text-3xl font-extrabold">InamDesk</h4>
        <p className="mt-1 text-xs text-white/90">{tagline}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {["Forms", "Photos", "Fees"].map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function JivandanPreview({ tagline, domain }) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 p-3 flex flex-col">
      <div className="flex items-center gap-1.5 rounded-lg bg-black/20 px-2.5 py-1.5">
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="ml-2 text-[10px] text-white/80 truncate">{domain}</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-2">
        <h4 className="text-2xl sm:text-3xl font-extrabold">JIVANDAN</h4>
        <p className="mt-1 text-xs text-white/90">{tagline}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {["Hope", "Health", "Help"].map((t) => (
            <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  const sliderRef = useRef(null);

  const scrollByProject = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const card = slider.children[0];
    const step = card ? card.offsetWidth + 32 : slider.clientWidth * 0.8;
    slider.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-emerald-500/10 blur-[160px] rounded-full" />
        <div className="absolute right-1/4 bottom-1/3 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-400">
              My Work
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Selected projects — swipe or use the arrows
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scrollByProject("prev")}
              aria-label="Previous"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scrollByProject("next")}
              aria-label="Next"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="relative z-10 flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 pb-6 scrollbar-hide max-w-7xl mx-auto"
      >
        {projects.map((p) => (
          <div
            key={p.title}
            className="group snap-start shrink-0 w-[80vw] sm:w-[55vw] lg:w-[38vw] rounded-3xl overflow-hidden bg-neutral-900/80 border border-white/10 flex flex-col"
          >
            {/* IMAGE / PREVIEW AREA */}
            <div className="relative h-44 sm:h-52 md:h-60 overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : p.preview === "inamdesk" ? (
                <InamDeskPreview tagline={p.tagline} domain={p.domain} />
              ) : p.preview === "jivandan" ? (
                <JivandanPreview tagline={p.tagline} domain={p.domain} />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                  <span className="text-4xl font-extrabold opacity-30">
                    {p.title.split(" ")[0]}
                  </span>
                </div>
              )}
            </div>

            {/* INFO FOOTER (always visible) */}
            <div className="flex flex-col gap-4 p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold leading-snug">
                {p.title}
              </h3>

              <div className="flex gap-2 flex-wrap mt-auto">
                {p.type === "case-study" && (
                  <Link
                    to={p.caseStudy}
                    className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Case Study
                  </Link>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 transition"
                  >
                    Live
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-white/30 text-sm hover:border-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
