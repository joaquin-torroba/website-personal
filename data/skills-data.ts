// Estructura de datos para las habilidades por categoría

// Definimos los tipos para mayor claridad
interface Skill {
  name: string;
  logoSrc: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  // 1. Daily AI Tools
  {
    title: "Daily AI Tools",
    skills: [
      { name: "ChatGPT", logoSrc: "/logos_skills/Logo_ChatGPT.svg" },
      { name: "Claude", logoSrc: "/logos_skills/claude-color.svg" },
      { name: "Midjourney", logoSrc: "/logos_skills/midjourney.svg" },
      { name: "Gamma", logoSrc: "/logos_skills/Logo_gamma.svg" },
      { name: "Perplexity", logoSrc: "/logos_skills/logo_perplexity.svg" },
      { name: "Mis Copilotos", logoSrc: "/logos/miscopilotos_logo_new.svg" }
    ],
  },
  // 2. Marketing Digital & Analytics
  {
    title: "Marketing Digital & Analytics",
    skills: [
      { name: "Google Ads", logoSrc: "/logos_skills/Logo_Google_ads.svg" },
      { name: "Facebook Ads", logoSrc: "/logos_skills/Logo_meta-3.svg" },
      { name: "Email Marketing", logoSrc: "/logos_skills/Logo_mailchimp.svg" },
      { name: "Google Analytics", logoSrc: "/logos_skills/google-analytics-4.svg" },
      { name: "Mixpanel", logoSrc: "/logos_skills/Mixpanel_full_logo_–_purple 1.svg" },
      { name: "LinkedIn Ads", logoSrc: '/logos_skills/logo linkedin.png' },
      { name: "Hubspot", logoSrc: '/logos_skills/logo_hubspot.png' },
      { name: "Woodpecker", logoSrc: '/logos_skills/logo_woodpecker.png' },
      { name: "Copy AI", logoSrc: "/logos_skills/logo_copy_ai.svg" },
      { name: "Taboola", logoSrc: "/logos_skills/logo_taboola.png" },
      { name: "Outbrain", logoSrc: "/logos_skills/logo_outbrain.png" },
      { name: "Stable Diffusion", logoSrc: "/logos_skills/logo_stablediffusion.png" }
    ],
  },
  // 3. BI & Data / Herramientas Corporativas
  {
    title: "BI & Data / Herramientas Corporativas",
    skills: [
      { name: "Excel", logoSrc: "/logos_skills/Logo_Microsoft_Office_Excel.svg" },
      { name: "PowerPoint", logoSrc: "/logos_skills/Logo_Microsoft_Office_PowerPoint.svg" },
    ],
  },
  // 4. Web Design and Development
  {
    title: "Web Design and Development",
    skills: [
      { name: "Webflow", logoSrc: "/logos_skills/logo_webfow 1.svg" },
      { name: "WordPress", logoSrc: "/logos_skills/logo_wordpress.svg" },
      { name: "Shopify", logoSrc: "/logos_skills/Logo_shopify.svg" },
      { name: "WooCommerce", logoSrc: "/logos_skills/logo_woocommerce.png" },
      { name: "Bubble", logoSrc: "/logos_skills/bubble-io.svg" },
      { name: "Figma", logoSrc: "/logos_skills/logo_figma.svg" },
      { name: "v0", logoSrc: "/logos_skills/Logo_v0.svg" },
      { name: "Cursor", logoSrc: "/logos_skills/cursor.svg" },
      { name: "Lovable", logoSrc: "/logos_skills/Logo_lovable.svg" },
      { name: "Windsurf", logoSrc: "/logos_skills/windsurf-black-wordmark.svg" },
    ],
  },
  // 5. Automatización y Cloud
  {
    title: "Automatización y Cloud",
    skills: [
      { name: "Zapier", logoSrc: "/logos_skills/logo_zapier.svg" },
      { name: "Flowise", logoSrc: "/logos_skills/Logo_flowise.svg" },
      { name: "Cloudflare Workers", logoSrc: "/logos_skills/cloudflare-1.svg" },
      { name: "Pinecone", logoSrc: "/logos_skills/logo_pinecone.png" },
      { name: "Replicate", logoSrc: "/logos_skills/logo_replicate.png" },
      { name: "AWS Lambda", logoSrc: "/logos_skills/logo_aws.png" }
    ],
  },
  // 6. Growth Hacking (Nueva categoría al final) - Eliminada
  // {
  //   title: "Growth Hacking",
  //   skills: [
  //     { name: "Signal Mining", logoSrc: "/logos/signal-mining.svg" }, 
  //     { name: "A/B testing", logoSrc: "/logos/ab-testing.svg" }, 
  //   ],
  // },
]; 