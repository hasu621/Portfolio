import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { HiDownload } from 'react-icons/hi';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative bg-light-card dark:bg-dark-card">
      <div className="container-custom">
        <SectionHeader
          title="About Me"
          subtitle="A little bit about who I am, what I do, and what drives me."
        />

        <div ref={ref} className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
              <div className="relative w-64 h-80 md:w-72 md:h-96 mt-6 md:mt-0">
                {/* Image Container */}
                <div className="absolute inset-0 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-sm bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border z-10">
                  <img
                    src="/about-profile.png"
                    alt="Karl Rico C. Calingal"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Quote Box */}
                <div className="absolute -bottom-6 -left-8 md:-left-12 z-20 bg-[#F4F2EC] dark:bg-dark-card p-5 md:p-6 shadow-xl rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-[2rem] rounded-tr-none max-w-[90%] md:max-w-[85%] border border-white/60 dark:border-dark-border">
                  <span className="text-4xl text-[#C0562F] font-serif leading-none block mb-1">“</span>
                  <p className="text-sm md:text-base font-sans font-light italic text-gray-700 dark:text-gray-300 leading-snug">
                    If it scares you, it might be a good thing to try.
                  </p>
                </div>
              </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
              Developer & Automation Enthusiast
            </h3>
            <div className="space-y-4 text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
              <p>
                A dedicated and fast-learning fresh graduate with a Bachelor of Science in Information Technology (Cum Laude) from the Technological University of the Philippines. I offer a strong technical foundation in frontend development (React, TypeScript, Tailwind CSS) and database management, backed by hands-on experience building production features, IoT-integrated software solutions, and precision-driven data management workflows.
              </p>
              <p>
                Beyond standard development, I have a strong interest in automation, integrating software logic with embedded systems, and building tools that eliminate repetitive tasks to scale operations effectively.
              </p>
            </div>

            {/* Quick info grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Location', value: 'Pandi, Bulacan, Philippines' },
                { label: 'Education', value: 'BS in Information Technology (Cum Laude, DOST Scholar)' },
                { label: 'Languages', value: 'English, Filipino' },
                { label: 'Interests', value: 'Frontend, UI/UX, IoT, Automation' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.label}
                  </span>
                  <p className="text-sm text-text-light-primary dark:text-text-dark-primary mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
