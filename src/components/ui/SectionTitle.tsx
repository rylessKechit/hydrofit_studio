"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  light?: boolean;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  center = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <h2
        className={`font-display text-5xl md:text-6xl lg:text-7xl tracking-wide ${
          light ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-600" : "text-white/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-[2px] bg-tiffany mx-auto" />
    </motion.div>
  );
}
