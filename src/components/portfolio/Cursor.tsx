import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ background: "white" }}
        animate={{ x: pos.x - 12, y: pos.y - 12, scale: hovering ? 2.5 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99] border border-primary hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovering ? 1.5 : 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      />
    </>
  );
}
