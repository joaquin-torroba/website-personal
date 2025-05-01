'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// Tipo para las props de TimelineCard
interface TimelineCardProps {
  title: string;
  period: string;
  status: "Finalizado" | "En curso";
  description: string;
  logos: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export function TimelineCard({
  title,
  period,
  status,
  description,
  logos,
  className,
}: TimelineCardProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Encabezado: Título y estado */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <Badge variant={status === "Finalizado" ? "secondary" : "default"}>
          {status}
        </Badge>
      </div>
      
      {/* Periodo */}
      <p className="text-sm text-muted-foreground font-medium">{period}</p>
      
      {/* Descripción */}
      <p className="text-base">{description}</p>
      
      {/* Logos */}
      {logos.length > 0 && (
        <div className="flex flex-wrap gap-5 mt-3">
          {logos.map((logo, index) => (
            <div key={index} className="h-10 w-10 relative group">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="40px"
                className="object-contain transition-all group-hover:scale-110"
                priority={false}
              />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 