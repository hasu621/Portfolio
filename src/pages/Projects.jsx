import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePhotograph } from 'react-icons/hi';
import DevProjects from '../components/sections/DevProjects';
import AutomationProjects from '../components/sections/AutomationProjects';
import { automationProjects } from '../data/projects';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('dev');

  // Ensure the page scrolls to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container-custom max-w-6xl">
        <div className="relative">
          {/* Folder Tabs */}
          <div className="flex relative z-10 -mb-[1px]">
            <button
              onClick={() => setActiveTab('dev')}
              className={`px-6 py-4 rounded-t-2xl font-bold uppercase tracking-wider text-sm md:text-base transition-colors duration-200
                ${activeTab === 'dev' 
                  ? 'bg-light-card dark:bg-dark-card text-accent border-t border-l border-r border-light-border dark:border-dark-border' 
                  : 'bg-light-border/40 dark:bg-dark-border/40 text-text-light-secondary dark:text-text-dark-secondary hover:bg-light-border/60 dark:hover:bg-dark-border/60 border border-transparent'}`}
            >
              Developer
            </button>
            
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-6 py-4 rounded-t-2xl font-bold uppercase tracking-wider text-sm md:text-base transition-colors duration-200
                ${activeTab === 'automation' 
                  ? 'bg-light-card dark:bg-dark-card text-accent border-t border-l border-r border-light-border dark:border-dark-border' 
                  : 'bg-light-border/40 dark:bg-dark-border/40 text-text-light-secondary dark:text-text-dark-secondary hover:bg-light-border/60 dark:hover:bg-dark-border/60 border border-transparent'}`}
            >
              Automation
            </button>
          </div>

          {/* Folder Body */}
          <div className="bg-light-card dark:bg-dark-card rounded-b-3xl rounded-tr-3xl rounded-tl-none border border-light-border dark:border-dark-border p-6 md:p-10 min-h-[600px] relative z-0">
            {/* Dynamic Subtitle */}
            <div className="mb-10 w-full text-text-light-secondary dark:text-text-dark-secondary text-lg">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'dev' 
                    ? "A selection of my recent development work — from full-stack web apps to APIs and developer tools."
                    : "Workflows and scripts designed to eliminate repetitive tasks and scale operations."}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'dev' ? (
                  <DevProjects />
                ) : (
                  automationProjects.length > 0 ? (
                    <AutomationProjects />
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                      <HiOutlinePhotograph className="w-16 h-16 mb-4 opacity-30 text-accent" />
                      <h3 className="text-2xl font-bold text-text-light-secondary dark:text-text-dark-secondary mb-2">
                        No automation projects yet.
                      </h3>
                      <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-md">
                        Check back later as I continue to build and automate!
                      </p>
                    </div>
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
