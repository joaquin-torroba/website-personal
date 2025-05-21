// Objeto para textos traducibles
interface LocalizedString {
  en: string;
  es: string;
}

export interface ProjectTool {
  name: LocalizedString;
  logoSrc?: string;
  path?: string;
}

export interface Project {
  id: number;
  name: LocalizedString;
  logo?: string;
  projectUrl?: string;
  projectType?: LocalizedString;
  year?: string;
  status?: string;
  description?: LocalizedString;
  image_path?: string;
  image_alt?: LocalizedString;
  tools?: ProjectTool[];
  category?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: { en: "PLYO Labs", es: "PLYO Labs" },
    logo: "/logos/plyo_lab_logo.jpeg",
    projectUrl: "https://www.plyolab.com/",
    projectType: { 
      en: "Danish digital growth studio", 
      es: "Growth studio digital danés" 
    },
    year: "2020 - 2023",
    description: { 
      en: "PLYO Labs was my gateway into the digital world. As part of the team, I worked on multiple projects that were 100% remote, leading digital marketing strategies, web design, business validation (MVP, Signal Mining), and automation initiatives. It was my intensive crash course in startups and growth, alongside <a href=\"https://www.linkedin.com/in/kwadwoadu/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-sky-600 hover:text-sky-700 hover:underline\">Kwadwo</a>, its founder and CEO (and a dear friend).", 
      es: "PLYO Labs fue mi puerta de entrada al mundo digital. Como parte del equipo, trabajé en múltiples proyectos 100% remotos, liderando estrategias de marketing digital, diseño web, validación de negocios (MVP, Signal Mining) y automatizaciones. Fue mi escuela intensiva en startups y growth, junto a <a href=\"https://www.linkedin.com/in/kwadwoadu/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-sky-600 hover:text-sky-700 hover:underline\">Kwadwo</a>, su fundador y CEO (y un gran amigo)." 
    },
    tools: [
      { name: { en: "Digital Marketing", es: "Marketing Digital" }, logoSrc: "" },
      { name: { en: "Growth Hacking", es: "Growth Hacking" }, logoSrc: "" },
      { name: { en: "Web Design", es: "Web Design" }, logoSrc: "" },
      { name: { en: "Digital Stack", es: "Digital Stack" }, logoSrc: "" }
    ],
    category: "digital",
  },
  {
    id: 2,
    name: { en: "Signkit", es: "Signkit" },
    logo: "/logos/logo_signkit.svg",
    projectUrl: "https://signkit.io/",
    projectType: { 
      en: "SaaS for marketing via corporate signatures", 
      es: "SaaS de marketing vía firmas corporativas" 
    },
    year: "2020",
    status: "Finalizado",
    description: { 
      en: "Signkit was my first project at PLYO Labs. It's a SaaS that transforms corporate email signatures into a marketing channel. I led initial sales efforts through scraping, personalized email outreach, and LinkedIn outreach, achieving quick validation and securing our first active accounts.", 
      es: "Signkit fue mi primer proyecto en PLYO Labs. Es un SaaS que convierte firmas de email corporativas en un canal de marketing. Lideré ventas iniciales con scraping, personalized email outreach y LinkedIn outreach, logrando rápida validación y primeras cuentas activas." 
    },
    tools: [
      { name: { en: "LinkedIn", es: "LinkedIn" }, logoSrc: "/logos_skills/logo linkedin.png" },
      { name: { en: "LinkedIn Scraping", es: "LinkedIn Scraping" }, logoSrc: "/logos_skills/logo linkedin.png" },
      { name: { en: "Woodpecker", es: "Woodpecker" }, logoSrc: "/logos_skills/logo_woodpecker.png" },
      { name: { en: "HubSpot", es: "HubSpot" }, logoSrc: "/logos_skills/logo_hubspot.png" }
    ],
    category: "digital",
  },
  {
    id: 3,
    name: { en: "ONCE", es: "ONCE" },
    logo: "/logos/once_logo.png",
    projectType: { 
      en: "Luxury jewelry e-commerce", 
      es: "Joyería de lujo e-commerce" 
    },
    year: "2020",
    status: "Finalizado",
    description: { 
      en: "ONCE emerged at PLYO Labs as a bold initiative to combine luxury jewelry with e-commerce, mirroring approaches taken by Net-a-Porter and Farfetch. In my role as Growth Marketer, I oversaw Google and Facebook advertising campaigns, as well as other marketing channels. Furthermore, I applied growth-hacking strategies aimed at validating demand, with special emphasis on A/B testing.", 
      es: "ONCE surgió en PLYO Labs como un audaz intento de fusionar joyería de lujo y e-commerce, al estilo de Net-a-Porter y Farfetch. Como Growth Marketer, dirigí campañas en Google y Facebook Ads, más otros canales. Implementé también tácticas de growth hacking para validar la demanda, con foco en A/B testing." 
    },
    tools: [
      { name: { en: "Webflow", es: "Webflow" }, logoSrc: "/logos_skills/logo_webfow 1.svg" },
      { name: { en: "Google Ads", es: "Google Ads" }, logoSrc: "/logos_skills/Logo_Google_ads.svg" },
      { name: { en: "Analytics", es: "Analytics" }, logoSrc: "/logos_skills/google-analytics-4.svg" },
      { name: { en: "Facebook Ads", es: "Facebook Ads" }, logoSrc: "/logos_skills/Logo_meta-3.svg" },
      { name: { en: "Mixpanel", es: "Mixpanel" }, logoSrc: "/logos_skills/Mixpanel_full_logo_–_purple 1.svg" },
      { name: { en: "Figma", es: "Figma" }, logoSrc: "/logos_skills/logo_figma.svg" }
    ],
    category: "digital",
  },
  { 
    id: 4, 
    name: { en: "Dimexon", es: "Dimexon" },
    logo: "/logos/dimexon_logo.jpeg",
    projectUrl: "https://dimexon.com/",
    projectType: { 
      en: "B2B diamond marketplace", 
      es: "Marketplace B2B de diamantes" 
    },
    description: { 
      en: "DIMEXON is a digital B2B marketplace for diamonds, targeting traditional jewelers in Europe. I headed agile validation (Signal Mining), MVP creation, and customer acquisition using multi-channel campaigns. We quickly gained traction and successfully validated the model.", 
      es: "DIMEXON es un marketplace digital de diamantes B2B enfocado en joyeros tradicionales europeos. Lideré la validación ágil (Signal Mining), creación del MVP, y adquisición de clientes vía campañas multicanal. Logramos rápida tracción y validamos exitosamente el modelo." 
    },
    year: "2021",
    status: "Finalizado",
    tools: [
      { name: { en: "Google Ads", es: "Google Ads" }, logoSrc: "/logos_skills/Logo_Google_ads.svg" },
      { name: { en: "Facebook Ads", es: "Facebook Ads" }, logoSrc: "/logos_skills/Logo_meta-3.svg" },
      { name: { en: "LinkedIn Ads", es: "LinkedIn Ads" }, logoSrc: "/logos_skills/logo linkedin.png" },
      { name: { en: "Zapier", es: "Zapier" }, logoSrc: "/logos_skills/logo_zapier.svg" },
      { name: { en: "Hubspot", es: "Hubspot" }, logoSrc: "/logos_skills/logo_hubspot.png" },
      { name: { en: "Shopify", es: "Shopify" }, logoSrc: "/logos_skills/Logo_shopify.svg" },
      { name: { en: "Figma", es: "Figma" }, logoSrc: "/logos_skills/logo_figma.svg" }
    ],
    category: "digital",
  },
  { 
    id: 5, 
    name: { en: 'Cultions', es: 'Cultions' },
    logo: '/logos/cultions_logo.jpeg',
    projectUrl: 'https://www.linkedin.com/company/cultions/',
    projectType: { 
      en: 'Online community for artists', 
      es: 'Comunidad online para artistas' 
    },
    description: { 
      en: 'CULTIONS is a digital platform aimed at artists. I executed Signal Mining within 8 weeks by creating landing pages, campaigns, and creatives to validate demand. We attained robust initial traction with outstanding metrics in multichannel campaigns, successfully confirming market interest.', 
      es: 'CULTIONS es una plataforma digital para artistas. Implementé Signal Mining en 8 semanas, creando landing pages, campañas y creatividades para validar demanda. Logramos fuerte tracción inicial y excelentes métricas en campañas multicanal, validando el interés del mercado.' 
    },
    year: '2021',
    status: 'Finalizado',
    tools: [
      { name: { en: 'Webflow', es: 'Webflow' }, logoSrc: '/logos_skills/logo_webfow 1.svg' },
      { name: { en: 'Google Ads', es: 'Google Ads' }, logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: { en: 'Facebook Ads', es: 'Facebook Ads' }, logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: { en: 'Copy AI', es: 'Copy AI' }, logoSrc: '/logos_skills/logo_copy_ai.svg' },
      { name: { en: 'Zapier', es: 'Zapier' }, logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: { en: 'Google Analytics', es: 'Google Analytics' }, logoSrc: '/logos_skills/google-analytics-4.svg' },
      { name: { en: 'Figma', es: 'Figma' }, logoSrc: '/logos_skills/logo_figma.svg' }
    ],
    category: 'digital',
  },
  { 
    id: 6, 
    name: { en: 'CANNMED', es: 'CANNMED' },
    logo: '/logos/logo_cannmed.svg',
    projectUrl: 'https://www.instagram.com/cannmed.es/',
    projectType: { 
      en: 'E-commerce for medicinal CBD', 
      es: 'E-commerce de CBD medicinal' 
    },
    description: { 
      en: 'CANNMED was a CBD online store in Spain, launched as a side project alongside my partner and friend <a href="https://www.linkedin.com/in/joselagamma/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">José</a>. I built the site on WooCommerce, and together we led growth strategies through Taboola and Outbrain. We achieved initial sales but decided to pause once we found that claims regarding health benefits still lacked robust scientific proof.', 
      es: 'CANNMED fue un e-commerce de CBD en España, desarrollado como side project junto a mi socio y amigo <a href="https://www.linkedin.com/in/joselagamma/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">José</a>. Diseñé la tienda en WooCommerce y juntos lideramos estrategias de growth con Taboola y Outbrain. Logramos ventas iniciales, pero pausamos al detectar que los claims sobre beneficios de salud no contaban aún con evidencia científica sólida.' 
    },
    year: '2022',
    status: 'Finalizado',
    tools: [
      { name: { en: 'Wordpress', es: 'Wordpress' }, logoSrc: '/logos_skills/logo_wordpress.svg' },
      { name: { en: 'WooCommerce', es: 'WooCommerce' }, logoSrc: '/logos_skills/logo_woocommerce.png' },
      { name: { en: 'Taboola', es: 'Taboola' }, logoSrc: '/logos_skills/logo_taboola.png' },
      { name: { en: 'Outbrain', es: 'Outbrain' }, logoSrc: '/logos_skills/logo_outbrain.png' },
      { name: { en: 'Organic Instagram', es: 'Instagram orgánico' }, logoSrc: '/logos_skills/logo_instagram.png' },
      { name: { en: 'Figma', es: 'Figma' }, logoSrc: '/logos_skills/logo_figma.svg' }
    ],
    category: 'digital',
  },
  {
    id: 7,
    name: { en: 'Gray Matter', es: 'Gray Matter' },
    logo: '/logos/graymatterhq_logo.jpeg',
    projectUrl: 'https://www.linkedin.com/company/graymatterhq/posts/?feedView=all',
    projectType: { 
      en: 'Artificial intelligence startup studio', 
      es: 'Startup studio de inteligencia artificial' 
    },
    year: '2023',
    status: 'Finalizado',
    description: { 
      en: 'Gray Matter is a startup studio founded by <a href="https://www.linkedin.com/in/kwadwoadu/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">Kwadwo</a> following a successful fundraising. He brought me on board as the first employee with equity. I collaborated for half a year on early-stage projects, combining growth initiatives and rapid prototyping powered by AI. My responsibilities included strategic support, deep-diving into research of AI use cases, and identifying prospective AI applications. Later, I ventured out independently as a freelancer to further explore AI.', 
      es: 'Gray Matter es un startup studio fundado por <a href="https://www.linkedin.com/in/kwadwoadu/" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 hover:underline">Kwadwo</a> tras levantar capital. Me convocó como su primer empleado con equity. Trabajé seis meses en proyectos early stage, combinando growth y prototipado rápido con AI. Mi rol incluyó apoyar estrategia, hacer profundo research de casos y potenciales usos de AI. Luego me abrí como freelancer para explorar AI sin límites.' 
    },
    tools: [
      { name: { en: 'ChatGPT', es: 'ChatGPT' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: { en: 'Stable Diffusion', es: 'Stable Diffusion' }, logoSrc: '/logos_skills/logo_stablediffusion.png' },
      { name: { en: 'Notion', es: 'Notion' }, logoSrc: '/logos_skills/logo_notion.png' },
      { name: { en: 'Bubble.io', es: 'Bubble.io' }, logoSrc: '/logos_skills/bubble-io.svg' }
    ],
    category: 'ia',
  },
  { 
    id: 8, 
    name: { en: 'Mis Copilotos', es: 'Mis Copilotos' },
    logo: '/logos/miscopilotos_logo_new.svg',
    projectUrl: 'https://miscopilotos.com/',
    projectType: { 
      en: 'Custom AI copilots platform', 
      es: 'Plataforma de copilotos personalizados' 
    },
    year: '2024',
    status: 'En curso',
    description: { 
      en: "Mis Copilotos (my copilots) is a platform I've built to allow the creation and customization of AI-powered copilots aimed at project and task management. I created the architecture, defined the user experience, and integrated intelligent chat functionalities, combining innovative technology with practical real-world scenarios.", 
      es: 'Mis Copilotos es una plataforma que desarrollé para crear y personalizar copilotos de IA enfocados en gestión de proyectos y tareas. Diseñé la arquitectura, la experiencia de usuario y la integración de chats inteligentes, combinando tecnología con casos de uso reales.' 
    },
    tools: [
      { name: { en: 'Bubble', es: 'Bubble' }, logoSrc: '/logos_skills/bubble-io.svg' },
      { name: { en: 'Flowise', es: 'Flowise' }, logoSrc: '/logos_skills/Logo_flowise.svg' },
      { name: { en: 'Cursor', es: 'Cursor' }, logoSrc: '/logos_skills/cursor.svg' },
      { name: { en: 'V0', es: 'V0' }, logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: { en: 'ChatGPT', es: 'ChatGPT' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: { en: 'Claude', es: 'Claude' }, logoSrc: '/logos_skills/claude-color.svg' },
      { name: { en: 'Pinecone', es: 'Pinecone' }, logoSrc: '/logos_skills/logo_pinecone.png' },
      { name: { en: 'Figma', es: 'Figma' }, logoSrc: '/logos_skills/logo_figma.svg' },
      { name: { en: 'Deep Research', es: 'Deep Research' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  {
    id: 9,
    name: { en: 'Launchable', es: 'Launchable' },
    logo: '/logos/launchable_logo_new.svg',
    projectUrl: 'https://launchable.ai/',
    projectType: { 
      en: 'Artificial intelligence agency', 
      es: 'Agencia de inteligencia artificial' 
    },
    year: '2025',
    status: 'En curso',
    description: { 
      en: 'Launchable is an AI-focused startup established in Canada. As a freelancer, I collaborate on projects such as Video Insight Pro and Framesynth. My contributions include strategy, product development, rapid prototyping, digital marketing, and growth, leveraging state-of-the-art artificial intelligence.', 
      es: 'Launchable es una startup de inteligencia artificial fundada en Canadá. Trabajo como freelancer en proyectos como Video Insight Pro y Framesynth. Aporto estrategia, desarrollo de producto, prototipado rápido, marketing digital y growth, aplicando lo más avanzado en AI.' 
    },
    tools: [
      { name: { en: 'Bubble', es: 'Bubble' }, logoSrc: '/logos_skills/bubble-io.svg' },
      { name: { en: 'Cursor', es: 'Cursor' }, logoSrc: '/logos_skills/cursor.svg' },
      { name: { en: 'V0', es: 'V0' }, logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: { en: 'ChatGPT', es: 'ChatGPT' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: { en: 'Claude', es: 'Claude' }, logoSrc: '/logos_skills/claude-color.svg' },
      { name: { en: 'Replicate', es: 'Replicate' }, logoSrc: '/logos_skills/logo_replicate.png' },
      { name: { en: 'Figma', es: 'Figma' }, logoSrc: '/logos_skills/logo_figma.svg' },
      { name: { en: 'Deep Research', es: 'Deep Research' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  { 
    id: 10, 
    name: { en: 'Video Insight Pro', es: 'Video Insight Pro' },
    logo: '/logos/logo_vip_videoinsightpro.svg',
    projectUrl: 'https://videoinsight.pro/',
    projectType: { 
      en: 'AI-powered video analysis platform', 
      es: 'Plataforma de análisis de videos con IA' 
    },
    year: '2025',
    status: 'En curso',
    description: { 
      en: 'Video Insight Pro is a platform that allows users to analyze and chat with videos. Users upload videos and quickly analyze them using artificial intelligence. My role involves product development, strategy, rapid prototyping, and growth, facilitating the transformation of videos into concise and actionable insights.', 
      es: 'Video Insight Pro es una plataforma que permite subir videos y analizarlos con inteligencia artificial en minutos. Trabajo en desarrollo de producto, estrategia, prototipado rápido y growth, ayudando a transformar videos en insights claros y accionables.' 
    },
    tools: [
      { name: { en: 'Bubble', es: 'Bubble' }, logoSrc: '/logos_skills/bubble-io.svg' },
      { name: { en: 'Cursor', es: 'Cursor' }, logoSrc: '/logos_skills/cursor.svg' },
      { name: { en: 'V0', es: 'V0' }, logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: { en: 'ChatGPT', es: 'ChatGPT' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: { en: 'Claude', es: 'Claude' }, logoSrc: '/logos_skills/claude-color.svg' },
      { name: { en: 'Replicate', es: 'Replicate' }, logoSrc: '/logos_skills/logo_replicate.png' },
      { name: { en: 'AWS Lambda', es: 'AWS Lambda' }, logoSrc: '/logos_skills/logo_aws.png' },
      { name: { en: 'Figma', es: 'Figma' }, logoSrc: '/logos_skills/logo_figma.svg' },
      { name: { en: 'Deep Research', es: 'Deep Research' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  { 
    id: 11, 
    name: { en: 'Framesynth', es: 'Framesynth' },
    logo: '/logos/logo_framesynth.svg',
    projectUrl: 'https://framesynth.art/',
    projectType: { 
      en: 'AI music video generator', 
      es: 'Generador AI de videos musicales' 
    },
    year: '2025',
    status: 'En curso',
    description: { 
      en: 'Framesynth is a platform that turns music into AI-generated videos. My work involves product development, strategy, rapid prototyping, and digital marketing, creating innovative audiovisual experiences using state-of-the-art AI.', 
      es: 'Framesynth es una plataforma que convierte música en videos generados por inteligencia artificial. Trabajo en desarrollo de producto, estrategia, prototipado rápido y marketing digital, creando experiencias audiovisuales innovadoras con lo último en AI.' 
    },
    tools: [
      { name: { en: 'Bubble', es: 'Bubble' }, logoSrc: '/logos_skills/bubble-io.svg' },
      { name: { en: 'Cursor', es: 'Cursor' }, logoSrc: '/logos_skills/cursor.svg' },
      { name: { en: 'Vercel', es: 'Vercel' }, logoSrc: '/logos_skills/Logo_vercel.svg' },
      { name: { en: 'ChatGPT', es: 'ChatGPT' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: { en: 'Claude', es: 'Claude' }, logoSrc: '/logos_skills/claude-color.svg' },
      { name: { en: 'Replicate', es: 'Replicate' }, logoSrc: '/logos_skills/logo_replicate.png' },
      { name: { en: 'AWS Lambda', es: 'AWS Lambda' }, logoSrc: '/logos_skills/logo_aws.png' },
      { name: { en: 'Figma', es: 'Figma' }, logoSrc: '/logos_skills/logo_figma.svg' },
      { name: { en: 'Deep Research', es: 'Deep Research' }, logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  {
    id: 12,
    name: { es: "Price Waterhouse Coopers", en: "Price Waterhouse Coopers" },
    logo: "/logos/pwc_logo_new.svg",
    projectUrl: "https://www.linkedin.com/company/price-waterhouse-cooper-pwc/",
    projectType: {
      es: "Auditoría, contabilidad e impuestos",
      en: "Audit, accounting and taxes",
    },
    year: "2011 - 2014",
    description: {
      es: "En PwC trabajé en las áreas de Capital Markets y Auditoría con clientes como Colgate, IRSA, Cresud y Adecoagro. En estos años aprendí de contabilidad, impuestos, finanzas y procesos corporativos, trabajando en las oficinas de estas compañías en Buenos Aires. Además, tuve la oportunidad de conocer de cerca sus operaciones mediante visitas a plantas industriales, como la de Colgate en San Luis, y a establecimientos agropecuarios, como los campos de Adecoagro en Corrientes y Santiago del Estero.",
      en: "At PwC, I worked in the Capital Markets and Audit departments with clients such as Colgate, IRSA, Cresud, and Adecoagro. During these years, I gained knowledge and experience in accounting, taxation, finance, and corporate processes, working directly from the offices of these companies in Buenos Aires. Additionally, I had the opportunity to closely observe their operations by visiting manufacturing facilities, such as Colgate's plant in San Luis, and agricultural sites, including Adecoagro's farms located in Corrientes and Santiago del Estero.",
    },
    tools: [
      { name: { es: "Auditoría externa", en: "External Audit" } },
      { name: { es: "Contabilidad", en: "Accounting" } },
      { name: { es: "Impuestos", en: "Taxes" } },
      { name: { es: "Capital Markets", en: "Capital Markets" } },
      { name: { es: "IFRS", en: "IFRS" } },
      { name: { es: "US GAAP", en: "US GAAP" } },
      { name: { es: "Excel avanzado", en: "Advanced Excel" } },
    ],
    category: "corporate",
  },
  {
    id: 13,
    name: { en: "Sinopec<br />International", es: "Sinopec<br />International" },
    logo: "/logos/Sinopec_logo.svg",
    projectType: { 
      en: "Corporate finance in a multinational company", 
      es: "Finanzas corporativas en multinacional" 
    },
    year: "2014 - 2015",
    description: { 
      en: "At Sinopec, I worked in Finance, handling back-office tasks and invoice management. It was an experience that allowed me to gain a deeper understanding of the administrative operations within a multinational company. After six months, I pursued a more ambitious challenge and joined the Young Professionals program at Bacardi.", 
      es: "En Sinopec trabajé en Finanzas, realizando tareas de back office y gestión de facturas. Fue una experiencia que me permitió conocer de cerca el funcionamiento administrativo de una multinacional. Tras seis meses, busqué un desafío más ambicioso y tomé el proyecto de Jóvenes Profesionales en Bacardi." 
    },
    tools: [
      { name: { en: "Finance", es: "Finanzas" } },
      { name: { en: "Back office", es: "Back office" } },
      { name: { en: "Administrative management", es: "Gestión administrativa" } },
      { name: { en: "Corporate processes", es: "Procesos corporativos" } },
      { name: { en: "Excel", es: "Excel" } }
    ],
    category: "corporate",
  },
  {
    id: 14,
    name: { en: "Bacardi<br />(Grupo Cepas)", es: "Bacardi<br />(Grupo Cepas)" },
    logo: "/logos/bacardi_logo_new.svg",
    projectType: { 
      en: "Revenue management, marketing, and sales intelligence in FMCG", 
      es: "Revenue, marketing y ventas en consumo masivo" 
    },
    year: "2015 - 2020",
    description: { 
      en: "I worked at Bacardi (CEPAS Group) for 5 years. I entered as a Young Professional, experiencing rotations in Revenue Management, Sales, and Business Intelligence. My role evolved within Revenue Management, where I led the creation and launch of the area in Chile and Uruguay. I concluded my experience in Marketing as a Brand Manager for Terma, merging analytical insight with strategic brand functions. Throughout my time there, I had the opportunity to work with iconic brands like Bacardi, Gancia, Terma, and Dr. Lemon.", 
      es: "En Bacardi (Grupo CEPAS) trabajé 5 años. Entré como Joven Profesional rotando por Revenue Management, Ventas y Business Intelligence. Crecí en Revenue Management hasta liderar la apertura del área en Chile y Uruguay. Cerré en el área de Marketing como Brand Manager de Terma, combinando análisis y estrategia de marca. Trabajé con marcas icónicas como Bacardi, Gancia, Terma y Dr. Lemon." 
    },
    tools: [
      { name: { en: "Revenue Management", es: "Revenue Management" } },
      { name: { en: "Sales", es: "Ventas" } },
      { name: { en: "Business Intelligence", es: "Business Intelligence" } },
      { name: { en: "Pricing", es: "Pricing" } },
      { name: { en: "Forecasting", es: "Forecasting" } },
      { name: { en: "Marketing", es: "Marketing" } },
      { name: { en: "Brand Strategy", es: "Brand Strategy" } },
      { name: { en: "SAP", es: "SAP" } },
      { name: { en: "Excel", es: "Excel" } },
      { name: { en: "Nielsen", es: "Nielsen" } }
    ],
    category: "corporate",
  }
]; 