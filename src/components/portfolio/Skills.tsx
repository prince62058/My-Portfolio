import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Layout, Server, Database, Wrench, Brain, ShieldCheck } from "lucide-react";

const groups = [
  { Icon: Layout, label: "Frontend", color: "oklch(0.7 0.28 295)", items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind"] },
  { Icon: Server, label: "Backend", color: "oklch(0.7 0.25 245)", items: ["Node.js", "Express.js", "Java", "JDBC"] },
  { Icon: Database, label: "Database", color: "oklch(0.85 0.18 200)", items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"] },
  { Icon: Wrench, label: "Tools", color: "oklch(0.75 0.27 340)", items: ["GitHub", "Firebase", "Postman", "VS Code"] },
  { Icon: Brain, label: "AI / ML", color: "oklch(0.7 0.28 295)", items: ["OpenCV", "Scikit-learn", "Gemini API"] },
  { Icon: ShieldCheck, label: "Cybersecurity", color: "oklch(0.7 0.25 245)", items: ["Ethical Hacking", "Security Basics"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Tech Arsenal"
          title={<>Skills powering <span className="text-gradient">the build</span></>}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map(({ Icon, label, color, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden"
            >
              <div
                className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: color }}
              />
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-background mb-4"
                  style={{ background: color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full glass font-mono hover:text-foreground hover:border-primary/50 transition-colors"
                    >
                      {s}
                    </span>
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
