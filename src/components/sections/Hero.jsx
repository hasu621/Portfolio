import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiLightningBolt } from 'react-icons/hi';
import Button from '../ui/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const roles = ['Frontend Developer', 'Web Developer', 'React/TypeScript Developer', 'IT Graduate', 'Automation Enthusiast'];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left pt-6 lg:pt-0">
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                         bg-accent/10 border border-accent/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Available for opportunities</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              <span className="text-text-light-primary dark:text-text-dark-primary block mb-2 font-sans font-bold">
                Hi, I&apos;m{' '}
              </span>
              <span className="font-serif text-accent">Karl Rico C. Calingal</span>
            </motion.h1>

            {/* Static subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl font-medium text-text-light-secondary dark:text-text-dark-secondary mb-6"
            >
              Frontend Developer & Automation Enthusiast
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              A dedicated and fast-learning IT graduate specializing in building responsive, production-ready frontend web applications and data-driven solutions, with a keen interest in workflow automation to drive efficiency.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                onClick={() => navigate('/projects')}
                size="lg"
              >
                <HiCode className="w-5 h-5" />
                View My Work
              </Button>
              <Button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="secondary"
                size="lg"
              >
                <HiLightningBolt className="w-5 h-5" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-8"
            >
              {[
                { value: '10+', label: 'Projects' },
                { value: '1+', label: 'Years Exp.' },
                { value: '15+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-text-light-secondary dark:text-text-dark-secondary mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-56 h-[300px] sm:w-72 sm:h-[380px] lg:w-[350px] lg:h-[500px]"
            >
              {/* Subtle shadow block */}
              <div className="absolute inset-0 bg-accent/10 dark:bg-accent/15 rounded-[2rem] translate-x-4 translate-y-4" />
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-sm bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border z-10">
                <img 
                  src="/profile.png" 
                  alt="Karl Rico C. Calingal" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity } }}
        onClick={() => {
          const el = document.querySelector('#about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <HiArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
