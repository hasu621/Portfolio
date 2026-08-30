import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/', hash: '#home' },
  { label: 'About', href: '/', hash: '#about' },
  { label: 'Experience', href: '/', hash: '#experience' },
  { label: 'Skills', href: '/', hash: '#skills' },
  { label: 'Contact', href: '/', hash: '#contact' },
  { label: 'Projects', href: '/projects', hash: null },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active section highlight (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = navLinks.filter(l => l.hash).map((l) => l.hash.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Handle hash scrolling if navigating to home from another page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);

    if (link.href === '/projects') {
      setActiveSection('projects');
      navigate('/projects');
    } else {
      // It's a home page link
      if (location.pathname === '/') {
        // Already on home, just scroll
        const el = document.querySelector(link.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', link.hash);
        }
      } else {
        // Not on home, navigate to home with hash
        navigate(`/${link.hash}`);
      }
    }
  };

  const isLinkActive = (link) => {
    if (location.pathname === '/projects' && link.href === '/projects') return true;
    if (location.pathname === '/' && link.hash && activeSection === link.hash.slice(1)) return true;
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-light-border dark:border-dark-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 relative">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-xl font-serif text-accent hover:opacity-80 transition-opacity z-10"
            >
              {'<Karl />'}
            </Link>

            {/* Desktop nav - Centered */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 z-10">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                const isProjects = link.label === 'Projects';
                return (
                  <a
                    key={link.label}
                    href={link.hash ? `/${link.hash}` : link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={
                      isProjects
                        ? `ml-3 px-5 py-2 text-sm font-semibold rounded-xl border transition-all duration-200 ${
                            active
                              ? 'border-accent bg-accent text-white'
                              : 'border-accent/40 text-accent hover:bg-accent hover:text-white hover:border-accent'
                          }`
                        : `relative px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                            active
                              ? 'text-accent'
                              : 'text-text-light-secondary dark:text-text-dark-secondary hover:text-text-light-primary dark:hover:text-text-dark-primary hover:bg-light-card-hover dark:hover:bg-dark-card-hover'
                          }`
                    }
                  >
                    <span className="relative z-10">{link.label}</span>
                    {active && !isProjects && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full bg-accent/10 dark:bg-accent/15 z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 z-10">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-text-light-secondary dark:text-text-dark-secondary
                           hover:bg-light-card-hover dark:hover:bg-dark-card-hover transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-light-bg dark:bg-dark-bg 
                         border-l border-light-border dark:border-dark-border
                         z-50 p-6 pt-20 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isProjects = link.label === 'Projects';
                  return (
                  <motion.a
                    key={link.label}
                    href={link.hash ? `/${link.hash}` : link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={
                      isProjects
                        ? `px-4 py-3 mt-4 text-center rounded-xl border text-base font-semibold transition-all duration-200 ${
                            isLinkActive(link)
                              ? 'border-accent bg-accent text-white'
                              : 'border-accent/40 text-accent hover:bg-accent hover:text-white'
                          }`
                        : `px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                            isLinkActive(link)
                              ? 'bg-accent/10 text-accent'
                              : 'text-text-light-secondary dark:text-text-dark-secondary hover:bg-light-card-hover dark:hover:bg-dark-card-hover'
                          }`
                    }
                  >
                    {link.label}
                  </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
