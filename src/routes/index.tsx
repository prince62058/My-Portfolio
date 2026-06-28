import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Preloader } from "@/components/portfolio/Preloader";
import { CustomCursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { MobileApps } from "@/components/portfolio/MobileApps";
import { GithubSection } from "@/components/portfolio/Github";
import { Services } from "@/components/portfolio/Services";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prince Kumar — Full Stack Developer · AI/ML · Freelancer" },
      { name: "description", content: "Prince Kumar — Full Stack MERN & Java developer, AI/ML enthusiast and freelancer based in Bhopal. Building cinematic web products and intelligent systems." },
      { property: "og:title", content: "Prince Kumar — Full Stack Developer & AI Engineer" },
      { property: "og:description", content: "Premium portfolio of Prince Kumar — Full Stack, AI/ML, Cybersecurity. Open for freelance." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Preloader />
      <AnimatedBackground />
      
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <MobileApps />
      <GithubSection />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
