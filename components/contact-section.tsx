'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Copy, Download } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('ContactSection');
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
    <section 
      id="contact" 
      className="w-full py-16 md:py-24 bg-white border-t border-slate-200"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('title')}</h2>
        <p className="text-lg text-muted-foreground mb-10 md:mb-12">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <a
            href="https://www.linkedin.com/in/joaquintorroba/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="w-full border-slate-300 hover:bg-slate-100 text-slate-700 transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3"
            >
              <Linkedin className="mr-1 h-5 w-5" /> {t('linkedinButton')}
            </Button>
          </a>
          <Button
            variant="outline"
            onClick={handleEmailButtonClick}
            className="w-full sm:w-auto border-slate-300 hover:bg-slate-100 text-slate-700 transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3"
          >
            {emailCopied ? (
              <>
                <Copy className="mr-1 h-5 w-5 text-green-500" /> {t('emailCopiedButton')}
              </>
            ) : (
              <>
                <Mail className="mr-1 h-5 w-5" /> {t('emailButton')}
              </>
            )}
          </Button>
          <a href="/CV_Joaquin_Torroba.pdf" download className="w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full bg-black text-white hover:bg-neutral-800 flex items-center gap-2">
              <Download size={18} />
              {t('cvButton')}
            </Button>
          </a>
        </div>
        {/* Mensaje de email copiado debajo de los botones */}
        {emailCopied && (
          <p className="mt-4 text-green-600 text-sm">
            {t('emailAddressCopied')}
          </p>
        )}
      </div>
    </section>
  );
} 