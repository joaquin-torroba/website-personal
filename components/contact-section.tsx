'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Copy } from 'lucide-react';

export default function ContactSection() {
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
    <section id="contact" className="w-full py-16 md:py-24 bg-white border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Conectemos</h2>
        <p className="text-lg text-muted-foreground mb-10 md:mb-12">
          Si sos un profesional, startup o empresa y tenés consultas o proyectos relacionadas con inteligencia artificial, hablemos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <Button
            variant="outline"
            size="lg"
            onClick={handleEmailButtonClick}
            className="w-full sm:w-auto border-slate-300 hover:bg-slate-100 text-slate-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {emailCopied ? (
              <>
                <Copy className="mr-2 h-5 w-5 text-green-500" /> Email Copiado
              </>
            ) : (
              <>
                <Mail className="mr-2 h-5 w-5" /> Mandame un email
              </>
            )}
          </Button>
          <a
            href="https://www.linkedin.com/in/joaquintorroba/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full border-slate-300 hover:bg-slate-100 text-slate-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Linkedin className="mr-2 h-5 w-5" /> Hablemos por LinkedIn
            </Button>
          </a>
        </div>
        {/* Mensaje de email copiado debajo de los botones */}
        {emailCopied && (
          <p className="mt-4 text-green-600 text-sm">
            {email}
          </p>
        )}
      </div>
    </section>
  );
} 