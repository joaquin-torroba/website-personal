# Textos en Inglés para Internacionalización del Sitio Web

Este documento recopila todos los textos en inglés necesarios para los archivos `messages/en.json` y otros contenidos traducibles del sitio web de Joaquin Torroba.

## Metadatos Globales del Sitio (de `layout.tsx` - Clave: `HomePage`)

*   **title:** `Joaquin Torroba - Website`
*   **description:** `Personal website for Joaquin Torroba`

---

## Textos de Navegación Fija (de `page.tsx` - Clave: `HomePage`)

*   **emailButton:** `Email`
*   **emailCopiedButton:** `Email Copied`
*   **linkedInButton:** `LinkedIn`

---

## Textos del Language Switcher (Clave: `Languages`)

*   **spanish:** `Spanish`
*   **english:** `English`
*   **switchTo:** `Switch to {language}` (Nota: `{language}` es una variable)

---

## Textos de HeroSection (Claves: `HomePage` y `HeroSection`)

*   **greeting (de HomePage):** `Hi, I'm Joaquin`
*   **name (de HeroSection):** `Joaquin Torroba`
*   **tagline1 (de HeroSection):** `AI Freelancer.`
*   **tagline2 (de HeroSection):** `Focused on Startups and Enterprise.`
*   **portrait (alt text de HeroSection):** `Portrait of Joaquin Torroba`

---

## Textos de AboutSection (Clave: `AboutSection`)

*   **title:** `About Me`
*   **paragraph1:** `I'm Joaquin. I started my professional journey in the corporate world, then spent several years working with digital startups, and since December 2022 my focus has been entirely on generative artificial intelligence applied to business.`
*   **paragraph2:** `Currently, I split my time between developing AI products at Launchable—a Canadian startup—and exploring practical use cases to integrate AI into enterprises.`
*   **paragraph3:** `I'm particularly interested in AI opportunities within fields I know well: marketing, sales, revenue management, accounting, human resources, taxes, and finance.`
*   **paragraph4:** `If you're a professional, startup, or enterprise sharing this curiosity for AI, let's talk. It would be great to explore ideas together.`

---

## Textos de RecorridoSection (Clave: `RecorridoSection`, `TimelineSection`, `RecorridoCard`)

*   **title (RecorridoSection):** `My Professional Journey`
*   **corporateTitle:** `Corporate Phase (Latin America)`
*   **corporateTags:** `["Audit", "Accounting", "Finance", "Revenue Management", "Marketing", "Business Intelligence", "Sales"]`
*   **corporateDescription:** `At the age of 20, I kicked off my professional journey at PWC, working in the Capital Markets and Audit department. After a brief experience in finance at Sinopec, I finally spent 5 great years at Bacardi (Grupo Cepas), in core departments such as Revenue Management, Marketing, Sales, and BI.`
*   **startupsTitle:** `Startup Phase (Europe)`
*   **startupsTags:** `["Growth Hacking", "Digital Marketing", "Web Design", "Web Automations", "E-commerce"]`
*   **startupsDescription:** `When I was 28, I moved to Europe and entered the digital world while working at a Danish growth studio called Plyo Labs. For 3 years, I took part remotely in multiple startup projects (notably Dimexon, Once, and Cultions). I started as a digital marketing specialist and gradually adopted more digitally-native skills, including web design, automation, e-commerce, and growth hacking.`
*   **aiTitle:** `Artificial Intelligence Phase (Global Remote)`
*   **aiTags:** `["AI Engineering", "Agentic Workflows", "AI App Development", "AI Web Design", "AI Automations"]`
*   **aiDescription:** `Since December 2022, I've fully immersed myself in generative AI. Every day I learn about, experiment with, and use tools such as ChatGPT, Claude, Cursor, and Flowise. I work as a freelancer at Launchable, creating AI-based products, while also building my own apps in parallel, like Mis Copilotos. Additionally, I explore the potential of AI for more traditional companies by collaborating with domain experts and AI engineers working on real-life use cases.`
*   **periodConnector:** `to`
*   **title (TimelineSection, redundante):** `My Professional Journey`
*   **present (RecorridoCard):** `Present`

---

## Textos de Secciones de Proyectos

### Textos Generales (Claves: `CorporateProjectsSection`, `ProjectsSection`)

*   **title (CorporateProjectsSection):** `Corporate Projects` (Nota: `DigitalProjectsSection` y `AiProjectsSection` no tienen títulos explícitos en `messages/en.json`, probablemente toman el título del componente directamente o se debe añadir.)
*   **simpleView (CorporateProjectsSection):** `Simple View`
*   **detailedView (CorporateProjectsSection):** `Detailed View`
*   **title (ProjectsSection, general):** `Featured Projects`
*   **labelCorporate (ProjectsSection):** `Corporate`
*   **labelDigital (ProjectsSection):** `Digital`
*   **labelAI (ProjectsSection):** `AI` (Corregido de "IA")
*   **tooltipProjectLink (ProjectsSection):** `View project`
*   **statusInProgress (ProjectsSection):** `In progress`
*   **statusCompleted (ProjectsSection):** `Completed`

--- 

### Textos Específicos de Proyectos Corporativos (de `data/projects-data.ts`)

*   **Price Waterhouse Coopers:**
    *   **name:** `Price Waterhouse Coopers`
    *   **projectType:** `Audit, accounting and taxes`
    *   **description:** `At PwC, I worked in the Capital Markets and Audit departments with clients such as Colgate, IRSA, Cresud, and Adecoagro. During these years, I gained knowledge and experience in accounting, taxation, finance, and corporate processes, working directly from the offices of these companies in Buenos Aires. Additionally, I had the opportunity to closely observe their operations by visiting manufacturing facilities, such as Colgate's plant in San Luis, and agricultural sites, including Adecoagro's farms located in Corrientes and Santiago del Estero.`
*   **Sinopec International:**
    *   **name:** `Sinopec<br />International` (Nota: el `<br />` es para un salto de línea en el nombre)
    *   **projectType:** `Corporate finance in a multinational company`
    *   **description:** `At Sinopec, I worked in Finance, handling back-office tasks and invoice management. It was an experience that allowed me to gain a deeper understanding of the administrative operations within a multinational company. After six months, I pursued a more ambitious challenge and joined the Young Professionals program at Bacardi.`
*   **Bacardi (Grupo Cepas):**
    *   **name:** `Bacardi<br />(Grupo Cepas)` (Nota: el `<br />` es para un salto de línea en el nombre)
    *   **projectType:** `Revenue management, marketing, and sales intelligence in FMCG`
    *   **description:** `I worked at Bacardi (CEPAS Group) for 5 years. I entered as a Young Professional, experiencing rotations in Revenue Management, Sales, and Business Intelligence. My role evolved within Revenue Management, where I led the creation and launch of the area in Chile and Uruguay. I concluded my experience in Marketing as a Brand Manager for Terma, merging analytical insight with strategic brand functions. Throughout my time there, I had the opportunity to work with iconic brands like Bacardi, Gancia, Terma, and Dr. Lemon.`

---

### Textos Específicos de Proyectos Digitales (de `data/projects-data.ts`)

*   **PLYO Labs:**
    *   **name:** `PLYO Labs`
    *   **projectType:** `Danish digital growth studio`
    *   **description:** `PLYO Labs was my gateway into the digital world. As part of the team, I worked on multiple projects that were 100% remote, leading digital marketing strategies, web design, business validation (MVP, Signal Mining), and automation initiatives. It was my intensive crash course in startups and growth, alongside <a href=\"https://www.linkedin.com/in/kwadwoadu/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-sky-600 hover:text-sky-700 hover:underline\">Kwadwo</a>, its founder and CEO (and a dear friend).`
*   **Signkit:**
    *   **name:** `Signkit`
    *   **projectType:** `SaaS for marketing via corporate signatures`
    *   **description:** `Signkit was my first project at PLYO Labs. It's a SaaS that transforms corporate email signatures into a marketing channel. I led initial sales efforts through scraping, personalized email outreach, and LinkedIn outreach, achieving quick validation and securing our first active accounts.`
*   **ONCE:**
    *   **name:** `ONCE`
    *   **projectType:** `Luxury jewelry e-commerce`
    *   **description:** `ONCE emerged at PLYO Labs as a bold initiative to combine luxury jewelry with e-commerce, mirroring approaches taken by Net-a-Porter and Farfetch. In my role as Growth Marketer, I oversaw Google and Facebook advertising campaigns, as well as other marketing channels. Furthermore, I applied growth-hacking strategies aimed at validating demand, with special emphasis on A/B testing.`
*   **Dimexon:**
    *   **name:** `Dimexon`
    *   **projectType:** `B2B diamond marketplace`
    *   **description:** `DIMEXON is a digital B2B marketplace for diamonds, targeting traditional jewelers in Europe. I headed agile validation (Signal Mining), MVP creation, and customer acquisition using multi-channel campaigns. We quickly gained traction and successfully validated the model.`
*   **Cultions:**
    *   **name:** `Cultions`
    *   **projectType:** `Online community for artists`
    *   **description:** `CULTIONS is a digital platform aimed at artists. I executed Signal Mining within 8 weeks by creating landing pages, campaigns, and creatives to validate demand. We attained robust initial traction with outstanding metrics in multichannel campaigns, successfully confirming market interest.`
*   **CANNMED:**
    *   **name:** `CANNMED`
    *   **projectType:** `E-commerce for medicinal CBD`
    *   **description:** `CANNMED was a CBD online store in Spain, launched as a side project alongside my partner and friend <a href=\"https://www.linkedin.com/in/joselagamma/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-sky-600 hover:text-sky-700 hover:underline\">José</a>. I built the site on WooCommerce, and together we led growth strategies through Taboola and Outbrain. We achieved initial sales but decided to pause once we found that claims regarding health benefits still lacked robust scientific proof.`

---

### Textos Específicos de Proyectos de IA (de `data/projects-data.ts`)

*   **Gray Matter:**
    *   **name:** `Gray Matter`
    *   **projectType:** `Artificial intelligence startup studio`
    *   **description:** `Gray Matter is a startup studio founded by <a href=\"https://www.linkedin.com/in/kwadwoadu/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-sky-600 hover:text-sky-700 hover:underline\">Kwadwo</a> following a successful fundraising. He brought me on board as the first employee with equity. I collaborated for half a year on early-stage projects, combining growth initiatives and rapid prototyping powered by AI. My responsibilities included strategic support, deep-diving into research of AI use cases, and identifying prospective AI applications. Later, I ventured out independently as a freelancer to further explore AI.`
*   **Mis Copilotos:**
    *   **name:** `Mis Copilotos`
    *   **projectType:** `Custom AI copilots platform`
    *   **description:** `Mis Copilotos (my copilots) is a platform I\'ve built to allow the creation and customization of AI-powered copilots aimed at project and task management. I created the architecture, defined the user experience, and integrated intelligent chat functionalities, combining innovative technology with practical real-world scenarios.`
*   **Launchable:**
    *   **name:** `Launchable`
    *   **projectType:** `Artificial intelligence agency`
    *   **description:** `Launchable is an AI-focused startup established in Canada. As a freelancer, I collaborate on projects such as Video Insight Pro and Framesynth. My contributions include strategy, product development, rapid prototyping, digital marketing, and growth, leveraging state-of-the-art artificial intelligence.`
*   **Video Insight Pro:**
    *   **name:** `Video Insight Pro`
    *   **projectType:** `AI-powered video analysis platform`
    *   **description:** `Video Insight Pro is a platform that allows users to analyze and chat with videos. Users upload videos and quickly analyze them using artificial intelligence. My role involves product development, strategy, rapid prototyping, and growth, facilitating the transformation of videos into concise and actionable insights.`
*   **Framesynth:**
    *   **name:** `Framesynth`
    *   **projectType:** `AI music video generator`
    *   **description:** `Framesynth is a platform that turns music into AI-generated videos. My work involves product development, strategy, rapid prototyping, and digital marketing, creating innovative audiovisual experiences using state-of-the-art AI.`

---

## Textos de SkillsSection

### Título Principal (Clave: `SkillsSection`)

*   **title:** `My Tech Stack`

### Títulos de Categorías de Habilidades (de `data/skills-data.ts`)

*   **category1_title:** `Daily AI Tools`
*   **category2_title:** `Digital Marketing & Analytics`
*   **category3_title:** `BI & Data / Corporate Tools`
*   **category4_title:** `Web Design and Development`
*   **category5_title:** `Automation & Cloud`

---

## Textos de ContactSection (Clave: `ContactSection`)

*   **title:** `Let's Connect`
*   **subtitle:** `Whether you\'re a professional, startup, or established company - if you have questions, ideas, or projects related to artificial intelligence, let\'s talk!`
*   **linkedinButton:** `Chat on LinkedIn`
*   **emailButton:** `Chat via Email`
*   **emailCopiedButton:** `Email Copied`
*   **cvButton:** `Download CV`
*   **emailAddressCopied:** `joaquintorroba@gmail.com` (Texto mostrado al copiar email)

--- 