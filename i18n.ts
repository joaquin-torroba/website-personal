import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'es'];
const defaultLocale = 'es';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Type assertion after validation
  const validLocale = locale as typeof locales[number];

  let messages;
  try {
    messages = (await import(`./messages/${validLocale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return {
    locale: validLocale,
    messages
  };
}); 