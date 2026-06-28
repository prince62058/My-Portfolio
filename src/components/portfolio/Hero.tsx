import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import princeImg from "@/assets/prince.png";

const titles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Java Backend Developer",
  "AI/ML Enthusiast",
  "Freelancer",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), 1500);
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else {
          setDel(false);
          setIdx((idx + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
      <div className="max-w-7xl w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[oklch(0.85_0.18_200)]" />
            <span className="text-muted-foreground">Available for freelance work</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Hi, I'm
            <br />
            <span className="text-gradient animate-gradient-x bg-gradient-to-r from-[oklch(0.7_0.28_295)] via-[oklch(0.7_0.25_245)] to-[oklch(0.85_0.18_200)] bg-clip-text text-transparent">
              Prince Kumar
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-medium h-12 font-mono">
            <Typewriter />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building cinematic web experiences with MERN, Java, and AI. B.Tech CSE student
            at Technocrats Institute of Technology, Bhopal — crafting products that feel like the future.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)] text-background font-semibold overflow-hidden glow hover:scale-105 transition-transform"
            >
              <Briefcase className="w-4 h-4" /> Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-semibold hover:border-primary transition-colors"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-3 pt-4">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/prince62058/" },
              { Icon: Github, href: "https://github.com/prince62058" },
              { Icon: Mail, href: "mailto:prince62058@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[oklch(0.7_0.28_295)] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 3D portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            {/* glow orbs */}
            <motion.div
              className="absolute -inset-8 rounded-full opacity-60"
              style={{ background: "conic-gradient(from 0deg, oklch(0.7 0.28 295), oklch(0.7 0.25 245), oklch(0.85 0.18 200), oklch(0.7 0.28 295))" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-2 rounded-[2rem] bg-background" />
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden glass animate-float">
              <img src={princeImg} alt="Prince Kumar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              {/* HUD overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono text-[oklch(0.85_0.18_200)]">
                <span>● REC 4K</span>
                <span>{"<PRINCE.KUMAR/>"}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">STATUS</span>
                  <span className="text-green-400">● ONLINE</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-muted-foreground">LOCATION</span>
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-1/4 glass rounded-2xl p-3 text-xs"
            >
              <div className="font-mono text-[oklch(0.85_0.18_200)]">{"</>"}</div>
              <div className="font-semibold mt-1">MERN</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -right-4 top-1/3 glass rounded-2xl p-3 text-xs"
            >
              <div className="font-mono text-[oklch(0.7_0.28_295)]">AI</div>
              <div className="font-semibold mt-1">ML/Vision</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -right-6 bottom-1/4 glass rounded-2xl p-3 text-xs"
            >
              <div className="font-mono text-[oklch(0.75_0.27_340)]">Java ☕</div>
              <div className="font-semibold mt-1">Backend</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
