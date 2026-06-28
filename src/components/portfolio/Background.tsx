import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.28 295 / 0.3), transparent 70%)" }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.25 245 / 0.3), transparent 70%)" }}
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 200 / 0.2), transparent 70%)" }}
        animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            left: `${(i * 137) % 100}%`,
            top: `${(i * 73) % 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + (i % 5), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}
