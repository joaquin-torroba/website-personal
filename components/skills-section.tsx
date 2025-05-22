'use client';

import React from 'react';
import { skillsData } from '@/data/skills-data'; // Importar datos
import SkillCard from './skill-card'; // Importar SkillCard
import { useTranslations } from 'next-intl'; // Importar useTranslations

export default function SkillsSection() {
  const t = useTranslations('SkillsSection'); // Inicializar useTranslations para SkillsSection

  return (
    <section 
      id="skills" 
      className="w-full py-16 md:py-24 bg-[#F7FAFC] border-t border-b border-slate-200"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">
                {t(category.title.substring(category.title.indexOf('.') + 1) as any)}
              </h3> {/* Título de categoría traducido, usando la parte relativa de la clave */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"> {/* Grid responsivo */}
                {category.skills.map((skill) => (
                  <SkillCard 
                    key={skill.name} 
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