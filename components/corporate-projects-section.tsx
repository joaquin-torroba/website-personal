'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects-data';
import ProjectCard from './project-card';
import { useTranslations } from 'next-intl';

export default function CorporateProjectsSection() {
  const t = useTranslations('CorporateProjectsSection');
  const tProjects = useTranslations('ProjectsSection'); // Para claves comunes como status
  const [isSimpleView, setIsSimpleView] = useState(true);
  const tGlobal = useTranslations('ProjectsSection');
  const tSpecific = useTranslations('CorporateProjectsSection');

  const handleToggleView = () => {
    setIsSimpleView(!isSimpleView);
  };

  return (
    <section 
      id="corporate-projects" 
      className="w-full py-16 md:py-24 bg-white border-t border-b border-slate-200"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="flex justify-start items-center mb-8 space-x-3">
          <label htmlFor="corporateViewToggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="corporateViewToggle"
                className="sr-only peer"
                checked={!isSimpleView}
                onChange={handleToggleView}
              />
              <div className="block bg-gray-300 peer-checked:bg-emerald-700 w-12 h-7 rounded-full transition-colors"></div>
              <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full peer-checked:bg-white"></div>
            </div>
            <div className="ml-3 text-gray-700 text-sm font-medium">
              {isSimpleView ? t('simpleView') : t('detailedView')}
            </div>
          </label>
        </div>
        <div 
          className={`grid ${
            isSimpleView ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1"
          } gap-6`}
        >
          {projectsData
            .filter(project => project.category === 'corporate')
            .map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isSimpleView={isSimpleView}
              tGlobal={tGlobal} // Para status, tooltips, etc.
              tSpecific={tSpecific}      // Para name, description, projectType de este grupo
            />
          ))}
        </div>
      </div>
    </section>
  );
} 