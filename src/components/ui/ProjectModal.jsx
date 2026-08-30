import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink, HiCode, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Badge from './Badge';

export default function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setDirection(0);
  }, [project]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scrolling only when modal is actively displaying a project
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [project]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : (project.image ? [project.image] : []);
  const hasImages = images.length > 0;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const modalContent = (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
      >
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-light-card dark:bg-dark-card w-full max-w-4xl max-h-[90vh] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-light-border dark:border-dark-border"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* ═══════════ IMAGE SECTION ═══════════ */}
          {hasImages ? (
            <div className="relative h-52 sm:h-72 md:h-[380px] bg-dark-bg group overflow-hidden shrink-0">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Slider Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute z-10 left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute z-10 right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                  >
                    <HiChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute z-10 bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDirection(idx > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(idx);
                        }}
                        className={`rounded-full transition-all ${
                          idx === currentImageIndex ? 'bg-white w-5 h-2' : 'bg-white/40 hover:bg-white/70 w-2 h-2'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Image counter */}
                  <div className="absolute z-10 top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs font-medium rounded-full px-3 py-1">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="relative h-40 sm:h-48 bg-accent/5 dark:bg-accent/10 flex items-center justify-center shrink-0">
              <div className="text-6xl opacity-30">{project.icon || '🚀'}</div>
            </div>
          )}

          {/* ═══════════ CONTENT SECTION ═══════════ */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            
            {/* Header: Title + Category + Actions */}
            <div className="px-5 sm:px-8 pt-6 pb-4 sm:pt-8 sm:pb-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2 bg-accent/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-text-light-primary dark:text-text-dark-primary mb-4">
                {project.title}
              </h2>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-xl text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm"
                  >
                    <HiExternalLink className="w-4 h-4" /> Visit Site
                  </a>
                ) : project.isLocalhost !== false ? (
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-light-card-hover dark:bg-dark-card-hover border border-light-border dark:border-dark-border text-text-light-secondary dark:text-text-dark-secondary rounded-xl text-sm font-medium cursor-not-allowed">
                    <HiCode className="w-4 h-4" /> Localhost Only
                  </div>
                ) : null}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-light-card-hover dark:bg-dark-card-hover border border-light-border dark:border-dark-border text-text-light-primary dark:text-text-dark-primary rounded-xl text-sm font-medium hover:border-accent/40 transition-colors"
                  >
                    <HiCode className="w-4 h-4" /> Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="mx-5 sm:mx-8 h-px bg-light-border dark:bg-dark-border" />

            {/* Description */}
            <div className="px-5 sm:px-8 py-5 sm:py-6">
              {/* Impact Metric */}
              {project.impact && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-accent/5 dark:bg-accent/10 border border-accent/15 inline-block">
                  <span className="text-sm font-medium text-accent">
                    ⚡ {project.impact}
                  </span>
                </div>
              )}

              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary mb-3">
                About this Project
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Technologies - Distinct bottom section */}
            <div className="px-5 sm:px-8 py-5 sm:py-6 bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} label={tag} color={tag} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
