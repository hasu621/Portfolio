import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { automationProjects } from '../../data/projects';

export default function AutomationProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationProjects.map((project, i) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={i} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
