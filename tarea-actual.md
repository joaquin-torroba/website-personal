Ahora vamos a trabajar en los proyectos.

Quiero saber si podemos poner un toggle en "Proyectos Digitales".

Ese toggle es para switchear entre 2 views de los proyectos.

- Full View: como esta actualmente.
- Simple View: mostrando unicamente la columna de la izquierda (logo-nombre-descripcion-periodo).

## Plan para Reestructurar Secciones de Proyectos (Digital y IA):

**Fase 1: Renombrar y Preparar Sección de Proyectos Digitales**

1.  **Renombrar Archivo de Componente:**
    *   Cambiar `components/projects-section.tsx` a `components/digital-projects-section.tsx`.
2.  **Actualizar Contenido del Componente Renombrado (`digital-projects-section.tsx`):**
    *   Cambiar el nombre de la función del componente de `ProjectsSection` a `DigitalProjectsSection`.
    *   Actualizar el `id` de la etiqueta `<section>` de `"projects"` a `"digital-projects"` (o similar).
    *   Ajustar el título `<h2>` si es necesario (ej: "Proyectos Digitales").
3.  **Actualizar Importaciones y Uso en la Página Principal (`app/page.tsx`):**
    *   Cambiar la importación: `import ProjectsSection from ...` a `import DigitalProjectsSection from '@/components/digital-projects-section';`.
    *   Actualizar el uso en JSX: de `<ProjectsSection />` a `<DigitalProjectsSection />`.
4.  **Modificar Datos de Proyectos (`data/projects-data.ts`):**
    *   Añadir un nuevo campo a cada objeto de proyecto, por ejemplo: `category: string`.
    *   Asignar el valor correspondiente a cada proyecto (ej: `category: 'digital'` o `category: 'ia'`) según la lista que definimos.
5.  **Implementar Filtro en `DigitalProjectsSection`:**
    *   Dentro de `digital-projects-section.tsx`, antes del `.map()` sobre `projectsData`, filtrar la lista para que solo incluya proyectos con `category: 'digital'`.
6.  **Verificación Fase 1:**
    *   Asegurarse de que la web cargue sin errores.
    *   Verificar que la sección renombrada ("Proyectos Digitales") se muestre correctamente y contenga solo los proyectos designados como 'digital'.

**Fase 2: Crear Sección de Proyectos de IA**

1.  **Duplicar Componente:**
    *   Copiar `components/digital-projects-section.tsx` y nombrarlo `components/ai-projects-section.tsx`.
2.  **Modificar `ai-projects-section.tsx`:**
    *   Cambiar el nombre de la función del componente a `AiProjectsSection`.
    *   Actualizar el `id` de la etiqueta `<section>` a `"ai-projects"` (o similar).
    *   Cambiar el título `<h2>` a "Proyectos de Inteligencia Artificial" (o el que prefieras).
    *   Modificar el filtro de datos para que muestre solo los proyectos con `category: 'ia'`.
3.  **Integrar en la Página Principal (`app/page.tsx`):**
    *   Importar el nuevo componente: `import AiProjectsSection from '@/components/ai-projects-section';`.
    *   Añadir `<AiProjectsSection />` en el lugar deseado del layout de la página.
4.  **Verificación Fase 2:**
    *   Asegurarse de que la web cargue sin errores.
    *   Verificar que ambas secciones ("Proyectos Digitales" y "Proyectos de IA") se muestren correctamente, cada una con su lista de proyectos filtrada y su respectivo título.
    *   Confirmar que los toggles de vista dentro de cada sección funcionen independientemente.