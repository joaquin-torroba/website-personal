'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Project } from '@/data/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center gap-2 transition-shadow hover:shadow-lg">
      {project.logo && (
        <div className="relative h-12 w-12 mb-4">
          <Image
            src={project.logo!}
            alt={project.name}
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-center">{project.name}</h3>
      {project.year && <p className="text-sm text-center">{project.year}</p>}
      {project.status && <p className="text-sm text-center">{project.status}</p>}
      {project.description && <p className="mt-2 text-sm text-center">{project.description}</p>}
      {project.tools && (
        <ul className="mt-2 flex flex-wrap justify-center gap-2">
          {project.tools.map((tool) => (
            <li key={tool} className="text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700">
              {tool}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
} 