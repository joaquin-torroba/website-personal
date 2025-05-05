# PRD — Website Personal de **Joaquín Torroba**

**Stack:** Cursor + shadcn/ui · Dark/Light · ES↔EN toggle

**Audiencia:** C-levels enterprise · Startup founders · Recruiters top-tier · Middle managers

**Tono:** auténtico, directo, "voz Joaco", sin autobombo

---

## 0. Requisitos globales

- **Performance:** ≤ 1 s TTFB, Core Web Vitals green

- **Accesibilidad:** WCAG 2.1 AA

- **i18n:** botón EN/ES (mantiene URL)

- **Modo:** `ModeToggle` shadcn (claro ↔ oscuro)

- **Sin CTA inicial**; `div` placeholder para futuro botón/forma de contacto

---

## 1. Hero 🔝 — *Versión optimizada*

### Objetivo

En ≤3 s debe quedar claro quién soy, qué hago y por qué importa.

### Contenido

| Elemento | Detalle |

|----------|---------|

| **Imagen** | Foto 1 : 1 `128 px` móvil / `192 px` desktop), fondo neutro, `<60 KB webp>`, `alt="Retrato de Joaquín Torroba"` |

| **Nombre** | `<h1 class="text-4xl sm:text-5xl font-bold">Joaquín Torroba</h1>` |

| **Tagline** | ≤ 90 car.: *"Desde 2022 vivo IA, uniendo enterprise y startups."* |

| **Controles** | `ModeToggle` + `LangSwitch` (icon-only, `aria-label="Cambiar idioma"`) alineados derecha |

### Diseño & Comportamiento

- `Container max-w-3xl` · flex-col · gap-4

- Animación `framer-motion` → `initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5,ease:'easeOut'}}`

- Placeholder CTA: `<div aria-label="CTA próximamente"></div>` (oculto a sighted users)

### Criterios de aceptación

- Sin scroll horizontal en `320 px` de ancho

- LCP ≤ 2.5 s

- Texto e imagen editables vía MDX/CMS

- Todos los elementos con `altaria-label` correctos

---

## 2. Sobre mí ✍️ — *Completado*

### Objetivo

Narrar mi historia de forma breve y honesta, mostrando la conexión enterprise ↔ startup ↔ IA.

### Contenido (mdx)

```mdx

<section id="about" className="prose lg:prose-lg">

<p>

Hola, soy <strong>Joaco</strong>. Desde <em>diciembre 2022</em> vivo y respiro

<strong>inteligencia artificial</strong>: diseño, construyo y lanzo

productos que mezclan negocio con vanguardia técnica.

</p>

<p>

Arranqué en el mundo <em>enterprise</em> — PwC, Sinopec y Bacardí —

consolidando finanzas, revenue management y BI. Tras

<strong>5 años en Europa</strong> (Dinamarca, Italia, España) di el salto

al ecosistema <em>startup</em>: growth, marketing digital y e-commerce.

</p>

<p>

Hoy lidero <strong>Mis Copilotos</strong>, asesoro con IA en Launchable y

creo <em>Video Insight Pro</em> y <em>Framesynth</em>. Entiendo los

procesos de una corporación y la velocidad de una startup; traduzco los

retos de C-levels, founders, recruiters y managers en soluciones de IA

reales.

</p>

</section>

---

## 3. Mi Camino 🗺️ — Timeline con logos

**Objetivo:**

Visualizar mi evolución profesional y asociar cada etapa a los logos de las empresas/proyectos clave.

### Contenido

Componente: `Timeline` de shadcn (vertical en xs, horizontal en md+). Cada `TimelineItem` incluye:

| Año | Etapa | Logos (40×40) | Descripción breve |

|------------|-------------------|---------------------------------------------------------|--------------------------------------------------|

| **2010–2018** | Corporativo | ![PwC](./logos/pwc.svg) ![Sinopec](./logos/sinopec.svg) ![Bacardí](./logos/bacardi.svg) | Auditoría, revenue management y BI. |

| **2020–2023** | Europa & Startups | ![PLYO](./logos/plyo.svg) ![ONCE](./logos/once.svg) ![DIMEXON](./logos/dimexon.svg) ![CULTIONS](./logos/cultions.svg) | Growth, e-commerce y automatizaciones. |

| **2023–2025** | AI Builder | ![Mis Copilotos](./logos/miscopilotos.svg) ![[Almendra.ai](http://Almendra.ai)](./logos/almendra.svg) ![Launchable](./logos/launchable.svg) | Productos IA full-stack: Video Insight Pro, Framesynth. |

> Logos SVG, `flex gap-4 wrap` (mobile → scroll-x).

### Diseño & Componentes

- **Card** dentro de cada `TimelineItem`:

- Ícono de etapa (🎯, 🚀, 🤖)

- Logos en fila

- Título y descripción

- **Colores:**

- Corporativo: `#64748b`

- Startup: `#0ea5e9`

- IA: `#a855f7`

- **Animación:** `stagger` fade-in con `framer-motion`.

### Criterios de aceptación

- Logos lazy-load con `alt` descriptivo.

- Texto ≤ 100 caracteres por nodo.

- Accesible (role="list"/"listitem").

---

## 4. Habilidades 🛠️

**Objetivo:** Mostrar mis skills clave con logos, agrupadas por categoría.

### Contenido por Categorías

*Nota: Esta estructura reemplaza las tablas originales de Hard/Soft skills y refleja la implementación actual.* 

**1. Daily AI Tools**
- ChatGPT
- Claude
- Midjourney
- Gamma
- Perplexity

**2. Marketing Digital & Analytics**
- Google Ads
- Facebook Ads
- Email Marketing
- Google Analytics
- Mixpanel

**3. BI & Data / Herramientas Corporativas**
- Excel
- PowerPoint

**4. Web Design and Development**
- Webflow
- WordPress
- Shopify
- Bubble
- v0
- Cursor
- Lovable
- Windsurf

**5. Automatización y Cloud**
- Zapier
- Flowise (langgraph)
- Cloudflare Workers

**6. Growth Hacking**
- Signal Mining
- A/B testing

---

### Diseño & Componentes

- Título `h2` para la sección.
- Título `h3` para cada categoría.
- Contenedor `Grid` responsive por categoría:
  - `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6`
- Cada skill en un `SkillCard` (componente `Card` de shadcn):
  - Logo `next/image` (32×32).
  - Nombre de la habilidad (permite 2 líneas).
  - Hover: `shadow-lg` + elevar.
  - Dark/Light: fondo `muted/20` en dark mode.
  - *(Nivel de dominio omitido)*.
  - *(Tooltip omitido por ahora)*.

### Criterios de aceptación

- Legible en 320 px, touch-friendly.
- Logos lazy-load con `alt` descriptivo.
- Accesible.

---

## 5. Proyectos 🚀

**Objetivo:**

Destacar proyectos clave con estado, año y logos para conexión visual.

### Contenido

Componente: `Grid` responsive `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`). Cada `Card` incluye:

| Logo (40×40) | Proyecto | Año | Estado | Descripción breve |

|------------------------------------------|------------------------|-----------|-------------|--------------------------------------------------------------------------|

| ![ONCE](./logos/once.svg) | ONCE | 2020 | Finalizado | Marketplace de joyería de lujo en Webflow, +$100K campañas multicanal. |

| ![DIMEXON](./logos/dimexon.svg) | DIMEXON | 2021 | Finalizado | Plataforma B2B con signal mining y digitalización de procesos. |

| ![CULTIONS](./logos/cultions.svg) | CULTIONS | 2021 | Finalizado | Comunidad para artistas con validación ágil y front-end full-stack. |

| ![CBD Store](./logos/cbd-store.svg) | E-commerce CBD | 2022 | Finalizado | Tienda WooCommerce/Shopify para productos de CBD, UX y funnels optimizados. |

| ![CryptoBoard](./logos/cryptoboard.svg) | Crypto Job Board | 2022 | Finalizado | Portal de ofertas cripto en Webflow, validación rápida de demanda. |

| ![MisCopilotos](./logos/miscopilotos.svg) | Mis Copilotos | 2023–25 | En curso | Suite de copilotos IA para gestión de proyectos y automatización. |

| ![VIP](./logos/video-insight-pro.svg) | Video Insight Pro | 2023–25 | En curso | Análisis inteligente de video con IA (jugadores, tráfico, marketing). |

| ![Framesynth](./logos/framesynth.svg) | Framesynth | 2023–25 | En curso | Generación de videos creativos a partir de música mediante IA. |

> Badges:

> - `Finalizado` = gris claro

> - `En curso` = azul suave

### Diseño & Componentes

- `Card` con:

- Logo arriba (40×40)

- Nombre proyecto `h3`)

- Línea de meta: Año + `Badge`

- Descripción `p`, ≤ 120 car.)

- Hover: `shadow-lg` + elevar

- Dark/Light friendly (bg muted, text foreground)

### Criterios de aceptación

- Logos lazy-load + `alt`

- Texto legible en móvil (≤120 car)

- Accesible: roles `listlistitem`
