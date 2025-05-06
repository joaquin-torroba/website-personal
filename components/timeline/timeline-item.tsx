'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Definir props para TimelineItem
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  period: string;
  active?: boolean;
  color?: 'slate' | 'sky' | 'purple' | 'indigo' | 'emerald' | 'teal';
}

export function TimelineItem({
  children,
  period,
  active = false,
  color = 'slate',
  className,
  ...props
}: TimelineItemProps) {
  // Mapeo de colores según el tipo
  const colorMap = {
    // Tono 500 para borde/texto, 200 para fondo claro, 800/50 para fondo oscuro
    slate: { border: 'border-slate-500', text: 'text-slate-500', bg: 'bg-slate-200 dark:bg-slate-800/50' },
    sky: { border: 'border-sky-500', text: 'text-sky-500', bg: 'bg-sky-200 dark:bg-sky-800/50' }, // Actualizado por si se usa
    purple: { border: 'border-purple-500', text: 'text-purple-500', bg: 'bg-purple-200 dark:bg-purple-800/50' }, // Actualizado por si se usa
    // Tono 800 para borde/texto, 200 para fondo claro, 800/50 para fondo oscuro
    indigo: { border: 'border-indigo-800', text: 'text-indigo-800', bg: 'bg-indigo-200 dark:bg-indigo-800/50' }, 
    emerald: { border: 'border-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-200 dark:bg-emerald-800/50' }, // Actualizado por si se usa
    // Tono 600 para borde/texto, 200 (de emerald) para fondo claro, 800/50 para fondo oscuro
    teal: { border: 'border-teal-600', text: 'text-teal-600', bg: 'bg-emerald-200 dark:bg-emerald-800/50' }, 
  };

  // Obtener las clases de color específicas
  const currentColors = colorMap[color] || colorMap.slate; // Default a slate si el color no se encuentra

  return (
    <motion.div
      role="listitem"
      className={cn(
        "relative",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Punto de conexión ahora con el periodo */}
      <div className="absolute left-16 -ml-5 z-10">
        <div 
          className={cn(
            "h-auto min-h-10 w-auto min-w-10 max-w-[6rem] px-2 py-1 rounded-md border-2 bg-background flex items-center justify-center text-center",
            currentColors.border,
            currentColors.text,
            currentColors.bg
          )}
        >
          <span className="text-xs font-semibold leading-tight">{period}</span>
        </div>
      </div>

      {/* Contenido del timeline item */}
      <div className="pl-28 pr-8 pt-5">
        {/* Card normal sin color de fondo */}
        <Card className={cn(
          "overflow-hidden transition-all hover:shadow-md w-full border",
          active ? "border-l-4" : "",
          active ? currentColors.border : ""
        )}>
          {/* Div interior con padding */}
          <div className="p-4">
            {children}
          </div>
        </Card>
      </div>
    </motion.div>
  );
} 