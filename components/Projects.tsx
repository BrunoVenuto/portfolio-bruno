"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Landing Page Advogada Maria Eduarda Cavalcante",
    description:
      "Landing page focada em captação de leads para escritório de advocacia.",
    image: "/projects/advogada.png",
    link: "https://maria-eduarda-advogada.vercel.app/",
  },
  {
    id: 2,
    title: "CellShop",
    description: "E-commerce de vendas de celular",
    image: "/projects/ecommerce.png",
    link: "https://smartphone-store-nextjs.vercel.app/",
  },
  {
    id: 3,
    title: "Modelo Advogado Com Painel Administrativo",
    description:
      "Landing page focada em captação de leads para escritório de advocacia",
    image: "/projects/modelo.png",
    link: "https://advogado-criminal-painel-admin-pwo3.vercel.app/",
  },
  {
    id: 4,
    title: "Template de Loja WhatsApp (Next.js)",
    description:
      "Template completo de e-commerce com carrinho e finalização de pedido via WhatsApp, focado em pequenos e médios lojistas. Projeto mobile-first, com UX profissional e totalmente configurável via painel de configuração.",
    Techs: "Next.js, TypeScript, Tailwind CSS",
    image: "/projects/ecommerce-whatsapp.png",
    link: "https://ecommerce-whatsapp-template.vercel.app/",
  },
  {
    id: 5,
    title: "E-commerce de Suplementos",
    description:
      "Loja virtual de suplementos desenvolvida com foco em conversão, performance e experiência do usuário. Projeto completo com vitrine de produtos, páginas individuais, carrinho de compras e layout 100% responsivo, pronto para ser adaptado para qualquer nicho de e-commerce.",
    Techs: "Next.js, TypeScript, Tailwind CSS",
    image: "/projects/loja suplementos.png",
    link: "https://catalogo-premium.vercel.app/",
  },
  {
    id: 6,
    title: "EngTech — Site Institucional para Engenharia Civil",
    description:
      "Projeto de site institucional desenvolvido para a EngTech, empresa de engenharia civil de Sete Lagoas/MG, com foco em apresentação profissional da marca e captação de leads.",
    Techs: "Next.js, TypeScript, Tailwind CSS",
    image: "/projects/engtech.png",
    link: "https://engetech-eta.vercel.app/",
  },
  {
    id: 7,
    title: "BurgMaster",
    description:
      "Landing page moderna para hamburgueria artesanal, com cardápio digital interativo, animações fluidas e design focado em conversão. Interface mobile-first otimizada para delivery.",
    Techs: "React, Tailwind CSS",
    image: "/projects/burgmaster.png",
    link: "https://burg-master.vercel.app/",
  },
  {
    id: 8,
    title: "Barbearia Brutal & Co.",
    description: "Landing Page / Site institucional",
    Techs: "React + Vite + Tailwind CSS",
    image: "/projects/brutal-barber",
    link: "https://brutal-barber.vercel.app/",
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
