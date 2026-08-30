import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'karlcalingal21@gmail.com',
    href: 'mailto:karlcalingal21@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '09394262815',
    href: 'tel:+639394262815',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Pandi, Bulacan, Philippines',
    href: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/hasu621', label: 'GitHub', color: '#333' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/karl-rico-calingal-292915382/', label: 'LinkedIn', color: '#0A66C2' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Main contact card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card text-center p-8 md:p-12 border border-light-border dark:border-dark-border"
          >
            {/* Big greeting */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                Let&apos;s Work Together
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary max-w-lg mx-auto leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to 
                be part of your vision. Drop me a message through any of the channels below.
              </p>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl
                               bg-light-card-hover dark:bg-dark-card-hover 
                               border border-light-border dark:border-dark-border
                               hover:border-accent/40 transition-colors duration-200 h-full w-full justify-center"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-1">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary text-center break-words max-w-full">
                      {item.value}
                    </span>
                  </motion.div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="hover:scale-105 transition-transform block h-full">
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="block h-full">{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary mb-4 font-medium">
                Find me on
              </p>
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                               bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border
                               text-text-light-secondary dark:text-text-dark-secondary
                               hover:text-accent hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10
                               transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8 text-sm text-text-light-secondary dark:text-text-dark-secondary"
          >
            Prefer email? Reach out at{' '}
            <a href="mailto:karlcalingal21@gmail.com" className="text-accent hover:underline font-medium">
              karlcalingal21@gmail.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
