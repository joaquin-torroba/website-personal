export interface ProjectTool {
  name: string;
  logoSrc?: string;
}

export interface Project {
  id: number;
  name: string;
  logo?: string;
  projectUrl?: string;
  projectTypeKey: string;
  year?: string;
  statusKey?: string;
  descriptionKey: string;
  tools?: ProjectTool[];
  category?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'PLYO Labs',
    logo: '/logos/plyo_lab_logo.jpeg',
    projectUrl: 'https://www.plyolab.com/',
    projectTypeKey: 'DigitalProjectsSection.plyoLabs_projectType',
    year: '2020 - 2023',
    descriptionKey: 'DigitalProjectsSection.plyoLabs_description',
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
    projectUrl: 'https://signkit.io/',
    projectTypeKey: 'DigitalProjectsSection.signkit_projectType',
    year: '2020',
    statusKey: 'ProjectsSection.statusCompleted',
    descriptionKey: 'DigitalProjectsSection.signkit_description',
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
    projectTypeKey: 'DigitalProjectsSection.once_projectType',
    year: '2020',
    statusKey: 'ProjectsSection.statusCompleted',
    descriptionKey: 'DigitalProjectsSection.once_description',
    tools: [
      { name: 'Webflow', logoSrc: '/logos_skills/logo_webfow 1.svg' },
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Analytics', logoSrc: '/logos_skills/google-analytics-4.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'Mixpanel', logoSrc: '/logos_skills/Mixpanel_full_logo_–_purple 1.svg' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' }
    ],
    category: 'digital',
  },
  { 
    id: 4, 
    name: 'Dimexon',
    logo: '/logos/dimexon_logo.jpeg',
    projectUrl: 'https://dimexon.com/',
    projectTypeKey: 'DigitalProjectsSection.dimexon_projectType',
    descriptionKey: 'DigitalProjectsSection.dimexon_description',
    year: '2021',
    statusKey: 'ProjectsSection.statusCompleted',
    tools: [
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'LinkedIn Ads', logoSrc: '/logos_skills/logo linkedin.png' },
      { name: 'Zapier', logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: 'Hubspot', logoSrc: '/logos_skills/logo_hubspot.png' },
      { name: 'Shopify', logoSrc: '/logos_skills/Logo_shopify.svg' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' }
    ],
    category: 'digital',
  },
  { 
    id: 5, 
    name: 'Cultions',
    logo: '/logos/cultions_logo.jpeg',
    projectUrl: 'https://www.linkedin.com/company/cultions/',
    projectTypeKey: 'DigitalProjectsSection.cultions_projectType',
    descriptionKey: 'DigitalProjectsSection.cultions_description',
    year: '2021',
    statusKey: 'ProjectsSection.statusCompleted',
    tools: [
      { name: 'Webflow', logoSrc: '/logos_skills/logo_webfow 1.svg' },
      { name: 'Google Ads', logoSrc: '/logos_skills/Logo_Google_ads.svg' },
      { name: 'Facebook Ads', logoSrc: '/logos_skills/Logo_meta-3.svg' },
      { name: 'Copy AI', logoSrc: '/logos_skills/logo_copy_ai.svg' },
      { name: 'Zapier', logoSrc: '/logos_skills/logo_zapier.svg' },
      { name: 'Google Analytics', logoSrc: '/logos_skills/google-analytics-4.svg' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' }
    ],
    category: 'digital',
  },
  { 
    id: 6, 
    name: 'CANNMED',
    logo: '/logos/logo_cannmed.svg',
    projectUrl: 'https://www.instagram.com/cannmed.es/',
    projectTypeKey: 'DigitalProjectsSection.cannmed_projectType',
    descriptionKey: 'DigitalProjectsSection.cannmed_description',
    year: '2022',
    statusKey: 'ProjectsSection.statusCompleted',
    tools: [
      { name: 'Wordpress', logoSrc: '/logos_skills/logo_wordpress.svg' },
      { name: 'WooCommerce', logoSrc: '/logos_skills/logo_woocommerce.png' },
      { name: 'Taboola', logoSrc: '/logos_skills/logo_taboola.png' },
      { name: 'Outbrain', logoSrc: '/logos_skills/logo_outbrain.png' },
      { name: 'Instagram orgánico', logoSrc: '/logos_skills/logo_instagram.png' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' }
    ],
    category: 'digital',
  },
  {
    id: 7,
    name: 'Gray Matter',
    logo: '/logos/graymatterhq_logo.jpeg',
    projectUrl: 'https://www.linkedin.com/company/graymatterhq/posts/?feedView=all',
    projectTypeKey: 'AiProjectsSection.grayMatter_projectType',
    year: '2023',
    statusKey: 'ProjectsSection.statusCompleted',
    descriptionKey: 'AiProjectsSection.grayMatter_description',
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
    projectTypeKey: 'AiProjectsSection.misCopilotos_projectType',
    year: '2024',
    statusKey: 'ProjectsSection.statusInProgress',
    descriptionKey: 'AiProjectsSection.misCopilotos_description',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Flowise', logoSrc: '/logos_skills/Logo_flowise.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'V0', logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Pinecone', logoSrc: '/logos_skills/logo_pinecone.png' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' },
      { name: 'Deep Research', logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  {
    id: 9,
    name: 'Launchable',
    logo: '/logos/launchable_logo_new.svg',
    projectUrl: 'https://launchable.ai/',
    projectTypeKey: 'AiProjectsSection.launchable_projectType',
    year: '2025',
    statusKey: 'ProjectsSection.statusInProgress',
    descriptionKey: 'AiProjectsSection.launchable_description',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'V0', logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Replicate', logoSrc: '/logos_skills/logo_replicate.png' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' },
      { name: 'Deep Research', logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  { 
    id: 10, 
    name: 'Video Insight Pro',
    logo: '/logos/logo_vip_videoinsightpro.svg',
    projectUrl: 'https://videoinsight.pro/',
    projectTypeKey: 'AiProjectsSection.videoInsightPro_projectType',
    year: '2025',
    statusKey: 'ProjectsSection.statusInProgress',
    descriptionKey: 'AiProjectsSection.videoInsightPro_description',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'V0', logoSrc: '/logos_skills/Logo_v0.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Replicate', logoSrc: '/logos_skills/logo_replicate.png' },
      { name: 'AWS Lambda', logoSrc: '/logos_skills/logo_aws.png' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' },
      { name: 'Deep Research', logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  { 
    id: 11, 
    name: 'Framesynth',
    logo: '/logos/logo_framesynth.svg',
    projectUrl: 'https://framesynth.art/',
    projectTypeKey: 'AiProjectsSection.framesynth_projectType',
    year: '2025',
    statusKey: 'ProjectsSection.statusInProgress',
    descriptionKey: 'AiProjectsSection.framesynth_description',
    tools: [
      { name: 'Bubble', logoSrc: '/logos_skills/bubble-io.svg' },
      { name: 'Cursor', logoSrc: '/logos_skills/cursor.svg' },
      { name: 'Vercel', logoSrc: '/logos_skills/Logo_vercel.svg' },
      { name: 'ChatGPT', logoSrc: '/logos_skills/Logo_ChatGPT.svg' },
      { name: 'Claude', logoSrc: '/logos_skills/claude-color.svg' },
      { name: 'Replicate', logoSrc: '/logos_skills/logo_replicate.png' },
      { name: 'AWS Lambda', logoSrc: '/logos_skills/logo_aws.png' },
      { name: 'Figma', logoSrc: '/logos_skills/logo_figma.svg' },
      { name: 'Deep Research', logoSrc: '/logos_skills/Logo_ChatGPT.svg' }
    ],
    category: 'ia',
  },
  {
    id: 12,
    name: 'CorporateProjectsSection.priceWaterhouseCoopers_name',
    logo: '/logos/pwc_logo_new.svg',
    projectUrl: 'https://www.linkedin.com/company/price-waterhouse-cooper-pwc/',
    projectTypeKey: 'CorporateProjectsSection.priceWaterhouseCoopers_projectType',
    year: '2011 - 2014',
    descriptionKey: 'CorporateProjectsSection.priceWaterhouseCoopers_description',
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
    name: 'CorporateProjectsSection.sinopec_name',
    logo: '/logos/Sinopec_logo.svg',
    projectUrl: 'https://www.linkedin.com/company/sinopec-international-petroleum-service-corporation/',
    projectTypeKey: 'CorporateProjectsSection.sinopec_projectType',
    year: '2014',
    descriptionKey: 'CorporateProjectsSection.sinopec_description',
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
    name: 'CorporateProjectsSection.bacardi_name',
    logo: '/logos/bacardi_logo_new.svg',
    projectUrl: 'https://www.linkedin.com/company/bacardi/',
    projectTypeKey: 'CorporateProjectsSection.bacardi_projectType',
    year: '2015 - 2019',
    descriptionKey: 'CorporateProjectsSection.bacardi_description',
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
      { name: 'Nielsen' }
    ],
    category: 'corporate',
  }
]; 