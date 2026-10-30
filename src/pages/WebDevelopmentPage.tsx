
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Server,
  Cloud,
  Globe,
  ShieldCheck,
  Workflow,
  Terminal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { featuredProjects } from "@/data/projects";

const SERVICES = [
  "Frontend Web Development",
  "Full-Stack Web Development",
  "Business Websites",
  "Portfolio Websites",
  "Landing Pages",
  "Responsive Website Development",
  "Backend API Development",
  "Database Design and Integration",
  "Authentication and User Management",
  "Supabase Integration",
  "Website Maintenance",
  "Web Application Development",
];

const TECH_STACK = [
  {
    title: "Frontend Development",
    icon: Code2,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    technologies: [
      "Python",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "Express.js",
    ],
  },
  {
    title: "Database and Backend Services",
    icon: Database,
    technologies: [
      "Supabase",
      "PostgreSQL",
      "Database Integration",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Development Tools",
    icon: Terminal,
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "Postman",
      "VirtualBox",
    ],
  },
  {
    title: "Deployment and Platforms",
    icon: Cloud,
    technologies: [
      "Cloudflare Pages",
      "Render",
      "GitHub",
      "Web Hosting",
      "Environment Configuration",
    ],
  },
  {
    title: "Development Practices",
    icon: Workflow,
    technologies: [
      "Responsive Design",
      "Component-Based Architecture",
      "API Development",
      "Database Management",
      "Performance Optimization",
      "Version Control",
    ],
  },
];

export function WebDevelopmentPage() {
  const projects = featuredProjects.filter(
    (project) => project.category === "web-development"
  );

  const goToContact = () => {
    window.location.href = "/#contact";
  };

  const scrollToProjects = () => {
    document
      .getElementById("web-development-portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main id="main-content">
      {/* HERO SECTION */}
      <section
        id="web-development-home"
        className="relative flex min-h-screen items-center overflow-hidden pt-28"
      >
        <div className="container relative grid gap-16 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-slate-300">
              Web Development Portfolio
            </span>

            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Ndukwe Goodluck Obinna
            </h1>

            <p className="mt-2 font-mono text-sm uppercase tracking-wide text-slate-300">
              Web Developer · Full-Stack Development · Cybersecurity
            </p>

            <h2 className="mt-6 text-balance text-lg leading-relaxed text-slate-400">
              Building Modern Web Applications From Frontend to Backend.
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              I build responsive websites, interactive frontend applications
              and backend-powered web solutions using modern technologies.
              My development toolkit includes React, TypeScript, JavaScript,
              Python, Node.js, FastAPI and Supabase. Through Iconic Hub,
              I work on digital solutions that combine functionality,
              usability and security awareness.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "Python", "Node.js", "Supabase"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-signal/20 bg-signal/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
              >
                View My Projects
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={goToContact}
              >
                Contact Me
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-surface/60 p-8 shadow-xl shadow-slate-950/20 sm:p-10"
          >
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-void/70 p-8">
                <Code2 className="h-8 w-8 text-signal" />

                <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                  Full-Stack Development
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  Developing modern web experiences with frontend frameworks,
                  backend technologies, databases and API integrations.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-signal">
                    Frontend
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    React & TypeScript
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-circuit">
                    Backend
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Python & Node.js
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6 sm:col-span-2">
                  <p className="text-sm uppercase tracking-[0.25em] text-signal">
                    Database & Backend Services
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Supabase & PostgreSQL
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="web-development-about" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="About My Development Work"
            title="From ideas to functional digital products"
            description="I work across frontend and backend development, building user interfaces, application logic, APIs and database integrations. My approach combines practical development skills with an understanding of application security."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300"
            >
              <Code2 className="h-7 w-7 text-signal" />

              <h4 className="mt-5 font-display text-lg font-semibold text-white">
                Application Development
              </h4>

              <p className="mt-4 leading-relaxed">
                I develop responsive user interfaces and web applications
                using React, JavaScript, TypeScript and modern CSS frameworks.
                I also work with backend technologies to connect application
                interfaces to APIs, databases and server-side functionality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300"
            >
              <Database className="h-7 w-7 text-circuit" />

              <h4 className="mt-5 font-display text-lg font-semibold text-white">
                Backend and Data Integration
              </h4>

              <p className="mt-4 leading-relaxed">
                I work with Python, Node.js, FastAPI and Supabase to explore
                backend application development, REST API integration,
                database connectivity and application functionality.
                I also consider security and maintainability when building
                digital products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="web-development-tech" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Tools and technologies"
            description="Technologies I use and work with across frontend development, backend programming, databases and deployment."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((stack, index) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={stack.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-surface/60 p-7 transition-colors hover:border-signal/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal/20 bg-signal/10 text-signal">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white">
                      {stack.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {stack.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="neutral"
                        className="border-white/10 bg-white/5 text-slate-300"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="web-development-services" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Web development services"
            description="Digital solutions for businesses, organizations, startups and individuals."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <Card className="h-full border-white/10 bg-surface/60 transition-colors hover:border-signal/30">
                  <CardContent>
                    <CardTitle>{title}</CardTitle>

                    <CardDescription className="mt-2 text-slate-300">
                      Practical development focused on functionality,
                      usability, maintainability and reliable delivery.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section id="web-development-portfolio" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected web development work"
            description="A selection of applications and websites built or currently under development."
          />

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-white/10 bg-surface/60"
                >
                  <div className="relative h-44 overflow-hidden bg-grid">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 className="h-12 w-12 text-slate-500" />
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>

                  <CardContent>
                    <Badge
                      variant="circuit"
                      className="w-fit"
                    >
                      {project.categoryLabel}
                    </Badge>

                    <CardTitle className="mt-3">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>

                    <div className="mt-5">
                      <p className="text-sm font-medium text-white">
                        Project Focus
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        Web application development, responsive interfaces
                        and practical software solutions.
                      </p>
                    </div>

                    {project.href && (
                      <div className="mt-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            window.open(
                              project.href,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          View Project
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-slate-400">
              Projects will be displayed here as they are added to the
              portfolio.
            </p>
          )}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section id="web-development-process" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Our Workflow"
            title="Development process"
            description="A structured approach to planning, building, testing and delivering digital products."
          />

          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Requirements Gathering",
                description:
                  "Understand the project goals, users and functional requirements.",
              },
              {
                title: "Planning and Architecture",
                description:
                  "Plan the application structure, technology stack and development workflow.",
              },
              {
                title: "Frontend Development",
                description:
                  "Build responsive interfaces and interactive application components.",
              },
              {
                title: "Backend and Database Development",
                description:
                  "Implement server-side functionality, APIs, authentication and database integrations where required.",
              },
              {
                title: "Testing and Quality Assurance",
                description:
                  "Test functionality, responsiveness, integrations and application behaviour.",
              },
              {
                title: "Deployment and Maintenance",
                description:
                  "Deploy the application and provide ongoing improvements and maintenance.",
              },
            ].map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-surface/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-signal/10 font-semibold text-signal">
                    {index + 1}
                  </span>

                  <h3 className="font-semibold text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY WORK WITH ICONIC HUB */}
      <section id="web-development-why" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Why Iconic Hub"
            title="Building with purpose"
            description="A practical approach to creating modern, functional and maintainable web applications."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clean Code",
                description:
                  "Structured and maintainable code that supports future improvements.",
              },
              {
                title: "Responsive Design",
                description:
                  "Interfaces designed to work across mobile, tablet and desktop screens.",
              },
              {
                title: "Modern Technologies",
                description:
                  "Practical use of modern frontend, backend and database technologies.",
              },
              {
                title: "Performance Focus",
                description:
                  "Attention to loading performance, usability and efficient implementation.",
              },
              {
                title: "Security Awareness",
                description:
                  "A development mindset that considers application security and safer implementation.",
              },
              {
                title: "Reliable Communication",
                description:
                  "Clear project discussions, progress updates and delivery expectations.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-surface/60 p-6"
              >
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM COLLABORATION */}
      <section id="web-development-team" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Iconic Hub"
            title="From individual projects to complete solutions"
            description="Iconic Hub brings together web development and cybersecurity capabilities. Depending on project requirements, solutions can include frontend applications, backend services, databases, authentication and third-party integrations."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-surface/60 p-8">
              <Globe className="h-7 w-7 text-signal" />

              <h3 className="mt-5 font-semibold text-white">
                Web Development
              </h3>

              <p className="mt-3 leading-relaxed text-slate-400">
                Websites, web applications, frontend interfaces,
                backend systems and database integrations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface/60 p-8">
              <ShieldCheck className="h-7 w-7 text-circuit" />

              <h3 className="mt-5 font-semibold text-white">
                Security-Aware Development
              </h3>

              <p className="mt-3 leading-relaxed text-slate-400">
                Applying cybersecurity awareness during development,
                with attention to application security and safer
                implementation practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT ENQUIRY CTA */}
      <section
        id="web-development-contact"
        className="relative py-28"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-surface/60 p-10 text-center"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
              Have a Project in Mind?
            </span>

            <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Let's Build Something Great Together.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400">
              Need a business website, web application, backend API,
              database integration or a complete digital solution?
              Let's discuss your project and bring your ideas to life.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={goToContact}
              >
                Start a Web Project
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
