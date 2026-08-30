import { motion } from 'framer-motion';
import Badge from './Badge';

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="card hover-glow overflow-hidden h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden bg-gradient-to-br from-accent/20 to-accent-secondary/20 shrink-0">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-5xl opacity-30">
                {project.icon || '🚀'}
              </div>
            </div>
          )}

        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          {project.category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
              {project.category}
            </span>
          )}
          <h3 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2 
                         group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Impact metric for automation projects */}
          {project.impact && (
            <div className="mt-auto px-3 py-2 rounded-lg bg-accent-secondary/10 border border-accent-secondary/20 inline-block w-fit">
              <span className="text-sm font-medium text-accent-secondary">
                ⚡ {project.impact}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
