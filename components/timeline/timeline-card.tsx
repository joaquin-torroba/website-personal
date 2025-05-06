'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Tipo para las props de TimelineCard
interface TimelineCardProps {
  title: string;
  description: string;
  logos: {
    src: string;
    alt: string;
    href?: string; // Añadimos prop opcional para la URL
  }[];
  flags?: Array<{ src: string; alt: string }>; // Cambiado de string[] a Array de objetos
  tags?: string[]; // Prop opcional para los tags
  className?: string;
  color?: 'slate' | 'teal' | 'indigo'; // Añadida prop color
}

export function TimelineCard({
  title,
  description,
  logos,
  flags, // Recibimos la prop flags
  tags, // Recibir prop tags
  className,
  color = 'slate', // Valor por defecto
}: TimelineCardProps) {
  return (
    <div className={cn("relative flex flex-col gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow", className)}> {/* Añadimos padding y estilo base */}
      {/* Banderas SVG (arriba a la derecha) - Revertido a versión anterior */}
      {flags && flags.length > 0 && (
        <div className="absolute top-3 right-3 flex gap-2 items-center"> 
          {flags.map((flag, index) => (
            <div 
              key={index} 
              className={cn(
                "relative rounded overflow-hidden",
                flag.alt === "Bandera Internacional" ? "h-12 w-12" : "h-8 w-8"
              )}
            >
              <Image
                src={flag.src}
                alt={flag.alt}
                fill
                sizes={flag.alt === "Bandera Internacional" ? "(max-width: 768px) 48px, 48px" : "(max-width: 768px) 32px, 32px"}
                className={cn(
                  "object-contain"
                )}
                title={flag.alt} 
              />
            </div>
          ))}
        </div>
      )}

      {/* Título con soporte para paréntesis */}
      <h3 className="text-xl font-bold mt-1">
        {title.includes('(') && title.includes(')') ? (
          <>
            {title.substring(0, title.indexOf('(')).trim()} {/* Parte antes del paréntesis */}
            <span className="text-sm text-muted-foreground ml-1"> {/* Eliminado font-light */} 
              {title.substring(title.indexOf('('), title.indexOf(')') + 1)}
            </span>
          </>
        ) : (
          title // Título normal si no hay paréntesis
        )}
      </h3>
      
      {/* Tags */} 
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2 mb-3"> {/* Contenedor para tags */}
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs text-gray-500"> {/* Badge para cada tag */} 
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
      {/* Descripción */}
      <p 
        className="text-base mb-10"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      
      {/* Logos */}
      {logos.length > 0 && (
        <div className="flex flex-wrap gap-5 mt-3">
          {logos.map((logo, index) => (
            <div key={index} className="h-12 w-12 relative group border border-neutral-200 dark:border-neutral-700 rounded overflow-hidden">
              {logo.href ? ( // Si hay href, el contenedor es un enlace
                <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${logo.alt}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="48px"
                    className="object-contain transition-all group-hover:scale-110"
                    priority={false}
                  />
                </a>
              ) : ( // Si no hay href, solo la imagen
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority={false}
                />
              )}
              {/* Tooltip con el nombre (siempre visible al hover sobre el div) */}
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-background p-1 rounded shadow">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 