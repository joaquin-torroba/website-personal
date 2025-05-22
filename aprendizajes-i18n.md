# Aprendizajes de Internacionalización (i18n) con next-intl

Este documento recopila los aprendizajes clave extraídos de la rama `dev` para implementar correctamente la internacionalización en la otra rama.

## 1. Estructura de Archivos

### Archivos Críticos
- `next.config.mjs` (usar `.mjs` no `.ts`)
- `middleware.ts`
- `i18n.ts`
- `messages/en.json` y `messages/es.json`
- `app/[locale]/layout.tsx`

## 2. Configuraciones Clave

### Archivo `next.config.mjs`
```javascript
import createNextIntlPlugin from 'next-intl/plugin';

// Ruta correcta al archivo de configuración i18n
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuraciones adicionales si son necesarias
  images: {
    unoptimized: true
  },
};

export default withNextIntl(nextConfig);
```

**Puntos Importantes:**
- Usar extensión `.mjs` (JavaScript con módulos ES) en lugar de `.ts`
- Especificar la ruta correcta al archivo `i18n.ts`
- Configuración de imágenes si es necesario

### Archivo `middleware.ts`
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// Configuración del middleware para manejar internacionalización
export default createMiddleware({
  // Lista de locales soportados
  locales,
  // Locale por defecto
  defaultLocale,
  // Redirigir a /{locale}/... cuando se visita /
  localePrefix: 'as-needed'
});

// Configuración para que Next.js sepa qué rutas deben ser manejadas por este middleware
export const config = {
  // Matcher que excluye archivos estáticos y rutas específicas
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\..*).*)'
  ]
};
```

**Puntos Importantes:**
- Importar `locales` y `defaultLocale` desde `i18n.ts`
- Configurar `localePrefix: 'as-needed'` para redirigir `/` a `/{locale}/`
- Configurar correctamente el `matcher` para excluir archivos estáticos

### Archivo `i18n.ts`
```typescript
import {getRequestConfig} from 'next-intl/server';

// Definimos los locales disponibles
export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es';

// Función para obtener la configuración de request para next-intl
export default getRequestConfig(async ({locale}) => {
  // Validar que el locale entrante sea válido
  const resolvedLocale = locale && typeof locale === 'string' && locales.includes(locale as any)
    ? locale
    : defaultLocale;

  // Cargar los mensajes de traducción según el locale
  return {
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
    locale: resolvedLocale,
    timeZone: 'America/Buenos_Aires'
  };
});
```

**Puntos Importantes:**
- Exportar `locales` y `defaultLocale` para usar en `middleware.ts`
- Validar el locale recibido
- Manejar la carga de mensajes de forma asíncrona con importación dinámica

### Archivo `app/[locale]/layout.tsx`
```typescript
// Importaciones
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';

// Función para cargar mensajes
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error('Error cargando mensajes:', error);
    return {};
  }
}

// Generamos metadatos sin destructurar params
export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const locale = params.locale;
  
  // Validación y manejo de errores
  // ...
}

// Generar rutas estáticas para locales
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Root layout sin destructurar params.locale
export default async function RootLayout({ children, params: paramsPromise }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  // IMPORTANTE: Manejar params como Promise
  const params = await paramsPromise;
  const locale = params.locale;
  
  // Verificamos si el locale es válido
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Cargamos los mensajes
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Puntos Importantes:**
- **CRÍTICO**: Tratar `params` como una `Promise` tanto en `RootLayout` como en `generateMetadata`
- **NO DESTRUCTURAR** `params.locale` directamente en la firma de la función
- Validar el locale y usar `notFound()` si no es válido
- Envolver la aplicación con `NextIntlClientProvider`
- Implementar `generateStaticParams` para pre-generar rutas

### Archivos de mensajes (`messages/en.json` y `messages/es.json`)
- Estructura de objetos JSON con claves organizadas por secciones/componentes
- Garantizar que al menos tengan un objeto vacío `{}` si no hay traducciones
- Manejar correctamente valores especiales como arrays y HTML en las traducciones

## 3. Problemas Comunes y Soluciones

### 1. Error de `params.locale` en Next.js 15
**Problema:** Error: `params should be awaited before using its properties`
**Solución:** Tratar `params` como una Promise tanto en `RootLayout` como en `generateMetadata`:
```typescript
export default async function RootLayout({ 
  children, 
  params: paramsPromise 
}: { 
  children: React.ReactNode; 
  params: Promise<{ locale: string }> 
}) {
  const params = await paramsPromise;
  const locale = params.locale;
  // ...
}
```

### 2. Problemas de carga de imágenes y recursos estáticos
**Problema:** Archivos estáticos dando 404 después de implementar i18n
**Solución:** Configurar correctamente el `matcher` en `middleware.ts` para excluir rutas estáticas

### 3. Errores al cargar archivos de mensajes
**Problema:** Errores al cargar los archivos JSON de mensajes
**Solución:** Implementar manejo de errores en la carga de mensajes y proporcionar un fallback

### 4. Error al usar `useTranslations` en componentes cliente
**Problema:** Error: `Failed to call useTranslations because the context from NextIntlClientProvider was not found.`
**Solución:** Asegurarse de que todos los componentes cliente están envueltos por `NextIntlClientProvider` en `layout.tsx`

## 4. Enfoque Paso a Paso Recomendado

1. Instalar `next-intl`: `npm install next-intl`
2. Crear archivos `i18n.ts` y `middleware.ts` con las configuraciones mostradas
3. Convertir `next.config.ts` a `next.config.mjs` y configurarlo con `withNextIntl`
4. Crear directorio `messages` con archivos JSON básicos para cada idioma
5. Crear estructura `app/[locale]` y mover archivos necesarios
6. Modificar `app/[locale]/layout.tsx` para manejar `params` como Promise
7. Implementar traducciones gradualmente en cada componente

**IMPORTANTE:** Hacer commit y probar despliegue en Vercel después de cada paso crítico. 