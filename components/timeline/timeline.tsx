'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Tipos para las props del componente Timeline
interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
}

// Componente Timeline principal
export function Timeline({
  children,
  orientation = 'vertical',
  className,
  ...props
}: TimelineProps) {
  return (
    <motion.div 
      role="list"
      aria-label="Línea de tiempo de mi carrera profesional"
      className={cn(
        "relative",
        orientation === 'vertical' 
          ? "flex flex-col space-y-6 md:space-y-0 md:flex-row md:gap-8" 
          : "flex flex-row gap-8 overflow-x-auto",
        className
      )}
      {...props}
    >
      {/* Línea conectora (se mostrará según el diseño final) */}
      {orientation === 'vertical' && (
        <div className="absolute left-4 top-0 h-full w-0.5 bg-muted hidden md:block" />
      )}
      {orientation === 'horizontal' && (
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted hidden md:block" />
      )}

      {children}
    </motion.div>
  );
} 