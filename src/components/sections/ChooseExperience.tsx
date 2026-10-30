
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  ArrowRight,
  Search,
  Bug,
  FileSearch2,
  Layers,
  Palette,
  Briefcase,
  Network,
  Database,
  Globe,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExperienceCard {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  points: { icon: typeof Search; label: string }[];
  ctaLabel: string;
  accent: "signal" | "circuit";
}

const CARDS: ExperienceCard[] = [
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Exploring systems, identifying security weaknesses, and understanding how to protect applications and digital environments.",
    accent: "signal",
    points: [
      { icon: Search, label: "Ethical hacking and security testing" },
      { icon: Network, label: "Reconnaissance and enumeration" },
      { icon: Bug, label: "Web application vulnerability testing" },
      { icon: Database, label: "SQL injection and XSS security labs" },
      { icon: FileSearch2, label: "Malware analysis and detection fundamentals" },
    ],
    ctaLabel: "Explore Cybersecurity",
  },
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, functional and user-focused digital experiences using modern web technologies.",
    accent: "circuit",
    points: [
      { icon: Layers, label: "Responsive website development" },
      { icon: Code2, label: "Frontend applications with React and TypeScript" },
      { icon: Palette, label: "Modern UI design and user experiences" },
      { icon: Globe, label: "Business and portfolio websites" },
      { icon: Briefcase, label: "REST API integration and web solutions" },
    ],
    ctaLabel: "Explore Web Development",
  },
];

export function ChooseExperience() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Explore Iconic Hub"
          title="Where Web Development Meets Cybersecurity"
          description="Discover two connected disciplines: building modern digital experiences and understanding how to secure them."
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
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 sm:p-10",
                  "bg-surface/60 backdrop-blur-sm",
                  isSignal
                    ? "border-signal/15 hover:border-signal/50 hover:shadow-glow-blue"
                    : "border-circuit/15 hover:border-circuit/50 hover:shadow-glow-green"
                )}
              >
                {/* Background glow */}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40",
                    isSignal ? "bg-signal" : "bg-circuit"
                  )}
                />

                {/* Main icon */}
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

                {/* Heading and description */}
                <h3 className="relative mt-6 font-display text-2xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="relative mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
                  {card.description}
                </p>

                {/* Areas of focus */}
                <ul className="relative mt-7 space-y-4">
                  {card.points.map((point) => {
                    const PointIcon = point.icon;

                    return (
                      <li
                        key={point.label}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <PointIcon
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            isSignal ? "text-signal" : "text-circuit"
                          )}
                        />

                        <span className="text-sm leading-relaxed">
                          {point.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Navigation */}
                <Button
                  variant={isSignal ? "primary" : "secondary"}
                  className="relative mt-9 w-full sm:w-auto"
                  onClick={() => {
                    window.location.hash = `#${card.id}`;
                  }}
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
