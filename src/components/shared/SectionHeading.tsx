import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-slate-400 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
