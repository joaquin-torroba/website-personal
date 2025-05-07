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
    name: 'Plyo labs',
    // logo: '/logos/plyo_logo.png', // Ejemplo, necesitarás la ruta correcta
    // projectType: 'Growth Studio',
    // year: '2020-2023',
    // status: 'Rol Clave',
    // description: 'Descripción de tu rol y contribuciones en PLYO Labs.',
    // tools: []
  },
  {
    id: 2,
    name: 'Signkit',
    // logo: '/logos/signkit_logo.png', // Ejemplo, necesitarás la ruta correcta
    // projectType: 'Herramienta SaaS',
    // year: '202X',
    // status: 'Consultoría',
    // description: 'Descripción de tu trabajo en Signkit.',
    // tools: []
  },
  {
    id: 3,
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
  { id: 4, name: 'Dimexon' },
  { id: 5, name: 'Cultions' },
  { id: 6, name: 'Cannmed' },
  { id: 7, name: 'Crypto Job Board' },
  {
    id: 8,
    name: 'Gray Matter',
    // logo: '/logos/graymatter_logo.png', // Ejemplo
    // projectType: 'Consultoría IA',
    // year: '202X',
    // status: 'Activo',
    // description: 'Descripción de tu rol en Gray Matter.',
    // tools: []
  },
  { id: 9, name: 'Mis Copilotos' },
  { id: 10, name: 'Video Insight Pro' },
  { id: 11, name: 'Framesynth' },
  {
    id: 12,
    name: 'Almendra',
    // logo: '/logos/almendra_logo.png', // Ejemplo
    // projectType: 'Producto IA',
    // year: '202X',
    // status: 'En desarrollo',
    // description: 'Descripción del proyecto Almendra.',
    // tools: []
  }
]; 