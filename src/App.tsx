import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/pages/LandingPage";
import { CybersecurityPage } from "@/pages/CybersecurityPage";
import { WebDevelopmentPage } from "@/pages/WebDevelopmentPage";
import { ResumePage } from "@/pages/ResumePage";

const getRoute = (hash: string) => {
  if (hash.startsWith("#resume")) return "resume";
  if (hash.startsWith("#cybersecurity")) return "cybersecurity";
  if (hash.startsWith("#web-development")) return "web-development";
  return "landing";
};

function App() {
  const [route, setRoute] = useState<"landing" | "cybersecurity" | "web-development" | "resume">
    (() => getRoute(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const page = useMemo(() => {
    if (route === "resume") return <ResumePage />;
    if (route === "cybersecurity") return <CybersecurityPage />;
    if (route === "web-development") return <WebDevelopmentPage />;
    return <LandingPage />;
  }, [route]);

  return (
    <div className="relative min-h-screen bg-void">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-void focus:font-semibold"
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
