import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { automationProjects } from '../../data/projects';

const filters = ['All', 'Make', 'Zapier', 'n8n', 'GoHighLevel'];

export default function AutomationProjects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    filter === 'All' ? automationProjects : automationProjects.filter((p) => p.tags.includes(filter));

  return (
    <div className="relative">
      <div className="relative z-10">
        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  filter === tag
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-text-light-secondary dark:text-text-dark-secondary hover:border-accent/40'
                }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={i} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
