import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* radial glow pulse */}
          <motion.div
            className="absolute w-[70vw] h-[70vw] rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, oklch(0.7 0.28 295 / 0.5), oklch(0.7 0.25 245 / 0.3), transparent 70%)",
            }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.3, 1, 0.9], opacity: [0, 0.8, 0.5] }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />

          {/* light sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(110deg, transparent 35%, oklch(0.85 0.18 200 / 0.18) 50%, transparent 65%)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.2, delay: 1.2, ease: [0.65, 0, 0.35, 1] }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* PRINCE — letters fade + blur in cinematic Marvel style */}
            <div className="flex">
              {"PRINCE".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(24px)", y: 30, letterSpacing: "0.3em" }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    letterSpacing: "0em",
                  }}
                  transition={{
                    delay: 0.2 + i * 0.15,
                    duration: 1.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-6xl md:text-9xl font-bold tracking-tight inline-block bg-gradient-to-b from-white via-white to-[oklch(0.7_0.28_295)] bg-clip-text text-transparent drop-shadow-[0_0_30px_oklch(0.7_0.28_295/0.6)]"
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            {/* underline reveal */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-72 origin-center bg-gradient-to-r from-transparent via-[oklch(0.85_0.18_200)] to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.9 }}
              className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-muted-foreground uppercase"
            >
              Full Stack · AI · Freelancer
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
