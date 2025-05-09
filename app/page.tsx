"use client";

import React, { useState } from 'react';
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import RecorridoSection from "@/components/recorrido-section";
import SkillsSection from "@/components/skills-section";
import CorporateProjectsSection from "@/components/corporate-projects-section";
import DigitalProjectsSection from "@/components/digital-projects-section";
import AiProjectsSection from "@/components/ai-projects-section";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Copy } from "lucide-react";

export default function Home() {
  const [navEmailCopied, setNavEmailCopied] = useState(false);
  const email = 'joaquintorroba@gmail.com';

  const handleNavCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setNavEmailCopied(true);
      setTimeout(() => {
        setNavEmailCopied(false);
      }, 2000);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-y-0 relative">
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex flex-col items-end gap-2">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleNavCopyEmail}
            className="border-slate-300 hover:bg-slate-100 text-slate-700"
          >
            {navEmailCopied ? (
              <>
                <Copy className="mr-1.5 h-4 w-4 text-green-500" /> <span className="hidden sm:inline">Email Copiado</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 sm:mr-1.5" /> <span className="hidden sm:inline">Email</span>
              </>
            )}
          </Button>
          <a
            href="https://www.linkedin.com/in/joaquintorroba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 hover:bg-slate-100 text-slate-700"
            >
              <Linkedin className="h-4 w-4 sm:mr-1.5" /> <span className="hidden sm:inline">LinkedIn</span>
            </Button>
          </a>
        </div>
        {navEmailCopied && (
          <p className="text-xs text-green-600 bg-white p-1 rounded shadow-md">
            {email}
          </p>
        )}
      </div>

      <HeroSection />
      <AboutSection />
      <RecorridoSection />
      <CorporateProjectsSection />
      <DigitalProjectsSection />
      <AiProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
