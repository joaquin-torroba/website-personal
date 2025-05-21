'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ClientThemeLogger() {
  const { theme, forcedTheme, systemTheme } = useTheme();

  useEffect(() => {
    console.log('Client Theme Info:', {
      activeTheme: theme,
      configuredForcedTheme: forcedTheme,
      detectedSystemTheme: systemTheme,
      htmlClass: document.documentElement.className,
    });
  }, [theme, forcedTheme, systemTheme]);

  return null; // Este componente no renderiza nada
} 