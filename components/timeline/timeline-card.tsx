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
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Título y periodo */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge variant={status === "Finalizado" ? "secondary" : "default"}>
          {status}
        </Badge>
      </div>
      
      <p className="text-sm text-muted-foreground">{period}</p>
      
      {/* Logos */}
      {logos.length > 0 && (
        <div className="flex flex-wrap gap-4 my-2">
          {logos.map((logo, index) => (
            <div key={index} className="h-10 w-10 relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="40px"
                className="object-contain"
                priority={false}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Descripción */}
      <p className="text-sm">{description}</p>
    </div>
  );
} 