import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20',
  secondary:
    'border-2 border-accent text-accent hover:bg-accent hover:text-white dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white',
  ghost:
    'text-text-light-secondary dark:text-text-dark-secondary hover:text-accent dark:hover:text-accent hover:bg-light-card-hover dark:hover:bg-dark-card-hover',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl
    transition-all duration-300 cursor-pointer select-none
    ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a href={href} className={baseClasses} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={baseClasses} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
