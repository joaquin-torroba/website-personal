Proxima Tarea: Implementación completa de internacionalización (i18n) y ajustes de estilos.

## Plan de Internacionalización y Mejoras del Sitio Web

### Leyenda de Estado:
*   ✅ COMPLETADO
*   ⏳ EN PROGRESO
*   🟡 SALTADO POR AHORA / PENDIENTE DE REVISIÓN
*   ➡️ PRÓXIMA TAREA
*   🚧 PAUSA TEMPORAL / DESVÍO PLANIFICADO

### Fases del Proyecto:

**Fase 1: Configuración Inicial de Internacionalización y Corrección de Errores Críticos**

1.  ✅ **Instalar dependencias** (`next-intl`).
2.  ✅ **Configurar middleware** (`middleware.ts`) para la detección y enrutamiento de idioma.
3.  ✅ **Crear configuración i18n** (`i18n.ts`) con `getRequestConfig`.
4.  ✅ **Reorganizar estructura de directorios** (`app` → `app/[locale]`).
5.  ✅ **Implementar `NextIntlClientProvider` y lógica de idioma dinámico** en `app/[locale]/layout.tsx`.
6.  ✅ **Solucionar error `params.locale` en `app/[locale]/layout.tsx`** (manejo asíncrono para Next.js 15).
7.  ✅ **Corregir configuración de `next-intl` en `next.config.mjs`** para apuntar a `i18n.ts`.
8.  ✅ **Solucionar problemas de carga de imágenes (404)** ajustando el `matcher` en `middleware.ts`.
9.  ✅ **Resolver errores de formato (`FORMATTING_ERROR`)** con HTML en traducciones (usando `t.rich` y `ReactNode`).
10. ✅ **Asegurar Modo Claro Constante:**
    *   Configurar `ThemeProvider` (`forcedTheme="light"`, `enableSystem={false}`).
    *   Limpiar `localStorage`.
    *   Crear `tailwind.config.js` con `darkMode: false` para evitar que Tailwind interfiera con `next-themes`.

**Fase 2: Traducción de Contenido, Ajustes de Estilo y Funcionalidades Lingüísticas**

11. ✅ **Traducción de Metadatos del Sitio** (título y descripción en `layout.tsx`).
12. ✅ **Traducción de Contenido Estático en `app/[locale]/page.tsx`** (botones de Email/LinkedIn y textos asociados).

13. ✅ **Ajustes de Estilos para Consistencia Visual:**
    *   **TimelineCard (`RecorridoSection`):** Subtítulo, borde de card y tags.
    *   **ProjectCard (`ProjectSections`):** Texto descriptivo, borde de card, tags de herramientas y tags de estado ("Finalizado"/"En curso").
    *   **SkillCard (`SkillsSection`):** Borde y fondo.
    *   **Botones de Navegación Fijos:** Posicionamiento (Email/LinkedIn a la izquierda, Idioma a la derecha).

14. ✅ **Traducción de Contenido Estático Restante en toda la Página (Continuación):**
    *   Identificar textos hardcodeados en componentes restantes (`HeroSection`, `AboutSection`, `SkillsSection`, `CorporateProjectsSection`, `DigitalProjectsSection`, `AiProjectsSection`, `ContactSection`, `Footer`, etc.).
    *   Mover textos a `messages/es.json` y `messages/en.json`.
    *   Implementar `useTranslations` en los componentes correspondientes.

15. ✅ **Mejorar `LanguageSwitcher` Component:** (Actualmente es básico, se puede refinar visualmente y funcionalmente si se desea).
16. ✅ **Adaptar Enlaces de Navegación Internos:** (Actualmente no hay enlaces que cambien la URL, solo scroll. Si se añaden en el futuro, usar `Link` de `next-intl`).

**Fase 3: Pruebas Finales y Despliegue**

17. ✅ **Pruebas Exhaustivas en Múltiples Navegadores e Idiomas:**
    *   Verificar todas las traducciones.
    *   Confirmar carga de assets y funcionalidad completa.
    *   Revisar consola en busca de errores o advertencias.
17.B ✅ Actualizar textos traducidos en ingles.
18.  **Optimización y Limpieza de Código.**
19. **Preparación para Despliegue.**

---
Historial de `tarea-actual.md` antes de esta actualización:
Proxima Tarea: Implementación completa de internacionalización (i18n) y ajustes de estilos.

## Plan de Internacionalización y Mejoras del Sitio Web

### Leyenda de Estado:
*   ✅ COMPLETADO
*   ⏳ EN PROGRESO
*   🟡 SALTADO POR AHORA / PENDIENTE DE REVISIÓN
*   ➡️ PRÓXIMA TAREA
*   🚧 PAUSA TEMPORAL / DESVÍO PLANIFICADO

### Fases del Proyecto:

**Fase 1: Configuración Inicial de Internacionalización y Corrección de Errores Críticos**

1.  ✅ **Instalar dependencias** (`next-intl`).
2.  ✅ **Configurar middleware** (`middleware.ts`) para la detección y enrutamiento de idioma.
3.  ✅ **Crear configuración i18n** (`i18n.ts`) con `getRequestConfig`.
4.  ✅ **Reorganizar estructura de directorios** (`app` → `app/[locale]`).
5.  ✅ **Implementar `NextIntlClientProvider` y lógica de idioma dinámico** en `app/[locale]/layout.tsx`.
6.  ✅ **Solucionar error `params.locale` en `app/[locale]/layout.tsx`** (manejo asíncrono para Next.js 15).
7.  ✅ **Corregir configuración de `next-intl` en `next.config.mjs`** para apuntar a `i18n.ts`.
8.  ✅ **Solucionar problemas de carga de imágenes (404)** ajustando el `matcher` en `middleware.ts`.
9.  ✅ **Resolver errores de formato (`FORMATTING_ERROR`)** con HTML en traducciones (usando `t.rich` y `ReactNode`).
10. ✅ **Asegurar Modo Claro Constante:**
    *   Configurar `ThemeProvider` (`forcedTheme="light"`, `enableSystem={false}`).
    *   Limpiar `localStorage`.
    *   Crear `tailwind.config.js` con `darkMode: false` para evitar que Tailwind interfiera con `next-themes`.

**Fase 2: Traducción de Contenido, Ajustes de Estilo y Funcionalidades Lingüísticas**

11. ✅ **Traducción de Metadatos del Sitio** (título y descripción en `layout.tsx`).
12. ⏳ **Traducción de Contenido Estático en `app/[locale]/page.tsx`** (botones de Email/LinkedIn).

13. ➡️ **Ajustes de Estilos para Consistencia Visual (Detectados Durante Traducción):**
    *   **TimelineCard (`RecorridoSection`):**
        *   Corregir color del subtítulo entre paréntesis (ej. "(Latinoamérica)").
        *   Unificar estilo de `Badge` (tags) para que sean consistentes.
    *   **Tarjetas de Proyecto (`CorporateProjectsSection`, `DigitalProjectsSection`, etc.):**
        *   Corregir color del texto descriptivo secundario (ej. "Auditoría, contabilidad e impuestos").
        *   Unificar estilo de `Badge` (tags) para que sean consistentes con el resto del sitio.

14. ⏳ **Traducción de Contenido Estático Restante en toda la Página (Continuación):**
    *   Identificar textos hardcodeados en componentes restantes (`HeroSection`, `AboutSection`, `SkillsSection`, `CorporateProjectsSection`, `DigitalProjectsSection`, `AiProjectsSection`, `ContactSection`, `Footer`, etc.).
    *   Mover textos a `messages/es.json` y `messages/en.json`.
    *   Implementar `useTranslations` en los componentes correspondientes.

15. 🟡 **Mejorar `LanguageSwitcher` Component:** (Actualmente es básico, se puede refinar visualmente y funcionalmente si se desea).
16. 🟡 **Adaptar Enlaces de Navegación Internos:** (Actualmente no hay enlaces que cambien la URL, solo scroll. Si se añaden en el futuro, usar `Link` de `next-intl`).

**Fase 3: Pruebas Finales y Despliegue**

17. **Pruebas Exhaustivas en Múltiples Navegadores e Idiomas:**
    *   Verificar todas las traducciones.
    *   Confirmar carga de assets y funcionalidad completa.
    *   Revisar consola en busca de errores o advertencias.
18. **Optimización y Limpieza de Código.**
19. **Preparación para Despliegue.**
20. Agregamos grid background bien sutil? Pensarlo.