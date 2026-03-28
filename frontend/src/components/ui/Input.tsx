import { clsx } from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className, ...props }, ref) => (
  <div className="space-y-1.5">
    {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
    <input ref={ref} className={clsx("input-field", error && "border-red-500 focus:ring-red-500/50", className)} {...props} />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
));
Input.displayName = "Input";
export default Input;
