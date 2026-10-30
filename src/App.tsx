
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/pages/LandingPage";
import { CybersecurityPage } from "@/pages/CybersecurityPage";
import { WebDevelopmentPage } from "@/pages/WebDevelopmentPage";
import { ResumePage } from "@/pages/ResumePage";

type Route =
  | "landing"
  | "cybersecurity"
  | "web-development"
  | "resume";

const getRoute = (hash: string): Route => {
  if (hash.startsWith("#resume")) return "resume";
  if (hash.startsWith("#cybersecurity")) return "cybersecurity";
  if (hash.startsWith("#web-development")) return "web-development";

  return "landing";
};

function App() {
  const [hash, setHash] = useState(window.location.hash);

  const route = useMemo(() => getRoute(hash), [hash]);

  // Keep React updated whenever the URL hash changes.
  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  // Scroll after the selected page and its sections have rendered.
  useLayoutEffect(() => {
    const targetId = decodeURIComponent(hash.replace(/^#/, ""));

    if (
      !targetId ||
      targetId === "resume" ||
      targetId === "cybersecurity" ||
      targetId === "web-development"
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [hash, route]);

  const page = useMemo(() => {
    if (route === "resume") return <ResumePage />;

    if (route === "cybersecurity") {
      return <CybersecurityPage />;
    }

    if (route === "web-development") {
      return <WebDevelopmentPage />;
    }

    return <LandingPage />;
  }, [route]);

  return (
    <div className="relative min-h-screen bg-void">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:font-semibold focus:text-void"
      >
        Skip to content
      </a>

      <Navbar currentRoute={route} />

      {page}

      <Footer />
    </div>
  );
}

export default App;
