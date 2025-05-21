import createNextIntlPlugin from 'next-intl/plugin';

// Corregir la ruta al archivo de configuración i18n
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurar rutas públicas para que no sean afectadas por la internacionalización
  images: {
    unoptimized: true
  },
  // Asegurar que las carpetas públicas no usen el prefijo de idioma
  assetPrefix: '',
};

export default withNextIntl(nextConfig); 