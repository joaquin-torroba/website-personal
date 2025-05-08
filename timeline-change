La sigueinte tarea se pospuso hasta que Joaco diga que lo hagamos.

# Plan para Rediseñar el Timeline

**Objetivo:** Implementar un diseño de timeline donde las cajas de período se muevan de la izquierda hacia una posición asociada con la tarjeta de contenido, y se agreguen líneas verticales centradas que conecten cada tarjeta con la siguiente.

**Fase 1: Preparación y Reestructuración Inicial**

1.  **Línea Principal Izquierda del Timeline:**
    *   **Decisión Necesaria:** ¿Mantenemos la línea vertical gruesa que actualmente está a la izquierda del todo (`left-15` en `components/timeline/timeline.tsx`) como un elemento de fondo, o la eliminamos por completo? En tu nueva imagen, no parece ser el conector principal.
    *   **Acción:** Modificar `components/timeline/timeline.tsx` según tu decisión.

2.  **Reubicación de las Cajas de Período (Ej: "2012 a 2020"):**
    *   Estas cajas ya no estarán a la izquierda interceptadas por la línea principal. Necesitan una nueva posición. En tu imagen, parecen estar dentro de la tarjeta de contenido, abajo a la derecha.
    *   **Decisión Necesaria:** ¿Cuál es la posición exacta deseada para estas cajas de período dentro o al lado de cada tarjeta (`TimelineCard`)? (Ej: Abajo a la derecha dentro de la card, arriba a la derecha, etc.)
    *   **Acción:** Modificar el archivo `components/timeline/timeline-item.tsx` y, si es necesario, `components/timeline/timeline-card.tsx` para mover la caja de período. Esto implicará cambiar su HTML y CSS. La lógica de color y borde activo que tenían estas cajas también deberá revisarse.

3.  **Ajuste de Espaciado en `TimelineItem`:**
    *   El componente `TimelineItem` actualmente tiene un `padding-left` (ej. `pl-28`) para hacer espacio a la línea y período a la izquierda.
    *   **Acción:** Si los elementos de la izquierda se eliminan o mueven significativamente, este padding deberá reducirse o eliminarse en `components/timeline/timeline-item.tsx`.

**Fase 2: Implementar las Líneas Conectoras Centrales entre Tarjetas**

1.  **Identificar el Último Ítem del Timeline:**
    *   Para no dibujar una línea conectora debajo de la última tarjeta.
    *   **Acción:** Modificar `components/recorrido-section.tsx` (donde se generan los `TimelineItem`) para que cada `TimelineItem` reciba una nueva propiedad, por ejemplo `isLastItem: boolean`.
    *   **Acción:** Actualizar la definición de `TimelineItemProps` en `components/timeline/timeline-item.tsx` para aceptar `isLastItem`.

2.  **Crear y Estilizar la Línea Conectora:**
    *   **Acción:** Dentro de `components/timeline/timeline-item.tsx`, si `isLastItem` es `false`, se renderizará un nuevo `div` que actuará como la línea conectora.
    *   Este `div` se posicionará de forma absoluta:
        *   Horizontalmente centrado con la tarjeta (`left-1/2 -translate-x-1/2`).
        *   Comenzando desde la parte inferior de la tarjeta actual.
        *   Con una altura que cubra el espacio hasta la siguiente tarjeta (esto podría ser un valor fijo como `h-16` o similar, dependiendo del `space-y-16` actual en `components/timeline/timeline.tsx`).
        *   Con el mismo grosor (`w-0.5`) y color (`bg-slate-200 dark:bg-slate-700`) que la línea principal actual.

**Fase 3: Refinamientos y Pruebas**

1.  **Ajuste Fino de Posiciones y Alturas:**
    *   **Acción:** Verificar que las líneas conectoras se alineen perfectamente y tengan la altura correcta. Ajustar clases de Tailwind CSS según sea necesario.

2.  **Consistencia de Estilos:**
    *   **Acción:** Asegurar que todos los elementos visuales (colores de borde activo, etc.) funcionen como se espera en el nuevo diseño.

3.  **Pruebas de Responsividad:**
    *   **Acción:** Revisar cómo se ve el timeline en diferentes tamaños de pantalla y aplicar ajustes si es necesario. 