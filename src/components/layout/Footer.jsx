import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/hasu621', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/karl-rico-calingal-292915382/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:karlcalingal21@gmail.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-light-border dark:border-dark-border">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent/30" />

      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-serif text-accent hover:opacity-80 transition-opacity">
              {'<Karl />'}
            </a>
            <p className="mt-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
              Building responsive frontend applications & automated data-driven solutions.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center
                           bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border
                           text-text-light-secondary dark:text-text-dark-secondary
                           hover:text-accent hover:border-accent/50 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-light-border dark:border-dark-border
                        flex items-center justify-center">
          <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
            © {currentYear} Karl Rico C. Calingal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
