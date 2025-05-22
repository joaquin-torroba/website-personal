"use client";

import { useTranslations } from 'next-intl';

export default function Home() {
  // Usar next-intl para traducciones
  const t = useTranslations('Page');
  const tTest = useTranslations();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">{t('testTitle')}</h1>
      <p className="mb-4">{t('testMessage')}</p>
      <p className="text-sm">Mensaje de prueba original: {tTest('testKey')}</p>
    </main>
  );
}
