"use client";

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/language-switcher';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import RecorridoSection from '@/components/recorrido-section';
import SkillsSection from '@/components/skills-section';
import CorporateProjectsSection from '@/components/corporate-projects-section';
import DigitalProjectsSection from '@/components/digital-projects-section';
import AiProjectsSection from '@/components/ai-projects-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      {/* Secciones del sitio */}
      <HeroSection />
      <AboutSection />
      <RecorridoSection />
      <SkillsSection />
      <CorporateProjectsSection />
      <DigitalProjectsSection />
      <AiProjectsSection />
      <ContactSection />
    </main>
  );
}
