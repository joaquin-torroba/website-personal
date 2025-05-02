# Tarea Actual: Hero Section.

## Crear página de inicio con componentes de Shadcn

## Tarea Actual: Implementar Seccion 3: Timeline.

## Tarea Actual: Implementar Seccion 4.

*Nota: El siguiente plan difiere del PRD original. Refleja cambios definidos durante el desarrollo iterativo.*

**Plan Actualizado para Sección 4: Habilidades 🛠️**

1.  **Archivos Base:** Crear `components/skills-section.tsx`, `data/skills-data.ts`, `components/skill-card.tsx`.
2.  **Datos Estructurados:** Definir en `data/skills-data.ts` un array de 5 categorías (título, array de skills). Cada skill: { name, logoSrc }.
3.  **`SkillCard`:** Crear componente (props: name, logoSrc). Usar `Card`, `Image` (32x32), estilos hover/dark-mode. (Nivel omitido).
4.  **`SkillsSection`:** Crear componente principal. Importar datos. Iterar categorías -> título (h3). Iterar skills -> grid responsivo (`cols-2 sm:3 md:4 lg:6 gap-6`) renderizando `SkillCard`.
5.  **Logos:** Conseguir SVGs para *todas* las skills (incluyendo PowerPoint, Analytics, Mixpanel, A/B, Lovable, ChatGPT, etc.), guardar en `public/logos/`, verificar rutas.
6.  **Integración:** Añadir `<SkillsSection />` a `app/page.tsx`.
7.  **Revisión:** Probar responsive, categorías, grids, estilos, logos.
8.  **Actualizar `tarea-actual.md`**: (Este paso)
