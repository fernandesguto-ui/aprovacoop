import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { LogosMarquee } from "./components/LogosMarquee";
import { PainPoints } from "./components/PainPoints";
import { TireDuvidas } from "./components/TireDuvidas";
import { ProgramStructure } from "./components/ProgramStructure";
import { Mentor } from "./components/Mentor";
import { BeyondResume } from "./components/BeyondResume";
import { Footer } from "./components/Footer";
import { SimuladosPage } from "./components/SimuladosPage";
import { MetodoDca } from "./components/MetodoDca";

function getRoute(): string {
  if (typeof window === "undefined") return "/";
  const path = (window.location.pathname || "").toLowerCase();
  const hash = (window.location.hash || "").toLowerCase();
  const search = (window.location.search || "").toLowerCase();
  const href = (window.location.href || "").toLowerCase();
  const full = `${path} ${hash} ${search} ${href}`;

  if (full.includes("simulado")) {
    return "/simulados";
  }
  if (
    full.includes("metododca") ||
    full.includes("metodo-dca") ||
    full.includes("metodo_dca") ||
    full.includes("dca")
  ) {
    return "/metododca";
  }
  return "/";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getRoute());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    const interval = setInterval(handleLocationChange, 250);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      clearInterval(interval);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (currentPath === "/simulados") {
    return <SimuladosPage onBackToHome={() => navigateTo("/")} />;
  }

  if (currentPath === "/metododca") {
    return <MetodoDca onBackToHome={() => navigateTo("/")} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Main Content Flow */}
      <main className="flex-grow">
        <Hero />
        <LogosMarquee />
        <PainPoints />
        <TireDuvidas />
        <ProgramStructure />
        <Mentor />
        <BeyondResume />
      </main>

      {/* Dark Footer Bar */}
      <Footer />
    </div>
  );
}


