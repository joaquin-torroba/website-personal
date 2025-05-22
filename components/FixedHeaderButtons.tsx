'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Copy } from 'lucide-react';

export default function FixedHeaderButtons() {
  const t = useTranslations('FixedHeaderButtons'); // Usaremos un nuevo namespace para las traducciones
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'joaquintorroba@gmail.com';

  const handleEmailButtonClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="default" // Un tamaño más pequeño para la cabecera
        onClick={handleEmailButtonClick}
        className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 ease-in-out rounded-lg"
      >
        {emailCopied ? (
          <>
            <Copy className="mr-1 h-4 w-4 text-green-500" /> {t('emailCopied')}
          </>
        ) : (
          <>
            <Mail className="mr-1 h-4 w-4" /> {t('email')}
          </>
        )}
      </Button>
      <a
        href="https://www.linkedin.com/in/joaquintorroba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="default" // Un tamaño más pequeño para la cabecera
          className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 ease-in-out rounded-lg"
        >
          <Linkedin className="mr-1 h-4 w-4" /> {t('linkedin')}
        </Button>
      </a>
    </div>
  );
} 