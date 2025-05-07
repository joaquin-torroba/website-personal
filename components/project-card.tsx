'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project, ProjectTool } from '@/data/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusVariant =
    project.status === 'Finalizado' ? 'secondary' :
    project.status === 'En curso' ? 'default' :
    'outline';

  return (
    <Card className="p-6 flex flex-col md:flex-row md:items-start gap-6 transition-shadow hover:shadow-lg h-full">
      {/* Columna Izquierda: Logo, Nombre, Tipo, Año/Estado */}
      <div className="flex flex-col items-center md:items-center md:w-1/3 flex-shrink-0 gap-2 h-full">
        {project.logo && (
          project.projectUrl ? (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Visitar sitio de ${project.name}`}
              className="block relative h-16 w-16 flex-shrink-0 mx-auto transition-opacity hover:opacity-80"
            >
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="64px"
                className="object-contain rounded-md"
              />
            </a>
          ) : (
            <div className="relative h-16 w-16 flex-shrink-0 mx-auto">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="64px"
                className="object-contain rounded-md"
              />
            </div>
          )
        )}
        <h3 
          className="text-xl font-semibold text-center md:text-center w-full"
        >
          {project.name}
        </h3>
        {project.projectType && (
          <p className="text-sm text-muted-foreground text-center md:text-center w-full px-1">
            {project.projectType}
          </p>
        )}
        {(project.year || project.status) && (
          <div className="flex items-center justify-center md:justify-center gap-2 text-xs text-muted-foreground w-full mt-auto">
            {project.year && <span>{project.year}</span>}
            {project.year && project.status && <span className="hidden md:inline">•</span>}
            {project.status && <Badge variant={statusVariant} className="px-1.5 py-0.5 text-xs">{project.status}</Badge>}
          </div>
        )}
      </div>

      {/* Columna Derecha: Descripción y Herramientas */}
      <div className="flex flex-col items-center md:items-start gap-3 flex-grow w-full md:w-2/3 mt-4 md:mt-0">
        {project.description && (
          <p 
            className="text-sm text-center md:text-left text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        )}

        {project.tools && project.tools.length > 0 && (
          <div className="mt-auto pt-3 w-full">
            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
              {project.tools.map((tool: ProjectTool) => (
                <li key={tool.name}>
                  <Badge variant="outline" className="flex items-center gap-1.5 pr-2.5 pl-2 py-0.5">
                    {tool.logoSrc && (
                      <div className="relative h-4 w-4">
                        <Image
                          src={tool.logoSrc}
                          alt={`${tool.name} logo`}
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-xs">{tool.name}</span>
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
} 