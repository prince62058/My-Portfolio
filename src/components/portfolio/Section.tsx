import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-4 font-mono uppercase tracking-wider text-[oklch(0.85_0.18_200)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.85_0.18_200)]" />
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
