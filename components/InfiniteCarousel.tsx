"use client";

import { motion } from "framer-motion";

type Props = {
  items: string[];
  reverse?: boolean;
};

export function InfiniteCarousel({ items, reverse = false }: Props) {
  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
