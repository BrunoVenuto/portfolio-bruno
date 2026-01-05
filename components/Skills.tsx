"use client";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
  Backend: ["Node.js", "APIs REST"],
  Outros: ["Git", "SEO", "Performance", "Responsividade"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6"
      >
        <h2 className="text-4xl font-bold mb-12">
          Minhas <span className="text-teal-400">habilidades</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full
                    border border-white/10 bg-white/5 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
