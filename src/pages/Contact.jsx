import { FaGithub, FaLinkedin } from "react-icons/fa";
import astronaut from "../assets/images/astronaut.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 bg-black text-white overflow-hidden"
    >
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="dot-layer dot-layer-1" />
        <div className="dot-layer dot-layer-2" />
      </div>

      {/* GLOW */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] bg-indigo-500/10 blur-[200px] rounded-full" />
      <div className="absolute right-1/4 bottom-1/3 w-[600px] h-[600px] bg-blue-500/10 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — ASTRONAUT */}
        <div className="flex">
          <img
            src={astronaut}
            alt="Astronaut"
            className="w-[650px] object-contain"
          />
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-neutral-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-8">
            Let’s Work Together
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Email *
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Service Needed *
              </label>
              <select className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-gray-400 focus:outline-none focus:border-blue-500">
                <option>Something in mind?</option>
                <option>Web Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack Project</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Explain Your Idea *
              </label>
              <textarea
                rows="4"
                placeholder="Explain your idea..."
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 resize-none focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex gap-6 text-gray-400 text-xl">
            <a href="#" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* DOT ANIMATION CSS */}
      <style>
        {`
          .dot-layer {
            position: absolute;
            inset: -200%;
            background-image: radial-gradient(#ffffff 1px, transparent 1px);
            background-size: 32px 32px;
            animation: dotMove 160s linear infinite;
            opacity: 0.35;
          }

          .dot-layer-2 {
            background-size: 64px 64px;
            animation-duration: 260s;
            opacity: 0.2;
          }

          @keyframes dotMove {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(1000px);
            }
          }
        `}
      </style>
    </section>
  );
}
