'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project, ProjectTool } from '@/data/projects-data';
import { useTranslations, type Messages } from 'next-intl';

type TranslationFunction = ReturnType<typeof useTranslations<keyof Messages>>;

interface ProjectCardProps {
  project: Project;
  isSimpleView?: boolean;
  tGlobal: TranslationFunction;
  tSpecific: TranslationFunction;
}

export default function ProjectCard({ project, isSimpleView, tGlobal, tSpecific }: ProjectCardProps) {
  let finalNameKey = project.name;
  if (project.name.startsWith('CorporateProjectsSection.')) {
    finalNameKey = project.name.substring('CorporateProjectsSection.'.length);
  } else if (project.name.startsWith('DigitalProjectsSection.')) {
    finalNameKey = project.name.substring('DigitalProjectsSection.'.length);
  } else if (project.name.startsWith('AiProjectsSection.')) {
    finalNameKey = project.name.substring('AiProjectsSection.'.length);
  }

  const projectName = (project.name.startsWith('CorporateProjectsSection.') || project.name.startsWith('DigitalProjectsSection.') || project.name.startsWith('AiProjectsSection.'))
    ? tSpecific(finalNameKey as any)
    : project.name;

  let finalTypeKey = project.projectTypeKey || '';
  if (project.projectTypeKey?.startsWith('CorporateProjectsSection.')) {
    finalTypeKey = project.projectTypeKey.substring('CorporateProjectsSection.'.length);
  } else if (project.projectTypeKey?.startsWith('DigitalProjectsSection.')) {
    finalTypeKey = project.projectTypeKey.substring('DigitalProjectsSection.'.length);
  } else if (project.projectTypeKey?.startsWith('AiProjectsSection.')) {
    finalTypeKey = project.projectTypeKey.substring('AiProjectsSection.'.length);
  }
  
  const projectType = project.projectTypeKey 
    ? tSpecific(finalTypeKey as any) 
    : '';

  let finalDescriptionKey = project.descriptionKey || '';
  if (project.descriptionKey?.startsWith('CorporateProjectsSection.')) {
    finalDescriptionKey = project.descriptionKey.substring('CorporateProjectsSection.'.length);
  } else if (project.descriptionKey?.startsWith('DigitalProjectsSection.')) {
    finalDescriptionKey = project.descriptionKey.substring('DigitalProjectsSection.'.length);
  } else if (project.descriptionKey?.startsWith('AiProjectsSection.')) {
    finalDescriptionKey = project.descriptionKey.substring('AiProjectsSection.'.length);
  }

  const projectDescription = project.descriptionKey
    ? tSpecific.rich(finalDescriptionKey as any, {
        i: (chunks) => <i>{chunks}</i>,
      })
    : '';

  let finalStatusKey = project.statusKey || '';
  if (project.statusKey?.startsWith('ProjectsSection.')) {
    finalStatusKey = project.statusKey.substring('ProjectsSection.'.length);
  }

  const projectStatus = project.statusKey 
    ? tGlobal(finalStatusKey as any) 
    : '';

  const statusVariant =
    projectStatus === tGlobal(finalStatusKey.endsWith('Completed') ? 'statusCompleted' : 'statusInProgress' as any) ? (finalStatusKey.endsWith('Completed') ? 'secondary' : 'default') :
    'outline';

  return (
    <Card className="p-6 flex flex-col md:flex-row md:items-start gap-6 transition-shadow hover:shadow-lg h-full">
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
              aria-label={`Visitar sitio de ${projectName}`}
              className="block relative h-16 w-16 flex-shrink-0 mx-auto transition-opacity hover:opacity-80"
            >
              <Image
                src={project.logo}
                alt={`${projectName} logo`}
                fill
                sizes="64px"
                className="object-contain rounded-md"
              />
            </a>
          ) : (
            <div className="relative h-16 w-16 flex-shrink-0 mx-auto">
              <Image
                src={project.logo}
                alt={`${projectName} logo`}
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
          {projectName}
        </h3>
        {projectType && (
          <p className="text-sm text-muted-foreground text-center md:text-center w-full px-1 min-h-16">
            {projectType}
          </p>
        )}
        {(project.year || projectStatus) && (
          <div className="flex items-center justify-center md:justify-center gap-2 text-xs text-muted-foreground w-full mt-auto">
            {project.year && <span>{project.year}</span>}
            {project.year && projectStatus && <span className="hidden md:inline">•</span>}
            {projectStatus && <Badge variant={statusVariant} className="px-1.5 py-0.5 text-xs">{projectStatus}</Badge>}
          </div>
        )}
      </div>

      {/* Columna Derecha: Descripción y Herramientas */}
      <div 
        className={`flex flex-col items-center md:items-start gap-3 flex-grow w-full md:w-2/3 mt-4 md:mt-0 project-details-column ${
          isSimpleView ? 'hidden' : ''
        }`}
      >
        {projectDescription && (
          <p 
            className="text-sm text-center md:text-left text-muted-foreground leading-relaxed"
          >
            {projectDescription}
          </p>
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