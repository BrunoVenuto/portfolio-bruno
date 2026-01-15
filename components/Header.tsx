"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* LOGO + NOME */}
        <a href="#topo" className="flex items-center gap-3 group">
          <Image
            className="rounded-xl w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
            src="/logo-full.png"
            alt="Brunotech"
            width={50}
            height={50}
            priority
          />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight">
            Bruno{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tech
            </span>
          </span>

        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
          <a href="#projetos" className="hover:text-white transition">Projetos</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
        </nav>

        {/* Botão hamburguer / X */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className="md:hidden relative w-6 h-6"
        >
          <span
            className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300
              ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300
              ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300
              ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur">
          <nav className="flex flex-col px-6 py-6 gap-4 text-gray-300">
            <a onClick={() => setOpen(false)} href="#sobre">Sobre</a>
            <a onClick={() => setOpen(false)} href="#projetos">Projetos</a>
            <a onClick={() => setOpen(false)} href="#skills">Skills</a>
            <a onClick={() => setOpen(false)} href="#contato">Contato</a>

            {/* BOTÃO WHATSAPP (MOBILE) */}
            <a
              href="https://api.whatsapp.com/send?phone=5531995453632"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex justify-center items-center
              rounded-xl bg-gradient-to-r from-green-400 to-green-600
              px-6 py-4 font-semibold text-black hover:opacity-90 transition"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
