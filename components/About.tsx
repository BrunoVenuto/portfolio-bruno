"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-32 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Sobre <span className="text-teal-400">mim</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Sou desenvolvedor Front-End focado na criação de landing pages
            e sites institucionais modernos, rápidos e bem estruturados.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Meu objetivo é transformar ideias em experiências digitais
            profissionais, com foco em conversão, performance e
            credibilidade para o negócio.
          </p>
        </div>

        {/* Card lateral */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="font-semibold mb-4">
            Como posso te ajudar
          </h3>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>✔ Landing pages focadas em conversão</li>
            <li>✔ Sites institucionais profissionais</li>
            <li>✔ Layout moderno e responsivo</li>
            <li>✔ Código limpo e organizado</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
