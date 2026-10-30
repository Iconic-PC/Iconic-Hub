
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isSecurity = project.category === "cybersecurity";
  const accent = isSecurity ? "signal" : "circuit";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <Card
        className={cn(
          "flex h-full flex-col overflow-hidden transition-all duration-300",
          isSecurity
            ? "group-hover:shadow-glow-blue group-hover:border-signal/40"
            : "group-hover:shadow-glow-green group-hover:border-circuit/40"
        )}
      >
        {/* Project Image */}
        <div
          className={cn(
            "relative flex h-48 items-center justify-center overflow-hidden border-b border-white/5 bg-surface-raised",
            !project.image && "bg-grid"
          )}
          style={
            !project.image
              ? { backgroundSize: "26px 26px" }
              : undefined
          }
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <>
              <div
                className={cn(
                  "absolute inset-0 opacity-60",
                  isSecurity
                    ? "bg-gradient-to-br from-signal/20 via-transparent to-transparent"
                    : "bg-gradient-to-br from-circuit/20 via-transparent to-transparent"
                )}
              />

              <span
                className={cn(
                  "relative font-display text-4xl font-bold tracking-tight opacity-90 transition-transform duration-500 group-hover:scale-110",
                  isSecurity ? "text-signal" : "text-circuit"
                )}
              >
              </span>
            </>
          )}
        </div>

        {/* Project Details */}
        <CardHeader className="flex-1">
          <Badge variant={accent} className="w-fit">
            {project.categoryLabel}
          </Badge>

          <CardTitle className="mt-3">
            {project.title}
          </CardTitle>

          <CardDescription className="mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        {/* Project Action */}
        <CardContent className="pt-0">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="inline-flex h-9 w-fit items-center justify-center rounded-md px-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:px-3 hover:bg-white/5"
            >
              View Project

              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              disabled
              className="w-fit px-0"
            >
              Coming Soon
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
