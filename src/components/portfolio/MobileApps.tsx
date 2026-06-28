import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeader } from "./Section";
import { ExternalLink, Github, Smartphone, Star, Download } from "lucide-react";
import { DeepakOTTApp } from "./DeepakOTTApp";
import { LeadkartApp } from "./LeadkartApp";
import { VLockerApp } from "./VLockerApp";
import { IndiaOnlineApp } from "./IndiaOnlineApp";



type AppShowcase = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  playStoreUrl?: string;
  apkUrl?: string;
  githubUrl: string;
  rating: string;
  downloads: string;
  status?: string;
  screenshots: string[];
  accent: string;
  LiveComponent: React.ComponentType;
};


const apps: AppShowcase[] = [
  {
    name: "Deepak OTT",
    tagline: "Live TV & OTT Streaming",
    description:
      "Production React Native app — live TV channels, OTT content, custom video player and seamless playback. Published on Google Play Store.",
    tech: ["React Native", "TypeScript", "Video Player", "REST API"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.deepakott",
    githubUrl: "https://github.com/prince62058/DeepakOTTMobileApp",
    rating: "4.6",
    downloads: "1K+",
    accent: "oklch(0.7 0.28 295)",
    LiveComponent: DeepakOTTApp,
    screenshots: [
      "https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts",
      "https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i",
      "https://play-lh.googleusercontent.com/KP_R_xOYMb_-2K9p5pIx5bWkImILeaKthq0YdMx0_azxHez7pXAcEwrBNzU9S2-vr3GyHKJ47g69lQa6jdh56Q",
      "https://play-lh.googleusercontent.com/KUnvVSJGOe7oq-qW-E5kFNOMgfk4GkOp7wEyi6tVFOkrUJJzYSH-Gxr_nto-DH5VMBjLIFGRaMA",
      "https://play-lh.googleusercontent.com/Kmf0eS_TGmCyLyGM8BF8-DYoA0zFwabHbDUe5iUneq0kQW64dNZV06eQnm_KDpM9V274gvpFYVkn8XDv8LlDnSk",
      "https://play-lh.googleusercontent.com/OBVqgRK7eerY0GPfK8AOzitu5oE9ecC6kG4kURTCb1K41gpqVsN0WjmJwJh-wX8vILzpcc1kYHt56aLN2g",
      "https://play-lh.googleusercontent.com/URCcoLP3jk6OYTubIY9fcp6oKYTvidTJyx-ZTcxNh9BDMG1YnckEx6Lf7hVOYTmzQQ615qQVtsOPVk7ueCV6",
      "https://play-lh.googleusercontent.com/Yq7oyNIvAAkuc69fG51sbAQS4otJxbObbt3xdr8tXxXyUdq4tVGtfgeKuptveGdP1srxaHVrNPzOYcfaEQ",
      "https://play-lh.googleusercontent.com/Z9WL9L2_Z_IW0DbA4U7Me0Zll18K68qLSaKc_UugpnL5IIM62-cGLTdv0vuQSsKd_OjzBpZIlEodP2Hokz2X",
    ],
  },
  {
    name: "LeadKart AI",
    tagline: "AI-Powered Lead Generation",
    description:
      "Production React Native app helping businesses run Facebook & Instagram ads with AI — manage business profiles, generate leads and track performance in real time.",
    tech: ["React Native", "Expo Router", "Redux", "Firebase", "Razorpay"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.leadkart.ai",
    githubUrl: "https://github.com/prince62058/Leadkart-React-Native",
    rating: "4.5",
    downloads: "500+",
    accent: "oklch(0.55 0.18 270)",
    LiveComponent: LeadkartApp,
    screenshots: [
      "https://play-lh.googleusercontent.com/2sla7SdSZX6B-JbhKW7MQSBr617O4iJXwP8212kKN07aGZ_QWkGhOCSR7OJtehTE0iRqTQtvfl4QHYAs1dCwVpE",
      "https://play-lh.googleusercontent.com/cAt2G7TZGICM1fPjlJcCUkwsqAIjhPP26XdtozxB2fI_QbZ3_bim3r77ZB6NzaV9Vzg5sSG-ODWP9P-aSxpj2g",
      "https://play-lh.googleusercontent.com/So9uB9a2wygBxCMlo-J7CAsT97QE6HKzZJZjtesqDjaLZb_EmVYDSEcjzuKFWczMZA9l7Skv4c41IZrYCCTPNw",
      "https://play-lh.googleusercontent.com/s99EtHy84x_EqAP5uIZE_gPU7Gcj3apTefOYhqma8PeUmn0M_YSgdeSBEW2XsjG1rNDeu3r1kUiUo4i0yiNLrQ",
      "https://play-lh.googleusercontent.com/V8NT_yA6CCgwD0XerYs-K1FpHKHOIQ6-YkIG0H4dfCiSxWjrYZXlNg6j4MSJmO0r4zOgJ19a29Eg50cCGINKKA",
      "https://play-lh.googleusercontent.com/YEZcG2QKZVgFvP7g7Rjax3VAg6xNqIJcBAuWXCiydQuB5d1G-XP0DSwA5mGmCqJ6xcyLahg9YRl18po35YcAYA",
      "https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm",
      "https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ",
      "https://play-lh.googleusercontent.com/ohRyQRA9rNfhp7xLW0MtW1soD8SEX45Oec7MyH3FaxtukWUG_6GKVpvh3JiugzryLi7Bia02HPw",
    ],
  },
  {
    name: "V-Locker",
    tagline: "EMI · Device Lock · Finance",
    description:
      "React Native app for device-financed EMI management — kiosk-mode device locking, customer & loan tracking, EMI reminders and FCM notifications. Built with native Kotlin Device Admin modules.",
    tech: ["React Native 0.81", "Redux Toolkit", "Kotlin Native", "FCM", "Razorpay"],
    githubUrl: "https://github.com/prince62058/V-Locker-Native",
    apkUrl: "https://app.vlocker.in/VLocker.apk",

    rating: "Beta",
    downloads: "In Dev",
    status: "Active Development",
    accent: "oklch(0.45 0.22 275)",
    LiveComponent: VLockerApp,
    screenshots: [],
  },
  {
    name: "India Online",
    tagline: "Gym Equipment Repair & AMC",
    description:
      "Production React Native app for Easy Solutions Service — on-demand gym equipment repair, installation and AMC bookings across India. Treadmill, cycle, cross-trainer and multi-gym servicing with live tracking, wallet, coupons and in-app payments.",
    tech: ["React Native", "Redux", "React Navigation", "REST API", "Razorpay"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ess.indiaonline",
    githubUrl: "https://github.com/prince62058/easySolutionRN",
    rating: "4.4",
    downloads: "1K+",
    accent: "#EC2F07",
    LiveComponent: IndiaOnlineApp,
    screenshots: [],
  },
];



function PhoneFrame({ app }: { app: AppShowcase }) {
  const hasShots = app.screenshots.length > 0;
  const [mode, setMode] = useState<"live" | "shots">("live");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (mode !== "shots" || !hasShots) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % app.screenshots.length);
    }, 2800);
    return () => clearInterval(t);
  }, [app.screenshots.length, mode, hasShots]);

  return (
    <div className="relative mx-auto" style={{ perspective: 1400 }}>
      {/* Glow halo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-[80px] opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${app.accent} 0%, transparent 70%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -12 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[280px] h-[580px] rounded-[3rem] p-[3px]"
      >
        {/* Phone body */}
        <div
          className="absolute inset-0 rounded-[3rem]"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.35 0.02 280), oklch(0.12 0.01 280) 50%, oklch(0.3 0.02 280))",
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        />
        {/* Inner bezel */}
        <div className="absolute inset-[6px] rounded-[2.7rem] bg-black overflow-hidden">
          {/* Dynamic island */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-50 flex items-center justify-end pr-2 pointer-events-none">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: app.accent, boxShadow: `0 0 8px ${app.accent}` }}
            />
          </div>

          {/* Screen content */}
          <div className="absolute inset-0">
            {mode === "live" ? (
              <app.LiveComponent />
            ) : (
              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={app.screenshots[idx]}
                  alt={`${app.name} screenshot ${idx + 1}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
            )}
          </div>

          {/* Reflection */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-40"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.04) 100%)",
            }}
          />
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[3px] top-28 w-[3px] h-12 rounded-l-full bg-[oklch(0.25_0.01_280)]" />
        <div className="absolute -left-[3px] top-44 w-[3px] h-20 rounded-l-full bg-[oklch(0.25_0.01_280)]" />
        <div className="absolute -right-[3px] top-36 w-[3px] h-16 rounded-r-full bg-[oklch(0.25_0.01_280)]" />
      </motion.div>

      {/* Live / Screenshots toggle */}
      {hasShots && (
        <div className="flex justify-center gap-1 mt-6 p-1 rounded-full glass mx-auto w-fit">
          {(["live", "shots"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all"
              style={{
                background: mode === m ? app.accent : "transparent",
                color: mode === m ? "white" : "oklch(0.7 0.02 280)",
              }}
            >
              {m === "live" ? "▶ Live Demo" : "Screenshots"}
            </button>
          ))}
        </div>
      )}

      {mode === "shots" && hasShots && (
        <div className="flex justify-center gap-1.5 mt-3">
          {app.screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show screenshot ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: i === idx ? 22 : 6,
                background:
                  i === idx ? app.accent : "oklch(0.5 0.02 280 / 0.4)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileApps() {
  return (
    <section id="apps" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Mobile Apps"
          title={
            <>
              Live on the <span className="text-gradient">Play Store</span>
            </>
          }
          subtitle="Shipped React Native apps — real users, real downloads."
        />

        {apps.map((app, appIdx) => (
          <div
            key={app.name}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              appIdx > 0 ? "mt-24" : ""
            }`}
          >
            {/* Phone */}
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneFrame app={app} />
            </div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" style={{ color: app.accent }} />
                {app.playStoreUrl ? "Production · Android" : (app.status ?? "In Development")}
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black mb-2">
                  {app.name}
                </h3>
                <p
                  className="text-lg font-semibold"
                  style={{ color: app.accent }}
                >
                  {app.tagline}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {app.description}
              </p>

              <div className="flex gap-6">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Star
                      className="w-4 h-4 fill-current"
                      style={{ color: app.accent }}
                    />
                    <span className="text-2xl font-bold">{app.rating}</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">
                    {app.playStoreUrl ? "Play Store" : "Status"}
                  </div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <Download
                      className="w-4 h-4"
                      style={{ color: app.accent }}
                    />
                    <span className="text-2xl font-bold">{app.downloads}</span>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">
                    Downloads
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {app.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full glass font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {app.playStoreUrl && (
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground text-background font-semibold hover:scale-[1.03] transition-transform"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.302 12l2.396-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <div className="text-[10px] opacity-70 font-mono uppercase">
                        Get it on
                      </div>
                      <div className="text-sm">Google Play</div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
                {app.apkUrl && (
                  <a
                    href={app.apkUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold hover:scale-[1.03] transition-transform text-white"
                    style={{ background: app.accent }}
                  >
                    <Download className="w-5 h-5" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] opacity-80 font-mono uppercase">
                        Direct Download
                      </div>
                      <div className="text-sm">Download APK</div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass font-semibold hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" /> Source
                </a>

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
