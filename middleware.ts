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
  // Match all pathnames except for
  // - …everything in the `public` folder
  // - …the ones starting with `/api`
  // - …the ones starting with `/_next`
  // - …the ones with a file extension (e.g. `favicon.ico`, `image.png`)
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\..*).*)'
  ]
}; 