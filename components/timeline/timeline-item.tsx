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
    slate: 'border-slate-500 text-slate-500 bg-slate-100 dark:bg-slate-900/30',
    sky: 'border-sky-500 text-sky-500 bg-sky-100 dark:bg-sky-900/30',
    purple: 'border-purple-500 text-purple-500 bg-purple-100 dark:bg-purple-900/30',
  };

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
      {...props}
    >
      {/* Punto de conexión en la línea de tiempo */}
      <div className="absolute left-16 -ml-3">
        <div 
          className={cn(
            "h-6 w-6 rounded-full border-2 bg-background flex items-center justify-center z-10",
            colorMap[color]
          )}
        >
          {icon}
        </div>
      </div>

      {/* Contenido del timeline item */}
      <div className="pl-28 pr-8">
        <Card className={cn(
          "overflow-hidden transition-all hover:shadow-md w-full",
          active ? "border-l-4" : "border",
          active && `border-${color}-500`
        )}>
          <div className="p-6">
            {children}
          </div>
        </Card>
      </div>
    </motion.div>
  );
} 