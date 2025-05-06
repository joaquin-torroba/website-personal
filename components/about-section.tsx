'use client';

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section 
      id="about"
      className="w-full py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="prose lg:prose-lg dark:prose-invert max-w-3xl mx-auto pl-10 pr-4 space-y-4">
        <p className="text-lg">
          Soy <strong>Joaquin</strong>. Trabajo en inteligencia artificial aplicada a negocios. Mi trayectoria combina experiencias sólidas en <em>empresas globales</em> y un intenso período en <em>startups digitales</em>. 
        </p>
        <p className="text-lg">
          Actualmente divido mi tiempo entre desarrollar productos de IA en <em>Launchable</em> - startup canadiense - y explorar casos prácticos para integrar la inteligencia artificial en grandes empresas. 
        </p>
        <p className="text-lg">
          Me interesa especialmente identificar oportunidades claras en áreas que conozco como <em>marketing, ventas, revenue management, contabilidad, recursos humanos, impuestos y finanzas</em>. 
        </p>
        <p className="text-lg">
          Busco colaborar con profesionales y empresas que compartan esta visión, con el fin de aprovechar al máximo las oportunidades que la IA tiene para ofrecernos.
        </p>
      </div>
    </motion.section>
  );
}   