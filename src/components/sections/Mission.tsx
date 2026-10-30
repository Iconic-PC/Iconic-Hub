import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-surface/40 py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-30 mask-fade-edges"
        style={{ backgroundSize: "64px 64px" }}
      />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-signal/50 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-circuit">
            My Mission
          </span>
          <p className="mt-6 text-balance font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            Build secure, polished digital experiences through ethical hacking, modern web development,
            and practical problem solving for clients who value clarity and craft.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-circuit/50 to-transparent" />
    </section>
  );
}
