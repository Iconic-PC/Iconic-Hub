
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

  // Lock background scrolling while mobile navigation is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Use the same destinations for desktop and mobile navigation.
  const getHref = (key: string) => {
    if (key === "portfolio") {
      if (currentRoute === "cybersecurity") {
        return "#cybersecurity-portfolio";
      }

      if (currentRoute === "web-development") {
        return "#web-development-portfolio";
      }

      return "#portfolio";
    }

    if (key === "blog") {
      return "#blog";
    }

    if (currentRoute === "cybersecurity") {
      return `#cybersecurity-${key}`;
    }

    if (currentRoute === "web-development") {
      return `#web-development-${key}`;
    }

    return `#${key}`;
  };

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  const handleContact = () => {
    setMobileOpen(false);
    window.location.hash = "#contact";
  };

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
        <a
          href="#home"
          aria-label="Iconic Hub home"
          onClick={handleNavigation}
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={getHref(link.key)}
                className="relative text-sm text-slate-300 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-signal after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="sm" onClick={handleContact}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative z-50 overflow-hidden border-b border-white/10 bg-void/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={getHref(link.key)}
                    onClick={handleNavigation}
                    className="block rounded-lg px-3 py-3 text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <Button
                  type="button"
                  className="w-full"
                  size="sm"
                  onClick={handleContact}
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
