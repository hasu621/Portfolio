const colorMap = {
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
