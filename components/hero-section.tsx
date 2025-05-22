'use client'; // Añadimos por si acaso para futuros hooks

import Image from 'next/image'; // Importar Image
import { motion } from "framer-motion"; // Importar motion
import { useTranslations } from 'next-intl';

// import { ModeToggle } from "@/components/mode-toggle"; // No se usa aquí
// import { Button } from "@/components/ui/button"; // No se usa aquí

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  const tHome = useTranslations('HomePage');

  return (
    <motion.section 
      className="w-full flex flex-col items-center pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Contenedor interno para limitar ancho y añadir padding horizontal */}
      <div className="max-w-3xl mx-auto px-4 w-full flex flex-col items-center gap-4">
        {/* Contenedor para el gradiente y la sombra */}
        <div className="rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
        {/* Imagen Real */}
        <Image
            src="/Avatar_Foto_New1.png" // Ruta desde la carpeta public
          alt={t('portrait')} // Texto alternativo traducido
          width={192} // Ancho para desktop según PRD
          height={192} // Alto para desktop según PRD
          priority // Priorizar carga de esta imagen (LCP)
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 object-cover bg-white" // Añadido bg-white
        />
        </div>

        {/* Nombre */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center">{t('name')}</h1>

        {/* Tagline en dos líneas */}
        <div className="text-lg text-muted-foreground text-center max-w-md">
          <p>{t('tagline1')}</p>
          <p>{t('tagline2')}</p>
        </div>

        {/* Placeholder para CTA */}
        <div className="sr-only" aria-label={t('cta')}></div>
      </div>
    </motion.section>
  );
} 