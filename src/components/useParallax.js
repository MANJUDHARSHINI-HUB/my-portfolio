import { useEffect, useRef, useState } from "react";

/**
 * Tracks normalized mouse position (-1 to 1 on each axis) relative to a
 * container element, for use in parallax transforms. Falls back to (0,0)
 * on touch devices / when prefers-reduced-motion is set.
 */
export default function useParallax() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setPos({ x, y });
    };

    const handleLeave = () => setPos({ x: 0, y: 0 });

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return { ref, pos };
}
