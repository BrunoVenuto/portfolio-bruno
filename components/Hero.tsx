"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 h-96 w-96 bg-teal-500/20 blur-3xl" />
        <div className="absolute top-24 right-0 h-96 w-96 bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            SOLUÇÕES{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              DIGITAIS
            </span>{" "}
            MODERNAS
          </h1>

          <p className="mt-6 max-w-xl text-gray-300">
            Desenvolvimento de landing pages e sites profissionais focados
            em conversão, performance e presença digital.
          </p>

          <ul className="mt-8 space-y-2 text-gray-400">
            <li>• Landing Pages</li>
            <li>• Sites Institucionais</li>
            <li>• Performance & SEO</li>
            <li>• UI/UX focado em resultado</li>
          </ul>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5531995453632"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-xl
              bg-gradient-to-r from-teal-400 to-blue-500
              px-8 py-4 font-semibold text-black hover:opacity-90 transition"
            >
              Falar comigo no WhatsApp
            </a>

            <span
              className="inline-flex justify-center sm:justify-start
              rounded-full border border-white/10 px-6 py-4 text-sm text-gray-300"
            >
              ● Disponível para novos projetos
            </span>
          </div>
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80
            rounded-3xl overflow-hidden
            border border-white/10 bg-white/5
            shadow-xl shadow-black/40"
          >
            <Image
              src="/bruno.jpg"
              alt="Bruno – Desenvolvedor Front-End"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
