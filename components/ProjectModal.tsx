"use client";
import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
};

export default function ProjectModal({ onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
    >
      <div className="max-w-xl w-full rounded-2xl bg-[#0b0e11] border border-white/10 p-8">
        <h3 className="text-xl font-bold mb-4">Projeto profissional</h3>

        <p className="text-gray-400 mb-6">
          Landing page desenvolvida com foco em conversão,
          design moderno e experiência do usuário.
        </p>

        <button
          onClick={onClose}
          className="text-sm text-gray-300 hover:text-white"
        >
          Fechar
        </button>
      </div>
    </motion.div>
  );
}
