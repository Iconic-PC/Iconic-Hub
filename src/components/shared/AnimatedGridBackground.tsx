import { motion, type MotionValue, useTransform } from "framer-motion";

interface AnimatedGridBackgroundProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

/**
 * A layered backdrop: a slowly panning grid, two soft color-wash blobs that
 * drift with the cursor, and a vignette mask so the grid never competes with
 * foreground content.
 */
export function AnimatedGridBackground({ mouseX, mouseY }: AnimatedGridBackgroundProps) {
  const blueX = useTransform(mouseX ?? { get: () => 0 } as MotionValue<number>, (v) => v * -40);
  const blueY = useTransform(mouseY ?? { get: () => 0 } as MotionValue<number>, (v) => v * -40);
  const greenX = useTransform(mouseX ?? { get: () => 0 } as MotionValue<number>, (v) => v * 30);
  const greenY = useTransform(mouseY ?? { get: () => 0 } as MotionValue<number>, (v) => v * 30);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base grid, gently panning */}
      <div className="absolute inset-0 bg-grid animate-grid-pan mask-fade-b opacity-70" />

      {/* Soft gradient washes that respond to cursor position */}
      <motion.div
        style={{ x: blueX, y: blueY }}
        className="absolute -top-24 left-[8%] h-[420px] w-[420px] rounded-full bg-signal/20 blur-[110px]"
      />
      <motion.div
        style={{ x: greenX, y: greenY }}
        className="absolute top-1/3 right-[6%] h-[380px] w-[380px] rounded-full bg-circuit/15 blur-[110px]"
      />

      {/* Base vignette to keep edges dark and premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/0 via-void/0 to-void" />
      <div className="absolute inset-0 bg-radial-fade opacity-40" />
    </div>
  );
}
