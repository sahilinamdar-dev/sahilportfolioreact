const skills = ["Java", "Spring Boot", "React", "Node.js", "MongoDB"];

export default function Skills() {
  return (
    <section className="py-32 bg-neutral-900">
      <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 border border-white/20 rounded-full text-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
