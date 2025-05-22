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
import FixedHeaderButtons from '@/components/FixedHeaderButtons';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-slate-900">
      {/* Cabecera Fija con botones y selector de idioma */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 backdrop-blur-md h-14">
        <FixedHeaderButtons />
        <LanguageSwitcher />
      </div>

      {/* Contenedor principal con padding superior para evitar solapamiento con la cabecera fija */}
      <div className="w-full pt-14">
        {/* Secciones del sitio */}
        <HeroSection />
        <AboutSection />
        <RecorridoSection />
        <CorporateProjectsSection />
        <DigitalProjectsSection />
        <AiProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
