import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Github as GH, Star, GitFork, Activity } from "lucide-react";

const langs = [
  { name: "JavaScript", pct: 38, color: "oklch(0.85 0.18 90)" },
  { name: "Python", pct: 22, color: "oklch(0.7 0.2 245)" },
  { name: "Java", pct: 18, color: "oklch(0.7 0.25 30)" },
  { name: "TypeScript", pct: 14, color: "oklch(0.7 0.2 220)" },
  { name: "CSS", pct: 8, color: "oklch(0.75 0.27 340)" },
];

const stats = [
  { Icon: Star, label: "Stars", value: "120+" },
  { Icon: GitFork, label: "Forks", value: "40+" },
  { Icon: Activity, label: "Contributions", value: "850+" },
  { Icon: GH, label: "Repos", value: "30+" },
];

export function GithubSection() {
  return (
    <section id="github" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Open Source"
          title={<>On <span className="text-gradient">GitHub</span></>}
          subtitle={
            <>Live activity from{" "}
              <a href="https://github.com/prince62058" className="underline hover:text-foreground" target="_blank" rel="noreferrer">
                @prince62058
              </a>
            </>
          }
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass rounded-3xl p-6"
          >
            <h3 className="font-bold mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-[oklch(0.85_0.18_200)]" /> Contribution Heatmap</h3>
            <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]">
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const intensity = Math.floor(Math.sin(i * 0.7) * 0.5 + Math.random() * 0.6 + 0.3);
                const level = Math.min(4, Math.max(0, intensity + (i % 9 === 0 ? 2 : 0)));
                const opacities = [0.05, 0.25, 0.5, 0.75, 1];
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-[2px]"
                    style={{ background: `oklch(0.7 0.28 295 / ${opacities[level]})` }}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground font-mono">
              <span>Less</span>
              <div className="flex gap-1">
                {[0.05, 0.25, 0.5, 0.75, 1].map((o, i) => (
                  <div key={i} className="w-3 h-3 rounded-[2px]" style={{ background: `oklch(0.7 0.28 295 / ${o})` }} />
                ))}
              </div>
              <span>More</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="font-bold mb-4">Language Usage</h3>
            <div className="space-y-3">
              {langs.map((l) => (
                <div key={l.name}>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span>{l.name}</span>
                    <span className="text-muted-foreground">{l.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: l.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <Icon className="w-5 h-5 mx-auto text-[oklch(0.7_0.28_295)] mb-2" />
                <div className="text-3xl font-bold text-gradient">{value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
