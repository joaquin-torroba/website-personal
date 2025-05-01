'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Definir props para TimelineItem
interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  color?: 'slate' | 'sky' | 'purple'; // Colores según el PRD
}

export function TimelineItem({
  children,
  icon,
  active = false,
  color = 'slate',
  className,
  ...props
}: TimelineItemProps) {
  // Mapeo de colores según el tipo
  const colorMap = {
    slate: 'border-slate-500 text-slate-500',
    sky: 'border-sky-500 text-sky-500',
    purple: 'border-purple-500 text-purple-500',
  };

  const borderColorMap = {
    slate: 'border-l-slate-500',
    sky: 'border-l-sky-500',
    purple: 'border-l-purple-500',
  };

  return (
    <motion.div
      role="listitem"
      className={cn(
        "relative flex flex-col items-start md:flex-1",
        active ? "opacity-100" : "opacity-90",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      {/* Punto de conexión en la línea de tiempo */}
      <div 
        className={cn(
          "absolute left-0 top-0 h-8 w-8 rounded-full border-2 bg-background flex items-center justify-center",
          colorMap[color]
        )}
      >
        {icon}
      </div>

      {/* Contenido del timeline item */}
      <div className="ml-12 md:ml-0 md:mt-12 w-full">
        <Card className={cn(
          "overflow-hidden transition-all hover:shadow-md",
          active ? "border-l-4" : "border",
          active && borderColorMap[color]
        )}>
          <div className="p-4">
            {children}
          </div>
        </Card>
      </div>
    </motion.div>
  );
} 