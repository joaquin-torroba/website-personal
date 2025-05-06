'use client';

import React from 'react';
import { skillsData } from '@/data/skills-data'; // Importar datos
import SkillCard from './skill-card'; // Importar SkillCard

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Mis Habilidades</h2>
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-6 text-center sm:text-left">{category.title}</h3> {/* Título de categoría */}
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