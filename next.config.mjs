import createNextIntlPlugin from 'next-intl/plugin';

// Corregir la ruta al archivo de configuración i18n
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurar rutas públicas para que no sean afectadas por la internacionalización
  images: {
    unoptimized: true
  },
};

export default withNextIntl(nextConfig); 