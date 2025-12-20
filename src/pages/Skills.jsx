import { motion } from "framer-motion";
import {
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFastapi,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "FastAPI", icon: <SiFastapi /> },
];

export default function Skills() {
  return (
    // ✅ CHANGE: id="skills"
    <section
      id="skills"
      className="relative py-32 bg-black overflow-hidden text-white"
    >
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[180px] rounded-full" />
        <div className="absolute right-1/4 top-1/3 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-emerald-400">
          My Skills
        </h2>
        <p className="text-center text-sm text-gray-400 mt-2">
          Modern Applications | Modern Technologies
        </p>

        {/* SCROLLING SKILLS */}
        <div className="mt-20 relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-16 w-max"
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-3xl text-emerald-400 group-hover:text-cyan-400 transition">
                  {skill.icon}
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
