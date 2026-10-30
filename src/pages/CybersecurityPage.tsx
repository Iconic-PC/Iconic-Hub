
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Bug,
  Lock,
  Award,
  ArrowRight,
  Network,
  Terminal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { featuredProjects } from "@/data/projects";

const SKILLS = [
  {
    icon: ShieldCheck,
    title: "Ethical Hacking",
    description:
      "Practical security testing in authorized environments, including reconnaissance, enumeration, attack analysis, and identifying potential security weaknesses.",
  },
  {
    icon: Bug,
    title: "Web Application Security",
    description:
      "Testing web applications for common security vulnerabilities, including SQL injection, cross-site scripting, authentication weaknesses, and access control issues.",
  },
  {
    icon: Network,
    title: "Network Security",
    description:
      "Network discovery, service enumeration, protocol analysis, traffic inspection, and security assessment using practical networking tools.",
  },
  {
    icon: Terminal,
    title: "Malware Analysis",
    description:
      "Practical static and dynamic malware analysis, suspicious file investigation, indicator identification, and YARA-based detection.",
  },
];

const TECHNICAL_TOOLS = [
  "Kali Linux",
  "Flare VM",
  "Nmap",
  "Burp Suite",
  "Wireshark",
  "OWASP ZAP",
  "OWASP Testing Applications",
  "YARA",
  "Linux Command Line",
  "Windows Event Analysis",
  "Git & GitHub",
];

const PRACTICAL_AREAS = [
  "Reconnaissance and information gathering",
  "Network scanning and service enumeration",
  "Web application penetration testing",
  "SQL injection testing in controlled environments",
  "Cross-site scripting (XSS) testing",
  "Authentication and access control testing",
  "Burp Suite and OWASP ZAP",
  "Network traffic analysis using Wireshark",
  "Malware static and dynamic analysis (in progress)",
  "SOC monitoring and security event analysis (in progress)",
];

const REPORTS = [
  "Security assessment documentation",
  "Incident analysis and response documentation",
  "Vulnerability analysis and remediation recommendations",
  "Technical evidence and investigation reports",
];

const DEVELOPMENT = [
  {
    title: "B.Tech. — Cybersecurity",
    organization: "Federal University of Technology Owerri (FUTO)",
    period: "2023 – Present",
    description:
      "Academic development in cybersecurity, computing, information security, and related technical disciplines.",
  },
  {
    title: "Cisco Networking Basics",
    organization: "Cisco Networking Academy",
    period: "2024",
    description:
      "Networking fundamentals, network concepts, devices, connectivity, and foundational networking knowledge.",
  },
  {
    title: "Ethical Hacking & Digital Forensics Internship",
    organization: "ICDFA",
    period: "November 2025 – January 2027 (Expected)",
    description:
      "Practical internship experience involving ethical hacking, digital forensics, security investigations, and hands-on technical assignments.",
  },
];

export function CybersecurityPage() {
  const projects = featuredProjects.filter(
    (project) => project.category === "cybersecurity"
  );

  return (
    <main id="main-content">

      {/* HERO SECTION */}
      <section
        id="cybersecurity-home"
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
              Cybersecurity & Ethical Hacking
            </span>

            <h1 className="mt-6 text-balance font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
            Understanding threats.
            <br />
            Securing systems.
            <br />
            Building better technology.
          </h1>

            <p className="mt-6 text-balance text-lg leading-relaxed text-slate-400">
              I'm Ndukwe Goodluck Obinna, a cybersecurity practitioner and web developer primarily focused on Red Team operations and ethical hacking, with complementary Blue Team development in malware analysis and Security Operations Center (SOC) analysis in progress.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Through hands-on projects, controlled security labs, and
              continuous technical development, I explore how systems
              work, where weaknesses exist, and how they can be made safer.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("cybersecurity-contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("cybersecurity-projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore My Projects
              </Button>
            </div>
          </motion.div>

          {/* SECURITY PROFILE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-surface/60 p-6 shadow-xl shadow-slate-950/20 sm:p-10"
          >
            <div className="space-y-6">

              <div className="rounded-3xl border border-white/10 bg-void/70 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/10 text-signal">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h2 className="font-display text-2xl font-semibold text-white">
                My Security Approach
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
            My primary interest is offensive security: understanding how
            systems work, identifying vulnerabilities, and evaluating
            security weaknesses through authorized ethical hacking.
            Alongside this, I am developing complementary defensive
            capabilities in malware analysis and SOC operations.
          </p>
                        </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-signal">
                    Primary Focus
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    Cybersecurity
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Ethical Hacking · Penetration Testing · Offensive Security
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-circuit">
                    Complementary Focus
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    Blue Team
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Malware Analysis · SOC Analysis (In Progress)
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="cybersecurity-about" className="relative py-28">
        <div className="container">

          <SectionHeading
            eyebrow="About Me"
            title="A practical approach to cybersecurity"
            description="My journey combines cybersecurity knowledge, hands-on technical investigations, and web development."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300">
              <h3 className="font-display text-xl font-semibold text-white">
                My Background
              </h3>

              <p className="mt-5 leading-relaxed">
                I'm passionate about understanding how digital systems
                operate, how attackers identify weaknesses, and how
                organizations can improve their security posture.
              </p>

              <p className="mt-4 leading-relaxed">
                My practical experience includes ethical hacking
                exercises, network analysis, web application testing,
                digital forensic investigations, malware analysis,
                and threat intelligence research.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300">
              <h3 className="font-display text-xl font-semibold text-white">
                What I Do Through Iconic Hub
              </h3>

              <p className="mt-5 leading-relaxed">
                Iconic Hub is my technology brand, bringing together
                cybersecurity and web development under one identity.
              </p>

              <p className="mt-4 leading-relaxed">
                I use it to develop digital products, document technical
                projects, explore security challenges, and build solutions
                that combine functionality with security awareness.
              </p>

              <p className="mt-6 font-semibold text-signal">
                Secure. Build. Innovate.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="cybersecurity-skills" className="relative py-28">
        <div className="container">

          <SectionHeading
            eyebrow="Technical Expertise"
            title="Areas of Focus"
            description="Technical areas developed through practical exercises, projects, research, and continuous learning."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.1,
                    ease: "easeOut",
                  }}
                  className="rounded-3xl border border-white/10 bg-surface/60 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/10 text-signal">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    {skill.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-400">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="cybersecurity-projects" className="relative py-28">
        <div className="container">

          <SectionHeading
            eyebrow="Selected Work"
            title="Cybersecurity Projects"
            description="Practical projects, security investigations, and technical research demonstrating my approach to cybersecurity."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL EXPERIENCE */}
      <section id="cybersecurity-labs" className="relative py-28">
        <div className="container">

          <SectionHeading
            eyebrow="Hands-on Experience"
            title="Practical Security Work"
            description="Examples of technical activities explored through authorized projects and controlled laboratory environments."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PRACTICAL_AREAS.map((item) => (
              <Card
                key={item}
                className="border-white/10 bg-surface/60"
              >
                <CardContent>
                  <div className="flex items-center gap-3 text-slate-100">
                    <Lock className="h-5 w-5 shrink-0 text-signal" />
                    <CardTitle className="text-base text-white">
                      {item}
                    </CardTitle>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-surface/60 p-8">
            <h3 className="font-display text-xl font-semibold text-white">
              Technical Tools & Technologies
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {TECHNICAL_TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* REPORTS SECTION */}
      <section id="cybersecurity-reports" className="relative py-28">
        <div className="container">

          <SectionHeading
            eyebrow="Technical Documentation"
            title="Investigation & Security Reporting"
            description="I place importance on documenting technical work clearly, presenting evidence, explaining findings, and communicating recommendations."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {REPORTS.map((item) => (
              <Card
                key={item}
                className="border-white/10 bg-surface/60"
              >
                <CardContent>
                  <CardTitle className="text-base text-white">
                    {item}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* EDUCATION & DEVELOPMENT */}
      <section
        id="cybersecurity-certifications"
        className="relative py-28"
      >
        <div className="container">

          <SectionHeading
            eyebrow="Education & Development"
            title="Learning, Training & Professional Growth"
            description="My academic background, foundational certifications, and ongoing practical development."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {DEVELOPMENT.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-surface/60"
              >
                <CardContent>
                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-circuit/10 text-circuit">
                      <Award className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-signal">
                        {item.organization}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.period}
                      </p>

                      <p className="mt-4 leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="cybersecurity-contact" className="relative py-28">
        <div className="container">

          <div className="rounded-[2rem] border border-white/10 bg-surface/60 p-10 text-center">

            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's Build Something Secure"
              align="center"
            />

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
              Whether you're exploring a cybersecurity project,
              developing a web application, or looking to discuss
              technology and security, I'd be glad to connect.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Button
                size="lg"
                onClick={() => {
                  window.location.hash = "#contact";
                }}
              >
                Contact Me
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  window.location.hash = "#home";
                }}
              >
                Back to Home
              </Button>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
