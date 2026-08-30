import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeader({ title, subtitle, align = 'center' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      ref={ref}
      className={`mb-12 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-light-primary dark:text-text-dark-primary mb-4">
        {title}
      </h2>
      <div className={`flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-0.5 w-16 bg-accent rounded-full" />
      </div>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
