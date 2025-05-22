'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LanguageSwitcher() {
  const t = useTranslations('Languages');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Función para cambiar el idioma
  const switchLanguage = (newLocale: string) => {
    // Si ya estamos en el idioma seleccionado, no hacemos nada
    if (locale === newLocale) return;
    
    // Construimos la URL con el nuevo idioma
    let newPath;
    
    // Verifica si el pathname contiene el locale actual
    if (pathname.includes(`/${locale}`)) {
      newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    } else {
      // Si no lo contiene, simplemente añade el nuevo locale al inicio
      newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
    }
    
    // Añadimos { scroll: false } para evitar scroll al cambiar idioma
    console.log(`Cambiando de ${locale} a ${newLocale}, nueva ruta: ${newPath}`);
    router.push(newPath, { scroll: false });
  };

  // Rutas de las banderas
  const flagEsPath = '/banderas/NEW_Flag_of_Spain.svg';
  const flagEnPath = '/banderas/Logo_bandera_england.png'; // Actualizado para usar la bandera de Inglaterra correcta

  return (
    <div className="flex items-center h-8 rounded-md overflow-hidden border border-slate-300">
      <Button
        variant="ghost"
        className={`p-2 flex items-center justify-center h-full rounded-none border-0 transition-colors duration-150 ${locale === 'es' ? 'bg-[#e2e8f0] hover:bg-[#e2e8f0]' : 'hover:bg-[#e2e8f0]'}`}
        onClick={() => switchLanguage('es')}
        aria-label={t('switchTo', { language: t('spanish') })}
      >
        <Image src={flagEsPath} alt={t('spanish')} width={24} height={18} className="rounded-sm" />
      </Button>
      <div className="w-px h-full bg-slate-300"></div> {/* Separador vertical */}
      <Button
        variant="ghost"
        className={`p-2 flex items-center justify-center h-full rounded-none border-0 transition-colors duration-150 ${locale === 'en' ? 'bg-[#e2e8f0] hover:bg-[#e2e8f0]' : 'hover:bg-[#e2e8f0]'}`}
        onClick={() => switchLanguage('en')}
        aria-label={t('switchTo', { language: t('english') })}
      >
        <Image src={flagEnPath} alt={t('english')} width={24} height={18} className="rounded-sm" />
      </Button>
    </div>
  );
} 