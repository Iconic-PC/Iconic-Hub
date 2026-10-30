import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface UseMousePositionResult {
  /** Smoothed horizontal offset, roughly in the range [-0.5, 0.5] */
  x: MotionValue<number>;
  /** Smoothed vertical offset, roughly in the range [-0.5, 0.5] */
  y: MotionValue<number>;
}

/**
 * Tracks pointer position relative to the viewport center and exposes it as
 * smoothed, normalized motion values. Used to drive subtle parallax on the
 * hero background and illustration. Falls back gracefully (stays at 0,0) on
 * touch devices where no mousemove ever fires.
 */
export function useMousePosition(): UseMousePositionResult {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;
      rawX.set(normalizedX);
      rawY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY]);

  return { x, y };
}
