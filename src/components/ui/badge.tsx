import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider",
  {
    variants: {
      variant: {
        signal: "border-signal/30 bg-signal/10 text-signal",
        circuit: "border-circuit/30 bg-circuit/10 text-circuit",
        neutral: "border-white/15 bg-white/5 text-slate-300",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
