"use client";

import { motion } from "framer-motion";
import { InfiniteCarousel } from "./InfiniteCarousel";

const frontend = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"];
const backend = ["Node.js", "APIs REST", "Autenticação", "Banco de Dados"];
const outros = ["Git", "SEO", "Performance", "Responsividade", "UI/UX"];

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Minhas <span className="text-teal-400">habilidades</span>
        </motion.h2>

        <div className="space-y-10">

          {/* Linha 1 - esquerda para direita */}
          <div>
            <p className="mb-4 text-sm text-gray-400">Frontend</p>
            <InfiniteCarousel items={frontend} />
          </div>

          {/* Linha 2 - direita para esquerda */}
          <div>
            <p className="mb-4 text-sm text-gray-400">Backend</p>
            <InfiniteCarousel items={backend} reverse />
          </div>

          {/* Linha 3 - esquerda para direita */}
          <div>
            <p className="mb-4 text-sm text-gray-400">Outros</p>
            <InfiniteCarousel items={outros} />
          </div>

        </div>
      </div>
    </section>
  );
}
