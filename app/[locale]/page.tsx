"use client";

import { useTranslations } from 'next-intl';

export default function Home() {
  // Intentar usar next-intl para mostrar un mensaje
  const t = useTranslations();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Test Page</h1>
      <p>This is a minimal test page.</p>
      <p>Mensaje de prueba: {t('testKey')}</p>
    </main>
  );
}
