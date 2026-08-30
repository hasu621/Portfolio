import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';

function SkillCard({ skill, index, catIndex }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="group flex flex-col items-center gap-3 p-4 rounded-xl 
                 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border
                 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5
                 transition-all duration-300 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                   group-hover:scale-110"
        style={{
          backgroundColor: `${skill.color}15`,
        }}
      >
        {Icon ? (
          <Icon
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: skill.color }}
          />
        ) : (
          <span 
            className="text-xl font-bold transition-colors duration-300" 
            style={{ color: skill.color }}
          >
            {skill.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-xs font-semibold text-text-light-primary dark:text-text-dark-primary text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" className="section-padding relative bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="space-y-12 max-w-4xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-4 flex items-center gap-3">
                <span className="h-px flex-1 max-w-[40px] bg-accent/40" />
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} catIndex={catIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
