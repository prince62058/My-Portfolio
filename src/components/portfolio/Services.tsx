import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Code, Smartphone, Palette, Cpu, Server, Globe, Briefcase } from "lucide-react";

const services = [
  { Icon: Code, title: "Full Stack Web Development", desc: "Production MERN & Java apps with clean architecture." },
  { Icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile experiences that scale." },
  { Icon: Palette, title: "UI / UX Design", desc: "Pixel-perfect, motion-rich interfaces built to convert." },
  { Icon: Cpu, title: "AI Integration", desc: "Plug Gemini, OpenCV & ML pipelines into your product." },
  { Icon: Server, title: "Backend APIs", desc: "Robust REST & real-time APIs on Node, Express, Java." },
  { Icon: Globe, title: "Portfolio Websites", desc: "Cinematic personal sites that win you the job." },
  { Icon: Briefcase, title: "Freelance Engagements", desc: "Project, retainer & MVP delivery — global clients." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title={<>What I <span className="text-gradient">deliver</span></>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.28_295)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="w-8 h-8 text-[oklch(0.7_0.28_295)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[oklch(0.85_0.18_200)] opacity-0 group-hover:opacity-100 transition-opacity">
                Available now →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
