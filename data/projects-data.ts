export interface ProjectTool {
  name: string;
  logoSrc?: string;
}

export interface Project {
  id: number;
  name: string;
  logo?: string;
  projectUrl?: string;
  projectType?: string;
  year?: string;
  status?: string;
  description?: string;
  tools?: ProjectTool[];
  category?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'PLYO Labs',
    logo: '/logos/plyo_lab_logo.jpeg',
    projectUrl: 'https://www.plyolab.com/',
    projectType: 'Growth studio digital danés',
    year: '2020 - 2023',
    description: 'PLYO Labs fue mi puerta de entrada al mundo digital. Como parte del equipo, trabajé en múltiples proyectos 100% remotos, liderando estrategias de marketing digital, diseño web, validación de negocios (MVP, Signal Mining) y automatizaciones. Fue mi escuela intensiva en startups y growth, junto a <a href="https://www.linkedin.com/in/kwadwoadu/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">Kwadwo</a>, su fundador y CEO (y un gran amigo).',
    tools: [
      { name: 'Marketing Digital', logoSrc: '' },
      { name: 'Growth Hacking', logoSrc: '' },
      { name: 'Web Design', logoSrc: '' },
      { name: 'Digital Stack', logoSrc: '' }
    ],
    category: 'digital',
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
    ],
    category: 'digital',
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
    ],
    category: 'digital',
  },
  { 
    id: 4, 
    name: 'Dimexon',
    logo: '/logos/dimexon_logo.jpeg',
    projectUrl: 'https://dimexon.com/',
    projectType: 'Marketplace B2B de diamantes',
    description: 'DIMEXON es un marketplace digital de diamantes B2B enfocado en joyeros tradicionales europeos. Lideré la validación ágil (Signal Mining), creación del MVP, y adquisición de clientes vía campañas multicanal. Logramos rápida tracción y validamos exitosamente el modelo.',
    year: '2021',
    status: 'Finalizado',
    tools: [
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'LinkedIn Ads', logoSrc: '/logos_skills/logo linkedin.png' },
      { name: 'Zapier', logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: 'Hubspot', logoSrc: '/logos_skills/logo_hubspot.png' },
      { name: 'Shopify', logoSrc: '/logos_skills/Logo_shopify.svg' }
    ],
    category: 'digital',
  },
  { 
    id: 5, 
    name: 'Cultions',
    logo: '/logos/cultions_logo.jpeg',
    projectUrl: 'https://www.linkedin.com/company/cultions/',
    projectType: 'Comunidad online para artistas',
    description: 'CULTIONS es una plataforma digital para artistas. Implementé Signal Mining en 8 semanas, creando landing pages, campañas y creatividades para validar demanda. Logramos fuerte tracción inicial y excelentes métricas en campañas multicanal, validando el interés del mercado.',
    year: '2021',
    status: 'Finalizado',
    tools: [
      { name: 'Webflow', logoSrc: '/logos_skills/logo_webfow 1.svg' },
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'Copy AI', logoSrc: '/logos_skills/logo_copy_ai.svg' },
      { name: 'Zapier', logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: 'Google Analytics', logoSrc: '/logos_skills/google-analytics-4.svg' }
    ],
    category: 'digital',
  },
  { 
    id: 6, 
    name: 'CANNMED',
    logo: '/logos/logo_cannmed.svg',
    projectUrl: 'https://www.instagram.com/cannmed.es/',
    projectType: 'E-commerce de CBD medicinal',
    description: 'CANNMED fue un e-commerce de CBD en España, desarrollado como side project junto a mi socio y amigo <a href="https://www.linkedin.com/in/joselagamma/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">José</a>. Diseñé la tienda en WooCommerce y juntos lideramos estrategias de growth con Taboola y Outbrain. Logramos ventas iniciales, pero pausamos al detectar que los claims sobre beneficios de salud no contaban aún con evidencia científica sólida.',
    year: '2022',
    status: 'Finalizado',
    tools: [
      { name: 'Wordpress', logoSrc: '/logos_skills/logo_wordpress.svg' },
      { name: 'WooCommerce', logoSrc: '/logos_skills/logo_woocommerce.png' },
      { name: 'Taboola', logoSrc: '/logos_skills/logo_taboola.png' },
      { name: 'Outbrain', logoSrc: '/logos_skills/logo_outbrain.png' },
      { name: 'Instagram orgánico', logoSrc: '/logos_skills/logo_instagram.png' }
    ],
    category: 'digital',
  },
  {
    id: 7,
    name: 'Gray Matter',
    logo: '/logos/graymatterhq_logo.jpeg',
    projectUrl: 'https://www.linkedin.com/company/graymatterhq/posts/?feedView=all',
    projectType: 'Startup studio de inteligencia artificial',
    year: '2023',
    status: 'Finalizado',
    description: 'Gray Matter es un startup studio fundado por <a href="https://www.linkedin.com/in/kwadwoadu/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">Kwadwo</a> tras levantar capital. Me convocó como su primer empleado con equity. Trabajé seis meses en proyectos early stage, combinando growth y prototipado rápido con AI. Mi rol incluyó apoyar estrategia, hacer profundo research de casos y potenciales usos de AI. Luego me abrí como freelancer para explorar AI sin límites.',
    tools: [
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Stable Diffusion', logoSrc: '/logos_skills/logo_stablediffusion.png' },
      { name: 'Notion', logoSrc: '/logos_skills/logo_notion.png' },
      { name: 'Bubble.io', logoSrc: '/logos_skills/bubble-io.svg' }
    ],
    category: 'ia',
  },
  { 
    id: 8, 
    name: 'Mis Copilotos',
    logo: '/logos/miscopilotos_logo_new.svg',
    projectUrl: 'https://miscopilotos.com/',
    projectType: 'Plataforma de copilotos personalizados',
    year: '2024',
    status: 'En curso',
    description: 'Mis Copilotos es una plataforma que desarrollé para crear y personalizar copilotos de IA enfocados en gestión de proyectos y tareas. Diseñé la arquitectura, la experiencia de usuario y la integración de chats inteligentes, combinando tecnología con casos de uso reales.',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Flowise', logoSrc: '/logos_skills/Logo_flowise.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'V0', logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Pinecone', logoSrc: '/logos_skills/logo_pinecone.png' }
    ],
    category: 'ia',
  },
  {
    id: 9,
    name: 'Launchable',
    logo: '/logos/launchable_logo_new.svg',
    projectUrl: 'https://launchable.ai/',
    projectType: 'Agencia de inteligencia artificial',
    year: '2025',
    status: 'En curso',
    description: 'Launchable es una agencia de Canadá de inteligencia artificial. Trabajo como freelancer en proyectos como Video Insight Pro y Framesynth. Aporto estrategia, desarrollo de producto, prototipado rápido, marketing digital y growth, aplicando lo más avanzado en AI.',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'V0', logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Replicate', logoSrc: '/logos_skills/logo_replicate.png' }
    ],
    category: 'ia',
  },
  { 
    id: 10, 
    name: 'Video Insight Pro',
    logo: '/logos/logo_vip_videoinsightpro.svg',
    projectUrl: 'https://videoinsight.pro/',
    projectType: 'Plataforma de análisis de videos con IA',
    year: '2025',
    status: 'En curso',
    description: 'Video Insight Pro es una plataforma que permite subir videos y analizarlos con inteligencia artificial en minutos. Trabajo en desarrollo de producto, estrategia, prototipado rápido y growth, ayudando a transformar videos en insights claros y accionables.',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'V0', logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Replicate', logoSrc: '/logos_skills/logo_replicate.png' },
      { name: 'AWS Lambda', logoSrc: '/logos_skills/logo_aws.png' }
    ],
    category: 'ia',
  },
  { 
    id: 11, 
    name: 'Framesynth',
    logo: '/logos/logo_framesynth.svg',
    projectUrl: 'https://framesynth.art/',
    projectType: 'Generador AI de videos musicales',
    year: '2025',
    status: 'En curso',
    description: 'Framesynth es una plataforma que convierte música en videos generados por inteligencia artificial. Trabajo en desarrollo de producto, estrategia, prototipado rápido y marketing digital, creando experiencias audiovisuales innovadoras con lo último en AI.',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'Vercel', logoSrc: '/logos_skills/Logo_vercel.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Replicate', logoSrc: '/logos_skills/logo_replicate.png' },
      { name: 'AWS Lambda', logoSrc: '/logos_skills/logo_aws.png' }
    ],
    category: 'ia',
  },
  {
    id: 12,
    name: 'Price Waterhouse Coopers',
    logo: '/logos/pwc_logo_new.svg',
    projectUrl: 'https://www.linkedin.com/company/price-waterhouse-cooper-pwc/',
    projectType: 'Auditoría, contabilidad e impuestos',
    year: '2011 - 2014',
    description: 'En PwC trabajé en las áreas de Capital Markets y Auditoría con clientes como Colgate, IRSA, Cresud y Adecoagro. En estos años aprendí de contabilidad, impuestos, finanzas y procesos corporativos, trabajando en las oficinas de estas compañías en Buenos Aires. Además, tuve la oportunidad de conocer de cerca sus operaciones mediante visitas a plantas industriales, como la de Colgate en San Luis, y a establecimientos agropecuarios, como los campos de Adecoagro en Corrientes y Santiago del Estero.',
    tools: [
      { name: 'Auditoría externa' }, 
      { name: 'Contabilidad' }, 
      { name: 'Impuestos' }, 
      { name: 'Capital Markets' }, 
      { name: 'IFRS' }, 
      { name: 'US GAAP' }, 
      { name: 'Excel avanzado' }
    ],
    category: 'corporate',
  },
  {
    id: 13,
    name: 'Sinopec<br />International',
    logo: '/logos/Sinopec_logo.svg',
    projectType: 'Finanzas corporativas en multinacional',
    year: '2014 - 2015',
    description: 'En Sinopec trabajé en Finanzas, realizando tareas de back office y gestión de facturas. Fue una experiencia que me permitió conocer de cerca el funcionamiento administrativo de una multinacional. Tras seis meses, busqué un desafío más ambicioso y tomé el proyecto de Jóvenes Profesionales en Bacardi.',
    tools: [
      { name: 'Finanzas' },
      { name: 'Back office' },
      { name: 'Gestión administrativa' },
      { name: 'Procesos corporativos' },
      { name: 'Excel' }
    ],
    category: 'corporate',
  },
  {
    id: 14,
    name: 'Bacardi<br />(Grupo Cepas)',
    logo: '/logos/bacardi_logo_new.svg',
    projectType: 'Revenue, marketing y ventas en consumo masivo',
    year: '2015 - 2020',
    description: 'En Bacardi (Grupo CEPAS) trabajé 5 años. Entré como Joven Profesional rotando por Revenue Management, Ventas y Business Intelligence. Crecí en Revenue Management hasta liderar la apertura del área en Chile y Uruguay. Cerré en el área de Marketing como Brand Manager de Terma, combinando análisis y estrategia de marca. Trabajé con marcas icónicas como Bacardi, Ganzia, Terma y Dr. Lemon.',
    tools: [
      { name: 'Revenue Management' },
      { name: 'Ventas' },
      { name: 'Business Intelligence' },
      { name: 'Pricing' },
      { name: 'Forecasting' },
      { name: 'Marketing' },
      { name: 'Brand Strategy' },
      { name: 'SAP' },
      { name: 'Excel' },
      { name: 'Nielsen' },
      { name: 'Ipsos' }
    ],
    category: 'corporate',
  }
]; 