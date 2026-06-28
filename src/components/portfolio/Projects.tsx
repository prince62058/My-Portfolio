import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Face Recognition Attendance",
    desc: "Real-time face-detection attendance tracker using OpenCV and Scikit-learn with persistent logs.",
    tags: ["Python", "OpenCV", "Scikit-learn"],
    gradient: "from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)]",
    glyph: "AI",
  },
  {
    title: "Servidorr — Home Services",
    desc: "Full-stack MERN platform for booking home services with real-time tracking and payments.",
    tags: ["MERN", "Stripe", "Sockets"],
    gradient: "from-[oklch(0.7_0.25_245)] to-[oklch(0.85_0.18_200)]",
    glyph: "S",
  },
  {
    title: "Second-Hand Books Marketplace",
    desc: "E-commerce marketplace for pre-owned books with seller dashboards and search.",
    tags: ["MERN", "Marketplace"],
    gradient: "from-[oklch(0.85_0.18_200)] to-[oklch(0.7_0.28_295)]",
    glyph: "📚",
  },
  {
    title: "HR Management System",
    desc: "Employee management, attendance tracking and payroll automation for SMBs.",
    tags: ["React", "Node", "MySQL"],
    gradient: "from-[oklch(0.75_0.27_340)] to-[oklch(0.7_0.28_295)]",
    glyph: "HR",
  },
  {
    title: "Disaster Response Platform",
    desc: "Geospatial real-time platform powered by Gemini API and WebSockets for crisis coordination.",
    tags: ["Gemini API", "WebSockets", "Geo"],
    gradient: "from-[oklch(0.7_0.28_295)] to-[oklch(0.75_0.27_340)]",
    glyph: "⚡",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Projects <span className="text-gradient">in production</span></>}
          subtitle="Real builds — from AI vision systems to full-stack marketplaces."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative glass rounded-3xl overflow-hidden"
            >
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center text-7xl font-black text-background/30 group-hover:scale-110 transition-transform duration-700">
                  {p.glyph}
                </div>
                <div className="absolute top-3 left-3 right-3 flex justify-between text-[10px] font-mono text-background/80">
                  <span>● LIVE</span>
                  <span>{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md glass font-mono uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-5">
                  <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-[1.02] transition-transform">
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  <a href="https://github.com/prince62058" target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold hover:bg-white/10 transition-colors">
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
