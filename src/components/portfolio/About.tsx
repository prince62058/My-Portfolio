import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { GraduationCap, Code2, Shield, Brain, Rocket, Sparkles } from "lucide-react";

const cards = [
  { Icon: GraduationCap, title: "B.Tech CSE — AI/ML", text: "Technocrats Institute of Technology, Bhopal. Specializing in Artificial Intelligence & Machine Learning." },
  { Icon: Code2, title: "Full Stack Developer", text: "MERN & Java full stack engineer building scalable, production-grade web platforms." },
  { Icon: Brain, title: "AI Enthusiast", text: "Hands-on with OpenCV, Scikit-learn and Gemini API for real-world intelligent systems." },
  { Icon: Shield, title: "Cybersecurity", text: "Working knowledge of ethical hacking, threat modeling and secure-by-default engineering." },
  { Icon: Rocket, title: "Freelancer", text: "Delivering websites & mobile apps to clients with pixel-perfect execution and on-time releases." },
  { Icon: Sparkles, title: "Passion-Driven", text: "Hardworking, curious and obsessed with shipping experiences that feel like the future." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title={<>The mind <span className="text-gradient">behind the code</span></>}
          subtitle="A developer building at the intersection of full-stack engineering, AI and beautiful design."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[oklch(0.7_0.28_295)/0.2] blur-3xl group-hover:bg-[oklch(0.7_0.28_295)/0.4] transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)] flex items-center justify-center text-background mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
