export interface ProjectTool {
  name: string;
  logoSrc?: string;
}

export interface Project {
  id: number;
  name: string;
  logo?: string;
  projectType?: string;
  year?: string;
  status?: string;
  description?: string;
  tools?: ProjectTool[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'ONCE',
    logo: '/logos/once_logo.png',
    projectType: 'Joyería de lujo e-commerce',
    year: '2020',
    status: 'Finalizado',
    description: 'ONCE surgió en PLYO Labs como un audaz intento de fusionar joyería de lujo y e-commerce, al estilo de Net-a-Porter y Farfetch. Como Growth Marketer, dirigí campañas en Google y Facebook Ads, más otros canales. Implementé también tácticas de growth hacking para validar la demanda, con foco en A/B testing.',
    tools: [
      { name: 'Webflow', logoSrc: '/logos_skills/logo_webfow 1.svg' },
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Analytics', logoSrc: '/logos_skills/google-analytics-4.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'Mixpanel', logoSrc: '/logos_skills/Mixpanel_full_logo_–_purple 1.svg' }
    ]
  },
  { id: 2, name: 'DIMEXON' },
  { id: 3, name: 'CULTIONS' },
  { id: 4, name: 'CANNMED E-commerce CBD' },
  { id: 5, name: 'Crypto Job Board' },
  { id: 6, name: 'Mis Copilotos' },
  { id: 7, name: 'Video Insight Pro' },
  { id: 8, name: 'Framesynth' },
]; 