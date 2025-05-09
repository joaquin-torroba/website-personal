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
          Soy Joaquin. Mi foco hoy está puesto 100% en <em>inteligencia artificial</em> aplicada a negocios. Me inicié profesionalmente en el mundo corporativo, después pasé varios años trabajando en startups digitales, y ahora combino ambos enfoques. 
        </p>
        <p className="text-lg">
          Actualmente divido mi tiempo entre desarrollar productos de IA en Launchable - <em>startup canadiense</em> - y explorar casos prácticos para integrar la inteligencia artificial en grandes empresas. 
        </p>
        <p className="text-lg">
          Me interesa explorar oportunidades de IA en áreas que conozco bien como <em>marketing, ventas, revenue management, contabilidad, recursos humanos, impuestos y finanzas</em>.
        </p>
        <p className="text-lg">
          Si sos un profesional, una startup o una empresa con esta misma curiosidad por la IA, hablemos. Estaría bueno explorar ideas juntos.
        </p>
      </div>
    </motion.section>
  );
}   