import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * The Iconic Hub mark: a central node converging four satellite nodes,
 * literalizing "hub" as a connection point. This same node-and-line
 * vocabulary recurs in the hero illustration and section dividers so the
 * mark isn't a one-off graphic but the seed of the whole visual system.
 */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <img
        src="/favicon.png"
        alt="Iconic Hub logo"
        className="h-9 w-9 rounded-full object-contain"
      />

      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight text-white">
          Iconic <span className="text-signal">Hub</span>
        </span>
      )}
    </div>
  );
}
