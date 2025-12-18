import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-primary">Sahil</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Java Full Stack Developer
          </p>

          <div className="mt-6 flex gap-4">
            <a className="px-6 py-3 bg-primary text-white rounded-lg">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-6 text-2xl">
            <FaLinkedin />
            <FaGithub />
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 rounded-full bg-primary/20 blur-2xl absolute"></div>
          <img src="/profile.png" className="relative z-10 w-64" />
        </motion.div>
      </div>
    </section>
  );
}
