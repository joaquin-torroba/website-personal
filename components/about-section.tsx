'use client';

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  const paragraph4Text = t('paragraph4');
  
  return (
    <motion.section 
      id="about"
      className="w-full py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="prose lg:prose-lg dark:prose-invert max-w-3xl mx-auto pl-10 pr-4 space-y-4">
        <p className="text-lg">{t('paragraph1')}</p>
        <p className="text-lg">{t('paragraph2')}</p>
        <p className="text-lg">{t('paragraph3')}</p>
        {paragraph4Text && paragraph4Text.trim() !== '' && (
          <p className="text-lg">{paragraph4Text}</p>
        )}
      </div>
    </motion.section>
  );
}   