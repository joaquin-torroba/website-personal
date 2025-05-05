'use client'; // Añadimos por si acaso para futuros hooks

import Image from 'next/image'; // Importar Image
import { motion } from "framer-motion"; // Importar motion

// import { ModeToggle } from "@/components/mode-toggle"; // No se usa aquí
// import { Button } from "@/components/ui/button"; // No se usa aquí

export default function HeroSection() {
  return (
    <motion.section 
      className="w-full flex flex-col items-center gap-4 pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Imagen Real */}
      <Image
        src="/PLYO_FOTO.png" // Ruta desde la carpeta public
        alt="Retrato de Joaquín Torroba" // Texto alternativo según PRD
        width={192} // Ancho para desktop según PRD
        height={192} // Alto para desktop según PRD
        priority // Priorizar carga de esta imagen (LCP)
        className="rounded-full w-32 h-32 sm:w-48 sm:h-48 object-cover mb-4" // Clases para tamaño responsivo, redondeado y ajuste
      />

      {/* Nombre */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center">Joaquín Torroba</h1>

      {/* Tagline en dos líneas */}
      <div className="text-lg text-muted-foreground text-center max-w-md">
        <p>AI Freelancer.</p>
        <p>Enfocado en Startups y Empresas.</p>
      </div>

      {/* Placeholder para CTA */}
      <div className="sr-only" aria-label="CTA próximamente"></div>
    </motion.section>
  );
} 