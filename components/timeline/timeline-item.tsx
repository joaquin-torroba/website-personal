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
  color?: 'slate' | 'sky' | 'purple' | 'indigo' | 'emerald' | 'teal' | 'pink';
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
    slate: { border: 'border-slate-500', text: 'text-slate-500', bg: 'bg-slate-100 dark:bg-slate-900/50' },
    sky: { border: 'border-sky-500', text: 'text-sky-500', bg: 'bg-sky-100 dark:bg-sky-900/50' }, // Actualizado por si se usa
    purple: { border: 'border-purple-800', text: 'text-purple-800', bg: 'bg-white dark:bg-neutral-900/50' }, // Fondo a white/neutral-900/50
    // Tono 800 para borde/texto, 200 para fondo claro, 800/50 para fondo oscuro
    indigo: { border: 'border-indigo-800', text: 'text-indigo-800', bg: 'bg-white dark:bg-neutral-900/50' }, // Fondo a white/neutral-900/50
    emerald: { border: 'border-emerald-500', text: 'text-emerald-500', bg: 'bg-emerald-200 dark:bg-emerald-800/50' }, // Actualizado por si se usa
    // Tono 600 para borde/texto, 200 (de emerald) para fondo claro, 800/50 para fondo oscuro
    teal: { border: 'border-teal-600', text: 'text-teal-600', bg: 'bg-emerald-100 dark:bg-emerald-900/50' }, 
    pink: { border: 'border-pink-800', text: 'text-pink-800', bg: 'bg-white dark:bg-neutral-900/50' } // Fondo a white/neutral-900/50
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
      <div className="absolute left-15 transform -translate-x-1/2 z-10">
        <div 
          className={cn(
            "h-auto min-h-10 w-auto min-w-10 max-w-[6rem] px-2 py-1 rounded-md border-2 bg-background flex items-center justify-center text-center",
            currentColors.border,
            currentColors.text,
            currentColors.bg
          )}
        >
          <span className="text-xs font-semibold leading-tight" dangerouslySetInnerHTML={{ __html: period }} />
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