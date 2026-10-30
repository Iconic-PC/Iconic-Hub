import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { featuredProjects } from "@/data/projects";

const SERVICES = [
  "Frontend Web Development",
  "Business Websites",
  "Portfolio Websites",
  "Landing Pages",
  "Responsive Website Development",
  "API Integration",
  "Website Maintenance",
  "Full-Stack Web Solutions (Delivered Through the Iconic Hub Development Team)",
];

export function WebDevelopmentPage() {
  const projects = featuredProjects.filter((project) => project.category === "web-development");

  return (
    <main id="main-content">
      <section id="web-development-home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
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
              Ndukwe Obinna Goodluck
            </h1>

            <p className="mt-2 font-mono text-sm uppercase tracking-wide text-slate-300">Frontend Developer • Cybersecurity Enthusiast</p>

            <h2 className="mt-6 text-balance text-lg leading-relaxed text-slate-400">Building Modern Web Experiences That Perform.</h2>

            <p className="mt-4 text-slate-400">
              I specialize in building responsive, accessible, and high-performance frontend applications using modern web technologies. Through Iconic Hub, I also collaborate with a trusted development team to deliver complete full-stack web solutions for businesses and individuals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" onClick={() => document.getElementById("web-development-portfolio")?.scrollIntoView({ behavior: "smooth" })}>
                View My Projects
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button variant="secondary" size="lg" onClick={() => document.getElementById("web-development-contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-surface/60 p-10 shadow-xl shadow-slate-950/20"
          >
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-void/70 p-8">
                <h3 className="font-display text-2xl font-semibold text-white">Development focus</h3>
                <p className="mt-4 text-slate-300 leading-relaxed">Focused on frontend excellence with the ability to deliver full-stack solutions via a trusted development team.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-signal">Primary Role</p>
                  <p className="mt-3 text-xl font-semibold text-white">Frontend Developer</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-surface/70 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-circuit">Delivery Model</p>
                  <p className="mt-3 text-xl font-semibold text-white">Founder-led + Trusted Development Team</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="web-development-about" className="relative py-28">
        <div className="container">
          <SectionHeading
            eyebrow="About Me"
            title="Transforming ideas into modern web experiences"
            description="I enjoy turning concepts into performant, accessible, and maintainable frontend applications. My primary expertise is frontend development using modern JavaScript technologies, and larger projects are delivered collaboratively through the Iconic Hub development team so clients receive complete end-to-end web solutions."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300">
              <h4 className="font-display text-lg font-semibold text-white">Professional approach</h4>
              <p className="mt-4 leading-relaxed">I build user-focused frontend applications that prioritize performance, accessibility, and a clear engineering mindset. For projects that need backend systems, authentication, or integrations, I coordinate a trusted development team under Iconic Hub to deliver a complete production-ready solution.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300">
              <h4 className="font-display text-lg font-semibold text-white">Expertise</h4>
              <ul className="mt-4 list-disc list-inside text-slate-300">
                <li>Modern frontend architectures with component-based systems</li>
                <li>Performance and accessibility-first implementations</li>
                <li>REST API integration and client-side state management</li>
                <li>Collaborative delivery with backend teams for full-stack outcomes</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="web-development-tech" className="relative py-28">
        <div className="container">
          <SectionHeading eyebrow="Tech Stack" title="Tools and platforms I use" description="Front-end first, with the practices and tools to deliver full applications." />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="rounded-3xl border border-white/10 bg-surface/60 p-6">
              <h4 className="text-sm uppercase tracking-[0.25em] text-signal">Frontend</h4>
              <ul className="mt-4 text-slate-300 space-y-2">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </motion.div>

            <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="rounded-3xl border border-white/10 bg-surface/60 p-6">
              <h4 className="text-sm uppercase tracking-[0.25em] text-signal">Development Tools</h4>
              <ul className="mt-4 text-slate-300 space-y-2">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>npm</li>
              </ul>
            </motion.div>

            <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="rounded-3xl border border-white/10 bg-surface/60 p-6">
              <h4 className="text-sm uppercase tracking-[0.25em] text-signal">Workflow</h4>
              <ul className="mt-4 text-slate-300 space-y-2">
                <li>Responsive Design</li>
                <li>Component-Based Architecture</li>
                <li>REST API Integration</li>
                <li>Performance Optimization</li>
                <li>Team Collaboration</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="web-development-services" className="relative py-28">
        <div className="container">
          <SectionHeading eyebrow="Services" title="What I offer" description="Premium frontend and full-stack delivery through the Iconic Hub team." />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((title) => (
              <Card key={title} className="border-white/10 bg-surface/60">
                <CardContent>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="mt-2 text-slate-300">Professional delivery, attention to performance, and clear engineering handoffs.</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="web-development-portfolio" className="relative py-28">
        <div className="container">
          <SectionHeading eyebrow="Featured Projects" title="Selected web development work" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="border-white/10 bg-surface/60">
                <div className="relative h-40 bg-grid overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    <span className="font-display text-4xl">{project.accentGlyph}</span>
                  </div>
                </div>

                <CardContent>
                  <Badge variant={project.category === 'cybersecurity' ? 'signal' : 'circuit'} className="w-fit">{project.categoryLabel}</Badge>
                  <CardTitle className="mt-3">{project.title}</CardTitle>
                  <CardDescription className="mt-2">{project.description}</CardDescription>

                  <div className="mt-4 text-sm text-slate-300">
                    <p className="font-medium">Technologies:</p>
                    <p className="mt-1">React · TypeScript · Tailwind CSS</p>

                    <p className="mt-3 font-medium">My Contribution:</p>
                    <ul className="list-disc list-inside mt-1 text-slate-300">
                      <li>Frontend Development</li>
                      <li>Responsive Layout</li>
                      <li>API Integration</li>
                    </ul>

                    <p className="mt-3 font-medium">Role: <span className="font-semibold">Frontend Developer (Team Project)</span></p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')}>Live Demo</Button>
                    <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')}>GitHub</Button>
                    <Button variant="ghost" size="sm" onClick={() => window.open('#', '_blank')}>Case Study</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="web-development-process" className="relative py-28">
        <div className="container">
          <SectionHeading eyebrow="Process" title="Development process" description="A pragmatic, team-capable approach to delivering web applications." />

          <ol className="mt-8 space-y-6 text-slate-300">
            {[
              'Requirements Gathering',
              'Planning',
              'Frontend Development',
              'Team Collaboration (when backend services are required)',
              'Testing',
              'Deployment',
            ].map((step, i) => (
              <motion.li key={step} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/8 bg-surface/60 p-6">
                <div className="font-semibold text-white">{i + 1}. {step}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section id="web-development-why" className="relative py-28">
        <div className="container">
          <SectionHeading eyebrow="Why Work With Me" title="Trusted frontend development and collaborative delivery" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Clean Code',
              'Responsive Design',
              'Performance Focused',
              'Modern JavaScript Development',
              'Reliable Communication',
              'Collaborative Delivery',
            ].map((t) => (
              <motion.div key={t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-surface/60 p-6 text-slate-300">
                <h4 className="font-semibold text-white">{t}</h4>
                <p className="mt-2 text-sm">Benefits: {t} ensured through disciplined engineering and communication.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="web-development-team" className="relative py-28">
        <div className="container">
          <SectionHeading eyebrow="Delivering Complete Web Solutions" title="Team Collaboration" description="While my primary focus is frontend development, I collaborate with a trusted development team through Iconic Hub to deliver complete full-stack web applications when projects require backend development, authentication systems, databases, payment integration, or other server-side functionality." />

          <div className="mt-8 rounded-3xl border border-white/10 bg-surface/60 p-8 text-slate-300">
            <p>Clients receive a single point of contact for their project while my team and I deliver a production-ready solution — from frontend to backend and everything in between.</p>
          </div>
        </div>
      </section>

      <section id="web-development-contact" className="relative py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-center font-display text-3xl font-bold text-white">Let's Build Your Next Project</h3>
              <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">Whether you need a modern business website, a landing page, a portfolio website, or a complete full-stack web solution delivered through the Iconic Hub development team, I'd love to hear about your project.</p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-2xl border-white/8 bg-surface/60 p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v6a2 2 0 0 1-2 2h-3l-4 3v-3H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Email</div>
                        <div className="mt-1 text-slate-300">
                        <a
                          href="mailto:iconichub@gmail.com"
                          className="hover:text-white transition-colors"
                        >
                          iconichub@gmail.com
                        </a>
                      </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="rounded-2xl border-white/8 bg-surface/60 p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.07 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.52.29 1.03.5 1.53a1 1 0 0 1-.24 1L7.7 8.7a14 14 0 0 0 6 6l1.4-1.4a1 1 0 0 1 1-.24c.5.21 1.01.38 1.53.5a1 1 0 0 1 .75 1V21z"/></svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">WhatsApp</div>
                        <div className="mt-1 text-slate-300">
                          <a
                            href="https://wa.me/2349054151444"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                          >
                            +234 905 415 1444
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-2xl border-white/8 bg-surface/60 p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z"/></svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Location</div>
                        <div className="mt-1 text-slate-300"> Remote • Available Worldwide</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="rounded-2xl border-white/8 bg-surface/60 p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M8 7h8M8 12h8M8 17h5"/></svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Availability</div>
                        <div className="mt-1 text-slate-300">Available for frontend, business websites, portfolios, full-stack solutions, and freelance projects.</div>
                      </div>
                    </div>
                  </Card>
                </div>

                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 rounded-2xl border border-white/8 bg-surface/60 p-6">
                  <h4 className="font-semibold text-white">Available for</h4>
                  <ul className="mt-3 grid gap-2 text-slate-300 sm:grid-cols-2">
                    <li>Frontend Development</li>
                    <li>Business Websites</li>
                    <li>Portfolio Websites</li>
                    <li>Full-Stack Web Solutions</li>
                    <li>Freelance Projects</li>
                  </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 flex items-center gap-4">
                 <a
                  aria-label="GitHub"
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-full p-3 hover:scale-105"
                >
                  <FaGithub className="h-5 w-5 text-slate-300 group-hover:text-white" />
                </a>
                  <a
                    aria-label="LinkedIn"
                    className="group inline-flex items-center justify-center rounded-full p-3 hover:scale-105"
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <FaLinkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
                  </a>
                 <a
                    aria-label="X"
                    className="group inline-flex items-center justify-center rounded-full p-3 hover:scale-105"
                    href="https://x.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="h-5 w-5 text-slate-300 group-hover:text-white" />
                  </a>
                 <a
                  aria-label="Instagram"
                  className="group inline-flex items-center justify-center rounded-full p-3 hover:scale-105"
                  href="https://instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <FaInstagram className="h-5 w-5 text-slate-300 group-hover:text-white" />
                  </a>
                  <a
                    aria-label="WhatsApp"
                    className="group inline-flex items-center justify-center rounded-full p-3 hover:scale-105"
                    href="https://wa.me/2349054151444?text=Hello%20Iconic%20Hub,%20I'm%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-5 w-5 text-slate-300 group-hover:text-white" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl bg-clip-padding p-6">
                <div className="rounded-2xl bg-white/6 p-6 backdrop-blur-md">
                  <form id="contact-form" onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement & { reportValidity?: () => boolean };
                    if (!form.checkValidity()) return form.reportValidity?.();
                    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
                    submitBtn && (submitBtn.disabled = true);
                    // Simulate send
                    setTimeout(() => {
                      const success = document.getElementById('contact-success');
                      const formEl = document.getElementById('contact-form') as HTMLFormElement | null;
                      if (formEl) formEl.style.display = 'none';
                      if (success) success.style.display = 'block';
                      submitBtn && (submitBtn.disabled = false);
                    }, 900);
                  }} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm text-slate-300">Full Name</label>
                        <input name="name" required className="mt-2 w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-slate-600" />
                      </div>

                      <div>
                        <label className="text-sm text-slate-300">Email Address</label>
                        <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-slate-600" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm text-slate-300">Company (Optional)</label>
                        <input name="company" className="mt-2 w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-slate-600" />
                      </div>

                      <div>
                        <label className="text-sm text-slate-300">Project Type</label>
                        <select name="projectType" required className="mt-2 w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-slate-600">
                          <option>Business Website</option>
                          <option>Portfolio Website</option>
                          <option>Landing Page</option>
                          <option>Full-Stack Website</option>
                          <option>Frontend Development</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-slate-300">Budget (Optional)</label>
                      <input name="budget" className="mt-2 w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-slate-600" />
                    </div>

                    <div>
                      <label className="text-sm text-slate-300">Message</label>
                      <textarea name="message" required rows={5} className="mt-2 w-full rounded-lg border border-white/8 bg-transparent px-4 py-3 text-white outline-none focus:ring-2 focus:ring-slate-600" />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white/6 px-5 py-3 font-medium text-white hover:bg-white/8">Start My Project</button>
                      <div className="text-sm text-slate-400">We reply within 48 hours.</div>
                    </div>
                  </form>

                  <div id="contact-success" style={{ display: 'none' }} className="rounded-lg bg-emerald-900/20 p-6 text-slate-200">
                    <h4 className="font-semibold">Thank you for reaching out.</h4>
                    <p className="mt-2 text-slate-300">I've received your message and will get back to you as soon as possible.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
