import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps<T extends string> {
  options: T[];
  value: T;
  handler: (value: T) => void;
  label?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Select<T extends string>({
  options,
  value,
  handler,
  label,
  id = crypto.randomUUID(),
  className = "",
  placeholder = "Select an option",
  disabled = false,
}: SelectProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => handler(e.target.value as T)}
          disabled={disabled}
          className={cn(
            "h-10 w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 pr-8 text-sm",
            "placeholder:text-gray-500 focus:ring-2 focus:ring-gray-950 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950",
            "dark:text-gray-50 dark:focus:ring-gray-300",
            className,
          )}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="py-2 text-gray-900 dark:text-gray-50"
            >
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className={cn(
            "absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform",
            "text-gray-500 transition-transform duration-200",
            "pointer-events-none",
            "group-hover:text-gray-950 dark:text-gray-400 dark:group-hover:text-gray-50",
          )}
        />
      </div>
    </div>
  );
}
