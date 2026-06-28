import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

type Meteor = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  length: number;
  opacity: number;
  hue: number;
};

// Many thin streaks like a long-exposure meteor shower
const METEORS: Meteor[] = Array.from({ length: 90 }).map((_, i) => ({
  id: i,
  left: (i * 17.3) % 100,
  top: -10 - ((i * 7) % 30),
  delay: ((i * 13) % 30) / 30,
  duration: 1.6 + ((i * 11) % 18) / 10,
  length: 120 + ((i * 29) % 260),
  opacity: 0.35 + ((i * 19) % 60) / 100,
  hue: 200 + ((i * 7) % 60), // blue → cyan → faint purple
}));

// Streaks fall diagonally down-left (like the reference). Angle is from horizontal.
const ANGLE = 105; // degrees, slightly past vertical so they slope to the left

export function MeteorShower() {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState<"down" | "up" | null>(null);
  const lastY = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current;
    if (Math.abs(diff) < 3) return;
    const next = diff > 0 ? "down" : "up";
    lastY.current = y;
    setDirection(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDirection(null), 1000);
  });

  const active = direction !== null;
  const reverse = direction === "up";
  const angle = reverse ? ANGLE + 180 : ANGLE;

  // Travel distance along the streak's own axis
  const travel = 1400;
  const rad = (ANGLE * Math.PI) / 180;
  const dx = Math.cos(rad) * travel * (reverse ? -1 : 1);
  const dy = Math.sin(rad) * travel * (reverse ? -1 : 1);

  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none">
      {METEORS.map((m) => (
        <motion.span
          key={m.id}
          className="absolute block"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: `${m.length}px`,
            height: "1.5px",
            transform: `rotate(${angle}deg)`,
            transformOrigin: "left center",
            background: `linear-gradient(90deg, transparent, oklch(0.95 0.08 ${m.hue} / ${m.opacity}) 60%, oklch(1 0 0 / ${m.opacity}) 95%, transparent)`,
            filter: `drop-shadow(0 0 3px oklch(0.9 0.12 ${m.hue} / 0.6))`,
            borderRadius: "9999px",
          }}
          initial={false}
          animate={
            active
              ? {
                  opacity: [0, m.opacity, m.opacity, 0],
                  x: [0, dx * 0.4, dx],
                  y: [0, dy * 0.4, dy],
                }
              : { opacity: 0, x: 0, y: 0 }
          }
          transition={{
            duration: m.duration,
            delay: m.delay,
            ease: "linear",
            repeat: active ? Infinity : 0,
            repeatDelay: 0,
          }}
        />
      ))}
    </div>
  );
}
