import { clsx } from "clsx";

const variants = {
  success: "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400",
  warning: "bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-400",
  danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  neutral: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400",
};

export default function Badge({ variant = "neutral", children, className }: { variant?: keyof typeof variants; children: React.ReactNode; className?: string }) {
  return <span className={clsx("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", variants[variant], className)}>{children}</span>;
}
