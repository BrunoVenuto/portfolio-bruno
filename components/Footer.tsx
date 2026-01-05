export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* CONTEÚDO */}
        <div className="grid gap-10 md:grid-cols-3 items-start">

          {/* COLUNA 1 – BRAND */}
          <div>
            <h3 className="font-bold text-lg mb-3">Bruno</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Desenvolvedor Front-End focado em criar experiências digitais
              modernas, performáticas e orientadas a resultados.
            </p>
          </div>

          {/* COLUNA 2 – NAVEGAÇÃO */}
          <div>
            <h4 className="font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#sobre" className="hover:text-white transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 – CONTATO */}
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5531995453632"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BrunoVenuto"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/seulinkedin"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Bruno. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
