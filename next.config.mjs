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