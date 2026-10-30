import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-signal text-void shadow-[0_0_0_1px_rgba(0,191,255,0.5),0_0_28px_-6px_rgba(0,191,255,0.65)] hover:shadow-[0_0_0_1px_rgba(0,191,255,0.7),0_0_44px_-4px_rgba(0,191,255,0.85)] hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-transparent text-white border border-white/15 hover:border-circuit/60 hover:text-circuit hover:shadow-[0_0_28px_-8px_rgba(34,197,94,0.55)] hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "bg-transparent text-signal border border-signal/40 hover:bg-signal/10 hover:border-signal hover:-translate-y-0.5 active:translate-y-0",
        ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
        link: "bg-transparent text-signal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7 text-[0.95rem]",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
