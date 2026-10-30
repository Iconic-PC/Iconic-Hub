import { motion } from "framer-motion";
import { ShieldCheck, Code2, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: ShieldCheck,
    label: "Security-led work",
    description: "I design every digital experience with security and trust at the center.",
  },
  {
    icon: Code2,
    label: "Modern web craftsmanship",
    description: "Clean interfaces, scalable code, and thoughtful UX are the standards I ship with.",
  },
  {
    icon: Sparkles,
    label: "Personal brand focus",
    description: "Iconic Hub is my technology brand, where I showcase projects, labs, and real results.",
  },
];

export function AboutPreview() {
  return (
    <section id="about" className="relative py-28">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
            Meet the Founder
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            Iconic Hub is my personal technology brand
          </h2>
          <p className="mt-6 text-balance leading-relaxed text-slate-400">
            I’m Ndukwe Obinna Goodluck. Through Iconic Hub, I share my work in cybersecurity and web
            development together with the reasoning, tools, and results behind it. This is not a large
            agency — it is my personal brand for projects I deliver and showcase.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid gap-4"
        >
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-surface/50 p-5 transition-colors hover:border-signal/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 text-signal">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {pillar.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
