'use client';

import React from 'react';
import { skillsData } from '@/data/skills-data'; // Importar datos
import SkillCard from './skill-card'; // Importar SkillCard
import { useTranslations, useLocale } from 'next-intl'; // Importar useTranslations y useLocale

// Definir LocalizedString aquí también o importarla si se comparte
interface LocalizedString {
  en: string;
  es: string;
}

export default function SkillsSection() {
  const t = useTranslations('SkillsSection');
  const locale = useLocale() as keyof LocalizedString;

  return (
    <section id="skills" className="w-full py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.title[locale]}> {/* Actualizar key para usar el string localizado */}
              <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">{category.title[locale]}</h3> {/* Título de categoría con locale */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"> {/* Grid responsivo */}
                {category.skills.map((skill) => (
                  <SkillCard 
                    key={skill.name[locale]} // Actualizar key para usar el string localizado
                    name={skill.name} 
                    logoSrc={skill.logoSrc} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 