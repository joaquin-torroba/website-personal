# Tarea Actual: Hero Section.

## Crear página de inicio con componentes de Shadcn

## Tarea Actual: Implementar Seccion 3: "Mi Camino" (Timeline)

## Análisis del PRD
Según el archivo prd-web-personal.md, la sección "Mi Camino" debe:
- Visualizar tu evolución profesional con un timeline
- Asociar cada etapa a logos de empresas/proyectos clave
- Usar un componente Timeline de shadcn (vertical en móvil, horizontal en desktop)
- Incluir 3 etapas principales: Corporativo (2010-2018), Europa & Startups (2020-2023), AI Builder (2023-2025)
- Cada nodo debe tener un ícono, logos, título y descripción breve
- Usar colores específicos para cada etapa
- Animar con efecto "stagger" fade-in

## Pasos de implementación

### 1. Configuración de Componentes Base
- Crear carpeta `components/timeline` para organizar componentes relacionados
- Implementar `components/timeline/timeline.tsx` (contenedor principal)
- Crear `components/timeline/timeline-item.tsx` (elementos individuales)
- Crear `components/timeline/timeline-card.tsx` (tarjetas con contenido)
- Instalar dependencias necesarias para iconos adicionales (lucide-react)

### 2. Diseño del Timeline
- Implementar timeline vertical para móvil (transformándose a horizontal en desktop)
- Crear conector visual entre nodos (línea con puntos de conexión)
- Añadir indicador visual para la etapa actual
- Implementar sistema de colores por tipo de etapa:
  - Corporativo: `#64748b` (slate-500)
  - Startup: `#0ea5e9` (sky-500)
  - IA: `#a855f7` (purple-500)

### 3. Diseño de TimelineItem
- Implementar tarjetas con bordes suaves y sombra hover
- Añadir ícono de etapa en la parte superior (🎯, 🚀, 🤖)
- Estructurar información cronológicamente
- Implementar contenedor para logos con espaciado adecuado
- Añadir año y badge con color temático

### 4. Gestión de Logos
- Crear carpeta `public/logos` para almacenar SVGs
- Optimizar logos para tamaño y rendimiento (40x40px)
- Implementar lazy-loading con `priority={false}`
- Agregar textos alt descriptivos
- Crear grid/flex responsivo para logos

### 5. Animación con Framer Motion
- Implementar animación stagger para entrada secuencial
- Crear animación sutil para hover en cada tarjeta
- Añadir transición suave para cambio entre modo claro/oscuro
- Implementar variants para diferentes tamaños de pantalla

### 6. Responsividad
- Mobile first: Diseñar para 320px primero
- Implementar breakpoints para tablet y desktop:
  - `sm:` > 640px
  - `md:` > 768px 
  - `lg:` > 1024px
- Cambiar de timeline vertical a horizontal en md+
- Ajustar tamaño de texto y elementos para cada breakpoint

### 7. Accesibilidad
- Implementar roles adecuados (`role="list"/"listitem"`)
- Añadir `aria-label` descriptivos
- Asegurar contraste suficiente para modo claro/oscuro
- Verificar navegación por teclado
- Implementar focus visible para interactividad

### 8. Integración en Página Principal
- Importar componente en `app/page.tsx`
- Ubicar después de la sección "Sobre mí"
- Añadir espaciado adecuado (margin-top)
- Implementar anchor para navegación interna

### 9. Pruebas y Optimización
- Verificar rendimiento (no más de 50 elementos renderizados)
- Comprobar modo oscuro/claro
- Probar diferentes tamaños de pantalla
- Validar accesibilidad con herramientas automáticas
- Optimizar CLS (Cumulative Layout Shift)

### 10. Consideraciones Técnicas
- Usar datos estructurados para fácil mantenimiento
- Implementar sistema de tipado fuerte para los datos del timeline
- Considerar lazy loading para componentes bajo el fold
- Implementar motion-safe para preferencias de reducción de movimiento