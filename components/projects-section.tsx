'use client';

import React from 'react';
import { projectsData } from '@/data/projects-data';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 