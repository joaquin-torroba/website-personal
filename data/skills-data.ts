// Objeto para textos traducibles
interface LocalizedString {
  en: string;
  es: string;
}

// Estructura de datos para las habilidades por categoría

// Definimos los tipos para mayor claridad
interface Skill {
  name: LocalizedString;
  logoSrc: string;
}

interface SkillCategory {
  title: LocalizedString;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  // 1. Daily AI Tools
  {
    title: { en: "Daily AI Tools", es: "Herramientas IA del Día a Día" },
    skills: [
      { name: { en: "ChatGPT", es: "ChatGPT" }, logoSrc: "/logos_skills/Logo_ChatGPT.svg" },
      { name: { en: "Claude", es: "Claude" }, logoSrc: "/logos_skills/claude-color.svg" },
      { name: { en: "Midjourney", es: "Midjourney" }, logoSrc: "/logos_skills/midjourney.svg" },
      { name: { en: "Perplexity", es: "Perplexity" }, logoSrc: "/logos_skills/logo_perplexity.svg" },
      { name: { en: "Mis Copilotos", es: "Mis Copilotos" }, logoSrc: "/logos/miscopilotos_logo_new.svg" },
      { name: { en: "Deep Research", es: "Deep Research" }, logoSrc: "/logos_skills/Logo_ChatGPT.svg" }
    ],
  },
  // 2. Marketing Digital & Analytics
  {
    title: { en: "Digital Marketing & Analytics", es: "Marketing Digital & Analytics" },
    skills: [
      { name: { en: "Google Ads", es: "Google Ads" }, logoSrc: "/logos_skills/Logo_Google_ads.svg" },
      { name: { en: "Facebook Ads", es: "Facebook Ads" }, logoSrc: "/logos_skills/Logo_meta-3.svg" },
      { name: { en: "Email Marketing", es: "Email Marketing" }, logoSrc: "/logos_skills/Logo_mailchimp.svg" },
      { name: { en: "Google Analytics", es: "Google Analytics" }, logoSrc: "/logos_skills/google-analytics-4.svg" },
      { name: { en: "Mixpanel", es: "Mixpanel" }, logoSrc: "/logos_skills/Mixpanel_full_logo_–_purple 1.svg" },
      { name: { en: "LinkedIn Ads", es: "LinkedIn Ads" }, logoSrc: '/logos_skills/logo linkedin.png' },
      { name: { en: "Hubspot", es: "Hubspot" }, logoSrc: '/logos_skills/logo_hubspot.png' },
      { name: { en: "Woodpecker", es: "Woodpecker" }, logoSrc: '/logos_skills/logo_woodpecker.png' },
      { name: { en: "Copy AI", es: "Copy AI" }, logoSrc: "/logos_skills/logo_copy_ai.svg" },
      { name: { en: "Taboola", es: "Taboola" }, logoSrc: "/logos_skills/logo_taboola.png" },
      { name: { en: "Outbrain", es: "Outbrain" }, logoSrc: "/logos_skills/logo_outbrain.png" },
      { name: { en: "Stable Diffusion", es: "Stable Diffusion" }, logoSrc: "/logos_skills/logo_stablediffusion.png" }
    ],
  },
  // 3. BI & Data / Herramientas Corporativas
  {
    title: { en: "BI & Data / Corporate Tools", es: "BI & Data / Herramientas Corporativas" },
    skills: [
      { name: { en: "Excel", es: "Excel" }, logoSrc: "/logos_skills/Logo_Microsoft_Office_Excel.svg" },
      { name: { en: "PowerPoint", es: "PowerPoint" }, logoSrc: "/logos_skills/Logo_Microsoft_Office_PowerPoint.svg" },
      { name: { en: "Gamma", es: "Gamma" }, logoSrc: "/logos_skills/Logo_gamma.svg" }
    ],
  },
  // 4. Web Design and Development
  {
    title: { en: "Web Design and Development", es: "Diseño y Desarrollo Web" },
    skills: [
      { name: { en: "Webflow", es: "Webflow" }, logoSrc: "/logos_skills/logo_webfow 1.svg" },
      { name: { en: "WordPress", es: "WordPress" }, logoSrc: "/logos_skills/logo_wordpress.svg" },
      { name: { en: "Shopify", es: "Shopify" }, logoSrc: "/logos_skills/Logo_shopify.svg" },
      { name: { en: "WooCommerce", es: "WooCommerce" }, logoSrc: "/logos_skills/logo_woocommerce.png" },
      { name: { en: "Bubble", es: "Bubble" }, logoSrc: "/logos_skills/bubble-io.svg" },
      { name: { en: "Figma", es: "Figma" }, logoSrc: "/logos_skills/logo_figma.svg" },
      { name: { en: "v0", es: "v0" }, logoSrc: "/logos_skills/Logo_v0.svg" },
      { name: { en: "Cursor", es: "Cursor" }, logoSrc: "/logos_skills/cursor.svg" },
      { name: { en: "Lovable", es: "Lovable" }, logoSrc: "/logos_skills/Logo_lovable.svg" },
      { name: { en: "Windsurf", es: "Windsurf" }, logoSrc: "/logos_skills/windsurf-black-wordmark.svg" },
    ],
  },
  // 5. Automatización y Cloud
  {
    title: { en: "Automation & Cloud", es: "Automatización y Cloud" },
    skills: [
      { name: { en: "Zapier", es: "Zapier" }, logoSrc: "/logos_skills/logo_zapier.svg" },
      { name: { en: "Flowise", es: "Flowise" }, logoSrc: "/logos_skills/Logo_flowise.svg" },
      { name: { en: "Cloudflare Workers", es: "Cloudflare Workers" }, logoSrc: "/logos_skills/cloudflare-1.svg" },
      { name: { en: "Pinecone", es: "Pinecone" }, logoSrc: "/logos_skills/logo_pinecone.png" },
      { name: { en: "Replicate", es: "Replicate" }, logoSrc: "/logos_skills/logo_replicate.png" },
      { name: { en: "AWS Lambda", es: "AWS Lambda" }, logoSrc: "/logos_skills/logo_aws.png" }
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