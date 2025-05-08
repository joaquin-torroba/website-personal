"use client";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import RecorridoSection from "@/components/recorrido-section";
import SkillsSection from "@/components/skills-section";
import DigitalProjectsSection from "@/components/digital-projects-section";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-0 relative">
      <div className="fixed top-8 right-8 z-50">
        <ModeToggle ariaLabel="Cambiar tema" />
      </div>

      <HeroSection />
      <AboutSection />
      <RecorridoSection />
      <DigitalProjectsSection />
      <SkillsSection />
    </main>
  );
}
