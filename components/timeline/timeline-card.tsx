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
    <div className={cn("relative flex flex-col gap-3 p-3 md:p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow", className)}> {/* Ajuste de padding general */}
      {/* Banderas SVG (arriba a la derecha) */}
      {flags && flags.length > 0 && (
        <div className="absolute top-2 right-2 md:top-3 md:right-3 flex gap-1 md:gap-2 items-center">  {/* Ajuste de gap y posición */}
          {flags.map((flag, index) => (
            <div 
              key={index} 
              className={cn(
                "relative rounded overflow-hidden",
                flag.alt === "Bandera Internacional" ? "h-10 w-10 md:h-12 md:w-12" : "h-6 w-6 md:h-8 md:w-8" // Tamaños responsivos para banderas
              )}
            >
              <Image
                src={flag.src}
                alt={flag.alt}
                fill
                sizes={flag.alt === "Bandera Internacional" ? "(max-width: 767px) 40px, (min-width: 768px) 48px" : "(max-width: 767px) 24px, (min-width: 768px) 32px"} // Sizes responsivos
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
      <h3 className="text-lg sm:text-xl font-bold mt-1 pr-16 md:pr-20"> {/* Tamaño responsivo y padding derecho para no superponer con banderas*/}
        {title.includes('(') && title.includes(')') ? (
          <>
            {title.substring(0, title.indexOf('(')).trim()} 
            <span className="text-sm text-muted-foreground ml-1">
              {title.substring(title.indexOf('('), title.indexOf(')') + 1)}
            </span>
          </>
        ) : (
          title
        )}
      </h3>
      
      {/* Tags */} 
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2 mb-3"> 
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs text-gray-500">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      
      {/* Descripción */}
      <p 
        className="text-sm md:text-base mb-8 md:mb-10" /* Tamaño responsivo y ajuste de margen inferior */
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      
      {/* Logos */}
      {logos.length > 0 && (
        <div className="flex flex-wrap gap-3 md:gap-5 mt-auto pt-3"> {/* mt-auto para empujar al fondo y gap responsivo */}
          {logos.map((logo, index) => (
            <div key={index} className="h-10 w-10 md:h-12 md:w-12 relative group border border-neutral-200 dark:border-neutral-700 rounded overflow-hidden"> {/* Tamaños responsivos para logos */}
              {logo.href ? ( 
                <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${logo.alt}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 767px) 40px, (min-width: 768px) 48px" // Sizes responsivos
                    className="object-contain transition-all group-hover:scale-110"
                    priority={false}
                  />
                </a>
              ) : ( 
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 767px) 40px, (min-width: 768px) 48px" // Sizes responsivos
                  className="object-contain"
                  priority={false}
                />
              )}
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