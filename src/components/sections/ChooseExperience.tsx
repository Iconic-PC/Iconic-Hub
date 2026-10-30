import { motion } from "framer-motion";
import { ShieldCheck, Code2, ArrowRight, Search, Bug, FileSearch2, Layers, Palette, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExperienceCard {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  points: { icon: typeof Search; label: string }[];
  ctaLabel: string;
  accent: "signal" | "circuit";
}

const CARDS: ExperienceCard[] = [
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    accent: "signal",
    points: [
      { icon: Search, label: "Penetration testing projects" },
      { icon: Bug, label: "Vulnerability assessments" },
      { icon: ShieldCheck, label: "Digital forensics investigations" },
      { icon: FileSearch2, label: "Security write-ups & labs" },
    ],
    ctaLabel: "Explore Cybersecurity",
  },
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    accent: "circuit",
    points: [
      { icon: Layers, label: "Responsive websites" },
      { icon: Palette, label: "UI/UX work" },
      { icon: Code2, label: "Frontend applications" },
      { icon: Briefcase, label: "Business-ready solutions" },
    ],
    ctaLabel: "Explore Web Development",
  },
];

export function ChooseExperience() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Explore My Portfolio"
          title="Choose your path"
          description="The heart of the homepage. Pick the portfolio path that matches your goals and see my work in two premium disciplines."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {CARDS.map((card, index) => {
            const isSignal = card.accent === "signal";
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all duration-500",
                  "bg-surface/60 backdrop-blur-sm",
                  isSignal
                    ? "border-signal/15 hover:border-signal/50 hover:shadow-glow-blue"
                    : "border-circuit/15 hover:border-circuit/50 hover:shadow-glow-green"
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40",
                    isSignal ? "bg-signal" : "bg-circuit"
                  )}
                />

                <div
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110",
                    isSignal
                      ? "border-signal/30 bg-signal/10 text-signal"
                      : "border-circuit/30 bg-circuit/10 text-circuit"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-6 font-display text-2xl font-semibold text-white">
                  {card.title}
                </h3>

                <ul className="relative mt-6 space-y-3">
                  {card.points.map((point) => {
                    const PointIcon = point.icon;
                    return (
                      <li key={point.label} className="flex items-center gap-3 text-slate-300">
                        <PointIcon
                          className={cn("h-4 w-4 shrink-0", isSignal ? "text-signal" : "text-circuit")}
                        />
                        <span className="text-sm">{point.label}</span>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  variant={isSignal ? "primary" : "secondary"}
                  className="relative mt-8 w-full sm:w-auto"
                  onClick={() => (window.location.hash = `#${card.id}`)}
                >
                  {card.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
