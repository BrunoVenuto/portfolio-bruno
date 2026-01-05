export default function CTA() {
  return (
    <section id="contato" className="py-32 border-t border-white/10 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Vamos tirar seu projeto do papel?
      </h2>

      <p className="text-gray-400 mb-10">
        Entre em contato e vamos conversar sobre a melhor solução
        para o seu negócio.
      </p>

      <a
        href="https://api.whatsapp.com/send?phone=5531995453632"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-xl bg-gradient-to-r
        from-teal-400 to-blue-500 px-8 py-4
        font-semibold text-black hover:opacity-90 transition"
      >
        Falar comigo no WhatsApp
      </a>
    </section>
  );
}
