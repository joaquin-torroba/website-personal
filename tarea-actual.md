# Plan de Reconstrucción y Finalización del Sitio Web\
\
## Objetivo Principal:\
Lograr un despliegue funcional en Vercel, implementando modo claro constante y multi-idioma (ES/EN) de forma estable.\
\
## Leyenda de Estado:\
* ⚪ PENDIENTE\
* ⏳ EN PROGRESO\
* ✅ COMPLETADO\
* 🚧 BLOQUEADO / REQUIERE ATENCIÓN\
* ➡️ PRÓXIMA TAREA\
\
**Nota Importante:** Al finalizar cada tarea o sub-paso, actualizar su estado en este documento usando la leyenda correspondiente.\
\
---\
\
## Fase 0: Restauración a Estado Estable y Configuración Base\
\
1. ⚪ **Identificar Commit Estable Anterior:**\
* *Sub-paso:* Usar `git log` para encontrar el hash del último commit donde el sitio se desplegaba correctamente en Vercel, ANTES de iniciar los cambios de internacionalización o el forzado del modo oscuro.\
* *Commit Seleccionado:* 1d25765\
2. ⚪ **Crear Rama de Reconstrucción:**\
* *Sub-paso:* `git branch dev-reconstruccion [hash_del_commit_aqui]` (Crea la rama)\
* *Sub-paso:* `git checkout dev-reconstruccion` (Cámbiate a la nueva rama)\
* *Sub-paso:* `git push -u origin dev-reconstruccion` (Sube la nueva rama a GitHub)\
3. ⚪ **Prueba de Despliegue Inicial en Vercel:**\
* *Sub-paso:* Configurar un nuevo proyecto en Vercel (o reconfigurar el existente) para que haga "deploy" desde la rama `dev-reconstruccion`.\
* *Sub-paso:* Confirmar que esta versión base se despliega sin errores. Si falla aquí, el problema es más antiguo de lo pensado.\
* *Resultado Esperado:* Build ✅\
\
---\
\
## Fase 1: Implementación de Modo Claro Permanente\
\
*Pre-condición: Fase 0 completada con éxito.*\
\
1. ⚪ **Configurar `tailwind.config.js`:**\
* *Sub-paso:* Asegurar que el archivo `tailwind.config.js` (o `.ts`) exista y contenga `darkMode: false`.\
2. ⚪ **Configurar `ThemeProvider`:**\
* *Sub-paso:* En `app/layout.tsx` (o donde esté tu layout principal en la rama antigua), importar `ThemeProvider` de `next-themes`.\
* *Sub-paso:* Envolver el contenido principal con `ThemeProvider` usando las props: `attribute="class"`, `defaultTheme="light"`, `enableSystem={false}`, `forcedTheme="light"`. (Revisar la estructura exacta del layout en el commit base).\
3. ⚪ **Limpieza y Pruebas Locales:**\
* *Sub-paso:* (Manual) Limpiar `localStorage` en el navegador para la clave de tema de `next-themes` (si existe).\
* *Sub-paso:* Correr `npm run dev` y verificar que el sitio se vea en modo claro y no haya errores de tema en consola.\
4. ⚪ **Commit y Prueba de Despliegue en Vercel (Modo Claro):**\
* *Sub-paso:* `git add .`\
* *Sub-paso:* `git commit -m "feat: Implementar modo claro permanente"`\
* *Sub-paso:* `git push origin dev-reconstruccion`\
* *Sub-paso:* Verificar el "build" en Vercel.\
* *Resultado Esperado:* Build ✅\
\
---\
\
## Fase 2: Implementación de Internacionalización (i18n) con `next-intl` (Paso a Paso)\
\
*Pre-condición: Fase 1 completada con éxito y desplegada correctamente.*\
\
*Nota Crítica: Después de cada sub-paso marcado como (CRÍTICO), hacer commit y probar deploy en Vercel para aislar problemas inmediatamente. El trabajo previo en la rama `dev` servirá de referencia para el contenido/código de cada archivo.*\
\
1. ⚪ **Instalación y Archivos Base de i18n:**\
* *Sub-paso:* Instalar `next-intl`: `npm install next-intl`.\
* *Sub-paso:* Crear `i18n.ts` en la raíz del proyecto (consultar rama `dev` para el contenido exacto, debe incluir `locales`, `defaultLocale` y `getRequestConfig`).\
* *Sub-paso:* Crear directorio `messages` en la raíz.\
* *Sub-paso:* Crear `messages/es.json` (puede estar inicialmente vacío `{}` o con contenido de la rama `dev`).\
* *Sub-paso:* Crear `messages/en.json` (puede estar inicialmente vacío `{}` o con contenido de la rama `dev`).\
* *Sub-paso (CRÍTICO):* Commit `feat(i18n): Instalar next-intl y crear archivos base`) y Prueba de Despliegue en Vercel. Resultado Esperado: Build ✅.\
\
2. ⚪ **Configurar Middleware `middleware.ts`):**\
* *Sub-paso:* Crear `middleware.ts` en la raíz del proyecto (consultar rama `dev` para el contenido exacto, incluyendo `createMiddleware` y el `config.matcher`).\
* *Sub-paso (CRÍTICO):* Commit `feat(i18n): Configurar middleware para next-intl`) y Prueba de Despliegue en Vercel. Resultado Esperado: Build ✅.\
\
3. ⚪ **Integrar `next-intl` con `next.config.mjs`:**\
* *Sub-paso:* Modificar `next.config.mjs` para envolver la configuración con `withNextIntl` (consultar rama `dev` para la sintaxis exacta con `createNextIntlPlugin('./i18n.ts')`).\
* *Sub-paso (CRÍTICO):* Commit `feat(i18n): Integrar plugin de next-intl en next.config.mjs`) y Prueba de Despliegue en Vercel. Resultado Esperado: Build ✅.\
\
4. ⚪ **Reestructurar Directorio `app` y Actualizar Layout Principal para i18n:**\
* *Sub-paso:* Mover el contenido de `app` (ej. `layout.tsx`, `page.tsx`, `globals.css` del commit base) a `app/[locale]/`.\
* *Sub-paso:* Asegurar que `globals.css` se importe correctamente desde el nuevo `app/[locale]/layout.tsx` (ej. `import '../../globals.css';`).\
* *Sub-paso:* Actualizar `app/[locale]/layout.tsx` para incluir `NextIntlClientProvider` y la lógica de carga de mensajes (consultar la rama `dev` para la estructura detallada, manejo de `params.locale` como `Promise` si es necesario, `generateStaticParams`, etc.).\
* *Sub-paso (CRÍTICO):* Commit `feat(i18n): Reestructurar a app/[locale] y actualizar RootLayout para i18n`) y Prueba de Despliegue en Vercel. Resultado Esperado: Build ✅.\
\
5. ⚪ **Traducción de Metadatos del Sitio (en `app/[locale]/layout.tsx`):**\
* *Sub-paso:* Implementar/Restaurar `generateMetadata` usando `getTranslations` (consultar rama `dev`).\
* *Sub-paso:* Asegurar que `messages/es.json` y `messages/en.json` tengan las claves para `title` y `description` (ej. `HomePage.title`, `HomePage.description`).\
* *Sub-paso (CRÍTICO):* Commit `feat(i18n): Implementar metadatos traducidos`) y Prueba de Despliegue en Vercel. Resultado Esperado: Build ✅.\
\
6. ⚪ **Implementar/Restaurar `LanguageSwitcher` Component:**\
* **Diseño UI (Recordatorio):** Botones contiguos, altura ~32px, borde redondeado, separador vertical, fondo `slate-200` para activo/hover, banderas + texto "ES"/"EN".\
* *Sub-paso:* Crear/Restaurar `components/language-switcher.tsx` (consultar rama `dev` para el código).\
* *Sub-paso:* Asegurar `router.push(newPath, { scroll: false });` para evitar scroll al cambiar idioma.\
* *Sub-paso:* Integrar `LanguageSwitcher` en `app/[locale]/page.tsx` (o donde corresponda).\
* *Sub-paso:* Asegurar textos del switcher en `messages/es.json` y `messages/en.json`.\
* *Sub-paso (CRÍTICO):* Commit `feat(i18n): Implementar LanguageSwitcher`) y Prueba de Despliegue en Vercel. Resultado Esperado: Build ✅.\
\
7. ⚪ **Traducción de Contenido Estático `page.tsx` y componentes):**\
* *Sub-paso:* Crear archivo `textos-ingles-referencia.md` (manual, con todos los textos en inglés necesarios).\
* *Sub-paso:* Usar `textos-ingles-referencia.md` y `messages/es.json` (de la rama `dev` o reconstruido) para completar `messages/en.json`.\
* *Sub-paso:* Restaurar el contenido original de `app/[locale]/page.tsx` (secciones, etc., desde la rama `dev` o el estado previo al "Hola Mundo").\
* *Sub-paso:* Para cada componente/sección `HeroSection`, `AboutSection`, etc.):\
* Asegurar que importe y use `useTranslations`.\
* Reemplazar textos hardcodeados con `t('clave')`.\
* *Sub-paso (POR CADA COMPONENTE O GRUPO PEQUEÑO):* Commit y Prueba de Despliegue en Vercel.\
\
---\
\
## Fase 3: Pruebas Finales y Despliegue Definitivo\
\
1. ⚪ **Pruebas Exhaustivas:**\
* Verificar todas las traducciones y contenido en ES y EN.\
* Funcionalidad completa, incluyendo `LanguageSwitcher` y todos los botones/links.\
* Consola sin errores (hidratación, etc.) en local y en la preview de Vercel.\
* Pruebas en múltiples navegadores.\
2. ⚪ **Optimización y Limpieza de Código:**\
* Revisar y eliminar código comentado o innecesario de la rama `dev-reconstruccion`.\
3. ⚪ **Merge a `dev` y/o `main` y Despliegue Final:**\
* Una vez que `dev-reconstruccion` esté perfecto y desplegado correctamente en Vercel (con su propio subdominio de preview).\
* *Sub-paso:* `git checkout dev`\
* *Sub-paso:* `git merge dev-reconstruccion` (Resolver conflictos si los hubiera, aunque `dev` no debería haber cambiado mucho si solo la usamos de consulta).\
* *Sub-paso:* `git push origin dev`\
* *Sub-paso:* Verificar el deploy de `dev` en Vercel (asociado al dominio principal de staging si existe).\
* *(Opcional)* Considerar `git checkout main`, `git merge dev`, `git push origin main` para producción.\
\
---\
## Historial de Debugging Anterior (Referencia de la rama `dev` original)\
*Esta sección se puede usar para anotar brevemente los problemas encontrados en la rama `dev` que llevaron a esta reconstrucción, y cualquier configuración específica que se probó y falló, para no repetir errores. El objetivo principal es usar el código de la rama `dev` como referencia POSITIVA para el contenido y la lógica que SÍ queremos replicar.*\
\
(El historial extenso de nuestros intentos de debugging ya está en nuestra conversación)

// Trivial change to trigger Vercel build for new branch
