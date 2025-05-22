import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';

// next-intl imports
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {locales} from '../../i18n'; // Assuming i18n.ts is in the root and exports 'locales'

// Función para cargar mensajes
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error('Error cargando mensajes:', error);
    return {};
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joaquin Torroba - Website",
  description: "Personal website for Joaquin Torroba",
};

export function generateStaticParams() {
  return locales.map((locale: string) => ({locale}));
}

export default async function RootLayout({
  children,
  params // params is now a Promise
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>; // Type params as a Promise
}) {
  const { locale } = await params; // Await params and destructure locale
  
  // Verificamos si el locale es válido
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  // Cargamos los mensajes
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            forcedTheme="light"
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
