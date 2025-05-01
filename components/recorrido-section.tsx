'use client';

import React from 'react';
import { Timeline } from './timeline/timeline';
import { TimelineItem } from './timeline/timeline-item';
import { TimelineCard } from './timeline/timeline-card';
import { Target, Rocket, Bot } from 'lucide-react';

export default function RecorridoSection() {
  return (
    <section className="w-full mt-12 py-16">
      <h2 className="text-2xl font-bold text-center mb-12">Mi Recorrido Profesional</h2>
      <Timeline>
        <TimelineItem icon={<Target size={16} />} color="slate" active>
          <TimelineCard
            title="Corporativo"
            period="2010–2018"
            status="Finalizado"
            description="Auditoría, revenue management y BI. Consolidado experiencia en empresas multinacionales como PwC, Sinopec y Bacardí, desarrollando habilidades en finanzas y business intelligence."
            logos={[
              {
                src: "/placeholder-logo.svg",
                alt: "PwC"
              },
              {
                src: "/placeholder-logo.svg",
                alt: "Sinopec"
              },
              {
                src: "/placeholder-logo.svg",
                alt: "Bacardí"
              }
            ]}
          />
        </TimelineItem>
        
        <TimelineItem icon={<Rocket size={16} />} color="sky">
          <TimelineCard
            title="Europa & Startups"
            period="2020–2023"
            status="Finalizado"
            description="Growth, e-commerce y automatizaciones. Tras 5 años en Europa (Dinamarca, Italia, España) me sumergí en el ecosistema startup, enfocándome en growth, marketing digital y optimización de procesos de e-commerce."
            logos={[
              {
                src: "/placeholder-logo.svg",
                alt: "PLYO"
              },
              {
                src: "/placeholder-logo.svg",
                alt: "ONCE"
              },
              {
                src: "/placeholder-logo.svg",
                alt: "DIMEXON"
              }
            ]}
          />
        </TimelineItem>
        
        <TimelineItem icon={<Bot size={16} />} color="purple">
          <TimelineCard
            title="AI Builder"
            period="2023–2025"
            status="En curso"
            description="Productos IA full-stack: Video Insight Pro, Framesynth. Actualmente lidero Mis Copilotos, asesoro con IA en Launchable y desarrollo productos que aprovechan el potencial de la inteligencia artificial para resolver problemas reales."
            logos={[
              {
                src: "/placeholder-logo.svg", 
                alt: "Mis Copilotos"
              },
              {
                src: "/placeholder-logo.svg", 
                alt: "Launchable"
              }
            ]}
          />
        </TimelineItem>
      </Timeline>
    </section>
  );
} 