'use client';

import React from 'react';
import { projectsData } from '@/data/projects-data';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Proyectos Digitales</h2>
        <div className="flex justify-start items-center mb-8 space-x-3">
          {/* Etiqueta para la vista actual (se actualizará con JS) */}
          {/* <span className="text-sm font-medium text-gray-700">Vista Completa</span> */}
          {/* Interruptor Toggle */}
          <label htmlFor="viewToggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" id="viewToggle" className="sr-only peer" />
              {/* Línea del toggle */}
              <div className="block bg-gray-300 peer-checked:bg-emerald-700 w-12 h-7 rounded-full transition-colors"></div>
              {/* Punto del toggle */}
              <div className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full peer-checked:bg-white"></div>
            </div>
            <div className="ml-3 text-gray-700 text-sm font-medium">
              Cambiar a Vista Simple {/* Este texto se volverá dinámico con JS */}
            </div>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}