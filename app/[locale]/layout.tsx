import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

// Importamos los idiomas definidos
import { locales } from '@/i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Función para cargar los mensajes
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
  
  if (!locales.includes(locale as any)) {
    console.warn(`Locale '${locale}' inválido en generateMetadata, usando metadata por defecto.`);
    return {
      title: 'Joaquin Torroba - Website',
      description: 'Personal website for Joaquin Torroba',
    };
  }

  try {
    // Intentamos cargar las traducciones para los metadatos
    const t = await getTranslations({ locale, namespace: 'HomePage' });
    
    return {
      title: t('title'),
      description: t('description'),
    };
  } catch (error) {
    return {
      title: 'Joaquin Torroba - Website',
      description: 'Personal website for Joaquin Torroba',
    };
  }
}

// Verificamos si el locale es válido
export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

// Root layout sin destructurar params.locale
export default async function RootLayout({ children, params: paramsPromise }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const params = await paramsPromise;
  const locale = params.locale;
  
  // Verificamos si el locale es válido
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Cargamos los mensajes
  const messages = await getMessages(locale);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      forcedTheme="light"
      disableTransitionOnChange
      storageKey="joaquin-torroba-website-theme"
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <Analytics />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
} 