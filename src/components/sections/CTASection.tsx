import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[400px] -translate-y-1/2 rounded-full bg-circuit/10 blur-[120px]"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-surface/60 px-8 py-16 text-center backdrop-blur-sm sm:px-16"
        >
          <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-balance leading-relaxed text-slate-400">
            Whether you're looking for a cybersecurity professional, a frontend developer, or a complete web solution through Iconic Hub, I'd love to hear about your project.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FolderOpen className="h-4 w-4" />
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
