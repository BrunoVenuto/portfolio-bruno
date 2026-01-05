"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <strong className="text-sm tracking-wide">BRUNO</strong>

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
