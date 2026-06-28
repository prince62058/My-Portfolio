import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.7_0.28_295)] to-[oklch(0.7_0.25_245)] flex items-center justify-center text-background font-bold glow animate-pulse-glow">P</span>
          <div>
            <div className="font-bold text-gradient">Prince Kumar</div>
            <div className="text-xs text-muted-foreground">Full Stack · AI · Cybersecurity</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Prince Kumar · Crafted with passion in Bhopal, India
        </p>
        <div className="flex gap-2">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/prince62058/" },
            { Icon: Github, href: "https://github.com/prince62058" },
            { Icon: Mail, href: "mailto:prince62058@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[oklch(0.7_0.28_295)] transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
