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
  // Aquí usamos una ruta relativa simple para evitar problemas de resolución
  return {
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
    locale: resolvedLocale,
    timeZone: 'America/Buenos_Aires'
  };
}); 