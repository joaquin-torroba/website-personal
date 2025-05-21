'use client';

import React from 'react';
import { Timeline } from './timeline/timeline';
import { TimelineItem } from './timeline/timeline-item';
import { TimelineCard } from './timeline/timeline-card';
import { TrendingUp, Rocket, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RecorridoSection() {
  const t = useTranslations('RecorridoSection');

  // Obtener los arrays de tags directamente
  const corporateTagsArray = t.raw('corporateTags') as string[];
  const startupsTagsArray = t.raw('startupsTags') as string[];
  const aiTagsArray = t.raw('aiTags') as string[];
  const periodConnector = t('periodConnector'); // Esto debería ser un string simple

  return (
    <section className="w-full py-16 bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">{t('title')}</h2>
        <Timeline>
          <TimelineItem period={`2012<br /><span class='font-normal'>${periodConnector}</span><br />2020`} color="purple" active>
            <TimelineCard
              title={t('corporateTitle')}
              tags={corporateTagsArray}
              description={t.rich('corporateDescription', { i: (chunks) => <i>{chunks}</i> })}
              logos={[
                {
                  src: "/logos/pwc_logo_new.svg",
                  alt: "PwC",
                  href: "https://www.linkedin.com/company/price-waterhouse-cooper-pwc/"
                },
                {
                  src: "/logos/Sinopec_logo.svg",
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
              sectionId="corporate-projects"
            />
          </TimelineItem>
          
          <TimelineItem period={`2020<br /><span class='font-normal'>${periodConnector}</span><br />2023`} color="pink" active>
            <TimelineCard
              title={t('startupsTitle')}
              tags={startupsTagsArray}
              description={t.rich('startupsDescription', { i: (chunks) => <i>{chunks}</i> })}
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
                },
                {
                  src: "/logos/logo_cannmed.svg",
                  alt: "CANNMED"
                }
              ]}
              flags={[
                { src: "/banderas/NEW_Flag_of_Denmark.svg", alt: "Bandera Dinamarca" },
                { src: "/banderas/NEW_Flag_of_Italy.svg", alt: "Bandera Italia" },
                { src: "/banderas/NEW_Flag_of_Spain.svg", alt: "Bandera España" },
              ]}
              color="slate"
              sectionId="digital-projects"
            />
          </TimelineItem>
          
          <TimelineItem period={`2023<br /><span class='font-normal'>${periodConnector}</span><br />2025`} color="indigo" active>
            <TimelineCard
              title={t('aiTitle')}
              tags={aiTagsArray}
              description={t.rich('aiDescription', { i: (chunks) => <i>{chunks}</i> })}
              logos={[
                {
                  src: "/logos/graymatterhq_logo.jpeg",
                  alt: "Gray Matter",
                  href: "https://www.graymatter.ai/"
                },
                {
                  src: "/logos/miscopilotos_logo_new.svg",
                  alt: "Mis Copilotos",
                  href: "https://miscopilotos.com/"
                },
                {
                  src: "/logos/launchable_logo_new.svg",
                  alt: "Launchable",
                  href: "https://launchable.ai/"
                },
                {
                  src: "/logos/logo_vip_videoinsightpro.svg",
                  alt: "Video Insight Pro",
                  href: "https://videoinsight.pro/"
                },
                {
                  src: "/logos/logo_framesynth.svg",
                  alt: "Framesynth",
                  href: "https://framesynth.art/"
                }
              ]}
              flags={[
                { src: "/banderas/NEW_Flag_internacional.svg", alt: "Bandera Internacional" },
              ]}
              color="slate"
              sectionId="ai-projects"
            />
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
} 