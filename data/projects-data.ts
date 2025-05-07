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
    name: 'PLYO Labs',
    logo: '/logos/plyo_lab_logo.jpeg',
    projectType: 'Growth studio digital danés',
    year: '2020 - 2023',
    description: 'PLYO Labs fue mi puerta de entrada al mundo digital. Como parte del equipo, trabajé en múltiples proyectos 100% remotos, liderando estrategias de marketing digital, diseño web, validación de negocios (MVP, Signal Mining) y automatizaciones. Fue mi escuela intensiva en startups y growth.',
    tools: [
      { name: 'Marketing Digital', logoSrc: '' },
      { name: 'Growth Hacking', logoSrc: '' },
      { name: 'Web Design', logoSrc: '' },
      { name: 'Digital Stack', logoSrc: '' }
    ]
  },
  {
    id: 2,
    name: 'Signkit',
    logo: '/logos/logo_signkit.svg',
    projectType: 'SaaS de marketing vía firmas corporativas',
    year: '2020',
    status: 'Finalizado',
    description: 'Signkit fue mi primer proyecto en PLYO Labs. Es un SaaS que convierte firmas de email corporativas en un canal de marketing. Lideré ventas iniciales con scraping, personalized email outreach y LinkedIn outreach, logrando rápida validación y primeras cuentas activas.',
    tools: [
      { name: 'LinkedIn', logoSrc: '/logos_skills/logo linkedin.png' },
      { name: 'LinkedIn Scraping', logoSrc: '/logos_skills/logo linkedin.png' },
      { name: 'Woodpecker', logoSrc: '/logos_skills/logo_woodpecker.png' },
      { name: 'HubSpot', logoSrc: '/logos_skills/logo_hubspot.png' }
    ]
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
  { 
    id: 4, 
    name: 'DIMEXON',
    projectType: 'Marketplace B2B de diamantes',
    description: 'DIMEXON es un marketplace digital de diamantes B2B enfocado en joyeros tradicionales europeos. Lideré la validación ágil (Signal Mining), creación del MVP, y adquisición de clientes vía campañas multicanal. Logramos rápida tracción y validamos exitosamente el modelo.',
    logo: '/logos/dimexon_logo.jpeg',
    year: '2021',
    status: 'Finalizado',
    tools: [
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'LinkedIn Ads', logoSrc: '/logos_skills/logo linkedin.png' },
      { name: 'Zapier', logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: 'Hubspot', logoSrc: '/logos_skills/logo_hubspot.png' },
      { name: 'Shopify', logoSrc: '/logos_skills/Logo_shopify.svg' }
    ]
  },
  { 
    id: 5, 
    name: 'CULTIONS',
    projectType: 'Comunidad online para artistas',
    description: 'CULTIONS es una plataforma digital para artistas. Implementé Signal Mining en 8 semanas, creando landing pages, campañas y creatividades para validar demanda. Logramos fuerte tracción inicial y excelentes métricas en campañas multicanal, validando el interés del mercado.',
    logo: '/logos/cultions_logo.jpeg',
    year: '2021',
    status: 'Finalizado',
    tools: [
      { name: 'Webflow', logoSrc: '/logos_skills/logo_webfow 1.svg' },
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'Copy AI', logoSrc: '/logos_skills/logo_copy_ai.svg' },
      { name: 'Zapier', logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: 'Google Analytics', logoSrc: '/logos_skills/google-analytics-4.svg' }
    ]
  },
  { 
    id: 6, 
    name: 'CANNMED',
    projectType: 'E-commerce de CBD medicinal',
    description: 'CANNMED fue un e-commerce de CBD en España, desarrollado como side project junto a mi socio y amigo <a href="https://www.linkedin.com/in/joselagamma/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">José</a>. Diseñé la tienda en WooCommerce y juntos lideramos estrategias de growth con Taboola y Outbrain. Logramos ventas iniciales, pero pausamos al detectar que los claims sobre beneficios de salud no contaban aún con evidencia científica sólida.',
    logo: '/logos/logo_cannmed.svg',
    year: '2022',
    status: 'Finalizado',
    tools: [
      { name: 'Wordpress', logoSrc: '/logos_skills/logo_wordpress.svg' },
      { name: 'WooCommerce', logoSrc: '/logos_skills/logo_woocommerce.png' },
      { name: 'Taboola', logoSrc: '/logos_skills/logo_taboola.png' },
      { name: 'Outbrain', logoSrc: '/logos_skills/logo_outbrain.png' },
      { name: 'Instagram orgánico', logoSrc: '/logos_skills/logo_instagram.png' }
    ]
  },
  { id: 7, name: 'Crypto Job Board' },
  {
    id: 8,
    name: 'Gray Matter',
    description: 'Descripción de tu rol en Gray Matter.',
    tools: []
  },
  { id: 9, name: 'Mis Copilotos' },
  { id: 10, name: 'Video Insight Pro' },
  { id: 11, name: 'Framesynth' },
  {
    id: 12,
    name: 'Almendra',
    description: 'Descripción del proyecto Almendra.',
    tools: []
  }
]; 