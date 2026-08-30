import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { experiences } from '../../data/experience';

function TimelineItem({ experience, index, isInView }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center gap-8 ${index > 0 ? 'mt-12' : ''}`}>
      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 w-full items-center">
        {/* Left content or empty */}
        <div className={isLeft ? '' : 'order-3'}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`card hover-glow ${!isLeft ? 'text-left' : 'text-right'}`}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 block">
              {experience.period}
            </span>
            <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-1">
              {experience.role}
            </h3>
            <p className="text-sm font-medium text-accent-secondary mb-3">
              {experience.company} · {experience.location}
            </p>
            <ul className={`space-y-2 mb-4 ${!isLeft ? 'text-left' : 'text-right'}`}>
              {experience.description.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap gap-2 ${!isLeft ? 'justify-start' : 'justify-end'}`}>
              {experience.tags.map((tag) => (
                <Badge key={tag} label={tag} color={tag} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline dot */}
        <div className="flex flex-col items-center order-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
            className="w-4 h-4 rounded-full bg-accent 
                       ring-4 ring-light-bg dark:ring-dark-bg shadow-lg shadow-accent/20 z-10"
          />
        </div>

        {/* Right content or empty */}
        <div className={isLeft ? 'order-3' : ''} />
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex gap-4 w-full">
        {/* Timeline line + dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="w-3 h-3 rounded-full bg-accent 
                       ring-4 ring-light-bg dark:ring-dark-bg shadow-lg shadow-accent/20 z-10 flex-shrink-0 mt-2"
          />
          {index < experiences.length - 1 && (
            <div className="w-0.5 flex-1 bg-accent/20 mt-2" />
          )}
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="card hover-glow flex-1 mb-0"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 block">
            {experience.period}
          </span>
          <h3 className="text-lg font-bold text-text-light-primary dark:text-text-dark-primary mb-1">
            {experience.role}
          </h3>
          <p className="text-sm font-medium text-accent-secondary mb-3">
            {experience.company} · {experience.location}
          </p>
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li
                key={i}
                className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed"
              >
                • {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Badge key={tag} label={tag} color={tag} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="experience" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-light-card/50 dark:bg-dark-card/30" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and the impact I've made along the way."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Desktop vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 
                          bg-accent/20" />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
