# Análisis del Componente LanguageSwitcher

## 1. Estructura General

El componente `LanguageSwitcher` es un componente cliente ('use client') que permite al usuario cambiar entre los idiomas disponibles (español e inglés) en la aplicación.

```tsx
'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LanguageSwitcher() {
  // Lógica del componente...
}
```

## 2. Dependencias

- **next-intl**: `useLocale`, `useTranslations` para manejo de internacionalización
- **next/navigation**: `usePathname`, `useRouter` para navegación entre páginas
- **@/components/ui/button**: Componente Button de Shadcn UI
- **next/image**: Componente Image para optimización de imágenes

## 3. Hooks y Variables

```tsx
const t = useTranslations('Languages');
const locale = useLocale();
const router = useRouter();
const pathname = usePathname();
```

- `t`: Función para obtener traducciones del namespace 'Languages'
- `locale`: Idioma actual de la aplicación
- `router`: Para navegar programáticamente
- `pathname`: Ruta actual

## 4. Lógica de Cambio de Idioma

```tsx
const switchLanguage = (newLocale: string) => {
  // Construimos la URL con el nuevo idioma
  // Reemplazamos /es/ o /en/ con el nuevo idioma
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
  router.push(newPath);
};
```

**Observaciones importantes:**
- Usa `pathname.replace()` para sustituir solo la parte del locale en la URL
- Mantiene el resto de la ruta intacta
- **Mejora pendiente**: Debería usar `{ scroll: false }` en `router.push()` para evitar scroll al cambiar idioma (según tarea-actual.md)

## 5. Recursos de Imágenes

```tsx
const flagEsPath = '/banderas/NEW_Flag_of_Spain.svg';
const flagEnPath = '/banderas/Logo_bandera_england.svg';
```

**Observaciones importantes:**
- La bandera española está disponible en `/public/banderas/NEW_Flag_of_Spain.svg`
- La bandera inglesa referenciada como `Logo_bandera_england.svg` **no existe** en la carpeta `/public/banderas/`
- **Soluciones posibles**:
  1. Crear/obtener una imagen de la bandera inglesa y guardarla con ese nombre
  2. Usar la bandera internacional disponible (`NEW_Flag_internacional.svg`) como alternativa
  3. Renombrar la variable a una bandera existente

## 6. Renderizado y UI

```tsx
return (
  <div className="flex items-center h-8 rounded-md overflow-hidden border border-slate-300">
    <Button
      variant="ghost"
      className={`p-2 flex items-center justify-center h-full rounded-none border-0 transition-colors duration-150 ${locale === 'es' ? 'bg-[#e2e8f0] hover:bg-[#e2e8f0]' : 'hover:bg-[#e2e8f0]'}`}
      onClick={() => switchLanguage('es')}
      aria-label={t('switchTo', { language: t('spanish') })}
    >
      <Image src={flagEsPath} alt={t('spanish')} width={24} height={18} className="rounded-sm" />
    </Button>
    <div className="w-px h-full bg-slate-300"></div> {/* Separador vertical */}
    <Button
      variant="ghost"
      className={`p-2 flex items-center justify-center h-full rounded-none border-0 transition-colors duration-150 ${locale === 'en' ? 'bg-[#e2e8f0] hover:bg-[#e2e8f0]' : 'hover:bg-[#e2e8f0]'}`}
      onClick={() => switchLanguage('en')}
      aria-label={t('switchTo', { language: t('english') })}
    >
      <Image src={flagEnPath} alt={t('english')} width={24} height={18} className="rounded-sm" />
    </Button>
  </div>
);
```

### Características de UI:

- **Contenedor principal**: 
  - Altura fija de 8 (h-8)
  - Bordes redondeados (rounded-md)
  - Borde gris (border-slate-300)
  - Oculta el desbordamiento (overflow-hidden)
  - Flex para alineación horizontal

- **Botones**:
  - Variante "ghost" (sin fondo ni borde por defecto)
  - Padding uniforme (p-2)
  - Sin bordes redondeados (rounded-none)
  - Transición suave en cambio de color (transition-colors duration-150)
  - Estilos condicionales según el idioma activo
  - Fondo gris claro (#e2e8f0) para el idioma activo

- **Separador**:
  - Línea vertical delgada (w-px)
  - Color gris (bg-slate-300)

- **Imágenes**:
  - Tamaño fijo (24x18px)
  - Esquinas ligeramente redondeadas (rounded-sm)

### Implementación de Button (Shadcn UI)

El componente Button utiliza:
- Librería class-variance-authority (cva) para variantes de estilo
- La función `cn` de `@/lib/utils` para combinar clases dinámicamente
- Soporta variantes como "ghost", "default", "outline", etc.
- Permite el uso de `asChild` para renderizar como otro elemento

El código confirma que tenemos configurado correctamente:
- El componente Button de Shadcn UI
- La función `cn` para combinar clases
- Las variantes necesarias, incluyendo "ghost" que usa el LanguageSwitcher

## 7. Accesibilidad

- Cada botón tiene un `aria-label` descriptivo que se traduce según el idioma
- Usa `t('switchTo', { language: t('spanish') })` para formar mensajes como "Cambiar a Español"

## 8. Traducciones Necesarias

El componente requiere las siguientes traducciones en el namespace "Languages":

```json
// messages/es.json
{
  "Languages": {
    "spanish": "Español",
    "english": "Inglés",
    "switchTo": "Cambiar a {language}"
  }
}

// messages/en.json
{
  "Languages": {
    "spanish": "Spanish",
    "english": "English",
    "switchTo": "Switch to {language}"
  }
}
```

## 9. Integración en la Aplicación

- Debe colocarse en algún componente visible en todas las páginas (navbar, header, etc.)
- Probablemente sea necesario modificar `app/[locale]/page.tsx` para incluirlo

## 10. Problemas Potenciales y Mejoras

1. **Falta de bandera inglesa**: El archivo `Logo_bandera_england.svg` no existe en `/public/banderas/`. Necesitamos:
   - Añadir esta imagen, o
   - Modificar el código para usar otra bandera disponible (como `NEW_Flag_internacional.svg`)

2. **Falta de opción { scroll: false }**: Añadir a router.push() para evitar scroll al cambiar idioma:
   ```tsx
   router.push(newPath, { scroll: false });
   ```

3. **Traducciones faltantes**: Crear entradas en ambos archivos de mensajes para:
   - Languages.spanish
   - Languages.english
   - Languages.switchTo

4. **Integración en layout**: Determinar la mejor ubicación para el componente

## 11. Pruebas Necesarias

1. Verificar que el cambio de idioma funcione desde cualquier página
2. Verificar que se preserve la ruta actual (solo cambia el idioma)
3. Verificar que los estilos se apliquen correctamente (idioma activo vs inactivo)
4. Verificar que las traducciones se muestren correctamente 