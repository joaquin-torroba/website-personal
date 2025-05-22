'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
// Importaciones futuras: Tooltip, etc.

interface SkillCardProps {
  name: string;
  logoSrc: string;
}

export default function SkillCard({ name, logoSrc }: SkillCardProps) {
  return (
    <Card className={cn(
      "p-4 flex flex-col items-center justify-center gap-1",
      "aspect-square transition-all duration-200 ease-in-out",
      "hover:shadow-lg hover:-translate-y-1",
      "dark:bg-muted/20"
    )}>
      <div className="relative h-12 w-12 flex-shrink-0">
        <Image 
          src={logoSrc} 
          alt={`${name} logo`} 
          fill 
          sizes="48px" 
          className="object-contain rounded-lg"
        />
      </div>
      <div className="h-10 flex items-center justify-center">
        <p className="text-sm font-medium text-muted-foreground text-center px-1 break-words">
          {name}
        </p>
      </div>
    </Card>
  );
} 