import {notFound} from 'next/navigation';
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
  let messages;
  try {
    messages = (await import(`./messages/${resolvedLocale}.json`)).default;
    // If messages loaded as {} and that's an issue, this check could be useful
    if (Object.keys(messages).length === 0 && JSON.stringify(messages) === '{}') {
      // console.warn(`Messages for ${resolvedLocale} loaded as empty object {}.`); // Optional debugging
      // Potentially force a minimal structure if {} is problematic for next-intl
      // messages = { common: { test: 'Fallback loaded' } };
    }
  } catch (error) {
    console.error('Error cargando mensajes:', error);
    messages = {}; // Revert to empty object
  }

  return {
    messages,
    locale: resolvedLocale,
    timeZone: 'America/Buenos_Aires'
  };
}); 