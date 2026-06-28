import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { Quote } from "lucide-react";

const items = [
  { name: "Rahul S.", role: "Founder, Servidorr", text: "Prince delivered our MVP in record time. Clean code, beautiful UI and an engineer who actually owns the outcome." },
  { name: "Anita M.", role: "Product Lead, Frienchtech", text: "One of the sharpest interns we've had. Shipped production features faster than mid-level devs." },
  { name: "Karan V.", role: "Founder, EduStack", text: "He understood our AI use-case instantly and turned the Gemini integration into a delightful product flow." },
  { name: "Priya T.", role: "Freelance Client", text: "From design to deploy, Prince handled the full stack. The site looks like a Silicon Valley launch." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What clients <span className="text-gradient">say</span></>}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 relative overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-primary/10" />
              <p className="text-lg leading-relaxed mb-6 text-foreground/90">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)] flex items-center justify-center font-bold text-background">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
