const colorMap = {
  react: 'bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-400',
  javascript: 'bg-yellow-600/15 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
  typescript: 'bg-blue-600/15 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400',
  python: 'bg-emerald-600/15 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  nodejs: 'bg-green-600/15 text-green-700 dark:bg-green-500/15 dark:text-green-400',
  tailwind: 'bg-teal-600/15 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400',
  firebase: 'bg-orange-500/15 text-orange-700 dark:bg-orange-400/15 dark:text-orange-400',
  mongodb: 'bg-green-600/15 text-green-700 dark:bg-green-500/15 dark:text-green-400',
  docker: 'bg-stone-500/15 text-stone-700 dark:bg-stone-400/15 dark:text-stone-300',
  aws: 'bg-amber-500/15 text-amber-700 dark:bg-amber-400/15 dark:text-amber-400',
  selenium: 'bg-lime-600/15 text-lime-700 dark:bg-lime-500/15 dark:text-lime-400',
  n8n: 'bg-rose-500/15 text-rose-700 dark:bg-rose-400/15 dark:text-rose-400',
  api: 'bg-stone-500/15 text-stone-700 dark:bg-stone-400/15 dark:text-stone-300',
  default: 'bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-hover',
};

export default function Badge({ label, color }) {
  const colorClass = colorMap[color?.toLowerCase()] || colorMap.default;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        tracking-wide ${colorClass} transition-colors duration-200`}
    >
      {label}
    </span>
  );
}
