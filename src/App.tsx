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

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (path.includes("simulado") || hash.includes("simulado") || search.includes("simulado")) {
        return "/simulados";
      }
      if (
        path.includes("metododca") ||
        hash.includes("metododca") ||
        search.includes("metododca") ||
        path.includes("metodo-dca") ||
        hash.includes("metodo-dca") ||
        search.includes("metodo-dca")
      ) {
        return "/metododca";
      }
      return path || "/";
    }
    return "/";
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (path.includes("simulado") || hash.includes("simulado") || search.includes("simulado")) {
        setCurrentPath("/simulados");
      } else if (
        path.includes("metododca") ||
        hash.includes("metododca") ||
        search.includes("metododca") ||
        path.includes("metodo-dca") ||
        hash.includes("metodo-dca") ||
        search.includes("metodo-dca")
      ) {
        setCurrentPath("/metododca");
      } else {
        setCurrentPath("/");
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
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


