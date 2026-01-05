"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Landing Page Advogada Maria Eduarda",
    description: "Landing page focada em captação de leads para escritório de advocacia.",
    image: "/projects/advogada.png",
    link: "https://maria-eduarda-advogada.vercel.app/",
  },
  {
    id: 2,
    title: "Site Institucional",
    description: "Site institucional moderno e responsivo para empresa de serviços.",
    image: "/projects/institucional.png",
    link: "https://site-advocacia-nextjs.vercel.app/",
  },
  {
    id: 3,
    title: "Modelo Advogado Com Painel Administrativo",
    description: "Landing page focada em captação de leads para escritório de advocacia",
    image: "/projects/modelo.png",
    link: "https://advogado-criminal-painel-admin-pwo3.vercel.app/",
  },
];


export default function Projects() {
  return (
    <section id="projetos" className="py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* TÍTULO */}
        <h2 className="text-4xl font-bold mb-12">
          Projetos em <span className="text-teal-400">destaque</span>
        </h2>

        {/* GRID DE PROJETOS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl border border-white/10 bg-white/5
              overflow-hidden hover:border-teal-400/40 transition"
            >
              {/* IMAGEM */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* TEXTO */}
              <div className="p-6">
                <h3 className="font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
