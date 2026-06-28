import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Building2, Calendar, MapPin, Sparkles } from "lucide-react";

const jobs = [
  {
    tag: "CURRENT",
    role: "Full Stack Engineer",
    company: "Satya Kabir E-Solutions Pvt. Ltd.",
    type: "Full-time",
    date: "Jan 2026 – Present",
    location: "Bhopal, MP, India · On-site",
    desc: "Working as a Full Stack Engineer on modern web applications using the MERN stack — building responsive, scalable products end-to-end.",
    bullets: [
      "Developing scalable web apps with React.js, Node.js, Express.js & MongoDB",
      "Building REST APIs and backend services for real-time applications",
      "Designing user-friendly UI/UX with HTML, CSS, JavaScript & Bootstrap",
      "Integrating third-party APIs and authentication systems",
      "Managing databases and optimizing application performance",
      "Bug fixing, code optimization and production support",
    ],
    tags: ["MERN", "Node.js", "MongoDB", "REST APIs", "Full-Stack"],
  },
  {
    tag: "INTERNSHIP",
    role: "Frontend Developer Intern",
    company: "Frienchtech IT Solutions Pvt. Ltd.",
    type: "Internship",
    date: "Jul 2025 – Oct 2025",
    location: "Remote",
    desc: "Built production React interfaces, owned end-to-end UI features, optimized performance and collaborated with backend teams to ship polished experiences.",
    bullets: [],
    tags: ["React.js", "Tailwind", "REST APIs", "Git/GitHub", "Figma → Code"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Experience"
          title={<>Where I've <span className="text-gradient">shipped</span></>}
        />
        <div className="relative pl-8 md:pl-12 space-y-10">
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.7_0.28_295)] via-[oklch(0.7_0.25_245)] to-transparent" />
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[33px] md:-left-[41px] top-6 w-4 h-4 rounded-full bg-[oklch(0.7_0.28_295)] glow animate-pulse-glow" />
              <div className="glass rounded-3xl p-8 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-[oklch(0.85_0.18_200)] font-mono mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> {j.tag}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{j.role}</h3>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{j.company}</span>
                      <span className="text-xs">· {j.type}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1.5">
                    <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {j.date}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {j.location}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{j.desc}</p>
                {j.bullets.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {j.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-[oklch(0.7_0.28_295)]">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-5">
                  {j.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full glass text-foreground/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
