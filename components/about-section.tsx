'use client';

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      id="about"
      className="w-full mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="prose lg:prose-lg dark:prose-invert mx-auto space-y-4">
        {/* Contenido de la sección Sobre mí */}
        <p className="text-lg">
          Hola, soy <strong>Joaco</strong>. Desde <em>diciembre 2022</em> vivo y respiro
          <strong> inteligencia artificial</strong>: diseño, construyo y lanzo
          productos que mezclan negocio con vanguardia técnica.
        </p>
        <p className="text-lg">
          Arranqué en el mundo <em>enterprise</em> — PwC, Sinopec y Bacardí —
          consolidando finanzas, revenue management y BI. Tras
          <strong> 5 años en Europa</strong> (Dinamarca, Italia, España) di el salto
          al ecosistema <em>startup</em>: growth, marketing digital y e-commerce.
        </p>
        <p className="text-lg">
          Hoy lidero <strong>Mis Copilotos</strong>, asesoro con IA en Launchable y
          creo <em>Video Insight Pro</em> y <em>Framesynth</em>. Entiendo los
          procesos de una corporación y la velocidad de una startup; traduzco los
          retos de C-levels, founders, recruiters y managers en soluciones de IA
          reales.
        </p>
      </div>
    </motion.section>
  );
} 