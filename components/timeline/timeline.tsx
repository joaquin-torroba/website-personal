'use client';

import React from 'react';
import { cn } from '@/lib/utils';
// import { motion } from 'framer-motion'; // <-- Comentado/eliminado

// Tipos para las props del componente Timeline
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// Componente Timeline principal
export function Timeline({
  children,
  className,
  ...props
}: TimelineProps) {
  return (
    // Cambiado de motion.div a div para evitar error de tipos
    <div 
      role="list"
      aria-label="Línea de tiempo de mi carrera profesional"
      className={cn(
        "relative",
        className
      )}
      {...props}
    >
      {/* Contenedor con línea vertical a la izquierda */}
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Línea vertical a la izquierda - Color intermedio */}
        <div className="absolute left-6 md:left-15 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />
        
        {/* Contenido del timeline */}
        <div className="relative z-10 space-y-16">
          {children}
        </div>
      </div>
    </div>
  );
} 