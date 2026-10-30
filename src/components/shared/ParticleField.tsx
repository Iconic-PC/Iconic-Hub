import { useMemo } from "react";

interface Particle {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: "signal" | "circuit";
}

// Deterministic pseudo-random generator so particle layout is stable across
// renders (no reliance on Math.random inside JSX).
function seededParticles(count: number): Particle[] {
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${(rand() * 90 + 4).toFixed(1)}%`,
    left: `${(rand() * 96 + 2).toFixed(1)}%`,
    size: Math.round(rand() * 3 + 2),
    duration: Number((rand() * 4 + 5).toFixed(1)),
    delay: Number((rand() * 5).toFixed(1)),
    color: i % 3 === 0 ? "circuit" : "signal",
  }));
}

export function ParticleField({ count = 26 }: { count?: number }) {
  const particles = useMemo(() => seededParticles(count), [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full animate-pulse-glow ${
            p.color === "signal" ? "bg-signal shadow-glow-blue" : "bg-circuit shadow-glow-green"
          }`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
