'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project, ProjectTool } from '@/data/projects-data';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

interface ProjectCardProps {
  project: Project;
  isSimpleView?: boolean;
}

export default function ProjectCard({ project, isSimpleView }: ProjectCardProps) {
  const locale = useLocale() as 'en' | 'es';

  return (
    <Card className="p-6 flex flex-col md:flex-row md:items-start gap-6 transition-shadow hover:shadow-lg h-full border border-slate-200 bg-white">
      {/* Columna Izquierda: Logo, Nombre, Tipo, Año/Estado */}
      <div 
        className={`flex flex-col items-center md:items-center flex-shrink-0 gap-2 ${
          isSimpleView ? 'w-full h-full' : 'w-full md:w-1/3'
        }`}
      >
        {project.logo && (
          project.projectUrl ? (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Visitar sitio de ${project.name[locale]}`}
              className="block relative h-16 w-16 flex-shrink-0 mx-auto transition-opacity hover:opacity-80"
            >
              <Image
                src={project.logo}
                alt={`${project.name[locale]} logo`}
                fill
                sizes="64px"
                className="object-contain rounded-md"
              />
            </a>
          ) : (
            <div className="relative h-16 w-16 flex-shrink-0 mx-auto">
              <Image
                src={project.logo}
                alt={`${project.name[locale]} logo`}
                fill
                sizes="64px"
                className="object-contain rounded-md"
              />
            </div>
          )
        )}
        <h3 
          className="text-xl font-semibold text-center md:text-center w-full"
          dangerouslySetInnerHTML={{ __html: project.name[locale] }}
        >
          {/* El contenido ahora se maneja con dangerouslySetInnerHTML */}
        </h3>
        {project.projectType && (
          <p className="text-sm text-slate-500 text-center md:text-center w-full px-1 min-h-16">
            {project.projectType[locale]}
          </p>
        )}
        {(project.year || project.status) && (
          <div className="flex items-center justify-center md:justify-center gap-2 text-xs text-slate-500 w-full mt-auto">
            {project.year && <span>{project.year}</span>}
            {project.year && project.status && <span className="hidden md:inline">•</span>}
            {project.status && (
              <Badge
                variant="outline"
                className={cn(
                  "px-1.5 py-0.5 text-xs",
                  project.status === 'En curso' && 
                    "bg-black text-white border-black hover:bg-gray-800",
                  project.status === 'Finalizado' && 
                    "bg-white text-slate-500 border-gray-300 hover:bg-gray-100"
                )}
              >
                {project.status}
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Columna Derecha: Descripción y Herramientas */}
      <div 
        className={`flex flex-col items-center md:items-start gap-3 flex-grow w-full md:w-2/3 mt-4 md:mt-0 project-details-column ${
          isSimpleView ? 'hidden' : ''
        }`}
      >
        {project.description && (
          <p 
            className="text-sm text-center md:text-left text-slate-500 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description[locale] }}
          />
        )}

        {project.tools && project.tools.length > 0 && (
          <div className="mt-auto pt-3 w-full">
            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
              {project.tools.map((tool: ProjectTool) => (
                <li key={tool.name[locale]}>
                  <Badge 
                    variant="secondary" 
                    className="flex items-center gap-1.5 pr-2.5 pl-2 py-0.5 border border-slate-300 text-primary-foreground"
                  >
                    {tool.logoSrc && (
                      <div className="relative h-4 w-4">
                        <Image
                          src={tool.logoSrc}
                          alt={`${tool.name[locale]} logo`}
                          fill
                          sizes="16px"
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-xs">{tool.name[locale]}</span>
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