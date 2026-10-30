import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  currentRoute: "landing" | "cybersecurity" | "web-development" | "resume";
}

const NAV_LINKS: { label: string; key: string }[] = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Portfolio", key: "portfolio" },
  { label: "Blog", key: "blog" },
  { label: "Contact", key: "contact" },
];

export function Navbar({ currentRoute }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-void/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <a href="#home" aria-label="Iconic Hub home">
          <Logo />
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const href = (() => {
              if (link.key === "portfolio") {
                return currentRoute === "cybersecurity"
                  ? "#cybersecurity-portfolio"
                  : currentRoute === "web-development"
                  ? "#web-development-portfolio"
                  : "#portfolio";
              }

              if (link.key === "blog") return "#blog";

              if (currentRoute === "cybersecurity") return `#cybersecurity-${link.key}`;
              if (currentRoute === "web-development") return `#web-development-${link.key}`;
              return `#${link.key}`;
            })();

            const displayLink = (
              <a
                href={href}
                className="relative text-sm text-slate-300 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-signal after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            );

            return <li key={link.label}>{displayLink}</li>;
          })}
        </ul>

        <div className="hidden lg:block">
          <Button size="sm" onClick={() => (window.location.hash = "#contact")}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-void/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const href = (() => {
                  if (link.key === "portfolio") return "#portfolio";
                  if (link.key === "blog") return "#blog";
                  if (currentRoute === "cybersecurity") return `#cybersecurity-${link.key}`;
                  if (currentRoute === "web-development") return `#web-development-${link.key}`;
                  return `#${link.key}`;
                })();

                return (
                  <li key={link.label}>
                    <a
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button
                  className="w-full"
                  size="sm"
                  onClick={() => {
                    setMobileOpen(false);
                    window.location.hash = "#contact";
                  }}
                >
                  Get in Touch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
