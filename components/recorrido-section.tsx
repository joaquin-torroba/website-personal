'use client';

import React from 'react';
import { Timeline } from './timeline/timeline';
import { TimelineItem } from './timeline/timeline-item';
import { TimelineCard } from './timeline/timeline-card';
import { TrendingUp, Rocket, Sparkles } from 'lucide-react';

export default function RecorridoSection() {
  return (
    <section className="w-full py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Mi Recorrido Profesional</h2>
        <Timeline>
          <TimelineItem period="2012–2020" color="slate" active>
            <TimelineCard
              title="Etapa Corporativa (Latinoamérica)"
              tags={["Auditoría", "Contabilidad", "Finanzas", "Revenue Management", "Marketing", "Business Intelligence", "Ventas"]}
              description="A los 20 años comencé mi camino profesional en PWC en el área de <i>capital markets</i> y <i>auditoría</i>. Luego un breve paso por Sinopec en <i>finanzas</i>. Y finalmente, 5 hermosos años trabajando en Grupo Cepas (Bacardi) en core áreas como <i>revenue management</i>, <i>marketing</i>, <i>ventas</i> y <i>BI</i>."
              logos={[
                {
                  src: "/logos/pwc_logo_new.svg",
                  alt: "PwC",
                  href: "https://www.linkedin.com/company/price-waterhouse-cooper-pwc/"
                },
                {
                  src: "/logos/sinopec_logo_new.png",
                  alt: "Sinopec",
                  href: "https://www.linkedin.com/company/sinopec-international-petroleum-service-corporation/"
                },
                {
                  src: "/logos/logo_bacardi_new_2.svg",
                  alt: "Bacardí",
                  href: "https://www.linkedin.com/company/bacardi/"
                },
                {
                  src: "/logos/grupocepas_logo_new.svg",
                  alt: "Grupo Cepas",
                  href: "https://www.linkedin.com/company/cepas-argentinas/posts/?feedView=all"
                }
              ]}
              flags={[
                { src: "/banderas/NEW_Flag_of_Argentina.svg", alt: "Bandera Argentina" },
                { src: "/banderas/NEW_Flag_of_Chile.svg", alt: "Bandera Chile" },
                { src: "/banderas/New_Flag_of_Uruguay1.svg", alt: "Bandera Uruguay" },
              ]}
              color="slate"
            />
          </TimelineItem>
          
          <TimelineItem period="2020–2023" color="slate" active>
            <TimelineCard
              title="Etapa Startups (Europa)"
              tags={["Growth Hacking", "Marketing Digital", "Diseño Web", "Automatizaciones Web", "E-commerce"]}
              description="A los 28 años me mudé a Europa y conocí el mundo digital trabajando en un <i>growth studio</i> danés llamado Plyo Labs. Durante 3 años participé de múltiples proyectos remotos en distintas startups (destaco Dimexon, Once y Cultions). Comencé como especialista en <i>marketing digital</i> y luego incorporando más herramientas digital-native como <i>diseño web</i>, <i>automatizaciones</i>, <i>e-commerce</i> y <i>growth hacking</i>."
              logos={[
                {
                  src: "/logos/plyo_lab_logo.jpeg",
                  alt: "PLYO",
                  href: "https://www.plyolab.com/"
                },
                {
                  src: "/logos/dimexon_logo.jpeg",
                  alt: "DIMEXON",
                  href: "https://dimexon.com/"
                },
                {
                  src: "/logos/cultions_logo.jpeg",
                  alt: "Cultions",
                  href: "https://www.linkedin.com/company/cultions/"
                },
                {
                  src: "/logos/once_logo.png",
                  alt: "ONCE"
                }
              ]}
              flags={[
                { src: "/banderas/NEW_Flag_of_Denmark.svg", alt: "Bandera Dinamarca" },
                { src: "/banderas/NEW_Flag_of_Italy.svg", alt: "Bandera Italia" },
                { src: "/banderas/NEW_Flag_of_Spain.svg", alt: "Bandera España" },
              ]}
              color="slate"
            />
          </TimelineItem>
          
          <TimelineItem period="2023–2025" color="slate" active>
            <TimelineCard
              title="Etapa Inteligencia Artificial (Remoto Global)"
              tags={["Ingeniería de IA", "Trabajo con Agentes", "Desarrollo de Apps (IA)", "Diseño Web con IA (IA)", "Automatizaciones (IA)"]}
              description="Productos IA full-stack: Video Insight Pro, Framesynth. Actualmente lidero Mis Copilotos, asesoro con IA en Launchable y desarrollo productos que aprovechan el potencial de la inteligencia artificial para resolver problemas reales."
              logos={[
                {
                  src: "/logos/launchable_logo_new.svg",
                  alt: "Launchable",
                  href: "https://launchable.ai/"
                },
                {
                  src: "/logos/graymatterhq_logo.jpeg",
                  alt: "Gray Matter",
                  href: "https://www.linkedin.com/company/graymatterhq/posts/?feedView=all"
                },
                {
                  src: "/logos/miscopilotos_logo_new.svg",
                  alt: "Mis Copilotos",
                  href: "https://miscopilotos.com/"
                },
                {
                  src: "/logos/almendra_logo_new.svg",
                  alt: "Almendra",
                  href: "http://almendra.ai/"
                }
              ]}
              flags={[
                { src: "/banderas/NEW_Flag_internacional.svg", alt: "Bandera Internacional" },
              ]}
              color="slate"
            />
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
} 