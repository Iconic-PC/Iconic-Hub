import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import type { NavLink, SocialLink } from "@/types";

const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS: (SocialLink & { icon: typeof Twitter })[] = [
  { label: "Twitter / X", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-surface/40">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A technology brand engineering secure, scalable, and innovative digital
              experiences — from ethical hacking to modern web platforms.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-signal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <ul className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-signal/50 hover:text-signal"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {year} Iconic Hub. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-600">
            Founded by Ndukwe Obinna Goodluck
          </p>
        </div>
      </div>
    </footer>
  );
}
