import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGridBackground } from "@/components/shared/AnimatedGridBackground";
import { ParticleField } from "@/components/shared/ParticleField";
import { NetworkIllustration } from "@/components/shared/NetworkIllustration";
import { useMousePosition } from "@/hooks/useMousePosition";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const { x, y } = useMousePosition();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <AnimatedGridBackground mouseX={x} mouseY={y} />
      <ParticleField />

      <div className="container relative grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-circuit animate-pulse-glow" />
            Cybersecurity Enthusiast • Web Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Ndukwe Obinna Goodluck
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-balance text-lg leading-relaxed text-slate-400">
            I build secure digital experiences through ethical hacking, modern web development,
            and practical problem solving.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-500"
          >
            Powered by Iconic Hub
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Portfolio
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.hash = "#resume")}
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-6 border-t border-white/10 pt-6 text-xs text-slate-500"
          >
            <span className="font-mono uppercase tracking-wider">Trusted approach</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Ethical hacking · Modern engineering · Practical problem solving</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none"
        >
          <NetworkIllustration mouseX={x} mouseY={y} className="h-full w-full animate-float" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 sm:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
}
