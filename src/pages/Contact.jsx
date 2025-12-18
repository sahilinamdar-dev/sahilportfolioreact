import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-neutral-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — TEXT */}
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Have a project in mind, an opportunity, or just want to
            connect?  
            I’m always open to discussing new ideas, collaborations,
            and challenging work.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 text-3xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form
          className="bg-black/40 backdrop-blur rounded-2xl p-8 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@email.com"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell me about your idea..."
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-medium hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
